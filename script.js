const container = document.getElementById("days-container");
const today = new Date();
const startDate = new Date(today.getFullYear(), 7, 1); // August 1

const messages = [
  "Day 1: You're cuter than this pink glitter! 💖",
  "Day 2: You make my heart do somersaults! 💘",
  "Day 3: I’m so lucky to have you 😚",
  "Day 4: Your smile > sunshine ☀️",
  "Day 5: Let’s get old and weird together 😂❤️",
  "Day 6: Just thinking of you makes me blush 🥹",
  "Day 7: You’re the cheese to my maggi 🧀🍜",
  "Day 8: I love annoying you daily 😜",
  "Day 9: You’re my peace and chaos both 💥🌸",
  "Day 10: Birthday month = best month 🎂💕",
  "Day 11: Pink suits you (and me with you) 💅",
  "Day 12: Forever is short with you 😘",
  "Day 13: Hugs cure everything (especially yours) 🤗",
  "Day 14: Even this countdown is blushing 💗",
  "Day 15: You’re my favorite human 💓",
  "Day 16: Rom-coms are jealous of us 🎬💞",
  "Day 17: You + Me = Every Day Better 🌷",
  "Day 18: You deserve 24 surprises and more 🎁",
  "Day 19: If cuteness was a crime, you’d be arrested 💋",
  "Day 20: Falling for you every day 🫶",
  "Day 21: Can’t wait for your actual day! 🥳",
  "Day 22: This countdown is love coded 💻💖",
  "Day 23: Spoiler alert: You’re everything 💘",
  "Day 24: One more day till celebration begins! 🎊"
];

for (let i = 0; i < 24; i++) {
  const day = document.createElement("div");
  day.classList.add("day");

  const thisDate = new Date(today.getFullYear(), 7, i + 1);
  if (today < thisDate) {
    day.classList.add("locked");
  }

  const img = document.createElement("img");
  img.src = `images/day${i + 1}.jpg`;
  img.alt = `Day ${i + 1}`;

  const msg = document.createElement("p");
  msg.textContent = messages[i];

  day.appendChild(img);
  day.appendChild(msg);
  container.appendChild(day);
}
