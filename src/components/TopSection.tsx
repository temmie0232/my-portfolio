'use client'
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const TopSection = () => {
    // 時間帯に応じた挨拶のstate
    const [greeting, setGreeting] = useState('');

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

    return (
        <section
            id="top"
            className="h-screen w-full flex items-center justify-center"
        >
            <div className="bg-[#202428]/0 backdrop-blur-sm p-8 rounded-2xl w-full max-w-2xl mx-4 flex flex-col items-center">
                {/* 挨拶と名前 */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {greeting}
                    </h1>
                    <p className="text-3xl md:text-4xl">
                        I'm <span className="text-orange-400">Yuta Yaginuma</span>
                    </p>
                </div>

                {/* スクロールマーク */}
                <div className="animate-bounce">
                    <ChevronDown size={32} className="text-white/80" />
                </div>
            </div>
        </section>
    );
};

export default TopSection;