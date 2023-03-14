import { useEffect, useState } from "react";

import Header from "./Components/Header/Header";
import SidePanel from "./Components/SidePanel/SidePanel";
import View from "./Components/View/View";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

import "./App.scss";

function App() {
  const [view, setView] = useState<MapView | null>(null);

  useEffect(() => {
    const map = new WebMap({
      portalItem: {
        id: "927368df401f454589bdb34d34e170b5"
      }
    });

    const view = new MapView({
      container: "viewDiv",
      map
    });

    setView(view);
  }, []);

  return (
    <div className="App">
      <Header titleText="2023 Esri Developer Summit: Build a Custom UI for API Widgets" />
      <div id="main">
        <SidePanel view={view as MapView} />
        <View />
      </div>
    </div>
  );
}

export default App;
