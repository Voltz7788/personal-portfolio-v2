import { useState, useEffect } from "react";

export default function useNavScrollCheck() {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY < 524) setSelected("#hero");
        if (window.scrollY > 524 && window.scrollY < 1408)
          setSelected("#about");
        if (window.scrollY > 1408 && window.scrollY < 2459)
          setSelected("#projects");
        if (window.scrollY > 2459 && window.scrollY < 3050)
          setSelected("#experience");
        if (window.scrollY > 3050) setSelected("#contact");
      });
    }
  });
  return { selected };
}
