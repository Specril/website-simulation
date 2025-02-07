import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchWidgetsGivenPage } from "../api/api";

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

  return selectedWidget ? (
    <div className="widget">
      <h2>{selectedWidget.header}</h2>
      <p>{selectedWidget.text}</p>
      <img src={selectedWidget.thumbnail} alt="Widget Thumbnail" />
    </div>
  ) : (
    <p>Loading widget...</p>
  );
};

export default WidgetDisplay;
