import { app } from "../utils";

// Todo: Add opera, arc, whatsapp,

// o = "Open" applications
export const app_rules = {
  a: app("anki"),
  // b: Does not work on MXKeys but works on Mac,
  // c: Does not work on Dell but works on Mac,
  c: app("Visual Studio Code"),
  // "D"iary (Obsidian.md)
  d: app("Obsidian"),
  f: app("Finder"),
  g: app("Google Chrome"),
  i: app("iterm"),
  // Boo"k"s
  k: app("Books"),
  m: app("Music"),
  p: app("Photos"),
  r: app("Microsoft Remote Desktop"),
  s: app("Microsoft Onenote"),
  w: app("WhatsApp"),
  // Open todo list managed via *H*ypersonic
  // h: open(
  //   "notion://www.notion.so/stellatehq/7b33b924746647499d906c55f89d5026"
  // ),
  // l: open(
  //   "raycast://extensions/stellate/mxstbr-commands/open-mxs-is-shortlink"
  // ),
};
