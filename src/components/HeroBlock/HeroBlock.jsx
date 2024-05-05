"use client";
import HeroBlockComponent from "./HeroBlockComponent";
import HeroBlockPicture from "./img/heroBlockPicture.png";

function HeroBlock() {
  return (
    <HeroBlockComponent
      title="Izbaudi profesijas ēnošanas piedzīvojumu un atklāj savu karjeras
  potenciālu!"
      subtitle_span="TryWork"
      subtitle="ir platforma, kurā motivētas personas satiekas ar atsaucīgiem
  Ēnu devējiem."
      button_left_text="Reģistrējies kā Ēnotājs"
      button_left_link="/registration/register-shadower"
      button_right_text="Reģistrējies kā Ēnu devējs"
      button_right_link="/registration/register-shadowee"
      image_src={HeroBlockPicture}
      image_alt="Picture of two persons talking"
    />
  );
}

export default HeroBlock;
