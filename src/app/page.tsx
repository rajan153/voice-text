"use client";

import { useRouter } from "next/navigation";
import { BackgroundLines } from "./components/ui/background-lines";
import { Button } from "./components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Voice Text, <br /> Notes.
        </h2>
        <p className="max-w-xl mx-auto z-10 text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Voice-Text-Note makes it easy to capture a thought or list for
          yourself. Grab a photo of a poster, receipt or document and easily
          organize or find it later in search.
        </p>
        <Button
          onClick={() => router.push("/dashboard")}
          className="mt-4 bg-neutral-700 z-10"
        >
          Let's Start
        </Button>
      </BackgroundLines>
    </div>
  );
}
