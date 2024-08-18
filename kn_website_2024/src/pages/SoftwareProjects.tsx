import Maze from '../Project PDFS/Java Projects/132 Projects/CMSC 132 Project 7.pdf';
import ClearCell from '../Project PDFS/Java Projects/132 Projects/CMSC 132 Project 3.pdf';
import BlackJack from '../Project PDFS/Java Projects/132 Projects/Blackjack Game Project.pdf';
import LinkedList from '../Project PDFS/Java Projects/132 Projects/Data Structure Projects/CMSC 132 Proj4 LinkedList.pdf';
import HashTable from '../Project PDFS/Java Projects/132 Projects/Data Structure Projects/CMSC 132 Project 5.pdf';
import BiTree from '../Project PDFS/Java Projects/132 Projects/Data Structure Projects/CMSC 132 Project 6.pdf';
import HeavyBag from '../Project PDFS/Java Projects/132 Projects/Data Structure Projects/CMSC 132_ Heavy Bag Project 8.pdf';
import DiagramSys from '../Project PDFS/Java Projects/131 Projects/Project 7.pdf';
import MediaRental from '../Project PDFS/Java Projects/131 Projects/Project 8.pdf';

import Treads from '../Project PDFS/C/threads.pdf';
import CShell from '../Project PDFS/C/project6.pdf';
import Calendar from '../Project PDFS/C/project4.pdf';
import DocManager from '../Project PDFS/C/project2.pdf';
import UserInter from '../Project PDFS/C/project3.pdf';
import GradesCalc from '../Project PDFS/C/project1.pdf';

import AssemP1 from '../Project PDFS/Assembly/assembly_exercise_1.pdf';
import AssemP2 from '../Project PDFS/Assembly/project5.pdf';

export default function Home(){
    return (
    <div>
        <h1>Software Projects</h1>
        <hr/>
        <HighLighted />
        <hr/>
        <Java />
        <hr/>
        <CLanguage />
        <hr/>
        <More />
    </div>
    )
}

function HighLighted(){
    return (
        <>
        <h3 className='section_name'>Highlighted</h3>

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

        <a className='section_title_h3_h4_h5' href={Maze} target="_blank" rel="noreferrer"><h4 className='section_title_h3_h4_h5'>Maze Solving Algorithm</h4></a>

        <h5 className='section_title_h3_h4_h5'>Java, Graphs, Weighted Graphs, HashMaps, Depth-First-Search, Breadth-First-Search, Dijsktra's Algorithm</h5>
        <ul className='section_ul'>
        <li>Implemented 3 algorithms to solve a randomized maze. Depth-First, Breadth-First, and Dijsktra's Algorithm</li>
        <li>Implemented a Weighted Graph Data Structure to hold and model the contents of the maze and traverse its vertices</li>
        <li>Used nested hashMaps to Implement the Weighted graph data structure</li>
        </ul>

        <a className='section_title_h3_h4_h5' href={CShell} target="_blank" rel="noreferrer"><h4 className='section_title_h3_h4_h5'>C Shell</h4></a>

        <h5 className='section_title_h3_h4_h5'>C, Pipe, Fork, Dup2, exec functions Makefile</h5>
        <ul className='section_ul'>
        <li>Implemented a shell that supports boolean operations, pipes, and file redirection</li>
        <li>Included the features: File redirection, Piping, Subshells</li>
        <li>The shell prompts the user for a command, parses the command, and then attempts to execute the command</li>
        </ul>
        </>
    )
}

function Java(){
    return (
        <>
        <h3 className='section_name'>Java</h3>

        <h4 className='section_title_h3_h4_h5'>Clustering and the Farthest-First Traversal</h4>

        <h5 className='section_title_h3_h4_h5'>Java, Data Structures</h5>
        <ul className='section_ul'>
        <li>Created optimized data structures of a weighted leftist heap and sliding midpoint K-D tree from the ground up</li>
        <li>Used structures to create an efficient algorithm to store nearest cell towers to cell users on a 2-dimensional plane as users and towers are added and removed. Developed an efficient algorithm to find the optimal location to place future cell towers</li>
        </ul>

        <a className='section_title_h3_h4_h5' href={Maze} target="_blank" rel="noreferrer"><h4 className='section_title_h3_h4_h5'>Maze Solving Algorithm</h4></a>

        <h5 className='section_title_h3_h4_h5'>Graphs, Weighted Graphs, HashMaps, Depth-First-Search, Breadth-First-Search, Dijsktra's Algorithm</h5>
        <ul className='section_ul'>
        <li>Implemented 3 algorithms to solve a randomized maze. Depth-First, Breadth-First, and Dijsktra's Algorithm</li>
        <li>Implemented a Weighted Graph Data Structure to hold and model the contents of the maze and traverse its vertices</li>
        <li>Used nested hashMaps to Implement the Weighted graph data structure</li>
        </ul>

        <a className='section_title_h3_h4_h5' href={ClearCell} target="_blank" rel="noreferrer"><h4 className='section_title_h3_h4_h5'>Clear Cell Game</h4></a>

        <h5 className='section_title_h3_h4_h5'>Enumerated type, abstract class, 2D Array Manipulation</h5>
        <ul className='section_ul'>
        <li>Implemented the logic model for a clear cell game</li>
        <li>Used Enumerated types and an abstract class to display the contents of a game board stored in a 2D Array</li>
        <li>Designed methods to control the contents of the game board based on user actions in accordance with the rules of the game</li>
        <a href="https://www.youtube.com/watch?v=tLo9S8iYPZ0&ab_channel=CMSC132_Emad" target="_blank" rel="noreferrer"><li>Game Video</li></a>

        </ul>

        <a href={BlackJack} target="_blank" rel="noreferrer"><h4 className='section_title_h3_h4_h5'>Black Jack Game</h4></a>

        <h5 className='section_title_h3_h4_h5'>ArrayList, Enumerated types</h5>
        <ul className='section_ul'>
        <li>Implemented the logic model for a simulation of the Black Jack game</li>
        <li>The user plays against the computer/dealer, the computer is operating based on the current status of the game</li>
        <li>Implemented methods to: make decisions based on the state of the board, create random decks, decide the winner, and end the game</li>
        </ul>

        <h4 className='section_title_h3_h4_h5'>Data Structure Projects</h4>

        <h5 className='section_title_h3_h4_h5'>Created several Data structures from the ground up, including additional useful methods</h5>
        <ul className='section_ul'>
        <a href={LinkedList} target="_blank" rel="noreferrer"><li>LinkedList</li></a>
        <a href={HashTable} target="_blank" rel="noreferrer"><li>HashTable</li></a>
        <a href={BiTree} target="_blank" rel="noreferrer"><li>Binary Search Tree Map</li></a>
        <a href={HeavyBag} target="_blank" rel="noreferrer"><li>Heavy Bag</li></a>
        </ul>

        <a className='section_title_h3_h4_h5' href={DiagramSys} target="_blank" rel="noreferrer"><h4 className='section_title_h3_h4_h5'>Diagram System</h4></a>

        <h5 className='section_title_h3_h4_h5'>2D Arrays, Array manipulation, Inheritance, GUI</h5>
        <ul className='section_ul'>
        <li>Implement classes that support displaying and animating 2D grid diagrams</li>
        <li>Calculate the next animation step on a 2D Array for the next frame in GUI</li>
        </ul>

        <a className='section_title_h3_h4_h5' href={MediaRental} target="_blank" rel="noreferrer"><h4 className='section_title_h3_h4_h5'>Media Rental Manager</h4></a>

        <h5 className='section_title_h3_h4_h5'>Classes, Interfaces, Polymorphism</h5>
        <ul className='section_ul'>
        <li>Created a simplified version of a system that allows people to rent movies and music albums (similar to Netflix) and receive them via mail</li>
        <li>The Media rental system keeps track of customers and media (movies and music albums). A customer has a name, address, a service plan, and two lists (queues)</li>
        <li>One queue represents the media the customer is interested in receiving and the second one represents the media already received (rented) by the customer</li>
        <li>A movie has a title, a number of copies available, and a rating (e.g., "PG"). An album has a title, number of copies available, an artist, and the songs that are part of the album</li>
        <li>A database for systems is represented using two ArrayList objects. One ArrayList represents the customers present in the database; the second represents the media (movies and albums) in the database</li>
        </ul>
        </>
    )
}

function CLanguage(){
    return (
        <>
        <h3 className='section_name'>C Language & C++</h3>

        <h4 className='section_title_h3_h4_h5'>Parallel Conway’s Game of Life</h4>

        <h5 className='section_title_h3_h4_h5'>C++, Threads, MPI, Program timing, Efficiency Analysis</h5>
        <ul className='section_ul'>
        <li>Developed a highly efficient parallelized version of Conway’s Game of Life utilizing MPI (Message Passing Interface) API and C++, aimed at leveraging multiple CPU cores for enhanced performance</li>
        <li>Demonstrated proficiency in parallel computing techniques, including task decomposition, workload distribution, and synchronization, to maximize computational throughput and minimize load imbalances</li>
        </ul>

        <a className='section_title_h3_h4_h5' href={Treads} target="_blank" rel="noreferrer"><h4 className='section_title_h3_h4_h5'>Threads</h4></a>

        <h5 className='section_title_h3_h4_h5'>Threads, Pipe, Fork, Dup2, Randomization, Command Line Arguments, Dynamic Memory Allocation, Program timing</h5>
        <ul className='section_ul'>
        <li>Used threads to write a program that computes the maximum data and the sum of data present in an array</li>
        <li>Created a program to perform the maximum and sum operations on arrays using different numbers of threads to process the array</li>
        <li>Compared the times it took to perform the operations with different numbers of threads. Graphed the times to the number of threads used in the process to find the optimal number of threads to complete the operations the most efficiently</li>
        </ul>

        <a className='section_title_h3_h4_h5' href={CShell} target="_blank" rel="noreferrer"><h4 className='section_title_h3_h4_h5'>C Shell</h4></a>

        <h5 className='section_title_h3_h4_h5'>Pipe, Fork, Dup2, exec functions Makefile</h5>
        <ul className='section_ul'>
        <li>Implemented a shell that supports boolean operations, pipes, and file redirection</li>
        <li>Included the features: File redirection, Piping, Subshells</li>
        <li>The shell prompts the user for a command, parses the command, and then attempts to execute the command</li>
        </ul>

        <a className='section_title_h3_h4_h5' href={Calendar} target="_blank" rel="noreferrer"><h4 className='section_title_h3_h4_h5'>Calendar</h4></a>

        <h5 className='section_title_h3_h4_h5'>Dynamic Memory Allocation, Function Pointers, Linked Lists, Makefile</h5>
        <ul className='section_ul'>
        <li>Used dynamic memory allocation techniques in order to implement a calendar application, that allows the scheduling of events on specific days</li>
        <li>An Event structure is represented by a node in a linked list. The Calendar structure keeps track of events by using an array of dynamically allocated event nodes in a linked list</li>
        <li>Calendar events can be sorted based on different criteria. Events can be associated with additional information. Different sorting and info are handled with function pointers</li>
        </ul>

        <h4 className='section_title_h3_h4_h5'><a href={DocManager} target="_blank" rel="noreferrer">Document Manager</a> and <a href={UserInter} target="_blank" rel="noreferrer">User Interface</a></h4>

        <h5 className='section_title_h3_h4_h5'>C Structures, Functions, String Manipulation, text parsing, File I/O, Command Line Arguments</h5>
        <ul className='section_ul'>
        <li>Implemented a document manager program. The program allows users to add paragraphs, lines to paragraphs, to replace text, and edit a document</li>
        <li>Wrote a text-based user interface to the document manager system, that allows users to load, save, and edit documents that have been created</li>
        </ul>

        <a className='section_title_h3_h4_h5' href={GradesCalc} target="_blank" rel="noreferrer"><h4 className='section_title_h3_h4_h5'>Grades Calculator</h4></a>

        <h5 className='section_title_h3_h4_h5'>Functions, Arrays</h5>
        <ul className='section_ul'>
        <li>C program that reads assignment scores and computes numeric grades and statistical information</li>
        <li>Reads information about class assignments and computes a numeric score. The data provided consists of:
            Number of assignments, Points penalty per day late, Number of assignments to drop, Whether statistical information will be generated, and Assignments information (assignment number, score, weight, days late).</li>
        <li>Program computes the numeric score after dropping the n lowest scoring assignments and taking into account days late, penalty per 
            day late, and the weight associated with the assignments. If statistical information is requested, the mean and standard deviation will be computed</li>
        </ul>
        </>
    )
}

function More(){
    return (
        <>
        <h3 className='section_name'>More</h3>

        <h4 className='section_title_h3_h4_h5'>Programming Language Compiler</h4>

        <h5 className='section_title_h3_h4_h5'>Racket</h5>
        <ul className='section_ul'>
        <li>Developed a specialized computer language as a subset of the programming language Racket, focusing on functional programming, efficiency, functions, exception handling, data types, pattern matching, lambda expressions</li>
        <li>Implemented the compiler, enabling conversion of Racket input into x86 machine code for execution on computer systems</li>
        </ul>

        <h4 className='section_title_h3_h4_h5'>Professional Portfolio Website</h4>

        <h5 className='section_title_h3_h4_h5'>ReactJS, AWS</h5>
        <ul className='section_ul'>
        <li>Developed a personal website using ReactJS, showcasing strong proficiency in front-end development and responsive design</li>
        <li>Demonstrated expertise in AWS by deploying the website using Amazon S3 for static content hosting</li>
        </ul>

        <h4 className='section_title_h3_h4_h5'>Assembly Projects <a href={AssemP1} target="_blank" rel="noreferrer"> Project1</a> <a href={AssemP2} target="_blank" rel="noreferrer"> Project2</a> </h4> 

        <h5 className='section_title_h3_h4_h5'>AVR Assembly, Converted C code fragments into AVR Assembly code with the same functionality</h5>
        <ul className='section_ul'>
        <li>String Length: Calculate and return the length of a string</li>
        <li>Palindrome: Test if a String is a Palindrome</li>
        <li>Fibonacci: Given n as a parameter, recursively calculate and return the nth Fibonacci number</li>
        <li>Integer Square Root: Compute the square root of an integer, using the bitwise algorithm</li>
        <li>Reverse Prefix Sum: Transform an array by adding the value at an index to the sum of the remainder of the array</li>

        </ul>
        </>
    )
}