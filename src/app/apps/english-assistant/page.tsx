'use client'

import ProjectDetailSection from '@/components/ui/ProjectDetailSection';

const EnglishLearningAssistantPage = () => {
    const projectDetails = {
        // タイトル・概要
        title: "英文解析ツール",
        shortDescription: "選択したテキストを右クリック一つで詳細な文法解析・和訳・語彙解説を表示",
        screenshots: [

            {
                type: 'image' as const,
                url: '/images/english-assistant/1.png',
            },

        ],

        // 開発背景・目的
        development: {
            background: "英語の学習において、文章を読む際に文法構造や語彙の意味が分からず理解に時間がかかったり、辞書を調べる手間で学習のリズムが途切れる問題があった。また、単語の意味だけでなく文の構造や文法事項まで一括で確認できるツールが少なく、効率的な英語学習が困難であった。",
            target: "Webブラウジング中にワンクリックで英文の詳細解析ができ、チャンク分け・和訳・文法構造・語彙解説までを一画面で確認できるツールを開発。"
        },

        // 主な機能
        features: [
            "右クリック→コンテキストメニューから選択テキストを解析",
            "OpenAI GPT-3.5-turboによる英文構造分析",
            "意味のまとまりに基づいたチャンク分け表示",
            "自然で読みやすい日本語和訳の生成",
            "基本文型（SVO、SVC等）に基づく文の構造分析",
            "主語・動詞・補語・修飾語の詳細な品詞解析",
            "使用されている文法事項の特定と解説",
            "重要語彙・表現の詳細説明とコンテキスト解説",
            "Markdown形式での整理された解析結果表示",
            "Chrome拡張機能としてWebサイトで利用可能"
        ],

        // 使用技術・開発環境
        techStack: {
            frontend: [
                "JavaScript (ES6+)",
                "HTML5",
                "CSS3",
                "marked.js",              // Markdown → HTML変換
                "Chrome Extension API"    // ブラウザ拡張機能
            ],
            backend: [
                "OpenAI API",
                "GPT-3.5-turbo",         // 自然言語処理
                "REST API"               // HTTP通信
            ],
            browserAPIs: [
                "chrome.contextMenus",   // 右クリックメニュー
                "chrome.storage.sync",   // 設定データ保存
                "chrome.scripting",      // スクリプト注入
                "chrome.tabs",           // タブ操作
                "chrome.runtime"         // メッセージング
            ],
            tools: [
                "VS Code",
                "Chrome Developer Tools",
                "Chrome Extensions Developer Mode",
                "Git",
                "OpenAI API Console"
            ]
        },

        // 工夫した点・こだわり
        improvements: {
            uiux: [
            ],
            design: [
            ],
            performance: [
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
            github: "https://github.com/temmie0232/EnglishReadingSupportTools",
        }
    };

    return <ProjectDetailSection project={projectDetails} />;
};

export default EnglishLearningAssistantPage;