import { KarabinerRules } from "../types";

export const ankiBuryKeyRemap: KarabinerRules = {
  description: "5 and Numpad_5 to `=` i.e bury card when Anki is open",
  manipulators: [
    {
      from: {
        key_code: "keypad_5",
        modifiers: {
          mandatory: [],
          optional: ["any"],
        },
      },
      to: [
        {
          key_code: "equal_sign",
          modifiers: [],
        },
      ],
      type: "basic",
      conditions: [
        {
          type: "frontmost_application_if",
          bundle_identifiers: ["^net\\.ankiweb\\.dtop"],
        },
      ],
    },
    {
      from: {
        key_code: "5",
        modifiers: {
          mandatory: [],
          optional: ["any"],
        },
      },
      to: [
        {
          key_code: "equal_sign",
          modifiers: [],
        },
      ],
      type: "basic",
      conditions: [
        {
          type: "frontmost_application_if",
          bundle_identifiers: ["^net\\.ankiweb\\.dtop"],
        },
      ],
    },
  ],
};
