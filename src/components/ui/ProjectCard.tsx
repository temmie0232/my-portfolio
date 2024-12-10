import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    purpose: string;
    tools: string[];
    projectUrl: string;
}

export default function ProjectCard({ title, description, purpose, tools, projectUrl }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="h-full"
        >
            <Card className="bg-[#202428]/100 border-zinc-700 hover:border-orange-500/50 transition-colors duration-300 h-full flex flex-col">
                <CardHeader>
                    <CardTitle className="text-xl md:text-2xl font-bold text-white">
                        <span className="relative inline-block">
                            {title}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="absolute bottom-[-4px] left-0 h-1 rounded-md bg-orange-400 w-full origin-left"
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