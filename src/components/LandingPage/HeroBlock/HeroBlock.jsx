"use client";
import styles from "./HeroBlock.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";
import Heroblock_picture from "./img/heroblock_picture.png";
import MediumLightBlueHalfcircle from "./img/mediumLightBlueHalfcircle.svg";
import GreenHalfcircle from "./img/greenHalfcircle.svg";
import PinkHalfcircle from "./img/pinkHalfcircle.svg";
import BlueHalfcircle from "./img/blueHalfcircle.svg";
import BigLightBlueHalfcircle from "./img/bigLightBlueHalfcircle.svg";
import BigPinkHalfcircle from "./img/bigPinkHalfcircle.svg";

function HeroBlock() {
  return (
    <div className={styles.heroblock}>
      <div className={styles.heroblock_left}>
        <div className={styles.heroblock_left_texts}>
          <p className={styles.heroblock_left_texts_title}>
            Izbaudi profesijas ēnošanas piedzīvojumu un atklāj savu karjeras
            potenciālu!
          </p>
          <p className={styles.heroblock_left_texts_subtitle}>
            <span className={styles.heroblock_left_texts_subtitle_span}>
              TryWork
            </span>
            &nbsp;ir platforma, kurā motivētas personas satiekas ar atsaucīgiem
            Ēnu devējiem.
          </p>
        </div>
        <div>
          <Button
            sx={{
              textTransform: "none",
              marginRight: "24px",
              width: "246px",
              height: "42px",
              padding: "8px 24px",
              backgroundColor: "#347DCA",
              color: "white",
              borderRadius: "40px",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "26px",
              letterSpacing: "0.46px",
              "&:hover": {
                backgroundColor: "#5C97D4",
              },
            }}
          >
            Reģistrējies kā Ēnotājs
          </Button>
          <Button
            sx={{
              textTransform: "none",
              width: "246px",
              height: "42px",
              backgroundColor: "#0088A1",
              color: "white",
              borderRadius: "40px",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "26px",
              letterSpacing: "0.46px",
              "&:hover": {
                backgroundColor: "#339FB3",
              },
            }}
          >
            Reģistrējies kā Ēnu devējs
          </Button>
        </div>
      </div>
      <div className={styles.heroblock_right}>
        <Image src={Heroblock_picture} alt="Picture of two persons talking" />
        <Image
          className={styles.heroblock_right_mediumLightBlueHalfcircle}
          alt="Geometrical shape"
          src={MediumLightBlueHalfcircle}
        />
        <Image
          className={styles.heroblock_right_greenHalfcircle}
          alt="Geometrical shape"
          src={GreenHalfcircle}
        />
        <Image
          className={styles.heroblock_right_pinkHalfcircle}
          alt="Geometrical shape"
          src={PinkHalfcircle}
        />
        <Image
          className={styles.heroblock_right_blueHalfcircle}
          alt="Geometrical shape"
          src={BlueHalfcircle}
        />
        <Image
          className={styles.heroblock_right_bigLightBlueHalfcircle}
          alt="Geometrical shape"
          src={BigLightBlueHalfcircle}
        />
        <Image
          className={styles.heroblock_right_bigPinkHalfcircle}
          alt="Geometrical shape"
          src={BigPinkHalfcircle}
        />
      </div>
    </div>
  );
}

export default HeroBlock;
