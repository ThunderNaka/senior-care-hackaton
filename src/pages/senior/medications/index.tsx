import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CommonLayout from "@/layouts/CommonLayout";

const TodayMedications = () => {
  return (
    <CommonLayout
      title="Today's medications"
      button={
        <Link href="/senior">
          <Button>Go back to home</Button>
        </Link>
      }
    >
      <div className="z-50 -mt-20 flex flex-col gap-6 divide-y divide-dashed rounded-2xl bg-white  p-4 shadow-md">
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
        <div className="flex flex-row justify-between pt-4">
          <h1 className="text-lg font-semibold">Time</h1>
          <h1 className="text-lg font-semibold">4:00 PM</h1>
        </div>
      </div>
      <div className="z-50  flex flex-col gap-6 divide-y divide-dashed rounded-2xl bg-white  p-4 shadow-md">
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
        <div className="flex flex-row justify-between pt-4">
          <h1 className="text-lg font-semibold">Time</h1>
          <h1 className="text-lg font-semibold">4:00 PM</h1>
        </div>
      </div>
      <div className="z-50  flex flex-col gap-6 divide-y divide-dashed rounded-2xl bg-white  p-4 shadow-md">
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
        <div className="flex flex-row justify-between pt-4">
          <h1 className="text-lg font-semibold">Time</h1>
          <h1 className="text-lg font-semibold">4:00 PM</h1>
        </div>
      </div>
      <div className="z-50 flex flex-col gap-6 divide-y divide-dashed rounded-2xl bg-white  p-4 shadow-md">
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
        <div className="flex flex-row justify-between pt-4">
          <h1 className="text-lg font-semibold">Time</h1>
          <h1 className="text-lg font-semibold">4:00 PM</h1>
        </div>
      </div>
    </CommonLayout>
  );
};

export default TodayMedications;
