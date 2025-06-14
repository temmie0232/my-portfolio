// 新しいProjectDetailSection.tsx
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

    // ② 開発背景・目的
    development: {
        background: string; // 課題やニーズをどう捉えたか
        target: string;     // どんなユーザー・用途を想定しているか
    };

    // な機能
    features: string[]; // 実装した代表的な機能（箇条書き）

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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* ヘッダー部分 */}
            <div className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <Button
                        variant="ghost"
                        onClick={() => router.back()}
                        className="text-white hover:bg-slate-800"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        戻る
                    </Button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* タイトル・概要セクション */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700">
                        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                        <p className="text-xl text-slate-300 mb-6">{project.shortDescription}</p>

                        {/* アプリの画面キャプチャ */}
                        {project.screenshots && project.screenshots.length > 0 && (
                            <div className="mt-8">
                                <Carousel className="w-full max-w-4xl mx-auto">
                                    <CarouselContent>
                                        {project.screenshots.map((media, index) => (
                                            <CarouselItem key={index}>
                                                <Card className="bg-slate-700/50 border-slate-600">
                                                    <CardContent className="flex aspect-video items-center justify-center p-2">
                                                        {media.type === 'image' ? (
                                                            <Image
                                                                src={media.url}
                                                                alt={media.alt || `スクリーンショット ${index + 1}`}
                                                                width={800}
                                                                height={450}
                                                                className="rounded-lg object-cover"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full bg-slate-600 rounded-lg flex items-center justify-center">
                                                                <span className="text-slate-400">動画プレビュー</span>
                                                            </div>
                                                        )}
                                                    </CardContent>
                                                </Card>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    {project.screenshots.length > 1 && (
                                        <>
                                            <CarouselPrevious />
                                            <CarouselNext />
                                        </>
                                    )}
                                </Carousel>
                            </div>
                        )}
                    </div>
                </motion.section>

                {/* 開発背景・目的セクション */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-12"
                >
                    <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700">
                        <h2 className="text-2xl font-bold mb-6 text-orange-400">開発背景・目的</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-slate-200">課題・ニーズ</h3>
                                <p className="text-slate-300 leading-relaxed">{project.development.background}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-slate-200">想定ユーザー・用途</h3>
                                <p className="text-slate-300 leading-relaxed">{project.development.target}</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 主な機能セクション */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700">
                        <h2 className="text-2xl font-bold mb-6 text-orange-400">主な機能</h2>
                        <div className="grid gap-4">
                            {project.features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-slate-300">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* 使用技術・開発環境セクション */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-12"
                >
                    <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700">
                        <h2 className="text-2xl font-bold mb-6 text-orange-400">使用技術・開発環境</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {project.techStack.frontend && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-slate-200">フロントエンド</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.frontend.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {project.techStack.backend && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-slate-200">バックエンド</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.backend.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-600/30">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {project.techStack.database && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-slate-200">データベース</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.database.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-600/30">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {project.techStack.infrastructure && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-slate-200">インフラ</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.infrastructure.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-red-600/20 text-red-300 rounded-full text-sm border border-red-600/30">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {project.techStack.auth && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-slate-200">認証</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.auth.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-yellow-600/20 text-yellow-300 rounded-full text-sm border border-yellow-600/30">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {project.techStack.tools && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-slate-200">開発ツール</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.tools.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-gray-600/20 text-gray-300 rounded-full text-sm border border-gray-600/30">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.section>

                {/* 工夫した点・こだわりセクション */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-12"
                >
                    <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700">
                        <h2 className="text-2xl font-bold mb-6 text-orange-400">工夫した点・こだわり</h2>
                        <div className="space-y-6">
                            {project.improvements.uiux && project.improvements.uiux.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-slate-200">UI/UXの工夫</h3>
                                    <div className="space-y-2">
                                        {project.improvements.uiux.map((improvement, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-slate-300">{improvement}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {project.improvements.design && project.improvements.design.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-slate-200">設計の工夫</h3>
                                    <div className="space-y-2">
                                        {project.improvements.design.map((improvement, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-slate-300">{improvement}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {project.improvements.performance && project.improvements.performance.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-slate-200">パフォーマンス・ユーザビリティ</h3>
                                    <div className="space-y-2">
                                        {project.improvements.performance.map((improvement, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-slate-300">{improvement}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.section>

                {/* 苦労した点と解決方法セクション */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-12"
                >
                    <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700">
                        <h2 className="text-2xl font-bold mb-6 text-orange-400">苦労した点と解決方法</h2>
                        <div className="space-y-8">
                            {project.challenges.map((challenge, index) => (
                                <div key={index} className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2 text-red-400">問題</h3>
                                            <p className="text-slate-300">{challenge.problem}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2 text-green-400">解決方法</h3>
                                            <p className="text-slate-300">{challenge.solution}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2 text-blue-400">学び</h3>
                                            <p className="text-slate-300">{challenge.learning}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* GitHub・デモリンクセクション */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-12"
                >
                    <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700">
                        <h2 className="text-2xl font-bold mb-6 text-orange-400">リンク</h2>
                        <div className="flex flex-wrap gap-4">
                            {project.links.github && (
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
                                    onClick={() => window.open(project.links.github, '_blank')}
                                >
                                    <Github className="w-5 h-5 mr-2" />
                                    GitHub
                                </Button>
                            )}
                            {project.links.demo && (
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
                                    onClick={() => window.open(project.links.demo, '_blank')}
                                >
                                    <ExternalLink className="w-5 h-5 mr-2" />
                                    デモを見る
                                </Button>
                            )}
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default ProjectDetailSection;