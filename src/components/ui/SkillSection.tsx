'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/si';
import {
    SiCplusplus, SiJavascript, SiTypescript, SiPython, SiRuby, SiHtml5, SiCss3, SiC,
    SiReact, SiNextdotjs, SiTailwindcss, SiMui,
    SiRubyonrails, SiDjango, SiFlask, SiFirebase,
    SiNumpy, SiScikitlearn, SiOpencv,
    SiMysql, SiSqlite, SiPostgresql,
    SiUbuntu, SiGit, SiGithub, SiDocker, SiNginx, SiVim, SiVercel,
    SiSupabase
} from 'react-icons/si';
import { FaQuestionCircle } from "react-icons/fa";
import { DiRasberryPi } from "react-icons/di";

const SkillSection = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const skills = {
        languages: [
            { icon: SiC, name: 'C' },
            { icon: SiCplusplus, name: 'C++' },
            { icon: SiPython, name: 'Python' },
            { icon: SiRuby, name: 'Ruby' },
            { icon: SiJavascript, name: 'JavaScript' },
            { icon: SiTypescript, name: 'TypeScript' },
            { icon: SiHtml5, name: 'HTML5' },
            { icon: SiCss3, name: 'CSS3' },
        ],
        frontend: [
            { icon: SiReact, name: 'React' },
            { icon: SiNextdotjs, name: 'Next.js' },
            { icon: Icons.SiVuedotjs, name: 'Vue.js' },
            { icon: FaQuestionCircle, name: 'Flet' },
            { icon: SiTailwindcss, name: 'TailwindCSS' },
        ],
        backend: [
            { icon: SiRubyonrails, name: 'Rails' },
            { icon: SiDjango, name: 'Django' },
            { icon: SiFlask, name: 'Flask' },
            { icon: SiFirebase, name: 'Firebase' },
            { icon: SiSupabase, name: 'Supabase' },
        ],
        libraries: [
            { icon: SiNumpy, name: 'Numpy' },
            { icon: Icons.SiPandas, name: 'Pandas' },
            { icon: FaQuestionCircle, name: 'Matplotlib' },
            { icon: SiScikitlearn, name: 'Scikit-learn' },
            { icon: SiOpencv, name: 'OpenCV' },
            { icon: Icons.SiSelenium, name: 'Selenium' },
            { icon: Icons.SiRadixui, name: 'RadixUI' },
            { icon: Icons.SiShadcnui, name: 'Shadcn/ui' },
            { icon: SiMui, name: 'MaterialUI' }
        ],
        databases: [
            { icon: SiMysql, name: 'MySQL' },
            { icon: SiSqlite, name: 'SQLite' },
            { icon: SiPostgresql, name: 'PostgreSQL' },
            { icon: Icons.SiPrisma, name: 'Prisma' },
            { icon: Icons.SiMongodb, name: 'MongoDB' }
        ],
        others: [
            { icon: SiUbuntu, name: 'Ubuntu' },
            { icon: SiGit, name: 'Git' },
            { icon: SiGithub, name: 'Github' },
            { icon: SiDocker, name: 'Docker' },
            { icon: SiNginx, name: 'Nginx' },
            { icon: DiRasberryPi, name: 'RasberryPi' },
            { icon: SiVim, name: 'Vim' },
            { icon: SiVercel, name: 'Vercel' },
            { icon: Icons.SiNotion, name: 'Notion' },
        ],
    };

    const categories = [
        { title: "Languages", items: skills.languages },
        { title: "Frontend", items: skills.frontend },
        { title: "Backend", items: skills.backend },
        { title: "Libraries", items: skills.libraries },
        { title: "Databases", items: skills.databases },
        { title: "Others", items: skills.others },
    ];

    return (
        <section id="skills" className="min-h-screen w-full flex items-center justify-center py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-[#202428]/90 p-8 md:p-12 rounded-2xl w-full max-w-4xl mx-4 border border-white/10"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    <span className="relative inline-block">
                        Skills
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute bottom-[-4px] left-0 h-1 rounded-md bg-orange-400 w-full origin-left"
                        />
                    </span>
                </h2>

                <div className="space-y-12">
                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-zinc-200">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
                                {category.items.map((item, index) => {
                                    const Icon = item.icon;
                                    const isHovered = hoveredSkill === `${category.title}-${item.name}`;

                                    return (
                                        <motion.div
                                            key={item.name}
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: index * 0.05,
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20
                                            }}
                                            className="relative flex items-center justify-center"
                                        >
                                            <motion.div
                                                className="relative cursor-pointer p-2"
                                                onMouseEnter={() => setHoveredSkill(`${category.title}-${item.name}`)}
                                                onMouseLeave={() => setHoveredSkill(null)}
                                                animate={{
                                                    scale: isHovered ? 1.2 : 1,
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 10
                                                }}
                                            >
                                                <Icon
                                                    className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-200 ${isHovered ? 'text-white' : 'text-zinc-400'
                                                        }`}
                                                />

                                                {/* ツールチップ */}
                                                <motion.div
                                                    className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{
                                                        opacity: isHovered ? 1 : 0,
                                                        y: isHovered ? 0 : 10
                                                    }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <div className="px-3 py-1.5 bg-zinc-900 text-white text-xs rounded-lg whitespace-nowrap border border-orange-500/30 shadow-lg">
                                                        {item.name}
                                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 rotate-45 border-r border-b border-orange-500/30" />
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default SkillSection;