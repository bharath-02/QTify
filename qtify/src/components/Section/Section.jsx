// Section.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";

import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

const Section = ({ title, endpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    if (title === "Songs") {
      // Fetch genres and songs for Songs section
      axios
        .get("https://qtify-backend-labs.crio.do/genres")
        .then((response) => setGenres(response.data.data))
        .catch((error) => console.error("Error fetching genres:", error));
      axios
        .get(endpoint)
        .then((response) => setAlbums(response.data))
        .catch((error) => console.error("Error fetching songs:", error));
    } else {
      // Fetch albums for other sections
      axios
        .get(endpoint)
        .then((response) => setAlbums(response.data))
        .catch((error) => console.error("Error fetching albums:", error));
    }
  }, [endpoint, title]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };


  // Filter items based on the selected genre (for Songs section)
  const filteredItems =
    title === "Songs" && selectedGenre !== "All"
      ? albums.filter((item) => item.genre === selectedGenre)
      : albums;

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        {title === "Songs" ? (
          <Tabs
            value={selectedGenre}
            onChange={handleTabChange}
            aria-label="genres tabs"
          >
            <Tab label="All" value="All" />
            {genres.map((genre) => (
              <Tab key={genre.key} label={genre.label} value={genre.key} />
            ))}
          </Tabs>
        ) : (
          <button onClick={toggleCollapse}>
            {isCollapsed ? "Show All" : "Collapse"}
          </button>
        )}
      </div>
      {!isCollapsed && title !== "Songs" ? (
        <Carousel
          items={filteredItems.map((item) => (
            <Card
              key={item.id}
              albumImage={item.image}
              albumName={item.title}
              followCount={item.follows}
            />
          ))}
        />
      ) : (
        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              albumImage={item.image}
              albumName={item.title}
              followCount={item.follows}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
