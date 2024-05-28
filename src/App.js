import React, { useState } from "react";
import Quiz from "../src/Quiz.js";
import questions from "../src/questions.js";
import "./App.css";

const App = () => {
    const [startQuiz, setStartQuiz] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(
        questions[0].category
    );
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const [lowestCategories, setLowestCategories] = useState([]);

    const resources = {
        "Trafik İşaret ve Levhaları": "http://ektv.mebnet.net/video/640/yasak-ve-tahdit-levhalar%C4%B1?channelName=KKTCTrafikKurallar",
        "Trafik Kuralları": "https://sivilsavunma.gov.ct.tr/Portals/33/4_Trafik.pdf",
        "Araç Tekniği ve Bakımı":"https://www.erkanegitim.com.tr/upload/2020/12/erkan-arac-teknigi-ders-notlari.pdf",
        "İlk Yardım ve Güvenlik": "https://www.ilkyardim.org.tr/trafik-kazalarinda-ilk-yardim.html",
        "Trafik ve Sürücü Psikolojisi": "http://www.duzensurucukursu.com/trafik_psikolojisi.html",
    };

    const handleClick = () => {
        setStartQuiz(true);
    };

    const handleNextCategory = () => {
        const nextCategoryIndex = currentCategoryIndex + 1;
        if (nextCategoryIndex < questions.length) {
            setCurrentCategoryIndex(nextCategoryIndex);
            setCurrentCategory(questions[nextCategoryIndex].category);
        } else {
            setStartQuiz(false);
        }
    };

    const handleQuizFinish = (scores) => {
        const lowestScore = Math.min(...Object.values(scores));
        const lowestScoreCategories = Object.keys(scores).filter(
            (category) => scores[category] === lowestScore
        );

        setLowestCategories(lowestScoreCategories);
    };

    return (
        <div className="wrap">
        <div className="App">
            <h1>Trafik Testi</h1>

            {startQuiz ? (
                <Quiz
                    questions={questions}
                    currentCategory={currentCategory}
                    handleNextCategory={handleNextCategory}
                    onQuizFinish={handleQuizFinish}
                />
            ) : (
                <div>
                    {questions.map((question, index) => (
                        <p key={index}>{question.category}</p>
                    ))}
                    Burada 5 farklı kategoriden trafik bilginizi test edebilir ve sonuçlarınızı alabilirsiniz. Kategorileri yukarıda görebilirsiniz. Aşağıdaki başlat butonuna tıklayarak sınava başlayın. İyi şanslar!
 <br></br>
                    <button onClick={handleClick} className="StartQuizButton">Başlat</button>
                </div>
            )}

{lowestCategories.length > 0 && (
    <div className="LowestCategory">
        <h2 className="low">En Düşük Kategoriler: {lowestCategories.join(", ")}</h2>
        {lowestCategories.map((category, index) => (
            resources[category] && (
                <div key={index}>
                    <a className="sources" href={resources[category]} target="_blank" rel="noopener noreferrer">
                        {category} Kaynak
                    </a>
                </div>
            )
        ))}
    </div>
)}
    
        </div>
        {!startQuiz && <p style={{fontSize:"14px", textAlign:"center", marginTop: "20px"}}>TRAF 101 <br></br>
        Halil Yüksel (20000134), Ahmet Fatih Saruhan (20001788), Berke Emerce (20700028), Buse Alasköz (20000049), Zeynep Çavuşoğlu (19000041)</p>}
        </div>
    );
};

export default App;
