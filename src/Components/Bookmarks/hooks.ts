import Handles from "@arcgis/core/core/Handles";
import BookmarksViewModel from "@arcgis/core/widgets/Bookmarks/BookmarksViewModel";
import { useEffect, useState } from "react";
import { addBookmarksHandlers } from "./utilities";

export function useBookmarksViewModel(props: __esri.BookmarksViewModelProperties) {
  const { view } = props;
  const [bookmarksVM, setBookmarksVM] = useState<BookmarksViewModel | null>(null);
  const [state, updateState] = useState<BookmarksViewModel["state"]>();
  const [bookmarks, updateBookmarks] = useState<BookmarksViewModel["bookmarks"]>();

  useEffect(() => {
    if (!view) return;
    const bookmarksViewModel = new BookmarksViewModel({ view });
    setBookmarksVM(bookmarksViewModel);
    return function cleanup() {
      bookmarksViewModel.destroy();
    };
  }, [view]);

  useEffect(() => {
    if (!bookmarksVM) return;

    const handles = new Handles();

    addBookmarksHandlers({
      bookmarksVM,
      handles,
      onStateChange: (state: BookmarksViewModel["state"]) => updateState(state),
      onBookmarksChange: (bookmarks: BookmarksViewModel["bookmarks"]) => updateBookmarks(bookmarks)
    });

    return function cleanup() {
      handles.removeAll();
      handles.destroy();
    };
  }, [bookmarksVM]);

  return bookmarksVM;
}
