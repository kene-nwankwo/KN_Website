import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { Button } from "@mui/material"

export default function Navbar() {
    const path = window.location.pathname

    return <nav className="nav">
        <Button><Link to='/' className="site-title">Kene Nwankwo</Link></Button>
        <ul>
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/Resume">Resume</CustomLink>
            <CustomLink to="/SoftwareProjects">Software Projects</CustomLink>
        </ul>
    </nav>
}


function CustomLink({ to, children, ...props }: {to:any, children:any}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname , end: true})
    return(
        <Button className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </Button>
    )
}




// const LINKS = [
//     {
//         name: "Pricing",
//         href: "/pricing"
//     },
//     {
//         name: "About",
//         href: "/about"
//     }
// ]

// <ul>
//             {LINKS.map((link) => (
//                 <li key={link.name}>
//                     <a href={link.href}>
//                         {link.name}
//                     </a>
//                 </li>
//             ))}
//         </ul>