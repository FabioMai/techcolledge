import { useState } from "react";
import Header from "../components/header";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(questions[Math.floor(Math.random() * 20)]);

  let nextQuestion = () => {
    if (questions.indexOf(currentQuestion) < questions.length - 1) {
      setCurrentQuestion(questions[questions.indexOf(currentQuestion) + 1]);
    }
  };

  let previousQuestion = () => {
    if (questions.indexOf(currentQuestion) != 0) {
      setCurrentQuestion(questions[questions.indexOf(currentQuestion) - 1]);
    }
  };

  let getRandomQuestion = () => {
    let question = questions[Math.floor(Math.random() * questions.length)];
    // guarantee that a new question is returned to avoid duplicates
    return question != currentQuestion ? question : questions[(questions.indexOf(question) + 1) / 2];
  };

  return (
    // <Header>
    <>
    
    <div className="flex flex-col justify-between min-h-screen py-6 bg-gray-100">
    <img className="absolute bg-center w-full animate-pulse" src="hero_image_pale_mobile.svg"></img>
      <p className="invisible mx-auto text-xs font-bold align-bottom">TechColledge Squad 2021</p>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-secondary to-primary sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-12">
          <div className="max-w-md mx-auto">
            <img className="w-40 mx-auto" src="netlight_logo.svg"></img>
            <p className="py-4 text-center">
              {questions.indexOf(currentQuestion) + 1} / {questions.length}
            </p>
            <p className="text-3xl font-extrabold text-center uppercase">{currentQuestion}</p>
            <div className="flex flex-row justify-center w-full pt-8">
              <button
                className={questions.indexOf(currentQuestion) == 0 ? "invisible px-4" : "px-4 underline"}
                onClick={() => previousQuestion()}
              >
                Previous
              </button>
              <button
                className="px-6 py-4 font-bold text-black bg-primary rounded-full hover:bg-purple-300  motion-safe:hover:scale-110"
                onClick={() => setCurrentQuestion(getRandomQuestion)}
              >
                Shuffle
              </button>
              <button
                className={
                  questions.indexOf(currentQuestion) == questions.length - 1 ? "invisible px-4" : "px-4 underline"
                }
                onClick={() => nextQuestion()}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="mx-auto text-xs font-bold align-bottom">TechColledge Squad 2021</p>
    </div>
    </>
    // </Header>
  );
}

const questions = [
  "WHAT IS THE ONE THING YOU’D MOST LIKE TO CHANGE ABOUT THE WORLD?",
  "WHAT’S SOMETHING YOU KNOW YOU DO DIFFERENTLY THAN MOST PEOPLE?",
  "WHAT ONE THING HAVE YOU NOT DONE THAT YOU REALLY WANT TO DO? WHAT’S HOLDING YOU BACK?",
  "IF YOU HAD TO MOVE TO A DIFFERENT PLACE, WHERE WOULD YOU MOVE AND WHY?",
  "IF YOU WERE GOING TO A DESERTED ISLAND AND COULD ONLY TAKE THREE THINGS WITH YOU, WHAT WOULD YOU TAKE? WHY?",
  "WHEN YOU WERE GROWING UP WHAT DID YOU WANT  TO BECOME IN LIFE?",
  "IF YOU COULD TRAVEL  BACK IN TIME AND MEET YOURSELF AS A 10 YEAR OLD WHAT ADVICE WOULD YOU WANT TO GIVE YOURSELF?",
  "IF YOU COULD DO ANY JOB, WHAT WOULD YOU LIKE TO DO?",
  "IF YOU HAD EVERYONE IN THE WORLDS UNDIVIDED ATTENTION FOR 20 MINUTES, WHAT WOULD YOU TELL US?",
  "WHAT ACTIVITIES MAKE YOU LOSE TRACK OF TIME?",
  "WHAT ARE YOU MOST GRATEFUL FOR?",
  "WHAT IS YOUR “GO-TO” JOKE OR FUNNY STORY? ",
  "WHEN YOU THINK OF HOME, WHAT IMMEDIATELY COMES TO MIND?",
  "WHAT CAN YOU DO TODAY THAT YOU COULDN’T  DO A YEAR AGO?",
  "WHAT IS SOMETHING THAT YOU THINK A LOT OF PEOPLE MISUNDERSTAND THAT  YOU KNOW A LOT ABOUT?",
  "WHAT IS SOMETHING YOU’VE LEARNED RECENTLY?",
  "WHAT IDEA AND/OR THOUGHT HAS MOST INFLUENCED YOUR LIFE?",
  "WHAT PART OF YOUR LIFE DO YOU WISH FRIENDS OR FAMILY WERE MORE CURIOUS ABOUT?",
  "WHEN DOES A PLACE BECOME A HOME FOR YOU? WHY’S THAT?",
  "WHEN AND WHERE DO YOU MOST FIND PEACE?",
  "WHO’S BEEN AN INFLUENTIAL ROLE MODEL IN YOUR LIFE?",
  "WHAT’S AN IMPORTANT LESSON YOU’VE LEARNED FROM A RECENT FAILURE?",
  "WHEN WAS THE LAST TIME YOU WERE INSPIRED? WHAT WAS IT THAT INSPIRED YOU?",
  "WHEN IN YOUR LIFE HAVE YOU FELT MOST UNDERSTOOD?",
  "WHERE DO YOU TURN TO WHEN YOU’RE LOOKING FOR INSPIRATION?",
  "WHAT’S A COMPLIMENT YOU’VE BEEN GIVEN MOST RECENTLY THAT YOU’RE PROUD OF? WHAT MADE  IT SO MEANINGFUL?",
  "WHAT’S SOMETHING YOU’VE RECENTLY LEARNED  ABOUT YOURSELF?",
  "WHAT’S SOMETHING ABOUT YOUR FUTURE THAT EXCITES YOU? WHY?",
  "WHO IS YOUR FAVORITE ARTIST? WHY?",
  "WHAT’S SOMETHING BEAUTIFUL YOU’VE SEEN RECENTLY?",
  "WHAT ABSOLUTELY EXCITES YOUR RIGHT NOW?",
  "WHAT BOOK HAS INFLUENCED YOU THE MOST?",
  "IF YOU COULD DO ANYTHING YOU WANTED TONIGHT (ANYWHERE, FOR ANY AMOUNT OF MONEY), WHAT WOULD YOU DO AND WHY?",
  "WHAT DO YOU THINK  IS THE DRIVING FORCE IN YOUR LIFE?",
  "WHAT IS THIS CHAPTER OF YOUR LIFE CALLED?",
  "WHAT DO YOU UNDERSTAND TODAY ABOUT YOUR  LIFE THAT YOU DIDN’T UNDERSTAND A YEAR AGO?",
  "WHAT SMELL BRINGS BACK GREAT MEMORIES?",
  "WHAT HAVE YOU GIVEN UP ON?",
  "WHAT IS YOUR “SECRET- SAUCE” THAT MAKES YOU, YOU?",
  "WHAT WOULD YOU BE WILLING TO REDUCE YOUR LIFE EXPECTANCY BY 10 YEARS FOR?",
  "IF YOU COULD INVITE ANYONE IN THE WORLD TO DINNER, WHO WOULD IT BE?",
  "WOULD YOU LIKE TO BE FAMOUS? IN WHAT WAY?",
  "WHAT WOULD CONSTITUTE A “PERFECT” DAY FOR YOU?",
  "IF YOU WERE ABLE TO LIVE TO THE AGE OF 90 AND RETAIN EITHER THE MIND OR BODY OF A 30-YEAR-OLD FOR THE LAST 60 YEARS OF YOUR LIFE, WHICH WOULD YOU WANT?",
  "IF YOU COULD CHANGE ANYTHING ABOUT THE WAY YOU WERE RAISED, WHAT WOULD IT BE?",
  "IF YOU COULD WAKE UP TOMORROW HAVING GAINED ANY ONE QUALITY OR ABILITY, WHAT WOULD IT BE?",
  "IF A CRYSTAL BALL COULD TELL YOU THE TRUTH ABOUT YOURSELF, YOUR LIFE, THE FUTURE OR ANYTHING  ELSE, WHAT WOULD YOU WANT TO KNOW?",
  "WHAT DOES FRIENDSHIP MEAN TO YOU?",
  "WHAT ROLES DO LOVE AND AFFECTION PLAY IN YOUR LIFE?",
  "WHO’S SOMEONE YOU’VE BEEN THINKING ABOUT OFTEN RECENTLY? WHY?",
  "WHAT’S AN INTERESTING THING YOU RECENTLY GOOGLED?",
  "IF YOU KNEW YOU COULD NOT FAIL, WHAT IS THE ONE THING YOU’D LIKE TO ACCOMPLISH?",
  "IF THE WHOLE WORLD WERE LISTENING, WHAT WOULD YOU SAY?",
];
