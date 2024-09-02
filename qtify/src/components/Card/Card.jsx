// Card.jsx
import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ albumImage, albumName, followCount }) => {
  return (
    <div className={styles.card}>
      <img src={albumImage} alt={albumName} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.albumName}>{albumName}</h3>
        <Chip label={`${followCount} follows`} className={styles.chip} />
      </div>
    </div>
  );
};

export default Card;
