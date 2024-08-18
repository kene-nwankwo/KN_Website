import IB_Lab_PDf from '../Files/IB Lab/International Business Agility Lab Team 3 Presentation.pdf';
import TeamPhoto from '../Files/IB Lab/Group 3 Team Photo.png';
import Entrep_FINAL_PDF from '../Files/IB Lab/AgilityLab_Entrepreneurship_FINAL.pdf';
import Migrap_Bios_PDF from '../Files/IB Lab/Migrapreneur Bios.pdf';
import Case_PDF from '../Files/IB Lab/Migrapreneur Case - final.pdf';



export default function IB_Lab(){
    return (
    <div>
        <h2>International Business Agility Lab</h2>

        <div>
        <embed src={IB_Lab_PDf} type="application/pdf" className='imbedded_pdf' />
        </div>

        <a href={IB_Lab_PDf} target="_blank" rel="noreferrer"><h4>Final Presentation</h4></a>
        <a href={Entrep_FINAL_PDF} target="_blank" rel="noreferrer"><h4>Competition Summary</h4></a>
        <a href={Case_PDF} target="_blank" rel="noreferrer"><h4>Case</h4></a>
        <a href={Migrap_Bios_PDF} target="_blank" rel="noreferrer"><h4>Migrapreneur Bios</h4></a>

        <h3>The Team</h3>
        <img src={TeamPhoto} width="709px" height="293px" alt="International Business Agility Lab Team"></img>

    </div>
    )
}