import { HTMLClip, setCSSCore } from "@donkeyclip/motorcortex";
import css from "./clip.css";
import html from "./clip.html";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
// setCSSCore(AnimePluginDefinition.CSSEffect);

import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { Floating, FontSize, Wave } from "./effects/incidents";

const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "400px",
    height: "170px",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;800&display=swap`,
    },
  ],
});

clip.addIncident(Wave(".first-row .row"), 0);
clip.addIncident(Wave(".second-row .row"), 0);
clip.addIncident(Floating(".image-1", "5px"), 0);
clip.addIncident(Floating(".image-2", "-5px"), 0);
clip.addIncident(FontSize("35px", "30px", ".offer", 300, "linear"), 300);
clip.addIncident(FontSize("30px", "35px", ".offer", 300, "linear"), 600);

export { clip };
