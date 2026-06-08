import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { Button } from "@mui/material"

export default function Navbar() {
    return <nav className="nav">
        <Button className="nav-button"><Link to='/' className="site-title">Kene Nwankwo</Link></Button>
        <ul>
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/Resume">Resume</CustomLink>
            <CustomLink to="/SoftwareProjects">Software Projects</CustomLink>
        </ul>
    </nav>
}


type CustomLinkProps = {
    to: string;
    children: React.ReactNode;
};

function CustomLink({ to, children, ...props }: CustomLinkProps) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname , end: true})
    return(
        <Button className={isActive ? "nav-button active" : "nav-button"}>
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