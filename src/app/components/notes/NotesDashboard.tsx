"use client";

import React from "react";
import { useSpeechToText } from "../../hooks/useSpeechToText";
import Footer from "../common/Footer";
import LiveCard from "./LiveCard";
import GetNotes from "./GetNotes";

function NotesDashboard() {
  const { isListening, startListening, stopListening, timeLeft, transcript } =
    useSpeechToText();

  return (
    <div className="flex justify-between flex-col p-4">
      <LiveCard transcript={transcript} />
      <GetNotes />
      <Footer
        isListening={isListening}
        startListening={startListening}
        stopListening={stopListening}
        timeLeft={timeLeft}
      />
    </div>
  );
}

export default NotesDashboard;
