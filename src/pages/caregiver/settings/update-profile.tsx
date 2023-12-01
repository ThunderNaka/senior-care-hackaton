import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CommonLayout from "@/layouts/CommonLayout";

const UpdateProfile = () => {
  return (
    <CommonLayout title="Hello Sophia!" className="justify-center">
      <form className="mt-8 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Update your information</h2>
        <div className="flex flex-col gap-4">
          <label className="text-lg text-[#363B4B]" htmlFor="name">
            Name
          </label>
          <Input id="name" name="name" placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-lg text-[#363B4B]" htmlFor="lastname">
            Lastname
          </label>
          <Input id="lastname" name="lastname" placeholder="Your lastname" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-lg text-[#363B4B]" htmlFor="name">
            Email
          </label>
          <Input id="email" name="email" placeholder="Your email" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-lg text-[#363B4B]" htmlFor="phone">
            Phone number
          </label>
          <Input id="phone" name="phone" placeholder="Your phone number" />
        </div>

        <Button>Save</Button>
      </form>
    </CommonLayout>
  );
};

export default UpdateProfile;
