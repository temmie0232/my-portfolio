'use client'

import ProjectDetailSection from '@/components/ui/ProjectDetailSection';

const AmazonReviewAnalyzerPage = () => {
    const projectDetails = {
        // ① タイトル・概要
        title: "Amazon レビュー分析システム",
        shortDescription: "AIを活用してAmazonレビューから感情分析を行い、具体的な改善提案とROIを算出するビジネスインテリジェンスツール",
        screenshots: [
            {
                type: 'image' as const,
                url: '/images/amazon-review-analyzer/1.png',
                alt: 'メインダッシュボード画面'
            },
            {
                type: 'image' as const,
                url: '/images/amazon-review-analyzer/2.png',
                alt: '感情分析結果画面'
            },
            {
                type: 'image' as const,
                url: '/images/amazon-review-analyzer/3.png',
                alt: 'ROI算出画面'
            },
            {
                type: 'image' as const,
                url: '/images/amazon-review-analyzer/4.png',
                alt: '改善提案レポート画面'
            },
            {
                type: 'image' as const,
                url: '/images/amazon-review-analyzer/5.png',
                alt: 'データ可視化画面'
            },
            {
                type: 'image' as const,
                url: '/images/amazon-review-analyzer/6.png',
                alt: 'レビュー詳細分析画面'
            }
        ],

        // ② 開発背景・目的
        development: {
            background: "従来のレビュー分析は手動で行われることが多く、大量のデータから具体的な改善点を抽出するのに時間がかかっていました。また、単なる感情分析だけでは、実際のビジネス改善に繋がる具体的なアクションプランが見えにくいという課題がありました。",
            target: "企業のマーケティング担当者や商品開発者、ECサイト運営者を主なターゲットとし、客観的で戦略的な意思決定を支援することを目的としています。また、データサイエンスや機械学習のスキル習得も重要な目的の一つです。"
        },

        // ③ 主な機能
        features: [
            "Kaggle APIを使用した568,454件の実Amazonレビューデータの自動取得",
            "効率的な前処理・クリーニングパイプライン",
            "自然言語処理による感情分析（ポジティブ・ネガティブ・中立の判定）",
            "改善提案の自動生成とカテゴリ別分類",
            "ROI（投資対効果）の算出とビジネスインパクト予測",
            "インタラクティブなデータ可視化ダッシュボード",
            "詳細なレポート生成とエクスポート機能",
            "リアルタイムでの分析結果更新"
        ],

        // ④ 使用技術・開発環境
        techStack: {
            frontend: [
                "Next.js 14",
                "React",
                "TypeScript",
                "Tailwind CSS"
            ],
            backend: [
                "Python",
                "Flask",
                "pandas",
                "scikit-learn",
                "NLTK"
            ],
            database: [
                "PostgreSQL",
                "Redis（キャッシュ）"
            ],
            infrastructure: [
                "Vercel（フロントエンド）",
                "Heroku（バックエンド）",
                "AWS S3（データストレージ）"
            ],
            tools: [
                "Kaggle API",
                "Jupyter Notebook",
                "GitHub",
                "Figma",
                "Postman"
            ]
        },

        // ⑤ 工夫した点・こだわり
        improvements: {
            uiux: [
                "直感的なダッシュボード設計で、技術者でなくても理解しやすいUI",
                "カラーコーディングによる感情分析結果の視覚化",
                "レスポンシブデザインでモバイルデバイスにも対応",
                "ローディング状態やエラーハンドリングの充実"
            ],
            design: [
                "マイクロサービス的なアーキテクチャでフロントエンドとバックエンドを分離",
                "効率的なデータパイプラインの構築で大量データの高速処理を実現",
                "キャッシュ機能の導入によるレスポンス時間の最適化",
                "モジュール化されたコンポーネント設計でメンテナンス性を向上"
            ],
            performance: [
                "バッチ処理とリアルタイム処理の使い分けによる性能最適化",
                "データベースインデックスの最適化で検索処理を高速化",
                "CDNを活用した静的リソースの配信最適化",
                "エラー監視システムの導入で安定稼働を確保"
            ]
        },

        // ⑥ 苦労した点と解決方法
        challenges: [
            {
                problem: "568,454件の大量データ処理でメモリ不足エラーが頻発し、処理が途中で止まってしまう問題が発生しました。",
                solution: "データをチャンク（小さな塊）に分割して段階的に処理するバッチ処理システムを導入し、pandasのchunksize パラメータを活用してメモリ使用量を制御しました。",
                learning: "大規模データ処理では、一度にすべてを処理しようとせず、適切なサイズに分割することの重要性を学びました。また、メモリプロファイリングツールの使い方も習得できました。"
            },
            {
                problem: "自然言語処理の精度が思ったより低く、特に皮肉や複雑な表現を含むレビューの感情分析で誤判定が多発していました。",
                solution: "複数の機械学習モデル（VADER、TextBlob、カスタムモデル）を組み合わせたアンサンブル手法を採用し、重み付け投票により最終的な感情スコアを算出するようにしました。",
                learning: "単一のモデルに依存せず、複数のアプローチを組み合わせることで精度を向上させられることを実践的に学びました。前処理の重要性も再認識できました。"
            },
            {
                problem: "フロントエンドとバックエンドの API 連携で CORS エラーやレスポンス時間の問題が発生し、ユーザーエクスペリエンスが悪化していました。",
                solution: "適切な CORS 設定の実装と、GraphQL の導入によるクエリ最適化、さらにRedisを使ったキャッシュシステムを構築してレスポンス時間を大幅に改善しました。",
                learning: "API設計の重要性とキャッシュ戦略について深く理解できました。また、パフォーマンス測定ツールを使った定量的な改善アプローチも身につきました。"
            }
        ],

        // ⑦ GitHub・デモリンク
        links: {
            github: "https://github.com/your-username/amazon-review-analyzer",
            demo: "https://amazon-review-analyzer.vercel.app"
        }
    };

    return <ProjectDetailSection project={projectDetails} />;
};

export default AmazonReviewAnalyzerPage;