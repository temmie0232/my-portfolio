// app/apps/english-assistant/page.tsx
'use client'

import ProjectDetailSection from '@/components/ui/ProjectDetailSection';

const EnglishAssistantPage = () => {
    const projectDetails = {
        title: "English Learning Assistant",
        overview: {
            background: "一般的な機械翻訳サービスは英文を日本語に変換することはできますが、文法構造や特殊な用法についての解説がないため、英語学習者の理解を深めることが難しい状況がありました。また、ウェブで調べ物をする際に遭遇する英文を学習機会として活用できていないという課題がありました。",
            purpose: "ウェブページ上の英文を選択するだけで、単なる和訳だけでなく、文法構造の詳細な解説、語彙の説明、チャンク（意味のまとまり）での区切りなど、英語学習に必要な情報を表示し、学習者の理解を深めることを目指しています。",
        },
        media: [
            {
                type: 'youtube' as const,
                url: 'Jvy3Ki11_Ss'  // YouTubeの動画ID
            },
            {
                type: 'image' as const,
                url: '/images/english-assistant/preview1.png',
                alt: '拡張機能の使用例'
            },
            {
                type: 'image' as const,
                url: '/images/english-assistant/preview2.png',
                alt: '文法解析の詳細画面'
            }
        ],
        features: [
            {
                title: "テキスト解析機能",
                items: [
                    "選択したテキストのチャンク（意味のまとまり）への分割",
                    "文の構造分析（主語、動詞、目的語、補語、修飾語の特定）",
                    "自然な日本語訳の生成",
                    "使用されている文法事項の特定と解説"
                ]
            },
            {
                title: "学習支援機能",
                items: [
                    "文法構造の視覚的な表示",
                    "重要な語彙・表現の詳細な説明",
                    "類似の用法や関連表現の提示",
                    "文法ポイントの解説とサンプル文の提供"
                ]
            },
        ],
        techStack: [
            {
                category: "フロントエンド",
                items: [
                    "JavaScript",
                    "HTML/CSS",
                    "marked.js",
                    "Chrome Extensions API"
                ]
            },
            {
                category: "バックエンド連携",
                items: [
                    "OpenAI API",
                    "GPT-3.5 Turbo"
                ]
            },
            {
                category: "開発ツール",
                items: [
                    "Chrome Developer Tools",
                    "Visual Studio Code",
                    "Git"
                ]
            }
        ],
        architecture: {
            structure: `extension/
├── manifest.json     # 拡張機能の設定ファイル
├── background.js     # バックグラウンドスクリプト
├── content.js        # コンテンツスクリプト
├── popup/
│   ├── popup.html    # 設定画面のHTML
│   └── popup.js      # 設定画面のロジック
└── lib/
    └── marked.min.js # マークダウン変換ライブラリ`,
            dataFlow: [
                "ユーザーがウェブページ上で英文を選択",
                "コンテキストメニューから解析を実行",
                "選択されたテキストをOpenAI APIに送信",
                "受け取った解析結果をマークダウンに変換",
                "ポップアップウィンドウに結果を表示"
            ]
        },
        futureScope: [
            "プロンプトをカスタマイズ可能に",
        ],
        links: {
            github: "https://github.com/temmie0232/EnglishReadingSupportTools",
        }
    };

    return <ProjectDetailSection project={projectDetails} />;
};

export default EnglishAssistantPage;