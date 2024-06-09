import { open } from "./utils";

// "w" = "W"eb
// "b" Does not work with Mx Keys. Works with Other keyboards.
const web_rules = {
  c: open(
    "https://perplexity.ai/",
    "https://chat.openai.com",
    "https://gemini.google.com/app"
  ),
  e: open("https://espncricinfo.com"),
  g: open("https://github.com/preciso-in"),
  i: open("https://irctc.co.in"),
  m: open("https://mail.google.com"),
  n: open("https://news.ycombinator.com", "https://news.google.co.in"),
  p: open(
    "https://primevideo.com",
    "https://jiocinema.com",
    "https://hotstar.com"
  ),
  r: open("https://regex101.com"),
  s: open("https://amazon.in", "https://flipkart.com", "https://jiomart.com"),
  t: open("https://trello.com"),
  u: open("https://udemy.com"),
  y: open("https://youtube.com"),
};

export { web_rules };
