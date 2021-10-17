import { useState } from "react";
import Header from "../components/header";

export default function Hydroponics() {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

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

  return (
    // <Header>
    <>
      <div className="absolute w-full h-full max-h-full opacity-20">
        <img
          className="object-cover h-full w-full"
          src="hero_image_plants.svg"
        ></img>
      </div>
      <div className="flex flex-col justify-between min-h-screen py-6 bg-gray-100">
        <p className="invisible mx-auto text-xs font-bold align-bottom">
          Tech CollEDGE Squad 2021
        </p>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-plantLight to-plantDark sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
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
                    questions.indexOf(currentQuestion) == questions.length - 1
                      ? "invisible px-4"
                      : "px-6 py-4 font-bold text-white bg-plantDark rounded-full motion-safe:hover:scale-110"
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
            Image Credit: Plant Vector from{" "}
            <a
              href="https://all-free-download.com/free-vector/download/plant-pattern-leaf-pot-icons-colored-design_6840621.html"
              target="_blank"
            >
              all-free-download.com
            </a>
            <br></br>
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
  "WHAT'S YOUR PERSONAL TRACK RECORD GROWING PLANTS OR VEGETABLES?",
  "WHAT DO YOU IMAGINE THE FUTURE OF FARMING TO LOOK LIKE?",
  "ANY IDEAS ON WHAT HYDROPONIC SYSTEMS ARE/ COULD LOOK LIKE?",
];
