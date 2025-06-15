'use client'

import ProjectDetailSection from '@/components/ui/ProjectDetailSection';

const DoutorTrainingSystemPage = () => {
    const projectDetails = {
        // タイトル・概要
        title: "トレーニングアプリ",
        shortDescription: "間隔反復学習アルゴリズムを活用した効率的なトレーニングアプリ",
        screenshots: [
            {
                type: 'image' as const,
                url: '/images/trainingapp/1.png',
                alt: 'メインダッシュボード画面'
            },
            {
                type: 'image' as const,
                url: '/images/trainingapp/2.png',
                alt: 'マニュアル画面'
            },
            {
                type: 'image' as const,
                url: '/images/trainingapp/3.png',
                alt: 'トレーニング画面'
            },
            {
                type: 'image' as const,
                url: '/images/trainingapp/4.png',
                alt: '商品詳細画面'
            },
            {
                type: 'image' as const,
                url: '/images/trainingapp/5.png',
                alt: 'クイズ画面'
            },
            {
                type: 'image' as const,
                url: '/images/trainingapp/6.png',
                alt: '学習進捗画面'
            },
            {
                type: 'image' as const,
                url: '/images/trainingapp/6.png',
                alt: '学習進捗画面'
            }
        ],

        // 開発背景・目的
        development: {
            background: "現在のアルバイト先ではドリンクやフードの作り方を覚える際、A4の40ページほどある冊子を渡され、各自で勉強するような形式でした。冊子も大きく持ち歩くのに不便でした。",
            target: "新入社員や既存スタッフがいつでもスマホで効率的に商品の知識と作り方を習得できるよう、間隔反復法と呼ばれる科学的に実証された学習法を活用したWebアプリケーションを開発しました。"
        },

        // 主な機能
        features: [
            "商品マニュアル閲覧機能（検索・ソート・フィルタリング対応）",
            "商品の詳細表示と作り方ガイド",
            "クイズ形式での理解度テスト機能",
            "間隔反復学習アルゴリズムによる復習のスケジューリング",
            "新規カード・復習カードの自動キュー管理",
            "学習進捗の可視化",
            "カテゴリ別で学習（ホットドリンク・アイスドリンク・フード）",
            "理解度の表示と管理"
        ],

        // 使用技術・開発環境
        techStack: {
            frontend: [
                "Next.js 14",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Radix UI",
                "Lucide React（アイコン）"
            ],
            backend: [
                "Firebase Firestore",
                "Firebase Authentication"
            ],
            database: [
                "Firestore（NoSQL）",
                "リアルタイムデータベース"
            ],
            infrastructure: [
                "Vercel（デプロイ）",
                "Firebase",
                "GitHub"
            ],
            tools: [
                "ESLint",
                "VS Code",
                "Git",
                "npm"
            ]
        },

        // 工夫した点・こだわり
        improvements: {
            uiux: [
                "学習を段階的に進められる設計",
                "進捗状況が一目で分かる視フィードバック",
            ],
            design: [
                "編集中",
            ],
            performance: [
                "編集中",
            ]
        },

        // 苦労した点と解決方法
        challenges: [
            {
                problem: "編集中",
                solution: "編集中",
                learning: "編集中"
            },
        ],

        // GitHub・デモリンク
        links: {
            github: "https://github.com/temmie0232/doutor-train",
        }
    };

    return <ProjectDetailSection project={projectDetails} />;
};

export default DoutorTrainingSystemPage;