import Button from '@mui/material/Button/Button';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { Component } from 'react';
import resumePdf from '../Files/kResume.pdf';

export default function Home(){
    return (
    <div>
        <ResumeHead />
        <hr/>
        <Button><a href={resumePdf} target="_blank" rel="noreferrer"><h3>Resume PDF</h3></a></Button>
        <hr/>
        <ResumeBody />
    </div>
    )
}

// function CustomLink({ to, children, ...props }: {to:any, children:any}) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname , end: true})
//   return(
//       <Button className={isActive ? "active" : ""}>
//           <Link to={to} {...props}>{children}</Link>
//       </Button>
//   )
// }


function ResumeHead(){
    return (
        <>
        <h2>Kenenna Nwankwo's Resume</h2>
        <h3>Student at The University of Maryland<br/>
        <a href="https://cmns.umd.edu/" target="_blank" rel="noreferrer">College of Computer, Mathematical, and Natural Sciences</a><br/>
        <a href="https://www.rhsmith.umd.edu/" target="_blank" rel="noreferrer">Robert H. Smith School of Business</a></h3>
        
        <h3> Majors: <br/> 
        <a href="https://academiccatalog.umd.edu/undergraduate/colleges-schools/computer-mathematical-natural-sciences/computer-science/computer-science-major/#requirementstext" target="_blank" rel="noreferrer">Computer Science </a> GPA: 3.95 <br/>
        <a href="https://www.rhsmith.umd.edu/faculty-research/academic-departments/finance" target="_blank" rel="noreferrer">Finance, </a><a href="https://academiccatalog.umd.edu/undergraduate/colleges-schools/business/logistics-business-public-policy/international-business-major/" target="_blank" rel="noreferrer">International Business</a> GPA: 3.74
        </h3>
        <h4> Contact: KeneDaniel@gmail.com | <a href="https://www.linkedin.com/in/kenenna-nwankwo/">Linkedin</a></h4>
        </>
    )
}
  
function ResumeBody(){
    return (
        <>
        <Skills />
        <hr/>
        <Projects />
        <hr/>
        <EmploymentExperience />
        <hr/>
        <ActivitiesAffiliations />
        </>
    )
}

function Skills(){
  return (
    <>
    <h3 className='section_name'>Skills</h3>
    <h5 className='section_title_h3_h4_h5'>Python, Java, JavaScript, ReactJS, C/C++, OCaml, Pandas, Stata, HTML, MS Suite, Google Suite, AVR Assembly</h5>
    </>
  )
}

function Projects(){
  return (
    <>
    <h3 className='section_name'><a href="./SoftwareProjects">Projects</a></h3>

    <h4 className='section_title_h3_h4_h5'>Programming Language Compiler</h4>

    <h5 className='section_title_h3_h4_h5'>Racket</h5>
    <ul className='section_ul'>
    <li>Developed a specialized computer language as a subset of the programming language Racket, focusing on functional programming, efficiency, functions, exception handling, data types, pattern matching, lambda expressions</li>
    <li>Implemented the compiler, enabling conversion of Racket input into x86 machine code for execution on computer systems</li>
    </ul>

    <h4 className='section_title_h3_h4_h5'>Clustering and the Farthest-First Traversal</h4>

    <h5 className='section_title_h3_h4_h5'>Java, Data Structures</h5>
    <ul className='section_ul'>
    <li>Created optimized data structures of a weighted leftist heap and sliding midpoint K-D tree from the ground up</li>
    <li>Used structures to create an efficient algorithm to store nearest cell towers to cell users on a 2-dimensional plane as users and towers are added and removed. Developed an efficient algorithm to find the optimal location to place future cell towers</li>
    </ul>

    <h4 className='section_title_h3_h4_h5'>Professional Portfolio Website</h4>

    <h5 className='section_title_h3_h4_h5'>ReactJS, AWS</h5>
    <ul className='section_ul'>
    <li>Developed a personal website using ReactJS, showcasing strong proficiency in front-end development and responsive design</li>
    <li>Demonstrated expertise in AWS by deploying the website using Amazon S3 for static content hosting</li>
    </ul>

    <h4 className='section_title_h3_h4_h5'>Maze Solving Algorithm</h4>

    <h5 className='section_title_h3_h4_h5'>Java, Graphs, Weighted Graphs, HashMaps, Depth-First-Search, Breadth-First-Search, Dijsktra's Algorithm</h5>
    <ul className='section_ul'>
    <li>Implemented 3 algorithms to solve a randomized maze. Depth-First, Breadth-First, and Dijsktra's Algorithm</li>
    <li>Implemented a Weighted Graph Data Structure to hold and model the contents of the maze and traverse its vertices</li>
    <li>Used nested hashMaps to Implement the Weighted graph data structure</li>
    </ul>

    <h4 className='section_title_h3_h4_h5'>C Shell</h4>

    <h5 className='section_title_h3_h4_h5'>C, Pipe, Fork, Dup2, exec functions Makefile</h5>
    <ul className='section_ul'>
    <li>Implemented a shell that supports boolean operations, pipes, and file redirection</li>
    <li>Included the features: File redirection, Piping, Subshells</li>
    <li>The shell prompts the user for a command, parses the command, and then attempts to execute the command</li>
    </ul>
    
    <h5><a href="./SoftwareProjects">More Projects</a></h5>
    {/* <h5><CustomLink to="/SoftwareProjects">More Projects</CustomLink></h5> */}
    </>
  )
}

function EmploymentExperience(){
  return (
    <>
    <h3 className='section_name' >Employment/Experience</h3>

    <a className='section_title_h3_h4_h5' href="https://www.goldmansachs.com/" target="_blank" rel="noreferrer"><h4 className='section_title_h3_h4_h5'>Goldman Sachs - Dallas, TX</h4></a>
    <h5 className='section_title_h3_h4_h5'>Incoming Operations Analyst Intern - June – August 2024</h5>
    <ul className='section_ul'>
      <li>Operations analyst within the Global Banking and Markets Division, specializing in Fixed Income, Currencies, and Commodities (FICC) as well as Equities operations, starting in the summer of 2024</li>
    </ul>
    
    <h4 className='section_title_h3_h4_h5'>Campus Educators - College Park, MD</h4>
    <h5 className='section_title_h3_h4_h5'>Software Engineer - March – July 2024</h5>
    <ul className='section_ul'>
      <li>Spearheaded front-end development of user-friendly and responsive web interfaces for a student-run startup, specializing in connecting students with tutors from their university and local area</li>
      <li>Collaborated closely with cross-functional teams to translate business requirements into technical solutions, leveraging my background in finance to inform key strategic initiatives ensuring alignment with organizational goals and objectives</li>
    </ul>
    
    <a className='section_title_h3_h4_h5' href="https://www.owenscorning.com/en-us" target="_blank" rel="noreferrer"><h4 className='section_title_h3_h4_h5'>Owens Corning - Toledo, OH</h4></a>
    <h5 className='section_title_h3_h4_h5'>Corporate Finance Intern – Economics Dep. - May – August 2023</h5>
    <ul className='section_ul'>
      <li>Develop a comprehensive predictive model using Python and Stata to accurately a forecast $500 million market segment</li>
      <li>Utilize statistical analysis techniques and market research to identify key variables that influence market trends and demand</li>
      <li>Provide insights and actionable recommendations based on forecast, contributing to the teams strategic planning</li>
      <li>Collaborate with cross-functional teams incorporating feedback, to enhance the accuracy and robustness of the forecasts</li>
    </ul>

    <a className='section_title_h3_h4_h5' href="https://omse.umd.edu/" target="_blank" rel="noreferrer"><h4 className='section_title_h3_h4_h5'>Office of Mult-Ethnic Student Education - College Park, MD</h4></a>
    <h5 className='section_title_h3_h4_h5'>Team Leader - May 2019 - January 2024</h5>
    <ul className='section_ul'>
      <li>Mentor a group of 80 students on academic and professional skills, as well as provide personal support and advising</li>
      <li>Maintain multiple databases to record student data, enabling timely intervention and support for underperforming studentss</li>
      <li>Manage daily operations to ensure accountability and accuracy of student deliverables</li>
      <li>Interview and assess applicants for leadership roles within the Office of Multiethnic Student Education</li>
    </ul>

    <h4 className='section_title_h3_h4_h5'>Maryland Consulting Firm - Lamham, MD</h4>
    <h5 className='section_title_h3_h4_h5'>Intern - Small Business Consulting - May - July 2021</h5>
    <ul className='section_ul'>
      <li>Grew client revenue through an assessment of customer technical requirements and curation of appropriate product selections</li>
      <li>Responded to inquiries in a timely and professional manner as an account representative</li>
    </ul>

    <a className='section_title_h3_h4_h5' href="./Wikler"><h4 className='section_title_h3_h4_h5'>Wikler Case Competition - College Park, MD</h4></a>
    <h5 className='section_title_h3_h4_h5'>Team Leader - April 2021</h5>
    <ul className='section_ul'>
      <li>Determined investment recommendation via discounted cash flows analysis of project value</li>
      <li>Researched key economic, industry, and company factors to determine case position and identify vulnerabilities</li>
      <li>Identified project vulnerabilities through sensitivity analysis of market factors and project assumptions</li>
      <li>Presented and defended my position to an expert panel using supporting quantitative, qualitative, and analytical considerations</li>
    </ul>

    <a className='section_title_h3_h4_h5' href="./IB_Lab"><h4 className='section_title_h3_h4_h5'>International Business Agility Lab - College Park, MD</h4></a>
    <h5 className='section_title_h3_h4_h5'>Team Member - April 2021</h5>
    <ul className='section_ul'>
      <li>Developed a business model to encompass services, monetization strategy, and implementation plan as acting consultant</li>
      <li>Understood the needs of the client and their customer base to make recommendations that would befit both parties</li>
      <li>Tackled challenges of working in global virtual team environment, including cultural and time zone differences</li>
    </ul>

    <h4 className='section_title_h3_h4_h5'><a href="https://ece.umd.edu/events/student-events/125-mile-e-bike-challenge" target="_blank" rel="noreferrer">Clark School of Engineering 125 Mile E-Bike Challenge - College Park, MD</a></h4>
    <h5 className='section_title_h3_h4_h5'>Team Member - August – December 2019</h5>
      <ul className='section_ul'>
        <li>Designed and developed an electric bike capable of long-distance travel under a combination of human and electric power</li>
        <li>Competed in a 125-mile race on campus in tiered stages over the course of two days</li>
        <li>Resolved numerous emergency situations and equipment malfunctions throughout the competition</li>
      </ul>

    <h4 className='section_title_h3_h4_h5'>Arclight Cinemas - Bethesda, MD</h4>
    <h5 className='section_title_h3_h4_h5'>Crew Member - April – August 2018</h5>
      <ul className='section_ul'>
        <li>Assisted guests in various ways including purchasing tickets, completing transactions, and addressing unique complaints</li>                             
        <li>Accounted for sold inventory and reported the number of items to be ordered from suppliers</li>
      </ul>

    <h4 className='section_title_h3_h4_h5'><a href="https://www.rhsmith.umd.edu/centers/snider-center/programs-curricula/self" target="_blank" rel="noreferrer">Snider Enterprise and Leadership Fellows - College Park, MD</a></h4>
    <h5 className='section_title_h3_h4_h5'>Student - July 2017</h5>
      <ul className='section_ul'>
        <li>Placed second in entrepreneurial competition with business idea created as a team of six</li>
        <li>Pitched business plan to a group of potential investors judging the competition</li>
      </ul>
    
    <h4 className='section_title_h3_h4_h5'>Projects Abroad - Soysambu, Kenya</h4>
    <h5 className='section_title_h3_h4_h5'>Volunteer Animal Census Enumerator - June 2017</h5>
      <ul className='section_ul'>
        <li>Documented populations and positions of various animal species and groups in the Rift Valley</li>
        <li>Expanded my world view and contributed to my global mindset while working with people from around the world</li>
      </ul>
    </>
  )
}

function ActivitiesAffiliations(){
  return (
    <>
    <h3 className='section_name'>Activities/Affiliations</h3>

    <a className='section_title_h3_h4_h5' href="https://css.umd.edu/" target="_blank" rel="noreferrer"><h4 className='section_title_h3_h4_h5'>College Success Scholars - College Park, MD</h4></a>
    <h5 className='section_title_h3_h4_h5'>Member - July 2018 – Present</h5>
      <ul className='section_ul'>
        <li>Identified key questions and issues; social, political, and cultural across communities in the United States</li>
        <li>Learned how diversity is inherently a part of the university atmosphere and how to value self and other perspectives</li>
      </ul>
    
    <a className='section_title_h3_h4_h5' href="./FIRE"><h4 className='section_title_h3_h4_h5'>FIRE-First-Year Innovation & Research Experience - College Park, MD</h4></a>
    <h5 className='section_title_h3_h4_h5'>Student Researcher - August 2018 – December 2019</h5>
      <ul className='section_ul'>
        <li>Co-authored and presented an academic paper on technological advances regarding transforming job markets </li>
        <li>Designed modern solutions via electronics and computer programming</li>
      </ul>

    </>
  )
}