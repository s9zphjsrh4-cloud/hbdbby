window.addEventListener("load", () => {
  showPopup(
    "Happy mayank!🥹🫶.",
    "hnnnji bahiya",
    startAgePopup
  );
});

/* Generic popup function */
function showPopup(message, buttonText, callback) {
  const overlay = document.createElement("div");
  overlay.classList.add("popup-overlay");
  overlay.innerHTML = `
    <p>${message}</p>
    <button>${buttonText}</button>
  `;
  document.body.appendChild(overlay);

  const btn = overlay.querySelector("button");
  btn.addEventListener("click", () => {
    overlay.style.opacity = 0;
    setTimeout(() => overlay.remove(), 500);
    if (callback) callback();
  });
}

/* Age Calculation Popup */
function startAgePopup() {
  const dob = new Date(2006, 9, 23);
  const now = new Date();
  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();
  const hours = now.getHours();

  if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
  if (months < 0) { years--; months += 12; }

  const ageText = `${years} years, ${months} months, ${days} days, ${hours} hours.\nAre you okay bachha? Call kru? 🥹❤️`;
  showPopup(ageText, "hn pata hai 🤬 aage bollll !!", startRelationshipPopup);
}

/* Relationship Duration Popup */
function startRelationshipPopup() {
  const start = new Date(2019, 7, 27);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();
  const hours = now.getHours();

  if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
  if (months < 0) { years--; months += 12; }

  const relText = `${years} years, ${months} months, ${days} days, ${hours} hours,\nItna time se shott de rhi ho mujhe aap 🧿😭🫂❤️💕`;
  showPopup(relText, "abhi sone ja rhi subah mil tu dalle", showLovePopup);
}

/* I Love You Popup */
function showLovePopup() {
  showPopup("I love you so much baby, see you soooooon 🫂 💖 (volume thoda bdha lena 🥲)", "tu thoda sa behen ka loda hai kya ?????", startFinalMessage);
}

/* Final message typing animation with responsive auto-scroll and replay */
function startFinalMessage() {
  const music = document.getElementById("bg-music");
  const playPromise = music.play();
  if (playPromise !== undefined) {
    playPromise.then(() => fadeInMusic(music))
      .catch(() => console.log("User interaction required to play music."));
  }

  const letter = document.getElementById("letter");
  const textElem = document.getElementById("text");
  const replayBtn = document.getElementById("replay-btn");

  letter.classList.add("show");
  textElem.innerHTML = ""; // reset text

  const letterText = `
mayank is a good boy he studies in class 3 This is to remind you that today is the last day to register for the High-paying Internships Drive to help college students secure well-paid internship opportunities with top companies such as L&T, Spinny, Times Network, Concentrix, and many more.

Through this initiative, your students can gain:
Access to thousands of verified internships offering attractive stipends.
Exposure to reputed companies, helping them build a strong professional profile.
Guidance and resources to apply for internships effectively.
How your college can benefit:

Register your college on Internshala – internshala.com/i/hpid-db Last day to register is 17th October,2025.
Upload your students’ data (Name, Email ID, and Phone Number) in an Excel sheet
Enable your students to access high-paying internship opportunities and track their applications easily
Note: There are no participation charges involved. Kindly do not share this email with your students. Only college faculties are required to complete the registration process.

If you have any questions or need assistance, feel free to reply to this email and we will be happy to help.

Many thanks,
Surbhi Garg
Senior Marketing Associate
Internshala ~ Partner of AICTE A, recently he performed in annual day of his school on the song, uiii ammaaa haye. Haye mai to mar gyi, mayank is best.`;

  let index = 0;
  let userScroll = false;

  // Detect if user scrolls up
  letter.addEventListener("scroll", () => {
    userScroll = letter.scrollTop + letter.clientHeight < letter.scrollHeight;
  });

  function typeLetter() {
    if (index < letterText.length) {
      textElem.innerHTML += letterText[index];
      index++;
      if (!userScroll) letter.scrollTop = letter.scrollHeight; // auto-scroll
      setTimeout(typeLetter, 60);
    } else {
      // show replay button after typing complete
      replayBtn.classList.remove("hidden");
    }
  }
  typeLetter();

  /* Floating Hearts Responsive */
  const heartInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    // responsive font-size based on screen
    heart.style.fontSize = (12 + Math.random() * 15) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 400);

  // Replay functionality
  replayBtn.onclick = () => {
    clearInterval(heartInterval); // clear previous hearts
    textElem.innerHTML = "";
    index = 0;
    replayBtn.classList.add("hidden");
    typeLetter();
  };
}

/* Smooth Music Fade-in */
function fadeInMusic(music) {
  let vol = 0;
  const interval = setInterval(() => {
    if (vol < 0.5) {
      vol += 0.01;
      music.volume = vol;
    } else {
      clearInterval(interval);
    }
  }, 200);
}