import React, { useState } from "react";
import Image from "next/image";
import cart from "../../../public/assets/shared/desktop/icon-cart.svg";
import logo from "../../../public/assets/shared/desktop/logo.svg";
import burger from "../../../public/assets/shared/tablet/icon-hamburger.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div
        className={"h-24  bg-otherBlack minTablet:bg-opacity-0 flex w-full "}
      >
        <div className="flex h-full w-full justify-between mx-6 pt-8  minTablet:mx-9.5  minDesktop:mx-41 minTablet:border-b minTablet:border-white minTablet:border-opacity-20  ">
          <div className="minTablet:hidden text-white">
            <Image
              src={burger}
              alt={"dropdown"}
              onClick={() => setMenu(!menu)}
              className={"inline-block"}
            />
          </div>

          <div className="minTablet:mr-[15%]">
            <Image
              src={burger}
              alt={"dropdown"}
              onClick={() => setMenu(!menu)}
              className="hidden  minDesktop:hidden text-white minTablet:inline-block minTablet:mr-10.5"
            />

            <Image src={logo} alt="cart" className="inline-block" />
          </div>

          <div className="hidden minDesktop:flex basis-98 tracking-[2px] leading-[1.56rem] font-manReg text-SUB justify-between text-white mr-auto">
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
      <div className={`${!menu && "hidden"} fixed top-30 bg-grey w-full h-40`}>
        Hello im a placeholder
      </div>
    </>
  );
};

export default Header;
