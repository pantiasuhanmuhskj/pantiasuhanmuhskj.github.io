import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Image from "next/image";
import { Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { motion } from "framer-motion";

// data
const itemData = [
  {
    img: "/donasi/foto sebelum renovasi 1.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 2.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 3.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 4.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 5.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 6.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 7.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 8.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 9.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 10.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 11.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 12.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 13.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 14.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 15.jpg",
  },
];

const DonasiSlider = () => {
  const [visibleImages, setVisibleImages] = useState(6);
  const [showAll, setShowAll] = useState(false);

  const handleViewMoreClick = () => {
    setVisibleImages(itemData.length);
    setShowAll(true);
  };

  const handleShowLessCLick = () => {
    setVisibleImages(6);
    setShowAll(false);
  };

  const bounceAnimation = {
    y: ["0%", "-10%", "0%"],
    transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <Box
      className="shadow-inner-bottom shadow-black flex flex-col items-center justify-center"
      sx={{ width: "100%", minHeight: "100%" }}>
      <Masonry columns={3} spacing={2}>
        {itemData.slice(0, visibleImages).map((item, index) => (
          <div className="relative" key={index}>
            <Image
              className="rounded-md shadow-black/50 shadow-sm cursor-pointer transform hover:scale-110 hover:z-10 trasition-transform duration-300"
              src={`${item.img}`}
              alt=""
              loading="lazy"
              width={1000}
              height={1000}
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))}
      </Masonry>
      <div className="container flex items-center justify-center">
        {!showAll && visibleImages < itemData.length && (
          <Button
            className="font-poppins py-0 w-full"
            onClick={handleViewMoreClick}
            variant="outlined"
            startIcon={
              <motion.span // Wrap icon with motion.span
                animate={bounceAnimation}>
                <ExpandMoreIcon />
              </motion.span>
            }
            endIcon={
              <motion.span // Wrap icon with motion.span
                className=""
                animate={bounceAnimation}>
                <ExpandMoreIcon />
              </motion.span>
            }>
            Lebih Banyak
          </Button>
        )}
        {showAll && (
          <Button
            className="font-poppins py-0 w-full"
            onClick={handleShowLessCLick}
            variant="outlined"
            startIcon={
              <motion.span // Wrap icon with motion.span
                className=""
                animate={bounceAnimation}>
                <ExpandLessIcon />
              </motion.span>
            }
            endIcon={
              <motion.span // Wrap icon with motion.span
                className=""
                animate={bounceAnimation}>
                <ExpandLessIcon />
              </motion.span>
            }>
            Lebih Sedikit
          </Button>
        )}
      </div>
    </Box>
  );
};

export default DonasiSlider;
