import { KarabinerRules } from "../types";

export const ankiKeysRemap: KarabinerRules[] = [
  {
    description: "Keypad_5 to `=` i.e bury card when Anki is open",
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
    ],
  },
  {
    description: "Fn + F4 to `=` i.e bury card when Anki is open",
    manipulators: [
      {
        from: {
          consumer_key_code: "ac_home",
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
  },
  {
    description: "Enable KeyPad Enter in Anki",
    manipulators: [
      {
        from: {
          key_code: "keypad_enter",
          modifiers: {
            mandatory: [],
            optional: ["any"],
          },
        },
        to: [
          {
            key_code: "return_or_enter",
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
  },
];

const x: KarabinerRules = {
  description: "Fn + F4 to `=` i.e bury card when Anki is open",
  manipulators: [
    {
      from: {
        consumer_key_code: "ac_home",
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
