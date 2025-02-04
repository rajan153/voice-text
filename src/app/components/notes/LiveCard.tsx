import React from "react";
import { NoteCard } from "./NoteCard";

function LiveCard({ transcript }: any) {
  const testData = [
    {
      title: "New",
      description: transcript || "Your transcribed text will appear here...",
      link: "https://stripe.com",
    },
  ];

  return (
    <div>
      <NoteCard items={testData} />
    </div>
  );
}

export default LiveCard;
