// app/apps/portfolio/page.tsx
'use client'

import ProjectDetailSection from '@/components/ui/ProjectDetailSection';

const PortfolioPage = () => {
    const projectDetails = {
        title: "Portfolio Website",
        overview: {
            background: "",
            purpose: "私の技術スキルとプロジェクト経験を効果的に伝えることを目指しました。また、フロントエンド開発の最新技術を実践的に学習・適用する機会としても活用しています。",
        },
        media: [

        ],
        features: [
            {
                title: "インタラクティブUI",
                items: [
                    "パーティクルを使用した動的な背景アニメーション",
                    "スムーズなページ遷移とスクロールアニメーション",
                    "ホバーエフェクトと視覚的なフィードバック",
                    "レスポンシブなナビゲーションシステム"
                ]
            },
            {
                title: "コンテンツ構成",
                items: [
                    "プロジェクト詳細の体系的な表示",
                    "技術スタックの視覚的な表現",
                    "カルーセルベースのプロジェクトプレビュー",
                    "モーダルベースの画像拡大表示"
                ]
            },
            {
                title: "パフォーマンス最適化",
                items: [
                    "Next.jsのApp Routerによる最適化",
                    "画像の遅延読み込みとキャッシング",
                    "コンポーネントの効率的な再利用",
                    "アニメーションのパフォーマンス考慮"
                ]
            }
        ],
        techStack: [
            {
                category: "フレームワーク・ライブラリ",
                items: [
                    "Next.js 14",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Framer Motion"
                ]
            },
            {
                category: "UIコンポーネント",
                items: [
                    "shadcn/ui",
                    "Radix UI",
                    "Lucide Icons"
                ]
            },
            {
                category: "開発ツール",
                items: [
                    "Visual Studio Code",
                    "Git",
                    "Vercel"
                ]
            }
        ],
        architecture: {
            structure: `src/
├── app/             # ページとルーティング
├── components/      # 再利用可能なコンポーネント
│   ├── ui/         # 基本UIコンポーネント
│   ├── elements/   # 共通要素
│   └── layouts/    # レイアウトコンポーネント
├── lib/            # ユーティリティ関数
└── types/          # 型定義`,
            dataFlow: [
                "コンポーネントベースの構造設計",
                "Framer Motionによるアニメーション管理",
                "状態管理とコンテキスト使用",
                "イベントハンドリングとユーザーインタラクション"
            ]
        },
        futureScope: [
            "テーマカスタマイズ機能",
        ],
        links: {
            github: "https://github.com/temmie0232/my-portfolio",
            demo: "https://portfolio.yourdomain.com"
        }
    };

    return <ProjectDetailSection project={projectDetails} />;
};

export default PortfolioPage;