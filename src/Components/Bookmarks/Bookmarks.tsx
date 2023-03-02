import "./Bookmarks.scss";

import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import Bookmark from "@arcgis/core/webmap/Bookmark";

import { useBookmarksViewModel } from "./hooks";
import WebMap from "@arcgis/core/WebMap";
import { useEffect } from "react";

interface BookmarksProps {
  view: MapView | SceneView;
}

const CSS = {
  thumbnailImg: "thumbnail-img",
  thumbnailContainer: "thumbnail-container",
  bookmarksList: "bookmarks-list",
  bookmarksListItem: "bookmarks-list-item"
};

const Bookmarks = (props: BookmarksProps) => {
  const { view } = props;
  const bookmarksVM = useBookmarksViewModel({ view });

  // LOGS TO DEMONSTRATE RE-RENDERING BASED ON VM PROPERTY CHANGES
  useEffect(() => {
    console.log("::::: STATE :::::", bookmarksVM?.state);
  }, [bookmarksVM?.state]);
  useEffect(() => {
    console.log("::::: BOOKMARKS COLLECTION :::::", bookmarksVM?.bookmarks?.toArray());
  }, [bookmarksVM?.state]);

  const renderThumbnailContainer = (bookmark: Bookmark) => {
    const { thumbnailImg, thumbnailContainer } = CSS;
    const { name, thumbnail } = bookmark;
    const altText = `Image for ${name} bookmark.`;
    return (
      <div className={thumbnailContainer}>
        <img className={thumbnailImg} src={thumbnail?.url} alt={altText} />
      </div>
    );
  };

  const handleGoTo = (bookmark: Bookmark) => () => bookmarksVM?.goTo(bookmark);
  const renderBookmark = (bookmark: Bookmark, bookmarkIndex: number) => {
    const { name } = bookmark;
    const key = `${name}=${bookmarkIndex}`;
    const { bookmarksListItem } = CSS;

    return (
      <li key={key} className={bookmarksListItem}>
        <button onClick={handleGoTo(bookmark)}>
          {renderThumbnailContainer(bookmark)}
          <span>{name}</span>
        </button>
      </li>
    );
  };

  const renderBookmarks = () => {
    const key = (bookmarksVM?.view?.map as WebMap)?.portalItem?.id;
    const { bookmarksList } = CSS;
    const bookmarks = bookmarksVM?.bookmarks;
    const bookmarkItems = bookmarks?.map((bookmark, bookmarkIndex) =>
      renderBookmark(bookmark, bookmarkIndex)
    );
    return (
      <ul key={key} className={bookmarksList}>
        {bookmarkItems}
      </ul>
    );
  };

  return <div id="bookmarks">{renderBookmarks()}</div>;
};

export default Bookmarks;
