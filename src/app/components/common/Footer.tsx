"use client";

import React from "react";
import { Button } from "../ui/button";

function Footer({ isListening, startListening, stopListening, timeLeft }: any) {

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="font-bold">Rajan is Here</h1>
      </div>
      <div>
        {isListening && <p>00:{timeLeft}</p>}
        <div className="flex gap-4">
          <Button
            className={`${!isListening && "bg-red-600 hover:bg-red-700"}`}
            onClick={startListening}
            disabled={isListening}
          >
            {isListening ? "Recording..." : "Start Recording"}
          </Button>
          {isListening && <Button onClick={stopListening}>Stop</Button>}
        </div>
      </div>
    </div>
  );
}

export default Footer;
