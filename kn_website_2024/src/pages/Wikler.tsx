import FinalPres from '../Files/Wikler Case/Wikler Case Final Presentation.pdf';
import Case from '../Files/Wikler Case/Vassiliko_case.pdf';
import Rule from '../Files/Wikler Case/Case Competition Rules 21.pdf';


export default function Wikler(){
    return (
    <div>
        <h2>Wikler Case Competition</h2>

        <div>
        <embed src={FinalPres} type="application/pdf" className='imbedded_pdf'/>
        </div>

        <a href={FinalPres} target="_blank" rel="noreferrer"><h4>Final Presentation</h4></a>
        <a href="https://docs.google.com/spreadsheets/d/1IysyeQIv372MbaK7aSN6Bm6neKgVHN5k10icB-jJUXc/edit?usp=sharing" target="_blank" rel="noreferrer"><h4>Calculations</h4></a>
        <a href={Case} target="_blank" rel="noreferrer"><h4>Case</h4></a>
        <a href={Rule} target="_blank" rel="noreferrer"><h4>Competition Rules</h4></a>

    </div>
    )
}