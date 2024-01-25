import React from "react";
import Card from "../Card/Card";
import styles from "./styles.module.css";

const Characters = ({ characters }) => {
  return (
    <div className={styles.cardWrapper}>
      {characters ? (
        characters.map((character) => {
          return (
            <div key={character.id}>
              <Card
                name={character.name}
                yearOfBirth={character.yearOfBirth}
                species={character.species}
                image={character.image}
              />
            </div>
          );
        })
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default Characters;
