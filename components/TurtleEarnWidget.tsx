"use client";

import React from "react";
import { EarnWidget } from "@turtleclub/earn-widget";
import { useEarnDefaultAdapter } from "@turtleclub/earn-provider";
import type { WidgetStyleConfig } from "@turtleclub/earn-widget";

interface TurtleEarnWidgetProps {
  className?: string;
}

// Widget content component that uses the adapter
function EarnWidgetContent() {
  const adapter = useEarnDefaultAdapter();

  const widgetConfig: WidgetStyleConfig = {
    theme: "light",
    showNavigation: true,
    rounding: "lg",
    logo: {
      light: "/images/logo.svg", // I faked your logo with nextjs logo
      dark: "/images/logo.svg", // I faked your logo with nextjs logo
      fallback: "Ourbit",
    },
  };

  // Your distributor ID
  const distributorId = "OJN4GCrG";

  return (
    <div className="min-h-screen bg-background p-4">
      {/* I also add an h-screen here, the widget fits inside the whole height of its parent component */}
      <div className="max-w-4xl mx-auto h-screen">
        <div className="bg-card rounded-lg p-6 shadow-lg h-full">
          {/* I also add some restrictions for mobile and other screens but you can handle this however it's best for you */}
          <div className="w-full md:max-w-lg max-h-[calc(100vh-2rem-env(safe-area-inset-top)-env(safe-area-inset-bottom))] md:max-h-[90%] h-full md:h-[90%] overflow-y-auto">
            <EarnWidget adapter={adapter} config={widgetConfig} distributorId={distributorId} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Main widget component (provider now in _app.js)
export function TurtleEarnWidget({ className }: TurtleEarnWidgetProps) {
  return <EarnWidgetContent />;
}
