import React, { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const ProgressBar = ({ progress }) => (
    <div
        style={{
            width: "100%",
            backgroundColor: "#f3f3f3",
            borderRadius: "5px",
        }}
    >
        <div
            style={{
                width: `${progress}%`,
                height: "20px",
                backgroundColor: "green",
                borderRadius: "5px",
            }}
        />
    </div>
);

const Quiz = ({
    questions,
    currentCategory,
    handleNextCategory,
    onQuizFinish,
}) => {
    const categoryQuestions = questions.find(
        (q) => q.category === currentCategory
    ).questions;
    const [shuffledQuestions, setShuffledQuestions] = useState(
        shuffleArray([...categoryQuestions])
    );
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizEnd, setIsQuizEnd] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const [allReviews, setAllReviews] = useState([]);
    const [isFinished, setIsFinished] = useState(false);
    const [scores, setScores] = useState({});

    useEffect(() => {
        setShuffledQuestions(shuffleArray([...categoryQuestions]));
        setCurrentQuestion(0);
        setScore(0);
        setIsQuizEnd(false);
        setUserAnswers([]);
    }, [currentCategory]);

    const handleAnswer = (answerIndex, isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        setUserAnswers([
            ...userAnswers,
            {
                question: shuffledQuestions[currentQuestion],
                answerIndex,
                isCorrect,
            },
        ]);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < shuffledQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setIsQuizEnd(true);
        }
        if (nextQuestion >= shuffledQuestions.length) {
            setAllReviews((prevReviews) => ({
                ...prevReviews,
                [currentCategory]: userAnswers,
            }));
            setScores((prevScores) => ({
                ...prevScores,
                [currentCategory]: score,
            }));
        }
    };

    const handlePrevious = () => {
        const prevQuestion = currentQuestion - 1;
        if (prevQuestion >= 0) {
            setCurrentQuestion(prevQuestion);
        }
    };

    useEffect(() => {
        if (isQuizEnd) {
            setAllReviews((prevReviews) => ({
                ...prevReviews,
                [currentCategory]: userAnswers,
            }));
        }
    }, [userAnswers, isQuizEnd, currentCategory]);

    const handleTimeUp = () => {
        setIsQuizEnd(true);
    };

    const handleFinish = () => {
        setIsFinished(true);
        onQuizFinish(scores);
    };

    const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;

    const nextCategoryIndex =
        questions.findIndex((q) => q.category === currentCategory) + 1;
    const nextCategory =
        nextCategoryIndex < questions.length
            ? questions[nextCategoryIndex].category
            : "Sonuçlar";

    return (
        <div className="testt">
            {isFinished ? (
                <AllReviews allReviews={allReviews} scores={scores} />
            ) : isQuizEnd ? (
                <>
                    <Score
                        score={score}
                        totalQuestions={shuffledQuestions.length}
                    />
                    <h2>Sonraki Kategori: {nextCategory}</h2>
                    {nextCategory === "Sonuçlar" ? (
                        <button
                            className="StartQuizButton"
                            onClick={handleFinish}
                        >
                            Bitiş
                        </button>
                    ) : (
                        <button
                            className="StartQuizButton"
                            onClick={handleNextCategory}
                        >
                            İlerle
                        </button>
                    )}
                    <Review userAnswers={userAnswers} />
                </>
            ) : (
                <>
                    <ProgressBar progress={progress} />
                    <Question question={shuffledQuestions[currentQuestion]} />
                    <Answer
                        answers={shuffledQuestions[currentQuestion].answers}
                        onAnswer={handleAnswer}
                    />
                    <Timer onTimeUp={handleTimeUp} />
                    {currentQuestion > 0 && (
                        <button onClick={handlePrevious} className="prev">
                            <div className="back">
                                <IoMdArrowRoundBack className="icon" />
                                Önceki Soru
                            </div>
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

const Question = ({ question }) => (
    <>
        <h2 className="Question">{question.text}</h2>
        {question.image && (
            <img
                src={question.image}
                alt={question.text}
                style={{ width: "200px", height: "200px" }}
            />
        )}
    </>
);

const Answer = ({ answers, onAnswer }) => (
    <div className="Answer">
        {answers.map((answer, index) => (
            <button
                key={index}
                onClick={() => onAnswer(index, answer.isCorrect)}
                className="AnswerButton"
            >
                {answer.text}
            </button>
        ))}
    </div>
);

const Score = ({ score, totalQuestions }) => (
    <h2 className="Score">
        Sonuç: {score} / {totalQuestions}
    </h2>
);

const Timer = ({ onTimeUp }) => {
    const [time, setTime] = useState(180);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(time - 1);
            if (time <= 0) {
                clearInterval(timer);
                onTimeUp();
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [time, onTimeUp]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <h2 className="Timer">
            Kalan Süre: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h2>
    );
};

const Review = ({ userAnswers }) => (
    <div className="Review">
        {userAnswers.map((userAnswer, index) => (
            <div key={index}>
                <h3>{userAnswer.question.text}</h3>
                {userAnswer.question.image && (
                    <img
                        src={userAnswer.question.image}
                        alt={userAnswer.question.text}
                        style={{ width: "200px", height: "200px" }}
                    />
                )}
                {userAnswer.question.answers.map((answer, index) => (
                    <p
                        key={index}
                        style={{
                            color:
                                index === userAnswer.answerIndex
                                    ? userAnswer.isCorrect
                                        ? "green"
                                        : "red"
                                    : answer.isCorrect
                                    ? "green"
                                    : "black",
                        }}
                    >
                        {answer.text}
                    </p>
                ))}
            </div>
        ))}
    </div>
);

const AllReviews = ({ allReviews, scores }) => {
    return (
        <div className="AllReviews">
            {Object.entries(allReviews).map(([category, review], index) => (
                <details key={index}>
                    <summary style={{ fontSize: "2em" }}>{category}</summary>
                    <h3>
                        Score: {scores[category]} / {"10"}
                    </h3>
                    <Review userAnswers={review} />
                </details>
            ))}
        </div>
    );
};

export default Quiz;
