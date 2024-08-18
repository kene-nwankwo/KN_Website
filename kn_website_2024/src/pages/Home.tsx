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
        <a>I am a student at the University of Maryland, studying Computer Science, Finance, and International Business. This is my website where you can learn a little more about me and gain a better understanding of the work I've done and the projects I'm working on!</a><br/>
        <a>I grew up in Bethesda, Maryland, and attended <a href="https://www2.montgomeryschoolsmd.org/schools/wjhs/" target="_blank" rel="noreferrer">Walter Johnson High School </a>. Currently, I am completing my undergraduate degrees at the <a href="https://www.umd.edu/" target="_blank" rel="noreferrer">University of Maryland</a>.</a>
  <br/>
  <img src={KeneHeadShot} className='image' alt="Head shot of Kenenna Nwankwo"/>
  <br/>
        </>
    )
}
