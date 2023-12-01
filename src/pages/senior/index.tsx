import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CommonLayout from "@/layouts/CommonLayout";

const SeniorHome = () => {
  return (
    <CommonLayout title="Hello, Louis!" className="justify-center">
      <div className="-mt-9 flex flex-col items-center justify-center gap-4 pb-6">
        <Link
          href="/senior/conversation"
          className="w-fit rounded-full bg-gradient-to-r from-orange-300 to-orange-100 p-5"
        >
          <Icons.Microphone className="h-12 w-12 text-white" />
        </Link>
        <h1 className="font-semibold text-gray-600">PRESS HERE TO TALK</h1>
      </div>

      <Link href="/senior/medications">
        <Card className="flex w-full flex-row items-center justify-center gap-4 rounded-2xl p-4 shadow-strong">
          <Image
            className="h-16 w-16"
            height={1}
            width={1}
            src={"/images/pills.svg"}
            alt="pills"
          />
          <p className="text-xl">See today's medications</p>
        </Card>
      </Link>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-gray-600">Daily reminders</h1>
        <div className="z-50  flex flex-col gap-6 divide-y divide-dashed rounded-2xl bg-white  p-4 shadow-strong">
          <div className="flex flex-row gap-4 rounded-xl">
            <Image
              src={"/images/pill.svg"}
              className="h-12 w-12"
              height={1}
              width={1}
              alt="pill"
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">Carvedilol</h1>
              <p className="text-base text-gray-500">
                It’s the big red pill you take every morning and afternoon
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-4">
            <div className="flex justify-between ">
              <p className="text-lg font-semibold">Time</p>
              <p className="text-lg font-semibold">4:00 PM</p>
            </div>
            <Button variant="inverted">I already took it</Button>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default SeniorHome;
