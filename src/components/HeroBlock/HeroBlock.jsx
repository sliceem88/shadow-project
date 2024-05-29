"use client";
import HeroBlockComponent from "./HeroBlockComponent";
import { heroBlockButtonLeftData } from "./HeroBlockButtonLeftData.config";
import { heroBlockButtonRightData } from "./HeroBlockButtonRightData.config";
import { heroBlockImageData } from "./HeroBlockImageData.config";
import { heroBlockTitleData } from "./HeroBlockTitleData.config";

function HeroBlock() {
  return (
    <HeroBlockComponent
      titleData={heroBlockTitleData}
      buttonLeftData={heroBlockButtonLeftData}
      buttonRightData={heroBlockButtonRightData}
      imageData={heroBlockImageData}
    />
  );
}

export default HeroBlock;
