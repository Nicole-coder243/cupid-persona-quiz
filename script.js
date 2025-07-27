const heartsContainer = document.getElementById("heart-container");
const hearts=["💘","💝","💖","❤️","💌"];
const quizContainer = document.getElementById("quiz-container");
const results = document.getElementById("results");
const imageBox = document.getElementById("question-image");
const startBtn = document.getElementById("start-btn");
const cupidImage=document.getElementById("cupid");

function makeHearts(){
    const heart= document.createElement("div");
    heart.classList.add("heart");
    // randomiz/picks heart
    heart.textContent= hearts[Math.floor(Math.random()* hearts.length)];
    heart.style.left= Math.random() * 100 +"%";
    heartsContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    }, 5000);
}
setInterval(makeHearts, 500);

const cupidQuestions = [
  {
   question: "What is your go-to candy?",
    answers: [
      { text: " 🍫 Sweet", persona: "sweetheart" },
      { text: " 😝 Sour", persona: "spicy" },
      { text: " 🍬 Classic", persona: "classic" },
      { text: " 🍭 Chewy", persona: "chill" }
    ],
    image:"images/Go-to Candy.jpeg"

  },
   {
   question: "What are your ideal relationship goals?",
    answers: [
      { text: "Building something long-term together.", persona: "classic" },
      { text: "Just casual — no strings, just fun.", persona: "spicy" },
      { text: "Adventurous love — long beach walks, road trips, wherever we go together.", persona: "sweetheart" },
      { text: "I’m not sure — never really thought about it.", persona: "chill" }
    ],
    image:"images/Ideal relationship.jpeg"
  },
   {
     question: "Pick a Valentine’s Day activity:",
     answers: [
      {text:" 🎬 Movie Night",persona:"classic"},
      { text:" 🍷Romantic wine & dine", persona:"spicy"},
      {text:" 🛁 Indoor self-care, just the two of you",persona: "sweetheart"},
      {text:" 🎮 Game Night",persona:"chill"}
    ],
    image:"images/Vibes ❤️.jpeg"
   },
   {
     question: "Choose a love song: 🎶",
     answers: [
      { text:"Crazy in Love – Beyoncé", persona:"spicy"},
      {text:"Thinking Out Loud – Ed Sheeran", persona:"sweetheart"},
      {text:"So This is Love – Ilene Woods & Mike Douglas", persona:"classic"},
      {text:"Electric feels – MGMT",persona:"chill"}
    ],
    image:"images/Spotify Tumblr.jpeg"
   },
   {
     question: "What color matches your vibe?",
     answers: [
      { text:"🟨 Gold",persona:"classic"},
      {text:"💖 Pink",persona:"sweetheart"},
      {text:"❤️ Red", persona:"spicy"},
      {text:"💜 Purple", persona:"chill"}
    ],
    image:"images/colors.jpeg"
   },
   {
     question: "What’s your texting style?",
     answers: [
      { text:"Long Messages full of emojis", persona:"sweetheart"},
      { text:"Short and sweet-Just vibes",persona:"chill"},
      { text:"Flirty, fast, and sometimes a little risky", persona:"spicy"},
      { text:"Proper grammar, good punctuation, polite", persona:"classic" }
    ],
    image:"images/Text.jpeg"
   },
   {
     question: "What’s your love story pace?",
     answers: [ 
      { text:" 💘 I fall fast — love at first sight, every time",persona:"classic"},
      { text:" 🔍 Gotta know their favorite snack and their zodiac before I dive in.",persona:"sweetheart"},
      { text:" 🤷 Depends on the vibe, honestly. I read the room",persona:"chill"},
      { text:" 🔥 Slow burn? That tension? Yes please.", persona:"spicy"}
    ],
    image:"images/together.jpeg"
   },
   {
     question: "Your dream date is...",
     answers: [
      {text:" 🧺 Picnic Date",persona:"sweetheart"},
      {text: " 🎡 Theme Park Day",persona:"chill"},
      { text: " 🥂 Candlelit Dinner",persona:"classic"},
      { text:" 📚 Mesuem or Bookstore trip",persona:"chill"}
    ],
    image:"images/cute.jpeg"
   },
   {
     question: "How do you show affection?",
     answers: [
      { text:"📝 I’m all about sweet words and love notes.", persona:"sweetheart"},
      { text:"🎁 I give thoughtful gifts — it’s my love language",persona:"classic"},
      {text:"🧸 Just spending time together means the most.", persona:"chill"},
      { text:" 🎶 serenading or dancing with you",persona:"spicy"}

     ],
      image:"images/Love.jpeg"
   },
   {
     question: "Which movie scene speaks to your soul 💋 ?",
     answers: [
      {text:"The notebook rain kiss scene ", persona:"sweetheart"},
      {text:"Mr. Darcy’s confession in Pride & Prejudice", persona:"classic"},
      {text:"Spider-Man’s upside-down kiss", persona:"spicy"},
      {text:"No favorite, I skip the romance parts", persona:"chill" }
    ],
    image:"images/Movies.jpeg"
   }
 ];
 
 
  let currentQuestionIndex=0;
  let personaTracker = {
  sweetheart: 0,
  spicy: 0,
  classic: 0,
  chill: 0
};
// Questions function
  function showQuestion(index) {
  const questionBox = document.getElementById("quiz-questions");
  const imageBox = document.getElementById("question-image");
  const question = cupidQuestions[index];

  // Show question text and answer buttons
  let html = `<h2>${question.question}</h2>`;
  question.answers.forEach(ans => {
    html += `<button class="selection-button" data-persona="${ans.persona}">${ans.text}</button>`;
  });
  questionBox.innerHTML = html;

  // 
  imageBox.innerHTML = question.image ? `<img src="${question.image}" alt="question image" />` : "";

  // Animate question in
  questionBox.classList.add("question-show");
  questionBox.classList.remove("question-fade");

  // click to all buttons
  document.querySelectorAll(".selection-button").forEach(button => {
    button.addEventListener("click", () => {
      const type = button.getAttribute("data-persona");
      if (personaTracker[type] !== undefined) {
        personaTracker[type]++;
      }

      // Fade  Question out
      questionBox.classList.remove("question-show");
      questionBox.classList.add("question-fade");

      // Go to next question
      setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < cupidQuestions.length) {
          showQuestion(currentQuestionIndex);
        } else {
          showResults();
        }
      }, 500);
    });
  });
}


 function showResults() {
  const resultPersona = Object.keys(personaTracker).reduce((a, b) =>
    personaTracker[a] > personaTracker[b] ? a : b
  



  );
imageBox.innerHTML = "";
cupidImage.style.display = "block";
  let resultEmoji = "";
  let resultMessage = "";
  
  switch(resultPersona) {
    case "sweetheart":
      resultEmoji = "💕";
      resultMessage = "You're a total Sweetheart Cupid! Kind, soft, nurturing — you value loyalty and affection.";
      break;
    case "spicy":
      resultEmoji = "🔥";
      resultMessage = "You're a Spicy Cupid — bold and fiery! Flirty and fun, you live for sparks of love.";
      break;
    case "classic":
      resultEmoji = "💌";
      resultMessage = "You're a Classic Cupid — timeless and poetic. You love tradition, romance, and grand gestures.";
      break;
    case "chill":
      resultEmoji = "😎";
      resultMessage = "You're a Chill Cupid — just vibing through love, no pressure.";
      break;
    default:
      resultEmoji = "❓";
      resultMessage = "Oops! Something went wrong.";
  }
  results.classList.remove("hidden");

  results.innerHTML = `
    <div class="result">
      <h2> Emoji representative: ${resultEmoji}</h2>
      <p>${resultMessage}</p>
    </div>
  `;
 }
 // Start button event
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  quizContainer.classList.remove("hidden");
  showQuestion(currentQuestionIndex);
  cupidImage.style.display="none";
});
