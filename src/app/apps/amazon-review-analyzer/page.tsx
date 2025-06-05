'use client'

import ProjectDetailSection from '@/components/ui/ProjectDetailSection';

const AmazonReviewAnalyzerPage = () => {
    const projectDetails = {
        title: "Amazon レビュー分析システム",
        overview: {
            background: "従来のレビュー分析は手動で行われることが多く、大量のデータから具体的な改善点を抽出するのに時間がかかっていました。また、単なる感情分析だけでは、実際のビジネス改善に繋がる具体的なアクションプランが見えにくいという課題がありました。",
            purpose: "AIを活用してAmazonの大量レビューデータから感情分析を行い、具体的な改善提案とROI（投資対効果）を算出することで、企業が客観的で戦略的な意思決定を行えるシステムを構築することを目指しました。データサイエンス・機械学習・ビジネス分析のスキル習得も重要な目的の一つです。",
        },
        media: [
            {
                type: 'image' as const,
                url: '/images/amazon-review/preview1.png',
                alt: 'Streamlit Webアプリのホーム画面'
            },
            {
                type: 'image' as const,
                url: '/images/amazon-review/preview2.png',
                alt: '感情分析結果の可視化'
            },
            {
                type: 'image' as const,
                url: '/images/amazon-review/preview3.png',
                alt: 'ROI分析と改善提案画面'
            }
        ],
        features: [
            {
                title: "大規模データ処理機能",
                items: [
                    "Kaggle APIを使用した568,454件の実Amazonレビューデータの自動取得",
                    "効率的な前処理・クリーニングパイプライン",
                    "チャンク処理による大規模データの高速処理（1,000件/分以上）",
                    "メモリ最適化とGPU活用による処理速度向上"
                ]
            },
            {
                title: "AI感情分析エンジン",
                items: [
                    "HuggingFace BERT（cardiffnlp/twitter-roberta-base-sentiment-latest）による高精度分析",
                    "83.7%の感情分析精度を達成（商用レベル）",
                    "TF-IDFによるキーワード抽出と重要度算出",
                    "5カテゴリ（taste/quality/price/shipping/service）の自動問題分類"
                ]
            },
            {
                title: "ビジネス改善提案システム",
                items: [
                    "ネガティブレビューから具体的改善案の自動生成",
                    "改善優先度のスコアリング（影響度・実装コスト・ROI考慮）",
                    "37.2%の最高効率ROIを算出する投資分析機能",
                    "3年間の継続効果を考慮した現実的ROI算出"
                ]
            },
            {
                title: "インタラクティブWebアプリ",
                items: [
                    "Streamlitによる直感的なUI/UX設計",
                    "Plotlyを使用したインタラクティブな可視化",
                    "CSV・Excel対応のリアルタイムデータアップロード機能",
                    "詳細レポートのCSV・Markdown・PDF出力機能"
                ]
            }
        ],
        techStack: [
            {
                category: "データ処理・分析",
                items: [
                    "Python",
                    "pandas",
                    "numpy",
                    "scikit-learn",
                    "Kaggle API"
                ]
            },
            {
                category: "AI・機械学習",
                items: [
                    "HuggingFace Transformers",
                    "BERT (cardiffnlp/twitter-roberta-base-sentiment-latest)",
                    "TF-IDF",
                    "Natural Language Processing"
                ]
            },
            {
                category: "Webアプリ・可視化",
                items: [
                    "Streamlit",
                    "Plotly",
                    "Matplotlib",
                    "Seaborn"
                ]
            },
            {
                category: "開発環境・デプロイ",
                items: [
                    "Streamlit Cloud",
                    "Git",
                    "GitHub",
                    "Jupyter Notebook"
                ]
            }
        ],
        architecture: {
            structure: `amazon-review-analyzer/
├── app.py                    # メインWebアプリ
├── app_deploy.py            # デプロイ対応版
├── src/
│   ├── data_collector.py    # データ収集・前処理
│   ├── sentiment_analyzer.py # BERT感情分析
│   └── improvement_engine.py # 改善提案・ROI算出
├── results/                 # 分析結果・レポート
├── data/                    # データファイル
└── docs/                    # 技術仕様書`,
            dataFlow: [
                "Kaggle APIから568,454件の実Amazonレビューデータを自動取得",
                "前処理・クリーニングによるデータ品質向上",
                "HuggingFace BERTモデルを使用した感情分析実行",
                "TF-IDFによるキーワード抽出と問題分類",
                "ビジネスロジックによる改善提案生成",
                "ROI算出と優先度スコアリング",
                "StreamlitによるWebアプリでの結果表示と可視化"
            ],
            algorithmDetails: {
                title: "BERT感情分析とビジネス改善提案アルゴリズム",
                description: "HuggingFace BERTモデルを使用した高精度感情分析と、ビジネス価値を重視した改善提案システムを組み合わせた包括的なソリューションです。",
                points: [
                    "BERT事前訓練済みモデル: cardiffnlp/twitter-roberta-base-sentiment-latestを採用",
                    "感情分析精度: 83.7%の高精度を実現（Positive/Negative/Neutral分類）",
                    "キーワード抽出: TF-IDF + 感情スコア重み付けによる重要語句特定",
                    "問題分類: taste/quality/price/shipping/serviceの5カテゴリ自動分類",
                    "ROI算出: 投資額・改善効果・継続期間を考慮した現実的な投資対効果分析",
                    "優先度スコアリング: 影響度・実装コスト・ROIの総合評価による改善順位決定"
                ],
                results: [
                    "データ処理実績: 568,454件の実Amazonレビューデータを高速処理",
                    "分析精度: 83.7%の感情分析精度とBERT信頼度平均0.844を達成",
                    "ビジネス価値: taste問題41%等、具体的改善点の客観的特定",
                    "投資効率: 総投資$220,000に対し37.2%の最高効率ROIを実証",
                    "実用性: 非エンジニアでも操作可能な直感的Webアプリを提供",
                    "拡張性: デプロイ対応・API化・多言語対応等の将来拡張に対応"
                ]
            }
        },
        deployment: [
            "Streamlit Cloud（無料ホスティング）",
            "GitHub連携による自動デプロイ",
            "環境変数による設定管理",
            "レスポンシブデザイン対応"
        ],
        futureScope: [
            "多言語対応（日本語・中国語等のBERT追加）",
            "リアルタイム分析（WebスクレイピングによるLive分析）",
            "予測機能（改善実施後の効果予測モデル）",
            "API化（REST API提供・他システム連携）",
            "A/Bテスト機能（改善効果の定量的検証）"
        ],
        links: {
            github: "https://github.com/temmie0232/amazon-review-analyzer",
            demo: "https://amazon-review-analyzer.streamlit.app"
        }
    };

    return <ProjectDetailSection project={projectDetails} />;
};

export default AmazonReviewAnalyzerPage;