import "./BasicSkillsStyle.css";
import "./App.css";
function BasicSkills() {

    function RevealEnglish()
    {
        const EnglishSubjects = document.getElementById("EnglishSubjects");
        const MathSubjects = document.getElementById("MathSubjects");

        EnglishSubjects.style.display = "block";
        MathSubjects.style.display = "none";
    }

    function RevealMath()
    {
        const EnglishSubjects = document.getElementById("EnglishSubjects");
        const MathSubjects = document.getElementById("MathSubjects");

        EnglishSubjects.style.display = "none";
        MathSubjects.style.display = "block";
    }

    return (
        <>
            <div id="MiniNav" class="MiniNav">
                <button class="btn" id="English" onClick={RevealEnglish}>English</button>
                <button class="btn" id="Maths" onClick={RevealMath}>Maths</button>
                <button class="btn" id="Tech" >Tech</button>
            </div>

            <div id="EnglishSubjects">
                <h1>English Subjects</h1>
                <a class="btn block has-border" ></a>
                <a class="btn block has-border" ></a>
            </div>
            <div id="MathSubjects">
                <h1>Math Subjects</h1>
                <a class="btn block has-border" ></a>
                <a class="btn block has-border" ></a>
            </div>
        </>

    );
}

export default BasicSkills;

