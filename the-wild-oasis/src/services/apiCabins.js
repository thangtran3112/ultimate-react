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
export const createCabin = async (newCabin) => {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  //https://umlmagmcloufogficbgv.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //1. Create Cabin
  const { data, error: createError } = await supabase
    .from(CABIN_TABLE)
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (createError) {
    console.error(createError);
    throw new Error("Cabins could not be created");
  }

  //2. If Creating is successful, we will upload the image
  const { error: storageError } = await supabase.storage
    .from(CABIN_BUCKET_NAME)
    .upload(imageName, newCabin.image);

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
