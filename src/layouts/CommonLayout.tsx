import React from "react";
import { twMerge } from "tailwind-merge";

import { LayoutWithChildrenProps } from "./MainLayout";

const HeaderBG = {
  bg1: "/images/backgrounds/bg_clouds.svg",
  bg2: "/images/backgrounds/bg_tree.png",
  bg4: "/images/backgrounds/bg_wind.png",
  getStarted: "/images/backgrounds/get_started.png",
} as const;

interface CommonLayoutProps extends LayoutWithChildrenProps {
  className?: string;
  button?: React.ReactNode;
  headerBG?: keyof typeof HeaderBG;
  getStarted?: boolean;
  title?: string;
}

const getStartedProps = {
  getStarted: "h-[500px] rounded-b-[200px]",
  regular: "h-[234px] rounded-b-[5rem]",
};

const CommonLayout = (props: CommonLayoutProps) => {
  const {
    headerBG = "bg1",
    title,
    button,
    getStarted,
    className,
    children,
  } = props;
  return (
    <main className="flex flex-col">
      <div
        className={twMerge(
          `flex ${
            getStarted ? getStartedProps.getStarted : getStartedProps.regular
          } flex-col items-start justify-start gap-6 bg-gradient-to-t from-blue-100 to-blue-200 bg-cover bg-center px-6 pt-9`,
          className,
        )}
        style={{
          backgroundImage: `url(${HeaderBG[headerBG]})`,
        }}
      >
        {button}
        <h1 className="text-left text-3xl font-bold">{title}</h1>
      </div>
      <div className="flex flex-col gap-8 px-6">{children}</div>
    </main>
  );
};

export default CommonLayout;
