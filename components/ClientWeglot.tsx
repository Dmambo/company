"use client";

import { useEffect } from "react";

export default function ClientWeglot() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.weglot.com/weglot.min.js";
    script.async = true;
    script.onload = () => {
      window.Weglot.initialize({ api_key: 'wg_9a7b0b333e1fe4327aab2307d48d8e246' });
    };
    document.body.appendChild(script);
  }, []);

  return null;
}
