import { useState } from "react";
import Header from "../components/header";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[Math.floor(Math.random() * 20)]
  );

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
    return question != currentQuestion
      ? question
      : questions[(questions.indexOf(question) + 1) / 2];
  };

  return (
    // <Header>
    <>
      <img
        className="absolute h-full max-h-full animate-pulse"
        src="hero_image_pale_mobile.svg"
      ></img>
      <div className="flex flex-col justify-between min-h-screen py-6 bg-gray-100">
        <p className="invisible mx-auto text-xs font-bold align-bottom">
          Tech CollEDGE Squad 2021
        </p>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-secondary to-primary sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-12">
            <div className="max-w-md mx-auto">
              <img className="w-40 mx-auto" src="netlight_logo.svg"></img>
              <p className="py-4 text-center">
                {questions.indexOf(currentQuestion) + 1} / {questions.length}
              </p>
              <p className="text-3xl font-extrabold text-center uppercase">
                {currentQuestion}
              </p>
              <div className="flex flex-row justify-center w-full pt-8">
                <button
                  className={
                    questions.indexOf(currentQuestion) == 0
                      ? "invisible px-4"
                      : "px-4 underline"
                  }
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
                    questions.indexOf(currentQuestion) == questions.length - 1
                      ? "invisible px-4"
                      : "px-4 underline"
                  }
                  onClick={() => nextQuestion()}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="mx-auto text-xs text-center align-bottom">
          Tech CollEDGE Squad 2021 <br></br>
          <small>
            This site is not endorsed by Netlight in any way. Netlight is a
            trademark of{" "}
            <a href="https://www.netlight.com/">Netlight Consulting</a>.
          </small>
        </p>
      </div>
    </>
    // </Header>
  );
}

const questions = [
  "WHAT IS THE THING YOU’D LIKE TO CHANGE ABOUT THE WORLD?",
  "WHAT’S SOMETHING YOU KNOW YOU DO DIFFERENTLY THAN MOST PEOPLE?",
  "WHAT ONE THING HAVE YOU NOT DONE THAT YOU REALLY WANT TO DO? WHAT’S HOLDING YOU BACK?",
  "IF YOU HAD TO MOVE TO A DIFFERENT PLACE, WHERE WOULD YOU MOVE AND WHY?",
  "IF YOU WERE GOING TO A DESERTED ISLAND AND COULD ONLY TAKE THREE THINGS WITH YOU, WHAT WOULD YOU TAKE? WHY?",
  "WHEN YOU WERE GROWING UP WHAT DID YOU WANT  TO BECOME IN LIFE?",
  "IF YOU COULD DO ANY JOB, WHAT WOULD YOU LIKE TO DO?",
  "IF YOU HAD EVERYONE IN THE WORLDS UNDIVIDED ATTENTION FOR 30 SECONDS, WHAT WOULD YOU TELL US?",
  "WHAT ACTIVITIES MAKE YOU LOSE TRACK OF TIME?",
  "WHEN YOU THINK OF HOME, WHAT IMMEDIATELY COMES TO YOUR MIND?",
  "WHAT CAN YOU DO TODAY THAT YOU COULDN’T  DO A YEAR AGO?",
  "WHAT IS SOMETHING YOU’VE LEARNED RECENTLY?",
  "WHAT IDEA AND/OR THOUGHT HAS CHANGED YOUR LIFE'S DIRECTION?",
  "WHAT IS YOUR FAVOURITE ACTIVITY THAT YOU DO WITH YOUR FRIENDS/FAMILY?",
  "WHEN DOES A PLACE BECOME A HOME FOR YOU? WHY’S THAT?",
  "WHEN AND WHERE DO YOU MOST FIND PEACE?",
  "WHO’S BEEN AN INFLUENTIAL ROLE MODEL IN YOUR LIFE?",
  "WHAT’S AN IMPORTANT LESSON YOU’VE LEARNED FROM A RECENT FAILURE?",
  "WHAT’S A COMPLIMENT YOU’VE BEEN GIVEN RECENTLY THAT YOU’RE PROUD OF?",
  "WHAT’S SOMETHING YOU’VE RECENTLY LEARNED  ABOUT YOURSELF?",
  "WHAT’S SOMETHING ABOUT YOUR FUTURE THAT EXCITES YOU? WHY?",
  "WHO IS YOUR FAVORITE ARTIST? WHY?",
  "WHAT’S SOMETHING BEAUTIFUL YOU’VE SEEN RECENTLY?",
  "WHAT'S SOMETHING EXCITING THAT HAPPENED TO YOU RECENTLY?",
  "WHAT BOOK HAS INFLUENCED YOU THE MOST?",
  "WHAT SMELL BRINGS BACK OLD MEMORIES?",
  "IF YOU COULD INVITE ANYONE IN THE WORLD TO DINNER, WHO WOULD IT BE?",
  "WHAT IS SOMETHING THAT YOU WOULD LIKE TO BE FAMOUS FOR?",
  "WHAT WOULD CONSTITUTE A “PERFECT” DAY FOR YOU?",
  "WHAT’S AN INTERESTING THING YOU RECENTLY GOOGLED?",
  "IF YOU KNEW YOU WILL NOT FAIL, WHAT IS THE ONE THING YOU’D LIKE TO ACCOMPLISH?",
];
