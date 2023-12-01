import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CommonLayout from "@/layouts/CommonLayout";

const AddFamilyMember = () => {
  return (
    <CommonLayout title="Hello Sophia!" className="justify-center">
      <form className="mt-8 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">
          Introduce your family member information
        </h2>
        <div className="flex flex-col gap-4">
          <label className="text-lg text-[#363B4B]" htmlFor="name">
            Family member name
          </label>
          <Input id="name" name="name" placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-lg text-[#363B4B]" htmlFor="lastname">
            Family member lastname
          </label>
          <Input id="lastname" name="lastname" placeholder="Your lastname" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-lg text-[#363B4B]" htmlFor="name">
            Family member email address
          </label>
          <Input id="email" name="email" placeholder="Your email" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-lg text-[#363B4B]" htmlFor="phone">
            Family relationship
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Relationship" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dad">Dad</SelectItem>
              <SelectItem value="mom">Mom</SelectItem>
              <SelectItem value="grandfather">Grandfather</SelectItem>
              <SelectItem value="grandmother">Grandmother</SelectItem>
              <SelectItem value="sister">Sister</SelectItem>
              <SelectItem value="brother">Brother</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
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

export default AddFamilyMember;
