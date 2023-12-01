import Link from "next/link";
import { Button } from "@/components/ui/button";
import CommonLayout from "@/layouts/CommonLayout";

const Home = () => {
  return (
    <CommonLayout headerBG="getStarted" getStarted={true}>
      <div className="mt-5 flex flex-col gap-8 p-8">
        <h1 className="text-center text-3xl font-semibold">
          Welcome to Senior Care
        </h1>
        <Button variant={"secondary"} className="h-auto rounded-[32px] py-4">
          <Link href={"/caregiver"}>GET STARTED</Link>
        </Button>
      </div>
    </CommonLayout>
  );
};

export default Home;
