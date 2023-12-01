import React from "react";

export interface LayoutWithChildrenProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: LayoutWithChildrenProps) {
  return (
    <div className="h-screen w-full">
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-blue to-purple sm:max-lg:landscape:hidden ">
        <div className="relative h-screen w-full overflow-scroll bg-white text-left xl:max-h-[95%] xl:max-w-md xl:rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
