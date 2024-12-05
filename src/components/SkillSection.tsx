'use client'
import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/si';
import {
    SiCplusplus, SiJavascript, SiTypescript, SiPython, SiRuby, SiHtml5, SiCss3, SiC,
    SiReact, SiNextdotjs, SiTailwindcss, SiMui,
    SiRubyonrails, SiDjango, SiFlask, SiFirebase,
    SiNumpy, SiScikitlearn, SiOpencv,
    SiMysql, SiSqlite, SiPostgresql,
    SiUbuntu, SiGit, SiGithub, SiDocker, SiNginx, SiVim, SiVercel
} from 'react-icons/si';
import { FaQuestionCircle } from "react-icons/fa";

const SkillSection = () => {
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
            { icon: FaQuestionCircle, name: 'Flet' },
            { icon: SiTailwindcss, name: 'TailwindCSS' },
        ],
        backend: [
            { icon: SiRubyonrails, name: 'Rails' },
            { icon: SiDjango, name: 'Django' },
            { icon: SiFlask, name: 'Flask' },
            { icon: SiFirebase, name: 'Firebase' },
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
        ],
        others: [
            { icon: SiUbuntu, name: 'Ubuntu' },
            { icon: SiGit, name: 'Git' },
            { icon: SiGithub, name: 'Github' },
            { icon: SiDocker, name: 'Docker' },
            { icon: SiNginx, name: 'Nginx' },
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

    const SkillIcon = ({ Icon, name }: { Icon: React.ElementType, name: string }) => (
        <motion.div
            className="relative group"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-zinc-400 group-hover:text-white transition-colors duration-300" />
            <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 px-3 py-1.5 bg-zinc-900/90 text-white text-xs rounded-lg whitespace-nowrap border border-orange-500/30 shadow-lg transition-opacity duration-200"
            >
                {name}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900/90 rotate-45 border-r border-b border-orange-500/30" />
            </motion.div>
        </motion.div>
    );

    return (
        <section id="skills" className="min-h-screen w-full flex items-center justify-center py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/30 backdrop-blur-md p-8 md:p-12 rounded-2xl w-full max-w-4xl mx-4"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    <span className="relative inline-block">
                        Skills
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute bottom-0 left-0 h-1 bg-orange-400 w-full origin-left"
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
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-zinc-200">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
                                {category.items.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <SkillIcon Icon={item.icon} name={item.name} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default SkillSection;