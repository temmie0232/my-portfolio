'use client'
import React, { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';

type SectionId = 'top' | 'about' | 'app' | 'skills';

interface NavigationProps {
    activeSection: SectionId;
    onSectionChange: (section: SectionId) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const sections: SectionId[] = ['top', 'about', 'app', 'skills'];
    const animationFrameRef = useRef<number>();
    const targetScrollProgressRef = useRef(0);
    const currentScrollProgressRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const maxScroll = documentHeight - windowHeight;
            targetScrollProgressRef.current = (scrollTop / maxScroll) * 100;
        };

        const animate = () => {
            const ease = 0.075;
            const diff = targetScrollProgressRef.current - currentScrollProgressRef.current;
            currentScrollProgressRef.current += diff * ease;

            setScrollProgress(currentScrollProgressRef.current);
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    const scrollToSection = (sectionId: SectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        onSectionChange(sectionId);
        setIsSidebarOpen(false);
    };

    return (
        <>
            {/* デコレーティブライン - 上部 */}
            <div className="fixed left-8 top-8 w-1 h-24 hidden md:block overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-orange-400/0 via-orange-400/50 to-orange-400/0 animate-pulse" />
            </div>

            {/* メインスクロールインジケーター */}
            <div className="fixed left-8 top-1/2 -translate-y-1/2 h-96 flex items-center hidden md:flex">
                {/* 左側の装飾ライン */}
                <div className="w-[1px] h-full flex flex-col justify-between items-center opacity-30">
                    <div className="w-full h-12 bg-gradient-to-b from-orange-400/0 to-orange-400" />
                    <div className="w-full h-12 bg-gradient-to-t from-orange-400/0 to-orange-400" />
                </div>

                {/* メインのスクロールバー */}
                <div className="w-1 h-full mx-2 bg-zinc-700/30 rounded-full overflow-hidden relative">
                    <div
                        className="absolute w-full bg-gradient-to-b from-orange-400 to-orange-600 rounded-full will-change-[height,opacity] transition-all duration-300 ease-out"
                        style={{
                            height: `${scrollProgress}%`,
                            boxShadow: '0 0 20px rgba(251, 146, 60, 0.3)',
                            transform: 'translate3d(0, 0, 0)',
                        }}
                    >
                        {/* スクロールインジケーターの光る部分 */}
                        <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-white/50 to-transparent" />
                    </div>
                </div>

                {/* 右側の装飾ライン */}
                <div className="w-[1px] h-full flex flex-col justify-between items-center opacity-30">
                    <div className="w-full h-12 bg-gradient-to-b from-orange-400/0 to-orange-400" />
                    <div className="w-full h-12 bg-gradient-to-t from-orange-400/0 to-orange-400" />
                </div>
            </div>

            {/* デコレーティブライン - 下部 */}
            <div className="fixed left-8 bottom-8 w-1 h-24 hidden md:block overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-orange-400/0 via-orange-400/50 to-orange-400/0 animate-pulse" />
            </div>

            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="fixed top-4 left-4 z-50 p-2 rounded-full bg-gray-800/50 md:hidden"
            >
                {isSidebarOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <nav className={`
                fixed md:left-16 top-0 md:top-1/2 md:-translate-y-1/2 
                flex flex-col items-start space-y-8 
                md:p-0 p-8 pt-20
                bg-zinc-800/90 backdrop-blur-md md:bg-transparent md:backdrop-blur-none
                h-full md:h-auto w-64 md:w-auto
                transform transition-all duration-300 ease-out will-change-transform
                z-50
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                {sections.map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className="group flex items-center space-x-4"
                    >
                        <div className="relative">
                            <div className={`
                                w-2 h-2 rounded-full
                                transition-all duration-300 ease-out will-change-transform
                                ${activeSection === section
                                    ? 'bg-gradient-to-r from-orange-400 to-orange-600 scale-150 shadow-lg shadow-orange-500/20'
                                    : 'bg-white/40 group-hover:bg-white/75'}
                            `} />
                            {/* アクティブインジケーターの発光エフェクト */}
                            {activeSection === section && (
                                <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-lg animate-pulse" />
                            )}
                        </div>
                        <div className="flex flex-col">
                            <span className={`
                                text-2xl capitalize
                                transition-all duration-300 ease-out will-change-transform
                                ${activeSection === section
                                    ? 'text-white scale-110 translate-x-1'
                                    : 'text-white/40 group-hover:text-white/75'}
                            `}>
                                {section}
                            </span>
                            <div className="relative h-[2px] overflow-hidden mt-1">
                                <div className={`
                                    absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded
                                    transition-transform duration-300 ease-out will-change-transform
                                    ${activeSection === section ? 'translate-x-0' : '-translate-x-full'}
                                `}
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </div>
                    </button>
                ))}
            </nav>
        </>
    );
};

export default Navigation;