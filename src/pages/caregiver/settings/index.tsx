import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CommonLayout from "@/layouts/CommonLayout";

const Settings = () => {
  return (
    <CommonLayout
      title="Settings"
      button={
        <Button>
          <Link href={"/caregiver"}>Back to Home</Link>
        </Button>
      }
    >
      <div className="mt-6 flex flex-col gap-3">
        <Button>
          <Link href="/caregiver/settings/update-profile">My Profile</Link>
        </Button>
        <Button>
          <Link href="/caregiver/settings/add-family-member">
            Add Family Member
          </Link>
        </Button>
      </div>
    </CommonLayout>
  );
};

export default Settings;
