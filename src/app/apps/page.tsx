"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ProjectCard from '@/components/ui/ProjectCard';
import { CgOpenCollective } from 'react-icons/cg';

export default function ProjectsPage() {
    const router = useRouter();

    const projects = [
        {
            title: "Amazon レビュー分析システム",
            description: "AIを活用してAmazonレビューから感情分析を行い、具体的な改善提案とROIを算出するツール",
            purpose: "Amazon商品レビューからBERTベースの感情分析モデルを使用し感情分析を行い、商品改善提案とROI予測を自動生成するWebアプリを開発。CSVアップロード機能を実装し、非エンジニアでも使えるビジネス向けツールを目指した。",
            tools: ["Python", "BERT", "Streamlit", "Plotly", "HuggingFace", "Kaggle API", "scikit-learn", "pandas"],
            projectUrl: "/apps/amazon-review-analyzer",
            isFeatured: true,
            previewImage: "/images/amazon-review-analyzer/preview3.png"
        },
        {
            title: "バイト先のシフト管理アプリ",
            description: "従来のアナログなシフト管理を完全デジタル化。LINE API連携により自動的なシフト提出URLの送信と、PDF→PNG変換によるシフトの送信機能を実現。",
            purpose: "手書きの見づらさ、店舗へシフトを書きにいかないといけないといった従来のシフト管理の問題を解決し、効率化を図るため。",
            tools: ["Next.js", "Django", "LINE Messaging API", "Vercel", "MySQL"],
            projectUrl: "/apps/shift-manager",
            isFeatured: true,
            previewImage: "/images/home/abc.png"
        },
        {
            title: "バイト先のトレーニングアプリ",
            description: "新人従業員向けのトレーニング支援アプリ。間隔反復学習のアルゴリズムを採用し、最適な学習プランを生成。",
            purpose: "新人トレーニングの効率化と、学習進捗の可視、いつでもどこでもスマホから見返せる",
            tools: ["Vue.js", "Ruby on Rails", "PostgleSQL",],
            projectUrl: "/apps/cafe-training",
            isFeatured: true,
            previewImage: "/images/home/a.png"
        },
        {
            title: "英文解析ツール",
            description: "web上の英文を選択するとOpenAIのAPIを使用し、文法を詳細に解説してくれる Google Chrome の拡張機能",
            purpose: "web上で英語をただ翻訳するツールは便利だが、ただ日本語に翻訳されるだけでは文法の理解がなかなか深まらない。そこで解説してくれるツールを作成した。",
            tools: ["HTML", "CSS", "JavaScript", "Chrome Extensions API", "OpenAI API"],
            projectUrl: "/apps/english-assistant",
            isFeatured: false,
            previewVideo: "Jvy3Ki11_Ss"
        },
        {
            title: "音楽共有プレイヤー",
            description: "ホストのSpotifyアカウントを複数人の端末から操作",
            purpose: "車内など、複数人で音楽を共有する際の課題を解決するWebアプリ。従来のBluetooth接続では1台のデバイスしか接続できず、曲の選択や操作が制限されるという問題を解決。",
            tools: ["Next.js", "MongoDB", "Spotify WEB API"],
            projectUrl: "/apps/spotify-share",
            isFeatured: false,
            previewVideo: "GSP6QGZpyq4"
        },
        {
            title: "リアルタイム物体検知アプリ",
            description: "カメラを使用してリアルタイムで画角内の物体を検知するwebアプリ。モバイル向けのため精度は低め。",
            purpose: "TensorFlow.jsを使って、ブラウザ上で機械学習モデルを動かす実験、モバイルデバイスのカメラAPIと機械学習の統合についての技術検証",
            tools: ["Next.js", "TensorFlow.js", "COCO-SSDモデル"],
            projectUrl: "/apps/object-detection",
            isFeatured: false,
            previewImage: "/images/object-detection/image1.jpg"
        },

        {
            title: "ポートフォリオサイト",
            description: "私についてのポートフォリオサイト",
            purpose: "自分についてのサイトを作成してみたかった。フロントエンドの理解を深める。",
            tools: ["Next.js",],
            projectUrl: "/apps/portfolio",
            isFeatured: false
        },
        {
            title: "読書メモアプリ",
            description: "本や映画の感想、気づきを記録・整理するためのメモアプリケーション。タグ付けと検索機能で効率的な管理が可能。",
            purpose: "本や映画の内容を体系的に整理し、後から振り返りやすくするため。BaaSを使用した開発方法の理解を深めるため。",
            tools: ["React", "Firebase", "Firestore"],
            projectUrl: "/apps/soon"
        },
        {
            title: "掲示板型のSNS",
            description: "本や映画の感想、気づきを記録・整理するためのメモアプリケーション。タグ付けと検索機能で効率的な管理が可能。",
            purpose: "初めてのwebアプリ開発で、開発の流れを知りたかった。",
            tools: ["Flet", "flask", "SQLite"],
            projectUrl: "/apps/soon"
        },
        {
            title: "その他",
            description: "ほぼチュートリアル",
            purpose: "開発手法を学ぶ",
            tools: ["Youtube", "GitHub"],
            projectUrl: "/apps/other"
        }
    ];

    return (
        <div className="min-h-screen w-full p-8 md:p-12">
            <style jsx global>{`
        @keyframes gradient-rotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-rotate {
          animation: gradient-rotate 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed top-8 left-8 z-10"
            >
                <Button
                    onClick={() => router.push('/')}
                    variant="ghost"
                    className="text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-600"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
            </motion.div>

            <div className="max-w-7xl mx-auto pt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-12"
                >
                    <span className="relative inline-block">
                        Projects
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute bottom-[-4px] left-0 h-1 rounded-md bg-orange-400 w-full origin-left"
                        />
                    </span>
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProjectCard
                                {...project}
                                previewImage={project.previewImage}
                                previewVideo={project.previewVideo}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}