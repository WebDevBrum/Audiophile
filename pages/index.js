import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import hero from "../public/assets/home/desktop/image-hero.jpg";

export default function Home() {
  return (
    <div className="">
      <Image
        className={"hidden minDesktop:block fixed top-0 -z-20"}
        src={hero}
        alt={"headphones hero"}
      />
      <Image
        className={"hidden minTablet:block fixed top-0 -z-20"}
        src={hero}
        alt={"headphones hero"}
      />
      <div className="text-white w-97 minDesktop:fixed minDesktop:top-57 minDesktop:left-41">
        <p
          className={
            "font-manReg text-OVERLINE leading-[19px] tracking-[10px] mb-6 opacity-50"
          }
        >
          NEW PRODUCT
        </p>
        <p className="font-manBold text-H1 tracking-[2px] leading-[3.625rem] mb-6 ">
          XX99 MARK II HEADPHONES
        </p>
        <div className="w-90 font-manReg text-BODY leading-[25px] opacity-75 mb-6">
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>

        <button className="bg-orange w-40 h-12 font=manReg text-SUB leading-[17.76px] tracking-[1px]">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
