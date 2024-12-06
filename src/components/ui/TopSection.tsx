'use client'
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const TopSection = () => {
    // 時間帯に応じた挨拶のstate
    const [greeting, setGreeting] = useState('');
    const [roles] = useState(['Frontend Developer', 'Backend Developer', 'Learning ML/DL']);
    const [currentRole, setCurrentRole] = useState(0);

    // 時間に応じた挨拶を設定
    useEffect(() => {
        const getGreeting = () => {
            const hour = new Date().getHours();
            if (hour >= 5 && hour < 12) {
                return 'Good morning!';
            } else if (hour >= 12 && hour < 18) {
                return 'Good afternoon!';
            } else {
                return 'Good evening!';
            }
        };

        setGreeting(getGreeting());
        // 1分ごとに挨拶を更新
        const interval = setInterval(() => {
            setGreeting(getGreeting());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const roleInterval = setInterval(() => {
            setCurrentRole(prev => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(roleInterval);
    }, [roles.length]);

    return (
        <section id="top" className="h-screen w-full flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-[#202428]/60 p-8 md:p-12 rounded-2xl w-full max-w-2xl mx-4"
            >
                <div className="text-center space-y-8">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl text-zinc-400"
                    >
                        {greeting}
                    </motion.p>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block text-3xl md:text-5xl font-bold mb-2"
                        >
                            I&apos;m{' '}
                            <span className="relative inline-block">
                                Yuta Yaginuma
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="absolute bottom-[-4] left-0 h-0.5 bg-orange-400 rounded-md w-full origin-left"
                                />
                            </span>
                        </motion.div>
                    </div>

                    <div className="h-[40px] overflow-hidden">
                        <motion.p
                            key={currentRole}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-lg text-zinc-400"
                        >
                            {roles[currentRole]}
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-12 md:bottom-32"
            >
                <ChevronDown size={32} className="text-white/60" />
            </motion.div>
        </section>
    );
};

export default TopSection;