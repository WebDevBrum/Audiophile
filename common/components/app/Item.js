import React from "react";
import Image from "next/image";

const Item = ({ name, src }) => {
  return (
    <div className="text-center">
      <Image
        src={src}
        width={122.95}
        height={160}
        className={
          "minDesktop:h-[216px] minDesktop:w-[216px] minTablet:h-[150px] minTablet:w-[150px] mx-auto"
        }
        alt="item"
      />
      <div className="bg-lightGrey mx-auto -z-20 w-[327px] h-[165px] minTablet:h-[165px] minTablet:w-[223px]  minDesktop:h-[204px] minDesktop:w-[350px] minTablet:mt-[-100px] minDesktop:mt-[-140px] ">
        <div className="flex flex-col h-full justify-end">
          <p className="font=manBold minTablet:text-BODY minDesktop:text-H6 leading-[24.59px] mb-[15px] tracking-[1.29px] ">
            {name}
          </p>
          <div className="flex w-full justify-center mb-[30px] align-middle">
            <p className=" font=manBold text-SUB opacity-50 leading-[17.76px]">
              SHOP
            </p>
            <div className="h-[12px] w-[8px] mt-[3px] ml-[13.52px]">
              <Image
                className={"hidden minTablet:block  -z-20 w-full"}
                src={"/assets/shared/desktop/icon-arrow-right.svg"}
                width={8}
                height={12}
                alt={"arrow"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
