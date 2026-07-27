const FIRE_PDF_URL = '/Files/FIRE/FIRE_Final Research Project Report.pdf';

export default function Fire(){
    return (
    <div>
        <h2>FIRE Final Research Project</h2>

        <div >
        <embed src={FIRE_PDF_URL} type="application/pdf" className='embedded-pdf'/>
        </div>

        <a href={FIRE_PDF_URL} target="_blank" rel="noreferrer"><h4>Download PDF</h4></a>

    </div>
    )
}