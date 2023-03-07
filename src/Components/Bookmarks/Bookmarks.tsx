import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import WebMap from "@arcgis/core/WebMap";
import Bookmark from "@arcgis/core/webmap/Bookmark";

import { useBookmarksViewModel } from "./hooks";

import { useEffect } from "react";

interface BookmarksProps {
  view: MapView | SceneView;
}

// Step 7: Styles
// Tailwind CSS - CSS directives
// const CSS = {
//   tailwind: {
//     display: {
//       inlineBlock: "inline-block"
//     },
//     flexBox: {
//       flex: "flex",
//       alignItems: "items-center"
//     },
//     text: {
//       alignLeft: "text-left"
//     },
//     width: {
//       full: "w-full",
//       percent25: "w-3/12",
//       percent75: "w-9/12"
//     },
//     padding: {
//       p10: "p-2.5",
//       pLeft2: "pl-2"
//     },
//     list: {
//       styleType: {
//         none: "list-none"
//       }
//     },
//     appearance: {
//       shadow: "shadow-md"
//     },
//     hover: {
//       bgSlate100: "hover:bg-slate-100",
//       transition: "transition",
//       easeInOut: "ease-in-out",
//       cursor: "cursor-pointer"
//     }
//   }
// };

const Bookmarks = (props: BookmarksProps) => {
  const { view } = props;
  // Step 1: Set up react hooks (Runs after React component renders and if dependencies are changed)
  const bookmarksVM = useBookmarksViewModel({ view });

  // Step 5: (Demo purposes): LOGS TO DEMONSTRATE RE-RENDERING BASED ON VM PROPERTY CHANGES
  // useEffect(() => {
  //   if (bookmarksVM?.state) console.log("STATE: ", bookmarksVM?.state);
  // }, [bookmarksVM?.state]);

  // useEffect(() => {
  //   const bookmarks = bookmarksVM?.bookmarks?.toArray();
  //   if (bookmarks) {
  //     console.log("BOOKMARKS: ", bookmarksVM?.bookmarks?.toArray());
  //   }
  // }, [bookmarksVM?.bookmarks]);

  // Step 6: JSX
  // const renderBookmarksItems = () => {
  //   const key = (bookmarksVM?.view?.map as WebMap)?.portalItem?.id;
  //   const bookmarks = bookmarksVM?.bookmarks;
  //   const bookmarkItems = bookmarks?.map((bookmark, bookmarkIndex) =>
  //     renderBookmarkItem(bookmark, bookmarkIndex)
  //   );
  //   return <ul key={key}>{bookmarkItems}</ul>;
  // };

  // const renderBookmarkItem = (bookmark: Bookmark, bookmarkIndex: number) => {
  //   const { name } = bookmark;
  //   const key = `${name}=${bookmarkIndex}`;
  //   // const { appearance, padding, flexBox, width, hover } = CSS.tailwind;
  //   return (
  //     <li
  //       key={key}
  //       // className={`${appearance.shadow} ${padding.p10} ${hover.transition} ${hover.easeInOut} ${hover.cursor} ${hover.bgSlate100}`}
  //     >
  //       <button
  //         // className={`${flexBox.flex} ${width.full} ${flexBox.alignItems}`}
  //         onClick={handleGoTo(bookmark)}
  //       >
  //         {renderThumbnail(bookmark)}
  //         {renderName(bookmark)}
  //       </button>
  //     </li>
  //   );
  // };

  // const handleGoTo = (bookmark: Bookmark) => () => bookmarksVM?.goTo(bookmark);

  // const renderName = (bookmark: Bookmark) => {
  //   const { name } = bookmark;
  //   // const { display, text, padding, width } = CSS.tailwind;
  //   return (
  //     <span
  //       // className={`${display.inlineBlock} ${text.alignLeft} ${width.percent75} ${padding.pLeft2}`}
  //     >
  //       {name}
  //     </span>
  //   );
  // };

  // const renderThumbnail = (bookmark: Bookmark) => {
  //   const { name, thumbnail } = bookmark;
  //   const altText = `Image for ${name} bookmark.`;
  //   // const { percent25 } = CSS.tailwind.width;
  //   return (
  //     <div
  //     // className={percent25}
  //     >
  //       <img src={thumbnail?.url} alt={altText} />
  //     </div>
  //   );
  // };

  // return <div id="bookmarks">{renderBookmarksItems()}</div>;
  return <div id="bookmarks"></div>;
};

export default Bookmarks;
