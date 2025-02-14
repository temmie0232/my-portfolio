'use client'
import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    const infoItems = [
        { label: "所属", value: "日本大学 工学部 情報工学科" },
        { label: "誕生日", value: "2002/10/10" },
        { label: "勉強中", value: "Next.js / Django / 機械学習" },
    ];

    return (
        <section id="about" className="min-h-screen w-full flex items-center justify-center py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-[#202428]/90 p-8 md:p-12 rounded-2xl w-full max-w-2xl mx-4 border border-white/10"
            >
                <div className="space-y-12">
                    {/* 名前 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="relative inline-block">
                                Yuta Yaginuma
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="absolute bottom-[-4] left-0 h-1 rounded-md bg-orange-400 w-full origin-left"
                                />
                            </span>
                        </h2>
                    </motion.div>

                    {/* 情報リスト */}
                    <div className="space-y-6">
                        {infoItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8"
                            >
                                <span className="text-zinc-400 md:w-24">{item.label}</span>
                                <span className="flex-1 text-lg">{item.value}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Githubリンク */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="flex justify-center"
                    >
                        <a
                            href="https://github.com/temmie0232"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
                        >
                            <Github size={24} />
                            <span>GitHub</span>
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;