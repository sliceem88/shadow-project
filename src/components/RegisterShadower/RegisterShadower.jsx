import { Button } from "@mui/material";
import Image from "next/image";
import registerShadowerImage from "./img/registerShadowerImage.png";

const RegisterShadower = () => {
  return (
    <div>
      <Button>Atpakaļ</Button>
      <div>
        <Image
          src={registerShadowerImage}
          alt="Three people working together in an office"
        />
        <div>
          <h2>
            Reģistrējies kā <span>Ēnotājs</span>
          </h2>
          <form>
            <input type="text" />
            <input type="email" />
            <input type="password" />
            <input type="checkbox" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterShadower;
