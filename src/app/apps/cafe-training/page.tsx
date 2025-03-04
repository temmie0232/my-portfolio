'use client'

import ProjectDetailSection from '@/components/ui/ProjectDetailSection';

const CafeTrainingPage = () => {
    const projectDetails = {
        title: "アルバイト先のトレーニングアプリ",
        overview: {
            background: "カフェチェーンの新人スタッフは、短期間で多数のメニュー項目と作り方を覚える必要があります。従来の紙のマニュアルやオン・ザ・ジョブトレーニングだけでは、効率的な学習が難しく、膨大な商品知識の短期間での習得、紙のマニュアル参照の煩雑さ、苦手な商品に対する集中的な練習の機会不足、個人の学習進捗の追跡困難といった課題がありました。",
            purpose: "新入社員や既存スタッフが効率的に商品知識と作り方を習得できるよう、間隔反復法と呼ばれる科学的に実証された記憶強化技術を活用したモバイルファーストのWebアプリケーションを開発しました。",
        },
        media: [
            {
                type: 'image' as const,
                url: '/images/cafe-training/preview1.png',
                alt: 'トレーニングアプリのホーム画面'
            },
            {
                type: 'image' as const,
                url: '/images/cafe-training/preview2.png',
                alt: '商品マニュアル画面'
            },
            {
                type: 'image' as const,
                url: '/images/cafe-training/preview3.png',
                alt: 'クイズ機能の画面'
            }
        ],
        features: [
            {
                title: "基本情報セクション",
                items: [
                    "初心者向けの基礎知識の提供",
                    "カップサイズやエスプレッソサイズなどの解説",
                    "店舗内の基本的な設備と手順を写真付きで説明"
                ]
            },
            {
                title: "商品マニュアル",
                items: [
                    "全商品のデータベースと詳細な作り方",
                    "カテゴリー別の整理（ホットドリンク/アイスドリンク/フード）",
                    "期間限定商品と販売ステータスの表示",
                    "ステップごとの詳細な作り方手順",
                    "各商品の理解度を表示するバッジ"
                ]
            },
            {
                title: "商品クイズ",
                items: [
                    "材料と作り方に関するインタラクティブな質問",
                    "リアルタイムのフィードバック機能",
                    "結果と正解の表示",
                    "理解度の追跡システム"
                ]
            },
            {
                title: "トレーニングセクション（間隔反復学習）",
                items: [
                    "スペースド・リペティションアルゴリズムの実装",
                    "新規カードと復習カードの自動管理",
                    "ユーザーの理解度に基づいた復習間隔の調整",
                    "カテゴリー別の学習進捗追跡",
                    "記憶定着を最大化するAI駆動のスケジューリング"
                ]
            }
        ],
        techStack: [
            {
                category: "フロントエンド",
                items: [
                    "Next.js 14",
                    "TypeScript",
                    "Tailwind CSS",
                    "shadcn/ui",
                    "React Context API"
                ]
            },
            {
                category: "バックエンド",
                items: [
                    "Firebase Authentication",
                    "Firestore",
                    "Firebase Cloud Functions"
                ]
            },
            {
                category: "その他の技術",
                items: [
                    "PWA (Progressive Web App)",
                    "Responsive Design",
                    "Git/GitHub"
                ]
            }
        ],
        architecture: {
            structure: `src/
├── app/                 # ページとルーティング
├── components/          # 再利用可能なコンポーネント
│   ├── ui/              # UIコンポーネント
│   ├── features/        # 機能別コンポーネント
│   └── layouts/         # レイアウトコンポーネント
├── lib/                 # ユーティリティ関数
│   ├── firebase/        # Firebase関連
│   └── algorithms/      # 間隔反復アルゴリズム
├── hooks/               # カスタムフック
└── types/               # 型定義`,
            dataFlow: [
                "ユーザーがアプリにログイン",
                "Firestoreからユーザー進捗データとカード情報を取得",
                "間隔反復アルゴリズムによる学習カードの選択",
                "ユーザーの回答に基づく難易度係数と次回表示間隔の計算",
                "学習データの保存と進捗状況の更新"
            ]
        },
        futureScope: [
            "マネージャー向け管理ダッシュボードの追加",
            "AIによる個別化された学習プランの生成",
            "動画コンテンツの追加",
            "複数店舗対応機能の実装",
            "機械学習を活用した学習効率の予測と最適化"
        ],
        links: {
            // github: "https://github.com/temmie0232/cafe-training-app",
            // demo: "https://cafe-training.vercel.app" // デモサイトがあれば
        },
    };

    return <ProjectDetailSection project={projectDetails} />;
};

export default CafeTrainingPage;