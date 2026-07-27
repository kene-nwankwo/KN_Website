const FINAL_PRESENTATION_PDF_URL = '/Files/Wikler%20Case/Wikler%20Case%20Final%20Presentation.pdf';
const CASE_PDF_URL = '/Files/Wikler%20Case/Vassiliko_case.pdf';
const RULES_PDF_URL = '/Files/Wikler%20Case/Case%20Competition%20Rules%2021.pdf';


export default function Wikler(){
    return (
    <div>
        <h2>Wikler Case Competition</h2>

        <div>
        <embed src={FINAL_PRESENTATION_PDF_URL} type="application/pdf" className='embedded-pdf'/>
        </div>

        <a href={FINAL_PRESENTATION_PDF_URL} target="_blank" rel="noreferrer"><h4>Final Presentation</h4></a>
        <a href="https://docs.google.com/spreadsheets/d/1IysyeQIv372MbaK7aSN6Bm6neKgVHN5k10icB-jJUXc/edit?usp=sharing" target="_blank" rel="noreferrer"><h4>Calculations</h4></a>
        <a href={CASE_PDF_URL} target="_blank" rel="noreferrer"><h4>Case</h4></a>
        <a href={RULES_PDF_URL} target="_blank" rel="noreferrer"><h4>Competition Rules</h4></a>

    </div>
    )
}