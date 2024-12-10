import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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
}

export default function ProjectCard({
    title,
    description,
    purpose,
    tools,
    projectUrl,
    isFeatured = false
}: ProjectCardProps) {
    return (
        <motion.div
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
                <CardFooter className="pt-4 justify-end">
                    <Button
                        onClick={() => window.location.href = projectUrl}
                        className="bg-orange-500 hover:bg-orange-600 text-white group"
                    >
                        詳細を見る
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}