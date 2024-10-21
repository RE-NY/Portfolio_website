"use client"
import { CircularBtnList, LinkBtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import StatButton from "./StatButton";

const Navigation = () => {
    const angleIncrement = 360 / CircularBtnList.length;

    return (
        <div className="relative w-full h-screen flex items-center justify-center">
            {/* Central Circular Navigation */}
            
            <div className="relative hover:pause animate-spin-slow group flex items-center justify-center">
                {
                    CircularBtnList.map((btn, index) => {
                        const angleRadian = (index * angleIncrement * Math.PI) / 180;
                        const radius = 'calc(20vw - 1rem)';
                        const absicca = `calc(${radius} * ${Math.cos(angleRadian)})`;
                        const ordinate = `calc(${radius} * ${Math.sin(angleRadian)})`;

                        return <NavButton key={btn.label} x={absicca} y={ordinate} {...btn} />;
                    })
                }
            </div>

            {/* Right-aligned Link Button List */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-10 px-4">
                {
                    LinkBtnList.map((btn) => (
                        <StatButton key={btn.label} {...btn} />
                    ))
                }
            </div>
        </div>
    );
}

export default Navigation;
