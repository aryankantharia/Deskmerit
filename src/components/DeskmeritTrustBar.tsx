import React from "react";
import { EyeOff, VideoOff, CameraOff, Globe2, WifiOff } from "lucide-react";

export function DeskmeritTrustBar() {
  const items = [
    {
      icon: EyeOff,
      title: "No keystroke logging",
      subtitle: "Detects input activity, never what was typed",
    },
    {
      icon: VideoOff,
      title: "No webcam or audio",
      subtitle: "Zero media surveillance under any plan",
    },
    {
      icon: CameraOff,
      title: "Screenshots off by default",
      subtitle: "Always announced & blurred when enabled",
    },
    {
      icon: Globe2,
      title: "Choose your data region",
      subtitle: "Enterprise data residency in IN, AU, UAE, US",
    },
    {
      icon: WifiOff,
      title: "Works offline",
      subtitle: "Queues on device, syncs cleanly upon reconnect",
    },
  ];

  return (
    <section className="bg-[#FFFFFF] border-y border-[#E6E2D8] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#F7F4EE] transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-[#FFE6DF] text-[#C2361A] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F1730] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#4A5370] leading-tight mt-0.5 font-normal">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
