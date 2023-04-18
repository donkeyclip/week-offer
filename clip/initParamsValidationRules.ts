export default {
  colors: {
    label: "Colors",
    type: "array",
    items: {
      type: "color",
    },
    firstRow: {
      label: "First Row",
      type: "string",
    },
    secondRow: {
      label: "Second Row",
      type: "string",
    },
    offer: {
      label: "Offer",
      type: "string",
    },
    images: {
      label: "Images",
      type: "array",
      items: { type: "string" },
    },
    firstImagePosition: {
      type: "object",
      label: "First Image Position",
      props: {
        top: { type: "number" },
        left: { type: "number" },
      },
    },
    secondImagePosition: {
      type: "object",
      label: "Second Image Position",
      props: {
        top: { type: "number" },
        left: { type: "number" },
      },
    },
  },
};
