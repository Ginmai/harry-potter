import styles from "./styles.module.css";
import React from "react";

const Card = ({ name, species, image, yearOfBirth }) => {
  const displayCharacterName = () => {
    console.log(name);
  };

  return (
    <div onClick={displayCharacterName} className={styles.main}>
      <div>{name}</div>
      <div>{yearOfBirth}</div>
      <div>{species}</div>

      <img className={styles.characterImage} src={image} />
    </div>
  );
};

export default Card;
