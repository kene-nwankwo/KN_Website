import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { Button } from "@mui/material"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import type { ReactNode } from 'react';
import type { ThemeMode } from './theme';

type NavbarProps = {
    themeMode: ThemeMode;
    onThemeModeChange: (themeMode: ThemeMode) => void;
};

export default function Navbar({ themeMode, onThemeModeChange }: NavbarProps) {
    return <nav className="nav">
        <Button component={Link} to='/' className="nav-button site-title">Kene Nwankwo</Button>
        <ul>
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/resume">Resume</CustomLink>
            <CustomLink to="/software-projects">Software Projects</CustomLink>
        </ul>
        <label className="theme-toggle" aria-label="Toggle dark mode">
            <input
                type="checkbox"
                className="theme-toggle-input"
                checked={themeMode === 'dark'}
                onChange={(e) => onThemeModeChange(e.target.checked ? 'dark' : 'light')}
            />
            <span className="theme-toggle-track">
                <span className="theme-toggle-thumb">
                    {themeMode === 'dark'
                        ? <LightModeIcon className="theme-toggle-thumb-icon" />
                        : <DarkModeIcon className="theme-toggle-thumb-icon" />}
                </span>
            </span>
        </label>
    </nav>
}


type CustomLinkProps = {
    to: string;
    children: ReactNode;
};

function CustomLink({ to, children, ...props }: CustomLinkProps) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname , end: true})
    return(
        <Button
            component={Link}
            to={to}
            className={isActive ? "nav-button active" : "nav-button"}
            {...props}
        >
            {children}
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