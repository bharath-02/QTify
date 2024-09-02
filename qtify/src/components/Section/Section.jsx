// Section.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

const Section = ({ title, endpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => setAlbums(response.data))
      .catch((error) => console.error("Error fetching albums:", error));
  }, [endpoint]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button onClick={toggleCollapse}>
          {isCollapsed ? "Expand" : "Collapse"}
        </button>
      </div>
      {!isCollapsed ? (
        <Carousel
          items={albums.map((album) => (
            <Card
              key={album.id}
              albumImage={album.image}
              albumName={album.title}
              followCount={album.follows}
            />
          ))}
        />
      ) : (
        <div className={styles.grid}>
          {albums.map((album) => (
            <Card
              key={album.id}
              albumImage={album.image}
              albumName={album.title}
              followCount={album.follows}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
