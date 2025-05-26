import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MousePointerClick, Play } from 'lucide-react';
import Image from 'next/image';

const shakingAnimation = {
    animate: {
        x: [0, -1, 1, -1, 1, 0],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "linear"
        }
    }
};

interface ProjectCardProps {
    title: string;
    description: string;
    purpose: string;
    tools: string[];
    projectUrl: string;
    isFeatured?: boolean;
    previewImage?: string;
    previewVideo?: string;
}

export default function ProjectCard({
    title,
    description,
    purpose,
    tools,
    projectUrl,
    isFeatured = false,
    previewImage,
    previewVideo
}: ProjectCardProps) {
    const [showPreview, setShowPreview] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseEnter = () => {
        if (!isMobile) {
            timeoutRef.current = setTimeout(() => {
                setShowPreview(true);
            }, 300);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            setShowPreview(false);
        }
    };

    const handlePreviewClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isMobile) {
            setShowPreview(!showPreview);
        }
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="h-full relative group"
        >
            {/* 虹色の光るボーダー - 2重にして内側は暗く、外側だけ光るように */}
            {isFeatured && (
                <>
                    <div className="absolute -inset-[3px] rounded-xl bg-[#202428] z-0" />
                    <div className="absolute -inset-[4px] rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 via-purple-500 via-blue-500 to-green-400 opacity-75 blur-sm animate-gradient-rotate -z-10" />
                </>
            )}

            {/* 注目バッジ */}
            {isFeatured && (
                <motion.div
                    className="absolute -top-3 -right-3 z-10"
                    variants={shakingAnimation}
                    animate="animate"
                >
                    <div className="relative transform rotate-12">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur-sm animate-pulse" />
                        <div className="relative bg-orange-500 text-white text-lg px-4 py-1 rounded-lg font-bold border-2 border-white/20">
                            注目！！
                        </div>
                    </div>
                </motion.div>
            )}

            {/* カード本体 */}
            <Card className="bg-[#202428] border-zinc-700 hover:border-orange-500/50 transition-colors duration-300 h-full flex flex-col relative z-0">
                <CardHeader>
                    <CardTitle className="text-xl md:text-2xl font-bold text-gray-300">
                        <span className="relative inline-block">
                            {title}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="absolute bottom-[-4px] left-0 h-0.5 rounded-md bg-orange-400 w-full origin-left"
                            />
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                    <div className="min-h-[80px]">
                        <h3 className="text-zinc-400 text-sm mb-2">概要</h3>
                        <p className="text-zinc-100">{description}</p>
                    </div>
                    <div className="min-h-[80px]">
                        <h3 className="text-zinc-400 text-sm mb-2">目的</h3>
                        <p className="text-zinc-100">{purpose}</p>
                    </div>
                    <div>
                        <h3 className="text-zinc-400 text-sm mb-2">使用技術</h3>
                        <div className="flex flex-wrap gap-2">
                            {tools.map((tool, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full text-sm text-zinc-300"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="pt-4 flex gap-2">
                    {(previewImage || previewVideo) && (
                        <Button
                            variant="outline"
                            className="bg-zinc-800/50 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-orange-500/50 transition-all duration-300 group"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={handlePreviewClick}
                        >
                            <div className="flex items-center gap-2">
                                {previewVideo ? (
                                    <>
                                        <Play className="h-4 w-4" />
                                        <span className="hidden sm:inline">動画プレビュー</span>
                                        <span className="sm:hidden">プレビュー</span>
                                    </>
                                ) : (
                                    <>
                                        <MousePointerClick className="h-4 w-4" />
                                        <span className="hidden sm:inline">画像プレビュー</span>
                                        <span className="sm:hidden">プレビュー</span>
                                    </>
                                )}
                            </div>
                            <motion.div
                                className="ml-1 text-xs text-zinc-500 group-hover:text-zinc-300 hidden md:block"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                            </motion.div>
                        </Button>
                    )}
                    <Button
                        onClick={() => window.location.href = projectUrl}
                        className="bg-orange-500 hover:bg-orange-600 text-white group flex-1"
                    >
                        詳細を見る
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                </CardFooter>
            </Card>

            {/* プレビューポップアップ */}
            <AnimatePresence>
                {showPreview && (previewImage || previewVideo) && (
                    <>
                        {/* モバイル用オーバーレイ */}
                        {isMobile && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                                onClick={() => setShowPreview(false)}
                            />
                        )}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className={`
                                ${isMobile
                                    ? 'fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-[calc(100vw-2rem)]'
                                    : 'absolute z-50 pointer-events-none'}
                            `}
                            style={!isMobile ? {
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            } : undefined}
                        >
                            <div className="bg-zinc-900 rounded-lg shadow-2xl border border-zinc-700 overflow-hidden">
                                {previewVideo ? (
                                    <div className={`${isMobile ? 'w-full aspect-video' : 'w-80 h-48'}`}>
                                        <iframe
                                            src={`https://www.youtube.com/embed/${previewVideo}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                ) : previewImage ? (
                                    <div className={`relative ${isMobile ? 'w-full aspect-video' : 'w-80 h-48'}`}>
                                        <Image
                                            src={previewImage}
                                            alt={title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ) : null}
                                {isMobile && (
                                    <button
                                        onClick={() => setShowPreview(false)}
                                        className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-2"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.div>
    );
}