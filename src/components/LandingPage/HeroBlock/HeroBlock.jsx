"use client";
import styles from "./HeroBlock.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";
import Heroblock_picture from "./img/heroblock_picture.png";

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
          <Button>Reģistrējies kā Ēnotājs</Button>
          <Button>Reģistrējies kā Ēnu devējs</Button>
        </div>
      </div>
      <div className={styles.heroblock_right}>
        <Image src={Heroblock_picture} alt="Picture of two persons talking" />
      </div>
    </div>
  );
}

export default HeroBlock;
