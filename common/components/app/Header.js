import React from "react";
import Image from "next/image";
import cart from "../../../public/assets/images/shared/desktop/icon-cart.svg";
import logo from "../../../public/assets/images/shared/desktop/logo.svg";

const Header = () => {
  return (
    <div className={"h-24  bg-otherBlack flex w-full "}>
      <div className="flex h-full w-full justify-between  minTablet:pt-8 minTablet:mx-9.5  minDesktop:mx-41 minTablet:border-b minTablet:border-white minTablet:border-opacity-20  ">
        <div className="mr-[15%]">
          <p className="minDesktop:hidden text-white inline-block minTablet:mr-10.5">
            hb
          </p>
          <Image src={logo} alt="cart" className="inline-block" />
        </div>

        <div className="hidden minDesktop:flex basis-98 tracking-twopx leading-[1.56rem] font-manReg text-SUB justify-between text-white mr-auto">
          <div>HOME</div>
          <div>HEADPHONES</div>
          <div>SPEAKERS</div>
          <div>EARPHONES</div>
        </div>

        <div className="text-grey">
          <Image src={cart} alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default Header;
