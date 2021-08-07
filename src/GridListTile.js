import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import moviesData from "./common/Header/moviesData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const newDate = (date) => {
  const d = new Date(date);
  return d.toDateString();
};

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={350} cols={5} className={classes.imageList}>
        <ImageListItem
          key="Subheader"
          cols={5}
          style={{ height: "auto" }}
        ></ImageListItem>
        {moviesData.map((item) => (
          <ImageListItem
            key={item.id}
            style={{ margin: "16px", cursor: "pointer" }}
          >
            <img src={item.poster_url} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>Release Date: {newDate(item.release_date)}</span>}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
