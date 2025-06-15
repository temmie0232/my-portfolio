'use client'

import ProjectDetailSection from '@/components/ui/ProjectDetailSection';

const AmazonReviewAnalyzerPage = () => {
    const projectDetails = {
        // タイトル・概要
        title: "Amazon レビュー分析システム",
        shortDescription: "AIを活用してAmazonレビューから感情分析を行い、具体的な改善提案とROIを算出するツール",
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

        // 開発背景・目的
        development: {
            background: "大規模言語モデルを使用したアプリケーションを実際に開発してみたいと考えていました。当初は文章から感情を読み取るだけのシンプルなツールを想定していましたが、開発を進める中でビジネス領域への応用可能性を検討し、Amazonの商品レビューを分析するツールとして発展させることにしました。",
            target: "Kaggle上で公開されているAmazon商品レビュー56万件を用いてBERTベースの感情分析モデルを構築し、文章の感情判定に加え具体的な商品改善提案とROI予測まで自動生成するシステムの開発を目指しました。また、非エンジニアでも活用できるよう、CSVアップロード機能を備えたWebアプリケーションとして実装し、実際のビジネス現場での運用を想定したツールの構築を行いました。"
        },

        // 主な機能
        features: [
            "Kaggle APIを使用した568,454件の実Amazonレビューデータの自動取得",
            "前処理・クリーニングパイプライン",
            "自然言語処理による感情分析（ポジティブ・ネガティブ・中立の判定）",
            "改善提案の自動生成とカテゴリ別分類",
            "ROIの算出",
            "データ可視化ダッシュボード",
            "レポート生成とエクスポート機能",
        ],

        // 使用技術・開発環境
        techStack: {
            frontend: [
                "Streamlit",           // Webダッシュボード
                "Plotly",              // インタラクティブ可視化
                "HTML/CSS",
            ],
            backend: [
                "Python",
                "HuggingFace Transformers", // BERT感情分析
                "PyTorch",
                "scikit-learn",
                "pandas",
                "NumPy",
            ],
            database: [
                "CSV Files",
                "Kaggle API",          // 外部のデータ
            ],
            infrastructure: [
                "Streamlit Cloud",
                "GitHub",
                "Kaggle Platform",     // データ取得
            ],
            tools: [
                "Jupyter Notebook",
                "Git",
                "VS Code",
                "Matplotlib/Seaborn",  // 統計可視化
                "tqdm",                // プログレスバー
            ]
        },

        // 工夫した点・こだわり
        improvements: {
            uiux: [
                "webによるUI設計で誰でも操作可能",
                "分析のフローを段階的に",
                "結果のダウンロードが可能(CSV)",
            ],
            design: [
                "編集中",
            ],
            performance: [
                "チャンク処理を行うことでメモリの最適化",
            ]
        },

        // 苦労した点と解決方法
        challenges: [
            {
                problem: "編集中",
                solution: "編集中",
                learning: "編集中"
            }
        ],

        // GitHub・デモリンク
        links: {
            github: "https://github.com/temmie0232/amazon-review-analyzer",
        }
    };

    return <ProjectDetailSection project={projectDetails} />;
};

export default AmazonReviewAnalyzerPage;