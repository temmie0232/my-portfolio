'use client'

import ProjectDetailSection from '@/components/ui/ProjectDetailSection';

const ShiftManagementSystemPage = () => {
    const projectDetails = {
        // タイトル・概要
        title: "シフト管理システム（LINE API連携）",
        shortDescription: "アルバイト先の非効率なシフト管理フローを完全自動化し、LINE APIと連携したシームレスなシフト管理ソリューション",
        screenshots: [
            {
                type: 'image' as const,
                url: '/images/shift-management/1.png',
                alt: 'システム全体概要画面'
            },
            {
                type: 'image' as const,
                url: '/images/shift-management/2.png',
                alt: 'スマートフォン - シフト入力画面'
            },
            {
                type: 'image' as const,
                url: '/images/shift-management/3.png',
                alt: 'PC管理画面 - シフト一覧表示'
            },
            {
                type: 'image' as const,
                url: '/images/shift-management/4.png',
                alt: 'LINE自動通知機能'
            },
            {
                type: 'image' as const,
                url: '/images/shift-management/5.png',
                alt: 'PDF→PNG自動変換機能'
            },
            {
                type: 'image' as const,
                url: '/images/shift-management/6.png',
                alt: 'シフト表自動配信システム'
            }
        ],

        // 開発背景・目的
        development: {
            background: "従来のシフト管理では、15人分の1ヶ月シフトをA4用紙に手書きしそれをもとにシフトを作成し、完成したら写真撮影してLINEで共有するという作業の流れであった。シフトを書くスペースが少ないこと、人によって書き方が違い非常に見づらかったこと、わざわざ店舗に書きにいかないといけないなどの問題点があった。",
            target: "シフトの希望提出をスマホからいつでもどこでも送ることができ、店長はPCから整ったフォーマットでシフトの出勤希望を確認することができる。シフトを作成し終わったらPDFをドラッグ&ドロップすることで自動的にラインのグループに送信されるようにした。"
        },

        // 主な機能
        features: [
            "LINE APIを活用し、指定した時期に自動でシフトの希望提出URLをLINEグループへ送信",
            "スマートフォンの画面比に対応したシフトの入力システム",
            "PC管理画面での整ったフォーマットでのシフト確認・編集",
            "15人分の月次シフトの一覧表示機能",
            "完成したシフト表をドラッグアンドドロップでLINEに送信",
            "PDF→PNG自動変換機能(LINE公式アカウントがPDFの送信をサポートしていないため)",
            "シフト提出状況のリアルタイム確認",
        ],

        // 使用技術・開発環境
        techStack: {
            frontend: [
                "Next.js 14",
                "TypeScript",
                "Tailwind CSS",
                "date-fns",               // 日付処理
                "Lucide React",           // アイコン
            ],
            backend: [
                "Django 5.0",
                "Django REST Framework",  // API
                "Python",
                "django-cors-headers",    // CORS対応
            ],
            database: [
                "SQLite",                 // 開発環境
                "PostgreSQL",             // 本番環境
            ],
            api: [
                "LINE Messaging API",     // 自動通知・配信
                "LINE Bot SDK for Python", // Bot機能
                "PyMuPDF (fitz)",         // PDF処理
                "Pillow",                 // 画像変換
            ],
            infrastructure: [
                "Vercel",                 // フロントエンドデプロイ
                "自宅サーバー",           // バックエンドデプロイ
                "GitHub",
                "LINE Developers",        // API管理
            ],
            tools: [
                "VS Code",
                "Git",
                "npm",                    // パッケージ管理
                "Django Admin",           // 管理画面
                "Postman",                // API テスト
            ]
        },


        // 工夫した点・こだわり
        improvements: {
            uiux: [
                "編集中"
            ],
            design: [
                "編集中"
            ],
            performance: [
                "編集中"
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
            github: "https://github.com/temmie0232/ShiftManager",
        }
    };

    return <ProjectDetailSection project={projectDetails} />;
};

export default ShiftManagementSystemPage;