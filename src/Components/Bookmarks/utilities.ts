import Handles from "@arcgis/core/core/Handles";
import { watch, on } from "@arcgis/core/core/reactiveUtils";
import BookmarksViewModel from "@arcgis/core/widgets/Bookmarks/BookmarksViewModel";

interface BookmarksHandlerSetup {
  bookmarksVM: BookmarksViewModel;
  handles: Handles;
  onStateChange?: (state: BookmarksViewModel["state"]) => void;
  onBookmarksChange?: (bookmarks: BookmarksViewModel["bookmarks"]) => void;
}

export function addBookmarksHandlers({
  bookmarksVM,
  handles,
  onStateChange,
  onBookmarksChange
}: BookmarksHandlerSetup): void {
  handles.removeAll();
  if (!bookmarksVM) return;

  handles.add([
    watch(
      () => bookmarksVM?.state,
      (state: BookmarksViewModel["state"]) => onStateChange?.call(null, state),
      { initial: true }
    ),
    on(
      () => bookmarksVM?.bookmarks,
      "change",
      (bookmarks: BookmarksViewModel["bookmarks"]) => onBookmarksChange?.call(null, bookmarks)
    )
  ]);
}
