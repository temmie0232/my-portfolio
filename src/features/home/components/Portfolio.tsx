"use client"
import React from 'react';

type SectionId = 'top' | 'about' | 'app' | 'skills';

const Portfolio = () => {

    const [activeSection, setActiveSection] = React.useState<SectionId>('top');

    const sections: SectionId[] = ['top', 'about', 'app', 'skills'];

    return (
        <div className="flex min-h-screen">
            <h1>Hello World</h1>
        </div>
    );
};

export default Portfolio;