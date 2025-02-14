'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

interface Project {
    title: string;
    images: string[];
    description: string[];
}

const AppSection = () => {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const featuredProjects: Project[] = [
        {
            title: "バイト先のシフト管理アプリ",
            images: ["/images/home/abc.png", "/images/home/image6.png", "/images/home/image5.png", "/images/home/image16.png",],
            description: [" - シフトの提出 / 作成支援ツール", "Point: LINEのAPIを利用しグループラインと連携", "( Next.js + Django + LINE MessagingAPI + vercel )"]
        },
        {
            title: "バイト先のトレーニングアプリ",
            images: ["/images/home/a.png", "/images/home/image19.png", "/images/home/image20.png"],
            description: [" - ドリンク / フード 調理方法の学習支援ツール", "Point: 間隔反復スケジューリングの実装", "( Next.js + Firebase )"]
        },
        {
            title: "読書メモアプリ",
            images: ["/images/home/image10.png", "/images/home/image11.png"],
            description: [" - 映画 / 本 のメモツール", "( Next.js + Firebase )"]
        }
    ];

    return (
        <>
            <section id="app" className="min-h-screen w-full flex flex-col items-center justify-center py-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#202428]/90  p-8 md:p-12 rounded-2xl w-full max-w-4xl mx-4 border border-white/10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        <span className="relative inline-block">
                            Featured Projects
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute bottom-[-4] left-0 h-1 rounded-md bg-orange-400 w-full origin-left"
                            />
                        </span>
                    </h2>

                    <div className="space-y-12">
                        {featuredProjects.map((project, index) => (
                            <div key={index} className="space-y-4">
                                <h3 className="text-2xl font-semibold">{project.title}</h3>
                                <div className="space-y-2">
                                    <div className="space-y-2 text-sm">
                                        {project.description.map((desc: string, i: number) => (
                                            <p key={i} className={`text-zinc-400 ${i === 0 ? "font-semibold" : ""}`}>
                                                {desc}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <Carousel className="w-full">
                                    <CarouselContent>
                                        {project.images.map((image, imageIndex) => (
                                            <CarouselItem key={imageIndex}>
                                                <Card className="bg-zinc-800/50 border-none">
                                                    <CardContent className="p-6">
                                                        <div
                                                            onClick={() => setSelectedImage(image)}
                                                            className="cursor-pointer aspect-video relative overflow-hidden rounded-lg"
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${project.title} screenshot ${imageIndex + 1}`}
                                                                fill
                                                                className="object-contain bg-black"
                                                            />
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="left-4 bg-orange-500/80 hover:bg-orange-600 text-white border-none w-10 h-10" />
                                    <CarouselNext className="right-4 bg-orange-500/80 hover:bg-orange-600 text-white border-none w-10 h-10" />
                                </Carousel>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8"
                >
                    <Button
                        onClick={() => router.push('/apps')}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
                    >
                        View More Projects
                    </Button>
                </motion.div>
            </section>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="relative max-w-4xl w-full h-full flex items-center justify-center"
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 text-white/80 hover:text-white"
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Preview"
                                className="max-w-full max-h-full object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AppSection;