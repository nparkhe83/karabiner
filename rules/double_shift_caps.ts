import { KarabinerRules } from "./../types";

const doubleShiftCaps: KarabinerRules = {
  description: "Change double tap right ⇧ key to caps lock",
  manipulators: [
    {
      conditions: [
        {
          name: "right_shift pressed",
          type: "variable_if",
          value: 1,
        },
      ],
      from: {
        key_code: "right_shift",
        modifiers: {
          optional: ["any"],
        },
      },
      to: [
        {
          key_code: "caps_lock",
        },
      ],
      type: "basic",
    },
    {
      from: {
        key_code: "right_shift",
        modifiers: {
          optional: ["any"],
        },
      },
      to: [
        {
          set_variable: {
            name: "right_shift pressed",
            value: 1,
          },
        },
        {
          key_code: "right_shift",
        },
      ],
      to_delayed_action: {
        to_if_canceled: [
          {
            set_variable: {
              name: "right_shift pressed",
              value: 0,
            },
          },
        ],
        to_if_invoked: [
          {
            set_variable: {
              name: "right_shift pressed",
              value: 0,
            },
          },
        ],
      },
      type: "basic",
    },
  ],
};

export { doubleShiftCaps };
