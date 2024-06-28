import { KarabinerRules } from "../types";

const missionControlKeys: KarabinerRules = {
  description: "Map alt + u to mission control",
  manipulators: [
    {
      from: {
        key_code: "u",
        modifiers: {
          mandatory: ["left_option"],
        },
      },
      to: [
        {
          key_code: "up_arrow",
          modifiers: ["left_control"],
        },
      ],
      type: "basic",
    },
  ],
};

export { missionControlKeys };
