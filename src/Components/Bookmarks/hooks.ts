import { useEffect, useState } from "react";

import Handles from "@arcgis/core/core/Handles";
import BookmarksViewModel from "@arcgis/core/widgets/Bookmarks/BookmarksViewModel";

import { addBookmarksHandlers } from "./utilities";

export function useBookmarksViewModel(props: __esri.BookmarksViewModelProperties) {
  const { view } = props;

  // Step 2: Set up constants to add state to this component
  // Adds/manages state, which effects when component is re-rendered/updated

  // BookmarksViewModel
  const [bookmarksVM, setBookmarksVM] = useState<BookmarksViewModel | null>(null);

  // BookmarksViewModel.state - "loading" | "ready"
  const [state, updateState] = useState<BookmarksViewModel["state"]>();

  // BookmarksViewModel.bookmarks - Collection<Bookmark>
  const [bookmarks, updateBookmarks] = useState<BookmarksViewModel["bookmarks"]>();

  // useEffect --> perform side effects in React components
  // Create and store BookmarksViewModel
  // Runs when comopnent is mounted and changes in dependencies array
  useEffect(() => {
    if (!view) return;
    // Step 3: Instantiate BookmarksViewModel with map view
    const bookmarksViewModel = new BookmarksViewModel({ view });
    setBookmarksVM(bookmarksViewModel);

    // Returned function is run when React component is unmounted
    return function cleanup() {
      bookmarksViewModel.destroy();
    };
  }, [view]);

  useEffect(() => {
    if (!bookmarksVM) return;

    // Set up handles to store watchers, to eventually clean up and destroy
    const handles = new Handles();

    // Step 4: Set up watchers to watch properties in BookmarksVM
    addBookmarksHandlers({
      bookmarksVM, // BookmarksViewModel
      handles, // Handles
      onStateChange: (state: BookmarksViewModel["state"]) => updateState(state), // Track BookmarksVM state
      onBookmarksChange: (bookmarks: BookmarksViewModel["bookmarks"]) => updateBookmarks(bookmarks) // Track BookmarksVM bookmarks collection
    });

    return function cleanup() {
      handles.removeAll();
      handles.destroy();
    };
  }, [bookmarksVM]);

  return bookmarksVM;
}
