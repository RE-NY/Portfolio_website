"use client"
import { Home, Palette, User, Github, Linkedin, Code, Bomb, Database, NotebookText, Phone, BriefcaseIcon, ShieldCheck, Braces} from 'lucide-react'
import React from "react"
import Link from 'next/link'
import { getIcon } from './NavButton'


const StatButton = ({ label, link, icon, newTab }) => {
    return (
        <div className="w-fit cursor-pointer z-50"> {/* Ensure high z-index for stat button */}
            <Link 
                href={link} 
                target={newTab ? '_blank' : '_self'} 
                className='text-foreground rounded-full flex items-center justify-center
                bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] 
                shadow-glass-inset hover:shadow-glass-sm'  
                aria-label={label} 
                name={label}
            >
                <span className='relative w-14 h-14 p-4 hover:text-accent'>
                    {getIcon(icon)} 
                    <span className='peer bg-transparent absolute top-0 left-0 w-full h-full'/>
                    <span className='absolute hidden peer-hover:block px-2 py-1 top-full mt-2 left-1/2 -translate-x-1/2
                    bg-background text-foreground text-sm rounded-rm shadow-lg whitespace-nowrap'>
                        {label}
                    </span>  
                </span>
            </Link>
        </div>
    )
}

export default StatButton;
