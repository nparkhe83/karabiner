import { KarabinerRules } from "../types";

export const mouseExtraButtons: KarabinerRules = {
  description:
    "Maps Mouse button 5 to left desktop switch, 4 to right desktop switch",
  manipulators: [
    {
      from: {
        pointing_button: "button5",
      },
      to: [
        {
          key_code: "left_arrow",
          modifiers: ["left_control"],
        },
      ],
      type: "basic",
    },
    {
      from: {
        pointing_button: "button4",
      },
      to: [
        {
          key_code: "right_arrow",
          modifiers: ["left_control"],
        },
      ],
      type: "basic",
    },
  ],
};
