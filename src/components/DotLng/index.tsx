import { FaCircle } from "react-icons/fa";

import { classNameByLng } from "./content";
import "./styles.scss";

type GithubLngProps = {
  language: string;
};

const DotLng = ({ language }: GithubLngProps) => {
  return (
    <div className="dot-lng-component">
      {language ? (
        <FaCircle
          className={`
                  lng-dot
                  ${classNameByLng[language]}
                `}
        />
      ) : null}
    </div>
  );
};

export default DotLng;
