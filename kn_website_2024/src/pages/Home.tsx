import KeneHeadShot from '../Files/kenePhoto.jpg';

export default function Home(){
    return (
    <div>
        
        <HomeHead />
        <hr/>
        <HomeBody />
        
    </div>
    )
}
//
function HomeHead(){
    return (
        <>
        <h2>Kenenna Nwankwo's Website</h2>
        <h3>Student at The University of Maryland<br/>
        <a href="https://cmns.umd.edu/" target="_blank" rel="noreferrer">College of Computer, Mathematical, and Natural Sciences</a><br/>
        <a href="https://www.rhsmith.umd.edu/" target="_blank" rel="noreferrer">Robert H. Smith School of Business</a></h3>
        
        <h3> Majors: <br/> 
        <a href="https://academiccatalog.umd.edu/undergraduate/colleges-schools/computer-mathematical-natural-sciences/computer-science/computer-science-major/#requirementstext" target="_blank" rel="noreferrer">Computer Science </a><br/>
        <a href="https://academiccatalog.umd.edu/undergraduate/colleges-schools/business/finance/finance-major/" target="_blank" rel="noreferrer">Finance, </a><a href="https://academiccatalog.umd.edu/undergraduate/colleges-schools/business/logistics-business-public-policy/international-business-major/" target="_blank" rel="noreferrer">International Business</a>
        </h3>
        <h4> Contact: KeneDaniel@gmail.com | <a href="https://www.linkedin.com/in/kenenna-nwankwo/">Linkedin</a></h4>
        </>
    )
}


function HomeBody(){
    return (
        <>
        <h2>About Me:</h2>
        <a>I recently graduated from the University of Maryland with degrees in Computer Science, Finance, and International Business. I completed an internship as a Summer Analyst at Goldman Sachs, and I'm passionate about leveraging my skills in software development and finance. This website showcases my background, work, and ongoing projects. Feel free to explore and connect with me to learn more!</a><br/>
  <br/>
  <img src={KeneHeadShot} className='image' alt="Head shot of Kenenna Nwankwo"/>
  <br/>
        </>
    )
}
