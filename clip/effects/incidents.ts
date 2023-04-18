import { CSSEffect, Combo } from "@donkeyclip/motorcortex";

export const Top = (
  value,
  initialValue,
  selector,
  duration,
  easing = "linear",
  delay = 0
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        top: value,
      },
      initialValues: {
        top: initialValue,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
export const FontSize = (
  value,
  initialValue,
  selector,
  duration,
  easing = "linear",
  delay = 0
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        fontSize: value,
      },
      initialValues: {
        fontSize: initialValue,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );

export const FontWeight = (value, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        fontWeight: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const Wave = (selector) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "-10px",
            },
            initialValues: {
              top: "0px",
            },
          },
          props: {
            duration: 200,
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "0px",
            },
            initialValues: {
              top: "-10px",
            },
          },
          props: {
            duration: 150,
          },
          position: 200,
        },
      ],
    },
    {
      selector,
      delay: "@stagger(0, 500,0,linear,omni)",
      easing: "easeInOutCubic",
    }
  );

export const Floating = (selector, value) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              transform: { translateY: value },
            },
            initialValues: {
              transform: { translateY: "0px" },
            },
          },
          props: {
            duration: 1500,
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              transform: { translateY: "0px" },
            },
            initialValues: {
              transform: { translateY: value },
            },
          },
          props: {
            duration: 1500,
          },
          position: 1500,
        },
      ],
    },
    {
      selector,
      easing: "easeInOutCubic",
      repeats: 3,
    }
  );
