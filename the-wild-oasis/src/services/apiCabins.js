import supabase from "./supabase";

//check this from APIDoc for cabins
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export const createCabin = async (newCabin) => {
  /**
   * newCabin has the same data model as in Supabase table
   * Original supabase syntax for inserting a row:
   * insert([{ some_column: 'someValue', other_column: 'otherValue' }]).select()
   */
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  return data;
};

//check this from APIDoc for cabins
export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
};
