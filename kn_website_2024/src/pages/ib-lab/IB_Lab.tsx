const IB_LAB_PDF_URL = '/Files/IB%20Lab/International%20Business%20Agility%20Lab%20Team%203%20Presentation.pdf';
const TEAM_PHOTO_URL = '/Files/IB%20Lab/Group%203%20Team%20Photo.png';
const ENTREPRENEURSHIP_PDF_URL = '/Files/IB%20Lab/AgilityLab_Entrepreneurship_FINAL.pdf';
const MIGRAPRENEUR_BIOS_PDF_URL = '/Files/IB%20Lab/Migrapreneur%20Bios.pdf';
const CASE_PDF_URL = '/Files/IB%20Lab/Migrapreneur%20Case%20-%20final.pdf';



export default function IB_Lab(){
    return (
    <div>
        <h2>International Business Agility Lab</h2>

        <div>
        <embed src={IB_LAB_PDF_URL} type="application/pdf" className='embedded-pdf' />
        </div>

        <a href={IB_LAB_PDF_URL} target="_blank" rel="noreferrer"><h4>Final Presentation</h4></a>
        <a href={ENTREPRENEURSHIP_PDF_URL} target="_blank" rel="noreferrer"><h4>Competition Summary</h4></a>
        <a href={CASE_PDF_URL} target="_blank" rel="noreferrer"><h4>Case</h4></a>
        <a href={MIGRAPRENEUR_BIOS_PDF_URL} target="_blank" rel="noreferrer"><h4>Migrapreneur Bios</h4></a>

        <h3>The Team</h3>
        <img src={TEAM_PHOTO_URL} width="709px" height="293px" alt="International Business Agility Lab Team"></img>

    </div>
    )
}