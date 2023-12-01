import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { useSpeechRecognition } from "@/hook/useSpeechRecognition";
import CommonLayout from "@/layouts/CommonLayout";
import { cn } from "@/lib/utils";

const Conversation = () => {
  const { text, isListening, startListening, stopListening } =
    useSpeechRecognition();
  const messagesBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesBoxRef.current?.scrollIntoView({
      behavior: "instant",
      block: "end",
    });
  }, [isListening, text]);
  return (
    <CommonLayout
      button={
        <Link href={"/senior"}>
          <Button className="h-auto rounded-2xl p-4 text-xl">
            End conversation
          </Button>
        </Link>
      }
      className="items-center justify-end"
    >
      <div className="flex h-full flex-col gap-8">
        <div className="flex h-full w-full flex-col items-center gap-8 py-6">
          <div className="flex h-full flex-col justify-between">
            <div
              ref={messagesBoxRef}
              className="flex max-h-[400px] min-h-[400px] flex-col justify-end gap-4 overflow-scroll p-2"
            >
              <div className="max-w-[70%] rounded-r-2xl rounded-tl-2xl p-4 shadow-strong ">
                <h1 className="text-left text-xl font-semibold">
                  Hi Louis, how can I help you today?
                </h1>
              </div>

              <h1 className="text-left text-2xl font-semibold">
                <div className="flex flex-col gap-2">
                  {text.map((t, i) => (
                    <div
                      key={i}
                      className="ml-auto max-w-[70%] rounded-r-2xl rounded-tl-2xl bg-sky-100 p-4 shadow-strong "
                    >
                      <h1 className="text-left text-xl font-semibold">{t}</h1>
                    </div>
                  ))}
                </div>
              </h1>
            </div>

            {isListening && (
              <Image
                height={1}
                width={1}
                src={"/images/volume.svg"}
                className="ml-auto mr-auto w-48"
                alt="volume"
              />
            )}
            <div className="flex flex-col items-center justify-center gap-4 justify-self-end pt-4">
              <button
                onClick={isListening ? stopListening : startListening}
                className={cn(
                  `w-fit rounded-full bg-gradient-to-r from-orange-300 to-orange-100 p-6`,
                  isListening && "animate-scale-up",
                )}
              >
                <Icons.Microphone
                  className={`h-14 w-14 ${isListening && "h-6 w-6"}`}
                />
              </button>
              {!isListening && (
                <h1 className="font-semibold text-gray-400">
                  PRESS HERE TO TALK
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Conversation;
