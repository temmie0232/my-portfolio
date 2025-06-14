import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from 'next/navigation';

// 新しいプロジェクト詳細の型定義
interface ProjectDetail {
    // タイトル・概要
    title: string;
    shortDescription: string; // ひとことで内容がわかる紹介文
    screenshots?: {
        type: 'image' | 'youtube';
        url: string;
        alt?: string;
    }[];

    // 開発背景・目的
    development: {
        background: string; // 課題
        target: string;     // 目的
    };

    // 主な機能
    features: string[]; // 実装した代表的な機能

    // 使用技術・開発環境
    techStack: {
        frontend?: string[];
        backend?: string[];
        database?: string[];
        infrastructure?: string[];
        auth?: string[];
        tools?: string[];
    };

    // 工夫した点・こだわり
    improvements: {
        uiux?: string[];     // UI/UXで意識したこと
        design?: string[];   // 設計の工夫
        performance?: string[]; // ユーザビリティやパフォーマンス面
    };

    // 苦労した点と解決方法
    challenges: {
        problem: string;     // 技術的に詰まった点
        solution: string;    // どう乗り越えたか
        learning: string;    // 学び
    }[];

    // GitHub・デモリンク
    links: {
        github?: string;
        demo?: string;
    };
}

interface ProjectDetailSectionProps {
    project: ProjectDetail;
}

const ProjectDetailSection: React.FC<ProjectDetailSectionProps> = ({ project }) => {
    const router = useRouter();

    return (
        <div className="min-h-screen w-full p-8 md:p-12">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed top-8 left-8 z-10"
            >
                <Button
                    onClick={() => router.back()}
                    variant="ghost"
                    className="text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-600"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    戻る
                </Button>
            </motion.div>

            <div className="max-w-4xl mx-auto pt-20">
                {/* タイトルセクション */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-12"
                >
                    <span className="relative inline-block">
                        {project.title}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute bottom-[-4px] left-0 h-1 rounded-md bg-orange-400 w-full origin-left"
                        />
                    </span>
                </motion.h1>

                <div className="space-y-12">
                    {/* タイトル・概要セクション */}
                    <Card className="bg-[#202428]/90 border-zinc-700">
                        <CardContent className="p-6 space-y-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-semibold mb-4 text-white">プロジェクト概要</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-zinc-200 mb-2">アプリ概要</h3>
                                        <p className="text-zinc-400">{project.shortDescription}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* アプリの画面キャプチャ */}
                            {project.screenshots && project.screenshots.length > 0 && (
                                <div className="mt-8">
                                    <Carousel className="w-full">
                                        <CarouselContent>
                                            {project.screenshots.map((item, index) => (
                                                <CarouselItem key={index}>
                                                    <Card className="bg-zinc-800/50 border-none">
                                                        <CardContent className="p-6">
                                                            <div className="aspect-video relative overflow-hidden rounded-lg">
                                                                {item.type === 'youtube' ? (
                                                                    <iframe
                                                                        src={`https://www.youtube.com/embed/${item.url}`}
                                                                        title={`Preview ${index + 1}`}
                                                                        className="w-full h-full absolute inset-0"
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                        allowFullScreen
                                                                    />
                                                                ) : (
                                                                    <Image
                                                                        src={item.url}
                                                                        alt={item.alt || `Preview ${index + 1}`}
                                                                        fill
                                                                        className="object-contain bg-black"
                                                                    />
                                                                )}
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious className="left-4 bg-orange-500/80 hover:bg-orange-600 text-white border-none" />
                                        <CarouselNext className="right-4 bg-orange-500/80 hover:bg-orange-600 text-white border-none" />
                                    </Carousel>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* 開発背景・目的セクション */}
                    <Card className="bg-[#202428]/90 border-zinc-700">
                        <CardContent className="p-6 space-y-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-semibold mb-4 text-white">開発背景・目的</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-zinc-200 mb-2">課題</h3>
                                        <p className="text-zinc-400">{project.development.background}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-zinc-200 mb-2">目的</h3>
                                        <p className="text-zinc-400">{project.development.target}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </CardContent>
                    </Card>

                    {/* 主な機能セクション */}
                    <Card className="bg-[#202428]/90 border-zinc-700">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-white">主な機能</h2>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <ul className="space-y-2">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="text-zinc-400">
                                            • {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </CardContent>
                    </Card>

                    {/* 使用技術・開発環境セクション */}
                    <Card className="bg-[#202428]/90 border-zinc-700">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-white">使用技術・開発環境</h2>
                            <div className="space-y-6">
                                {project.techStack.frontend && project.techStack.frontend.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-lg font-semibold text-zinc-200 mb-2">フロントエンド</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.frontend.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full text-sm text-zinc-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                                {project.techStack.backend && project.techStack.backend.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-lg font-semibold text-zinc-200 mb-2">バックエンド</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.backend.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full text-sm text-zinc-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                                {project.techStack.database && project.techStack.database.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-lg font-semibold text-zinc-200 mb-2">データベース</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.database.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full text-sm text-zinc-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                                {project.techStack.infrastructure && project.techStack.infrastructure.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-lg font-semibold text-zinc-200 mb-2">インフラ</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.infrastructure.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full text-sm text-zinc-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                                {project.techStack.auth && project.techStack.auth.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-lg font-semibold text-zinc-200 mb-2">認証</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.auth.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full text-sm text-zinc-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                                {project.techStack.tools && project.techStack.tools.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-lg font-semibold text-zinc-200 mb-2">開発ツール</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.tools.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full text-sm text-zinc-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* 工夫した点・こだわりセクション */}
                    <Card className="bg-[#202428]/90 border-zinc-700">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-white">工夫した点・こだわり</h2>
                            <div className="space-y-6">
                                {/* UI/UXで意識したこと */}
                                {project.improvements.uiux && project.improvements.uiux.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-lg font-semibold text-zinc-200 mb-2">UI/UXの工夫</h3>
                                        <ul className="space-y-2">
                                            {project.improvements.uiux.map((improvement, index) => (
                                                <li key={index} className="text-zinc-400">
                                                    • {improvement}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                                {/* 設計の工夫 */}
                                {project.improvements.design && project.improvements.design.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-lg font-semibold text-zinc-200 mb-2">設計の工夫</h3>
                                        <ul className="space-y-2">
                                            {project.improvements.design.map((improvement, index) => (
                                                <li key={index} className="text-zinc-400">
                                                    • {improvement}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                                {/* ユーザビリティやパフォーマンス面 */}
                                {project.improvements.performance && project.improvements.performance.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-lg font-semibold text-zinc-200 mb-2">パフォーマンス</h3>
                                        <ul className="space-y-2">
                                            {project.improvements.performance.map((improvement, index) => (
                                                <li key={index} className="text-zinc-400">
                                                    • {improvement}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* 苦労した点と解決方法セクション */}
                    <Card className="bg-[#202428]/90 border-zinc-700">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-white">苦労した点と解決方法</h2>
                            <div className="space-y-8">
                                {project.challenges.map((challenge, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-6 bg-zinc-800/30 rounded-lg border border-zinc-700"
                                    >
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2 text-red-400">苦労した点</h3>
                                                <p className="text-zinc-400">{challenge.problem}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2 text-green-400">解決方法</h3>
                                                <p className="text-zinc-400">{challenge.solution}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2 text-blue-400">学び</h3>
                                                <p className="text-zinc-400">{challenge.learning}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* GitHub・デモリンクセクション */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex justify-center gap-4">
                            {project.links.github && (
                                <Button
                                    onClick={() => window.open(project.links.github, '_blank')}
                                    className="bg-zinc-800 hover:bg-zinc-700"
                                >
                                    <Github className="mr-2 h-4 w-4" />
                                    GitHub
                                </Button>
                            )}
                            {project.links.demo && (
                                <Button
                                    onClick={() => window.open(project.links.demo, '_blank')}
                                    className="bg-orange-500 hover:bg-orange-600"
                                >
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    デモを見る
                                </Button>
                            )}
                        </div>
                        {/* リンクがない場合のメッセージ */}
                        {!project.links.github && !project.links.demo && (
                            <p className="text-zinc-400 text-center italic">
                                準備中です
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailSection;