// ProjectDetailSection.tsx
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

interface TechStackItem {
    category: string;
    items: string[];
}

interface ProjectDetail {
    title: string;
    overview: {
        background: string;
        purpose: string;
    };
    media?: {
        type: 'image' | 'youtube';
        url: string;
        alt?: string;
    }[];
    features: {
        title: string;
        items: string[];
    }[];
    techStack: TechStackItem[];
    architecture?: {
        structure?: string;
        dataFlow?: string[];
        algorithmDetails?: {
            title: string;
            description: string;
            points: string[];
            results: string[];
        };
    };
    deployment?: string[];
    futureScope?: string[];
    links?: {
        github?: string;
        demo?: string;
    };
    note?: string;
}

const TechStackSection = ({ items }: { items: TechStackItem[] }) => (
    <div className="space-y-6">
        {items.map((category, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
                <h3 className="text-lg font-semibold text-zinc-200 mb-2">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                        <span
                            key={itemIndex}
                            className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full text-sm text-zinc-300"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </motion.div>
        ))}
    </div>
);

const FeatureSection = ({ features }: { features: ProjectDetail['features'] }) => (
    <div className="space-y-6">
        {features.map((feature, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
                <h3 className="text-lg font-semibold text-zinc-200 mb-2">{feature.title}</h3>
                <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-zinc-400">
                            • {item}
                        </li>
                    ))}
                </ul>
            </motion.div>
        ))}
    </div>
);

const ProjectDetailSection: React.FC<{ project: ProjectDetail }> = ({ project }) => {
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
                    Back
                </Button>
            </motion.div>

            <div className="max-w-4xl mx-auto pt-20">
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
                    {/* Overview Section */}
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
                                        <h3 className="text-lg font-semibold text-zinc-200 mb-2">背景</h3>
                                        <p className="text-zinc-400">{project.overview.background}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-zinc-200 mb-2">目的</h3>
                                        <p className="text-zinc-400">{project.overview.purpose}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </CardContent>
                    </Card>

                    {/* Media Section */}
                    {project.media && project.media.length > 0 && (
                        <Card className="bg-[#202428]/90 border-zinc-700">
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-semibold mb-4 text-white">プレビュー</h2>
                                <Carousel className="w-full">
                                    <CarouselContent>
                                        {project.media.map((item, index) => (
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
                            </CardContent>
                        </Card>
                    )}

                    {/* Features Section */}
                    <Card className="bg-[#202428]/90 border-zinc-700">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-white">主な機能</h2>
                            <FeatureSection features={project.features} />
                        </CardContent>
                    </Card>

                    {/* Tech Stack Section */}
                    <Card className="bg-[#202428]/90 border-zinc-700">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-white">使用技術</h2>
                            <TechStackSection items={project.techStack} />
                        </CardContent>
                    </Card>

                    {/* Architecture Section */}
                    {project.architecture && (
                        <Card className="bg-[#202428]/90 border-zinc-700">
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-semibold mb-4 text-white">アーキテクチャ</h2>
                                {project.architecture.structure && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-zinc-200 mb-2">ディレクトリ構造</h3>
                                        <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto">
                                            <code className="text-sm text-zinc-300">{project.architecture.structure}</code>
                                        </pre>
                                    </div>
                                )}
                                {project.architecture.dataFlow && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-zinc-200 mb-2">データフロー</h3>
                                        <ul className="space-y-2">
                                            {project.architecture.dataFlow.map((step, index) => (
                                                <li key={index} className="text-zinc-400">
                                                    {index + 1}. {step}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                                {/* Algorithm Details Section */}
                                {project.architecture.algorithmDetails && (
                                    <div className="mt-8 p-6 bg-zinc-800/30 rounded-lg border border-zinc-700">
                                        <h3 className="text-xl font-semibold text-zinc-100 mb-4">
                                            {project.architecture.algorithmDetails.title}
                                        </h3>
                                        <p className="text-zinc-400 mb-4">
                                            {project.architecture.algorithmDetails.description}
                                        </p>
                                        
                                        <div className="mt-4">
                                            <h4 className="text-lg font-medium text-zinc-200 mb-2">仕組み</h4>
                                            <ul className="space-y-2 mb-6">
                                                {project.architecture.algorithmDetails.points.map((point, idx) => (
                                                    <li key={idx} className="text-zinc-400">
                                                        • {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="mt-4">
                                            <h4 className="text-lg font-medium text-zinc-200 mb-2">導入効果</h4>
                                            <ul className="space-y-2">
                                                {project.architecture.algorithmDetails.results.map((result, idx) => (
                                                    <li key={idx} className="text-zinc-400">
                                                        • {result}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    )}

                    {/* Future Scope Section */}
                    {project.futureScope && (
                        <Card className="bg-[#202428]/90 border-zinc-700">
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-semibold mb-4 text-white">今後の展望</h2>
                                <ul className="space-y-2">
                                    {project.futureScope.map((item, index) => (
                                        <li key={index} className="text-zinc-400">
                                            • {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    )}

                    {/* Links Section */}
                    <div className="flex flex-col items-center gap-4">
                        {project.links && Object.keys(project.links).length > 0 && (
                            <div className="flex justify-center gap-4">
                                {project.links.github && (
                                    <Button
                                        onClick={() => window.open(project.links?.github, '_blank')}
                                        className="bg-zinc-800 hover:bg-zinc-700"
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        ソースコードを見る
                                    </Button>
                                )}
                                {project.links.demo && (
                                    <Button
                                        onClick={() => window.open(project.links?.demo, '_blank')}
                                        className="bg-orange-500 hover:bg-orange-600"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Live Demo
                                    </Button>
                                )}
                            </div>
                        )}
                        
                        {/* Note Section */}
                        {project.note && (
                            <p className="text-zinc-400 mt-4 text-center italic">
                                {project.note}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailSection;