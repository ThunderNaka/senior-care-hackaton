/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import CommonLayout from "@/layouts/CommonLayout";
import { getQuestions } from "@/lib/getQuestions";

const FirstQuestions = () => {
  const questions = getQuestions();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const question = questions[currentQuestion];

  const router = useRouter();

  const handleAnswer = () => {
    if (currentQuestion === questions.length - 1) {
      router.push("/senior");
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };
  return (
    <CommonLayout
      headerBG="bg2"
      button={
        <Link href="/senior">
          <Button>End Conversation</Button>
        </Link>
      }
    >
      <div className="mt-6 flex flex-col gap-8">
        <h1 className="text-center text-2xl font-semibold">
          {question?.question}
        </h1>
        <div className="flex flex-col gap-4">
          {question?.answers.map((answer, j) => (
            <button
              onClick={handleAnswer}
              key={j}
              className="flex w-full flex-row items-center justify-start gap-2 rounded-xl bg-white p-4 text-lg shadow-strong"
            >
              <h1 className="text-2xl">{answer.emoji}</h1>
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </CommonLayout>
  );
};

export default FirstQuestions;
