import React from "react";

const Header = () => {
  return (
    <div className={"h-24  bg-otherBlack flex w-full "}>
      <div className="flex h-full w-full justify-between  minDesktop:pt-8 minDesktop:mx-41 minDesktop:border-b minDesktop:border-white  ">
        <div className="text-grey ">Logo</div>
        <div className="text-grey">items</div>
        <div className="text-grey">basket</div>
      </div>
    </div>
  );
};

export default Header;
