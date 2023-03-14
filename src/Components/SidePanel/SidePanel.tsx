import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";

import Bookmarks from "../Bookmarks/Bookmarks";

import "./SidePanel.scss";

interface SidePanelProps {
  view: MapView | SceneView;
}

const SidePanel = (props: SidePanelProps) => {
  return (
    <div id="sidePanel">
      <Bookmarks view={props.view} />
    </div>
  );
};

export default SidePanel;
