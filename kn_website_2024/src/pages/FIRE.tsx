import FirePDf from '../Files/FIRE/FIRE_Final Research Project Report.pdf';

export default function Fire(){
    return (
    <div>
        <h2>FIRE Final Research Project</h2>

        <div >
        <embed src={FirePDf} type="application/pdf" className='imbedded_pdf'/>
        </div>

        <a href={FirePDf} target="_blank" rel="noreferrer"><h4>Download PDF</h4></a>

    </div>
    )
}