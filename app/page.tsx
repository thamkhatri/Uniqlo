"use client";

import { useEffect } from "react";
import { createSupabaseServer } from "@/lib/supabase/server";

export default function NotesPage() {
  useEffect(() => {
    async function testFetch() {
      const { data, error } = await createSupabaseServer()
        .from("notes")
        .select("*");

      console.log("DATA:", data);
      console.log("ERROR:", error);
    }

    testFetch();
  }, []);

  return <h1>Check the console</h1>;
}
