import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import hero from "../public/assets/images/home/desktop/image-hero.jpg";

export default function Home() {
  return (
    <div className="">
      <Image
        className={"fixed top-0 -z-20"}
        src={hero}
        alt={"headphones hero"}
      />
      <div className="text-white w-97 minDesktop:fixed minDesktop:top-57 minDesktop:left-41">
        <p
          className={"font-manReg text-OVERLINE leading-[19px] tracking-[10px]"}
        >
          NEW PRODUCT
        </p>
        <p className="font-manBold text-H1 tracking-[2px] leading-[3.625rem]">
          XX99 MARK II HEADPHONES
        </p>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <h1>See product</h1>
      </div>
    </div>
  );
}
