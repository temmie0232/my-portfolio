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
    shortDescription: string; // 紹介文
    screenshots?: {
        type: 'image' | 'youtube';
        url: string;
        alt?: string;
    }[];

    // 開発背景・目的
    development: {
        background: string; // 課題やニーズ
        target: string;     // どんなユーザー・用途を想定しているか
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
        <div className="min-h-screen w-full text-white">
            {/* ヘッダー部分 */}
            <div className="p-8 md:p-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-8"
                >
                    <Button
                        onClick={() => router.back()}
                        variant="ghost"
                        className="text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-600"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        戻る
                    </Button>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* タイトル・概要セクション */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* アプリ名と紹介文 */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                            <p className="text-xl text-zinc-400 leading-relaxed">{project.shortDescription}</p>
                        </div>

                        {/* アプリの画面キャプチャ */}
                        {project.screenshots && project.screenshots.length > 0 && (
                            <div className="mt-8">
                                <Carousel className="w-full max-w-3xl mx-auto">
                                    <CarouselContent>
                                        {project.screenshots.map((media, index) => (
                                            <CarouselItem key={index}>
                                                <Card className="bg-zinc-800 border-zinc-700">
                                                    <CardContent className="flex aspect-video items-center justify-center p-2">
                                                        {media.type === 'image' ? (
                                                            <Image
                                                                src={media.url}
                                                                alt={media.alt || `${project.title} screenshot ${index + 1}`}
                                                                width={800}
                                                                height={450}
                                                                className="rounded-lg object-cover w-full h-full"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full bg-zinc-700 rounded-lg flex items-center justify-center">
                                                                <p className="text-zinc-300">YouTube Video: {media.url}</p>
                                                            </div>
                                                        )}
                                                    </CardContent>
                                                </Card>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700" />
                                    <CarouselNext className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700" />
                                </Carousel>
                            </div>
                        )}
                    </motion.section>

                    {/* 開発背景・目的セクション */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-bold text-orange-500">開発背景・目的</h2>
                        <div className="space-y-6 bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                            {/* 課題やニーズをどう捉えたか */}
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-zinc-300">課題・ニーズ</h3>
                                <p className="text-zinc-400 leading-relaxed">{project.development.background}</p>
                            </div>
                            {/* どんなユーザー・用途を想定しているか */}
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-zinc-300">想定ユーザー・用途</h3>
                                <p className="text-zinc-400 leading-relaxed">{project.development.target}</p>
                            </div>
                        </div>
                    </motion.section>

                    {/* 主な機能セクション */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-bold text-orange-500">主な機能</h2>
                        {/* 実装した代表的な機能 */}
                        <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                            <div className="space-y-3">
                                {project.features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-zinc-400 leading-relaxed">{feature}</p>
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
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-bold text-orange-500">使用技術・開発環境</h2>
                        {/* フロント・バックエンド・インフラを分けて表示 */}
                        <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {project.techStack.frontend && project.techStack.frontend.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3 text-zinc-300">フロントエンド</h3>
                                        <div className="space-y-2">
                                            {project.techStack.frontend.map((tech, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                                    <span className="text-zinc-400">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {project.techStack.backend && project.techStack.backend.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3 text-zinc-300">バックエンド</h3>
                                        <div className="space-y-2">
                                            {project.techStack.backend.map((tech, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                                    <span className="text-zinc-400">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {project.techStack.database && project.techStack.database.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3 text-zinc-300">データベース</h3>
                                        <div className="space-y-2">
                                            {project.techStack.database.map((tech, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                                    <span className="text-zinc-400">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {project.techStack.infrastructure && project.techStack.infrastructure.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3 text-zinc-300">インフラ</h3>
                                        <div className="space-y-2">
                                            {project.techStack.infrastructure.map((tech, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                                    <span className="text-zinc-400">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {project.techStack.auth && project.techStack.auth.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3 text-zinc-300">認証</h3>
                                        <div className="space-y-2">
                                            {project.techStack.auth.map((tech, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                                    <span className="text-zinc-400">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {project.techStack.tools && project.techStack.tools.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3 text-zinc-300">開発ツール</h3>
                                        <div className="space-y-2">
                                            {project.techStack.tools.map((tech, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                                    <span className="text-zinc-400">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.section>

                    {/* 工夫した点・こだわり */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-bold text-orange-500">工夫した点・こだわり</h2>
                        <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 space-y-6">
                            {/* UI/UXで意識したこと */}
                            {project.improvements.uiux && project.improvements.uiux.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-zinc-300">UI/UXの工夫</h3>
                                    <div className="space-y-2">
                                        {project.improvements.uiux.map((improvement, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-zinc-400 leading-relaxed">{improvement}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {/* 設計の工夫 */}
                            {project.improvements.design && project.improvements.design.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-zinc-300">設計の工夫</h3>
                                    <div className="space-y-2">
                                        {project.improvements.design.map((improvement, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-zinc-400 leading-relaxed">{improvement}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {/* ユーザビリティやパフォーマンス面 */}
                            {project.improvements.performance && project.improvements.performance.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-zinc-300">パフォーマンス・ユーザビリティ</h3>
                                    <div className="space-y-2">
                                        {project.improvements.performance.map((improvement, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-zinc-400 leading-relaxed">{improvement}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.section>

                    {/* 苦労した点と解決方法セクション */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-bold text-orange-500">苦労した点と解決方法（学び）</h2>
                        <div className="space-y-6">
                            {project.challenges.map((challenge, index) => (
                                <div key={index} className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                                    {/* 技術的に詰まった点とどう乗り越えたか */}
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2 text-red-400">苦労した点</h3>
                                            <p className="text-zinc-400 leading-relaxed">{challenge.problem}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2 text-green-400">解決方法</h3>
                                            <p className="text-zinc-400 leading-relaxed">{challenge.solution}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2 text-blue-400">学び</h3>
                                            <p className="text-zinc-400 leading-relaxed">{challenge.learning}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* GitHub・デモリンクセクション */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-bold text-orange-500">GitHub・デモリンク</h2>
                        <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                            <div className="flex flex-wrap gap-4">
                                {/* GitHubリンク */}
                                {project.links.github && (
                                    <Button
                                        variant="ghost"
                                        size="lg"
                                        className="text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-600"
                                        onClick={() => window.open(project.links.github, '_blank', 'noopener,noreferrer')}
                                    >
                                        <Github className="w-5 h-5 mr-2" />
                                        GitHub
                                    </Button>
                                )}
                                {/* デモURL */}
                                {project.links.demo && (
                                    <Button
                                        size="lg"
                                        className="bg-orange-500 hover:bg-orange-600 text-white"
                                        onClick={() => window.open(project.links.demo, '_blank', 'noopener,noreferrer')}
                                    >
                                        <ExternalLink className="w-5 h-5 mr-2" />
                                        デモを見る
                                    </Button>
                                )}
                            </div>
                            {/* リンクがない場合のメッセージ */}
                            {!project.links.github && !project.links.demo && (
                                <p className="text-zinc-500 italic">準備中です</p>
                            )}
                        </div>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailSection;