import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import hero from "../public/assets/home/desktop/image-hero.jpg";

export default function Home() {
  return (
    <>
      <div className="">
        <Image
          className={"hidden minDesktop:block  -z-20 w-full"}
          src={"/assets/home/desktop/image-hero.jpg"}
          width={1441}
          height={729}
          alt={"headphones hero"}
        />

        <Image
          className={
            "max-h-[729px] overflow-hidden hidden minTablet:block minDesktop:hidden  -z-20 w-full"
          }
          src={"/assets/home/tablet/image-header.jpg"}
          width={768}
          height={729}
          alt={"headphones hero"}
        />

        <Image
          className={
            "max-h-[600px] overflow-hidden minTablet:hidden  -z-20 w-full"
          }
          src={"/assets/home/mobile/image-header.jpg"}
          width={375}
          height={600}
          alt={"headphones hero"}
        />

        <div className="text-white w-80 minTablet:w-97 text-center minDesktop:text-left absolute top-51 minTablet:top-53 minDesktop:top-57 left-2/4 translate-x-[-50%] minDesktop:translate-x-0 minDesktop:left-41">
          <p
            className={
              "font-manReg text-OVERLINE leading-[19px] tracking-[10px] mb-6 opacity-50"
            }
          >
            NEW PRODUCT
          </p>
          <p className="font-manBold text-[2.375rem]  minTablet:text-H1 tracking-[2px] leading-[3.625rem] mb-6 ">
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
      <div className="flex h-[284px] basis-[1110px] justify-around mt-[120px]">
        <div className="text-center ">
          <Image
            src={
              "/assets/shared/desktop/image-category-thumbnail-headphones.png"
            }
            width={122.95}
            height={160}
            className={"h-[216px] w-[216px] mx-auto"}
            alt="item"
          />
          <div className="bg-lightGrey -z-20 h-[204px] w-[350px] mt-[-140px] ">
            <div className="flex flex-col h-full justify-end">
              <p className="font=manBold text-H6 leading-[24.59px] mb-[15px] tracking-[1.29px] ">
                HEADPHONES
              </p>
              <div className="flex w-full justify-center mb-[30px] align-middle">
                <p className=" font=manBold text-SUB opacity-50 leading-[17.76px]">
                  SHOP
                </p>
                <div className="h-[12px] w-[8px] mt-[3px] ml-[13.52px]">
                  <Image
                    className={"hidden minDesktop:block  -z-20 w-full"}
                    src={"/assets/shared/desktop/icon-arrow-right.svg"}
                    width={8}
                    height={12}
                    alt={"headphones hero"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center ">
          <Image
            src={"/assets/shared/desktop/image-category-thumbnail-speakers.png"}
            width={122.95}
            height={160}
            className={"h-[216px] w-[216px] mx-auto"}
            alt="item"
          />
          <div className="bg-lightGrey -z-20 h-[204px] w-[350px] mt-[-140px] ">
            <div className="flex flex-col h-full justify-end">
              <p className="font=manBold text-H6 leading-[24.59px] mb-[15px] tracking-[1.29px] ">
                SPEAKERS
              </p>
              <div className="flex w-full justify-center mb-[30px] align-middle">
                <p className=" font=manBold text-SUB opacity-50 leading-[17.76px]">
                  SHOP
                </p>
                <div className="h-[12px] w-[8px] mt-[3px] ml-[13.52px]">
                  <Image
                    className={"hidden minDesktop:block  -z-20 w-full"}
                    src={"/assets/shared/desktop/icon-arrow-right.svg"}
                    width={8}
                    height={12}
                    alt={"headphones hero"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center ">
          <Image
            src={
              "/assets/shared/desktop/image-category-thumbnail-earphones.png"
            }
            width={122.95}
            height={160}
            className={"h-[216px] w-[216px] mx-auto"}
            alt="item"
          />
          <div className="bg-lightGrey -z-20 h-[204px] w-[350px] mt-[-140px] ">
            <div className="flex flex-col h-full justify-end">
              <p className="font=manBold text-H6 leading-[24.59px] mb-[15px] tracking-[1.29px] ">
                EARPHONES
              </p>
              <div className="flex w-full justify-center mb-[30px] align-middle">
                <p className=" font=manBold text-SUB opacity-50 leading-[17.76px]">
                  SHOP
                </p>
                <div className="h-[12px] w-[8px] mt-[3px] ml-[13.52px]">
                  <Image
                    className={"hidden minDesktop:block  -z-20 w-full"}
                    src={"/assets/shared/desktop/icon-arrow-right.svg"}
                    width={8}
                    height={12}
                    alt={"headphones hero"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
