import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import JSONdb from "simple-json-db";

export const PUT = (async (req) => {
  const db = new JSONdb('./db.json');
  const d = await req.request.json();
  
  db.JSON(d);
  db.sync();
  return json({success:true});
}) satisfies RequestHandler;