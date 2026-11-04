import Lenis from "lenis";
import "lenis/dist/lenis.css";

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.lenis = new Lenis({
    anchors: true,
    autoRaf: true,
    lerp: 0.075,
    wheelMultiplier: 0.85,
  });
}
