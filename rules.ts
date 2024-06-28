import fs from "fs";
import sortJSON from "sort-json";
import { devices } from "./device-configuration";
import { app_rules } from "./rules/app_rules";
import { doubleShiftCaps } from "./rules/double_shift_caps";
import { mouseExtraButtons } from "./rules/mouse_extra_buttons";
import { movement_rules } from "./rules/movement_rules";
import { web_rules } from "./rules/web_rules";
import { KarabinerRules } from "./types";
import { createHyperSubLayers } from "./utils";

const rules: KarabinerRules[] = [
  // Maps button 5 to left desktop switch, 4 to right desktop switch
  mouseExtraButtons,
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Caps Lock -> Hyper Key",
        from: {
          key_code: "caps_lock",
          modifiers: {
            optional: ["any"],
          },
        },
        to: [
          {
            set_variable: {
              name: "hyper",
              value: 1,
            },
          },
        ],
        to_after_key_up: [
          {
            set_variable: {
              name: "hyper",
              value: 0,
            },
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
    ],
  },
  // Press Right Shift twice to get Caps Lock
  doubleShiftCaps,

  ...createHyperSubLayers({
    // spacebar: open(
    //   "raycast://extensions/stellate/mxstbr-commands/create-notion-todo"
    // ),

    // w = "W"eb
    w: web_rules,

    // o = "O"pen
    o: app_rules,

    // TODO: Test this out
    // s = "S"ystem
    // s: system_rules,

    // TODO: This doesn't quite work yet.
    // l = "Layouts" via Raycast's custom window management
    // l: raycast_window_rules

    // TODO: Test this out
    // v = mo"V"e which isn't "m" because we want it to be on the left hand
    // so that hjkl work like they do in vim
    v: movement_rules,

    // TODO: Test this out
    // c = Musi"c" which isn't "m" because we want it to be on the left hand
    // c: music_rules,

    // TODO: Have to learn Raycast
    // r = "R"aycast
    // r: raycast_rules,
  }),
];

const parameters = {
  "basic.simultaneous_threshold_milliseconds": 50,
  "basic.to_delayed_action_delay_milliseconds": 500,
  "basic.to_if_alone_timeout_milliseconds": 1000,
  "basic.to_if_held_down_threshold_milliseconds": 500,
  "mouse_motion_to_scroll.speed": 100,
};

const karabinerConfig = {
  global: {
    ask_for_confirmation_before_quitting: true,
    check_for_updates_on_startup: true,
    show_in_menu_bar: true,
    show_profile_name_in_menu_bar: false,
    unsafe_ui: false,
  },
  profiles: [
    {
      complex_modifications: {
        parameters,
        rules,
      },
      name: "Nilesh",
      devices,
    },
    {
      // Profile without any Karabiner rules
      // For users who do not want to use Karabiner.
      complex_modifications: {
        parameters,
      },
      devices: [],
      rules: [],
      name: "Default",
      parameters: {
        delay_milliseconds_before_open_device: 1000,
      },
      selected: false,
      simple_modifications: [],
      virtual_hid_keyboard: {
        country_code: 0,
        indicate_sticky_modifier_keys_state: true,
        mouse_key_xy_scale: 100,
      },
    },
  ],
};

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(sortJSON(karabinerConfig), null, 4)
);
