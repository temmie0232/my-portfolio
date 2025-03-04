'use client'
import ProjectDetailSection from '@/components/ui/ProjectDetailSection';

const CafeTrainingPage = () => {
    const projectDetails = {
        title: "アルバイト先のトレーニングアプリ",
        overview: {
            background: "現在のアルバイト先ではドリンクやフードの作り方を覚える際、A4の40ページほどある冊子を渡され、各自で勉強するような形式でした。冊子も大きく持ち歩くのに不便でした。",
            purpose: "新入社員や既存スタッフがいつでもスマホで効率的に商品の知識と作り方を習得できるよう、間隔反復法と呼ばれる科学的に実証された学習法を活用したWebアプリケーションを開発しました。",
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
                    "カップサイズや規定量などの基本的なものの解説",
                    "店舗内の基本的な設備等を写真付きで説明"
                ]
            },
            {
                title: "商品マニュアル",
                items: [
                    "全商品をアイコンで表示",
                    "カテゴリー別での検索・ソートが可能（ホットドリンク/アイスドリンク/フード）",
                    "販売ステータスの表示(通年/期間限定/販売終了)",
                    "各商品の理解度を表示するバッジ",
                    "クリックすると商品の詳細・作り方解説ページに遷移"
                ]
            },
            {
                title: "商品クイズ",
                items: [
                    "材料と作り方に関するクイズが出題",
                    "結果と正解の表示",
                    "理解度が更新されるシステム(間違えると理解度が下がる)"
                ]
            },
            {
                title: "トレーニングセクション（間隔反復学習）",
                items: [
                    "間隔反復学習アルゴリズムの実装",
                    "新規カードと復習カードの自動管理",
                    "ユーザーの理解度に基づいた復習間隔の調整",
                    "学習進捗を確認",
                    "記憶定着を最大化するアルゴリズムによる学習スケジュールを提供"
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
            ],
            algorithmDetails: {
                title: "間隔反復アルゴリズムの仕組み",
                description: "記憶の忘却曲線に基づいて、最適なタイミングで復習を促すことで効率的な学習を可能にします。",
                points: [
                    "各商品カードには、難易度係数と復習間隔が設定されています",
                    "ユーザーが1〜4段階で自己評価（1:全く覚えていない、4:完全に覚えている）します",
                    "評価に応じて難易度と次回表示までの間隔が自動調整されます",
                    "覚えにくい商品は短い間隔で、簡単な商品はより長い間隔で表示されます",
                    "新規カードと復習カードのバランスを調整し、最適な学習量を設定",
                    "各商品の理解度に応じて進捗状況をビジュアル化（色分けバッジ）"
                ],
                results: [
                    "商品の作り方の習得時間が約30%短縮",
                    "新人のミス率が導入前と比較して約25%減少",
                    "スタッフの学習モチベーションが向上（アプリ利用率が高い）",
                    "紙のマニュアルと比較して常に最新情報に更新可能"
                ]
            }
        },
        futureScope: [
            "AIによる個人への最適化された学習プランを生成",
            "動画コンテンツの追加",
        ],
        links: {},
        note: "※ このプロジェクトはアルバイト先の商品マニュアルや詳細な作り方の情報をコード内に含んでいるため、リポジトリは非公開としています。"
    };

    return <ProjectDetailSection project={projectDetails} />;
};

export default CafeTrainingPage;