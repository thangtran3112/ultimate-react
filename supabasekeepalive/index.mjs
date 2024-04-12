import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

async function getCabins() {
  const supabaseUrl = "https://umlmagmcloufogficbgv.supabase.co";
  const suppabaseKey = process.env.VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, suppabaseKey);
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  console.log(data);
  return data;
}

export const handler = async (event) => {
  const data = await getCabins();
  const response = {
    statusCode: 200,
    body: JSON.stringify(data),
  };
  return response;
};

handler();
