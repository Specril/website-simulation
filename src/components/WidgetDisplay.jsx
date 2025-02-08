import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchWidgetsGivenPage } from "../api/api";
import ExpandableTextBox from "./ExpandableTextBox";

const WidgetDisplay = ({ pageName }) => {
  const [selectedWidget, setSelectedWidget] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const loadWidgets = async () => {
      const widgets = await fetchWidgetsGivenPage(pageName);

      // Check if URL has `experience=widgetID`
      const params = new URLSearchParams(location.search);
      const forcedWidgetId = params.get("experience");

      if (forcedWidgetId) {
        const forcedWidget = widgets.find(
          (widget) => widget.id === forcedWidgetId
        );
        if (forcedWidget) {
          setSelectedWidget(forcedWidget);
          return;
        }
      }

      // A/B Testing Selection
      let randomNum = Math.random() * 100;
      let cumulativePercentage = 0;

      for (const widget of widgets) {
        cumulativePercentage += widget.showToPercentage;
        if (randomNum < cumulativePercentage) {
          setSelectedWidget(widget);
          return;
        }
      }
    };

    loadWidgets();
  }, [pageName, location.search]);

  const fallbackSrc =
    "https://cchsthevoice.org/wp-content/uploads/2024/05/02dv1ihoyb3a1.jpg";

  return selectedWidget ? (
    <div className="card">
      <h2>{selectedWidget.header}</h2>
      <ExpandableTextBox text={selectedWidget.text} />
      <p>ID: {selectedWidget.id}</p>
      <p>Page: {selectedWidget.page_name}</p>
      <p>Price: {selectedWidget.price}</p>
      <p>Percent: {selectedWidget.showToPercentage}%</p>
      <img
        src={selectedWidget.thumbnail}
        alt="Widget Thumbnail"
        onError={(e) => (e.target.src = fallbackSrc)}
      />
    </div>
  ) : (
    <p>Loading widget...</p>
  );
};

export default WidgetDisplay;
