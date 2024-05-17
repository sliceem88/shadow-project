"use client";
import HeroBlockComponent from "./HeroBlockComponent";
import HeroBlockPicture from "./img/heroBlockPicture.png";
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
      //     title="Izbaudi profesijas ēnošanas piedzīvojumu un atklāj savu karjeras
      // potenciālu!"
      //     subtitleSpan="TryWork"
      //     subtitle="ir platforma, kurā motivētas personas satiekas ar atsaucīgiem
      // Ēnu devējiem."
      //     buttonLeftText="Reģistrējies kā Ēnotājs"
      //     buttonLeftLink="/registration/register-shadower"
      //     buttonRightText="Reģistrējies kā Ēnu devējs"
      //     buttonRightLink="/registration/register-shadowee"
      //     imageSrc={HeroBlockPicture}
      //     imageAlt="Picture of two persons talking"
    />
  );
}

export default HeroBlock;
