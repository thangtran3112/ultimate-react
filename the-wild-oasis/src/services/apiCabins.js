import supabase, { supabaseUrl } from "./supabase";
import { CABIN_BUCKET_NAME, CABIN_TABLE } from "../constant";

//check this from APIDoc for cabins
export async function getCabins() {
  const { data, error } = await supabase.from(CABIN_TABLE).select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

/**
 * newCabin has the same data model as in Supabase table
 * Original supabase syntax for inserting a row:
 * insert([{ some_column: 'someValue', other_column: 'otherValue' }]).select()
 */
export const createEditCabin = async (newCabin, id) => {
  console.log(newCabin, id);
  /**
   * Case 1: When we are not changing the Image, but only editting other properties
   * The image passing in will already have the final URL like:
   * https://umlmagmcloufogficbgv.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
   */
  /**
   * Case 2: When we are uploading a new image (create/edit), the image property is actually
   * a list 1 single fileName
   * Example: image = [{name: 'cabin-001.jpg'}], it does not have the URL in its property
   */
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const uploadingImageName = `${Math.random()}-${
    newCabin.image.name
  }`.replaceAll("/", "");

  //https://umlmagmcloufogficbgv.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const imagePath = hasImagePath
    ? newCabin.image //Editing without changing image
    : //new Image to be uploaded (Edit/Create)
      `${supabaseUrl}/storage/v1/object/public/cabin-images/${uploadingImageName}`;

  //1. Create/Edit Cabin
  let query = supabase.from(CABIN_TABLE);

  //A. CREATE
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  } else {
    //B. EDIT
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }

  //because query is a builder object, it can be chained with more operations
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  //If this is Editing case without changing image, we do not need to upload anything
  if (hasImagePath) return data;

  //2. If Creating or Editing is successful, we may upload the image
  const { error: storageError } = await supabase.storage
    .from(CABIN_BUCKET_NAME)
    .upload(uploadingImageName, newCabin.image);

  //3. Delete the cabin if there was an error uploading the corresponding image
  if (storageError) {
    await supabase.from(CABIN_TABLE).delete().eq("id", data.id);
    if (storageError) {
      console.error(storageError);
      throw new Error(
        "Cabin image could not be uploaded and cabin was not created"
      );
    }
  }
  return data;
};

//check this from APIDoc for cabins
export const deleteCabin = async (id) => {
  const { data, error } = await supabase
    .from(CABIN_TABLE)
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
};
