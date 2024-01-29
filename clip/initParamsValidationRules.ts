export default {
  title: { label: "Title", type: "string" },

  subtitle: { label: "Subtitle", type: "string" },

  text: { label: "Text", type: "string" },
  secondaryText: { label: "Secondary Text", type: "string" },

  backgroundColor: { label: "Background Color", type: "color" },
  fontColor: { label: "Font Color", type: "color" },

  products: {
    label: "Products",
    type: "array",
    items: {
      type: "object",
      props: {
        name: { type: "string" },
        featured_image: { type: "string" },
      },
    },
  },
};
