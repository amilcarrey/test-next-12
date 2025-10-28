"use client";

import React from "react";
import { EarnWidget } from "@turtleclub/earn-widget";
import { useEarnDefaultAdapter } from "@turtleclub/earn-provider/thin";
import type { WidgetStyleConfig } from "@turtleclub/earn-widget";
import styles from "../styles/TurtleEarnWidget.module.css";

interface TurtleEarnWidgetProps {
  className?: string;
}

// Widget content component that uses the adapter
function EarnWidgetContent() {
  const adapter = useEarnDefaultAdapter();

  const widgetConfig: WidgetStyleConfig = {
    theme: "dark",
    showNavigation: true,
    rounding: "lg",
    logo: {
      light: "/vercel.svg", // I faked your logo with nextjs logo
      dark: "/vercel.svg", // I faked your logo with nextjs logo
      fallback: "Ourbit",
    },
  };

  // Your distributor ID
  const distributorId = "OJN4GCrG";

  return (
    <div className={styles.wrapper}>
      <EarnWidget
        adapter={adapter}
        config={widgetConfig}
        distributorId={distributorId}
      />
    </div>
  );
}

// Main widget component (provider now in _app.js)
export function TurtleEarnWidget({ className }: TurtleEarnWidgetProps) {
  return <EarnWidgetContent />;
}
