import React from "react";
import Item from "./Item";

const ItemSelection = () => {
  const items = [
    {
      name: "HEADPHONES",
      image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
      route: "null",
    },
    {
      name: "SPEAKERS",
      image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
      route: "null",
    },
    {
      name: "EARPHONES",
      image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
      route: "null",
    },
  ];

  return (
    <div className="flex flex-col bg-orange  minTablet:flex-row minTablet:h-[284px] minTablet:basis-[1110px] justify-around mt-[120px]">
      {items.map((item) => {
        return <Item name={item.name} src={item.image} key={item.name} />;
      })}
    </div>
  );
};

export default ItemSelection;
