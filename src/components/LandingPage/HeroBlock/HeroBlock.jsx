"use client";
import styles from "./HeroBlock.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";
import Heroblock_picture from "./img/heroblock_picture.png";
import Halfcircle1 from "./img/halfcircle1.svg";
import Halfcircle2 from "./img/halfcircle2.svg";
import Halfcircle3 from "./img/halfcircle3.svg";
import Halfcircle4 from "./img/halfcircle4.svg";
import Halfcircle5 from "./img/halfcircle5.svg";

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
          className={styles.heroblock_right_halfcircle1}
          alt="Geometrical shape"
          src={Halfcircle1}
        />
        <Image
          className={styles.heroblock_right_halfcircle2}
          alt="Geometrical shape"
          src={Halfcircle2}
        />
        <Image
          className={styles.heroblock_right_halfcircle3}
          alt="Geometrical shape"
          src={Halfcircle3}
        />
        <Image
          className={styles.heroblock_right_halfcircle4}
          alt="Geometrical shape"
          src={Halfcircle4}
        />
        <Image
          className={styles.heroblock_right_halfcircle5}
          alt="Geometrical shape"
          src={Halfcircle5}
        />
      </div>
    </div>
  );
}

export default HeroBlock;
