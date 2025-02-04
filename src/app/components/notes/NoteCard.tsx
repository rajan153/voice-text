import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";

export function NoteCard({ items }: any) {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={items} />
    </div>
  );
}
