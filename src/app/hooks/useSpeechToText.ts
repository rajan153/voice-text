"use client";

import { useEffect, useRef, useState } from "react";

export function useSpeechToText() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState<String | "">("");
  const [timeLeft, setTimeLeft] = useState(0);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (
      !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      alert("Web Speech API is not supported in this browser.");
      return;
    }

    const SpeechRecognition =
      (window as any).webkitSpeechRecognition ||
      (window as any).SpeechRecognition;

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current!.lang = "en-US";
    recognitionRef.current!.continuous = true;
    recognitionRef.current!.interimResults = false;
    recognitionRef.current!.maxAlternatives = 1;

    recognitionRef.current!.onresult = (event: SpeechRecognitionEvent) => {
      const newTranscript =
        event.results[event.results.length - 1][0].transcript;
      setTranscript((prevText) => prevText + " " + newTranscript);
    };

    recognitionRef.current!.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error:", event.error);
      if (event.error !== "no-speech") {
        setIsListening(false);
        stopListening();
      }
    };

    recognitionRef.current!.onend = () => {
      setIsListening(false);
      stopListening();
    };
  }, []);

  const startListening = () => {
    if (!recognitionRef.current) return;

    setIsListening(true);
    setTranscript("");
    setTimeLeft(60);

    recognitionRef.current.start();

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          stopListening();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopListening = () => {
    if (!recognitionRef.current) return;

    recognitionRef.current.stop();
    setIsListening(false);
    setTimeLeft(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  return { isListening, transcript, startListening, stopListening, timeLeft };
}
