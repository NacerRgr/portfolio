import { useState, useEffect } from "react";
import { navLinks } from "./constants";

export function useScrollspy() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better UX

      // Get all sections
      const sections = navLinks.map(link => {
        const element = document.getElementById(link.id);
        if (!element) return { id: link.id, position: 0 };
        
        return {
          id: link.id,
          position: element.offsetTop
        };
      });

      // Find the section that is currently being viewed
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].position) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on mount to set initial active section
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
}
