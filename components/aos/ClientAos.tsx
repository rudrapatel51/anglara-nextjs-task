// app/components/ClientAOS.tsx

"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ClientAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return null; // This component doesn't render anything; it just initializes AOS
};

export default ClientAOS;
