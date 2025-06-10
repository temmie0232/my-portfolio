'use client'

import ProjectDetailSection from '@/components/ui/ProjectDetailSection';

const ShiftManagerPage = () => {
    const projectDetails = {
        title: "バイト先のシフト管理アプリ",
        overview: {
            background: "従来のシフト管理は、A4の紙一枚に15人分の1ヶ月のシフトを手書きで記入し、店長がそれを見ながらシフトを作成、印刷してから写真を撮ってLINEグループに送信するという非効率なフローでした。このプロセスには、わざわざ店舗に来てシフトを書く必要性、人それぞれの字で記された小さくごちゃごちゃした見づらい表、写真撮影時の上下反転や見づらさといった多くの問題がありました。",
            purpose: "従来のアナログなシフト管理プロセスを完全にデジタル化し、LINE API連携による自動化を実現することで、店長と従業員双方の作業効率を大幅に向上させることを目指しました。また、手書きによる視認性の問題や、店舗への移動時間、写真撮影時のトラブルといった課題を根本的に解決することも重要な目的でした。",
        },
        media: [
            {
                type: 'image' as const,
                url: '/images/shift-manager/1.png',
            },
            {
                type: 'image' as const,
                url: '/images/shift-manager/2.png',
            },
            {
                type: 'image' as const,
                url: '/images/shift-manager/3.png',
            },
            {
                type: 'image' as const,
                url: '/images/shift-manager/4.png',
            },
            {
                type: 'image' as const,
                url: '/images/shift-manager/5.png',
            },
            {
                type: 'image' as const,
                url: '/images/shift-manager/6.png',
            },
            {
                type: 'image' as const,
                url: '/images/shift-manager/7.png',
            },
        ],
        features: [
            {
                title: "LINE連携による自動化システム",
                items: [
                    "月の真ん中に指定時期にシフト提出用URLを自動送信",
                    "LINE Messaging APIを活用したリアルタイム通知",
                    "完成したシフト表（PDF）の自動配信機能",
                    "PDFからPNGへの自動変換処理"
                ]
            },
            {
                title: "従業員向け機能",
                items: [
                    "スマートフォンから簡単にアクセス可能なシフト入力フォーム",
                    "直感的なカレンダーインターフェース",
                    "希望労働時間・日数の設定機能",
                    "リアルタイムでの入力状況保存"
                ]
            },
            {
                title: "管理者向け機能",
                items: [
                    "PCから整ったフォーマットで出勤希望を確認",
                    "従業員ごとのシフト希望一覧表示",
                    "ドラッグ&ドロップによるシフト表アップロード",
                    "シフト作成支援ツール"
                ]
            },
            {
                title: "システム改善効果",
                items: [
                    "手書きによる視認性問題の完全解決",
                    "店舗への移動時間の削減（80%の作業時間短縮）",
                    "写真撮影時のトラブル（上下反転等）の解消",
                    "リアルタイムでの情報共有と確認"
                ]
            }
        ],
        techStack: [
            {
                category: "フロントエンド",
                items: [
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS"
                ]
            },
            {
                category: "バックエンド",
                items: [
                    "Django",
                    "Django REST Framework",
                    "Python"
                ]
            },
            {
                category: "データベース・インフラ",
                items: [
                    "MySQL",
                    "Vercel",
                    "LINE Messaging API"
                ]
            },
            {
                category: "ファイル処理",
                items: [
                    "PDF処理ライブラリ",
                    "画像変換（PDF→PNG）",
                    "ファイルアップロード機能"
                ]
            }
        ],
        architecture: {
            structure: `frontend/
├── src/
│   ├── app/
│   │   ├── shift/
│   │   │   ├── submit/[id]/    # シフト提出フォーム
│   │   │   ├── view/[id]/      # シフト確認画面
│   │   │   └── create/         # シフト作成画面
│   │   └── admin/              # 管理者画面
│   ├── components/
│   │   ├── ui/                 # UIコンポーネント
│   │   └── shift/              # シフト関連コンポーネント
│   └── lib/                    # ユーティリティ

backend/
├── shifts/                     # シフトデータ管理
├── notifications/              # LINE API連携
└── accounts/                   # ユーザー管理`,
            dataFlow: [
                "月の真ん中に自動でLINE APIを通じてシフト提出URLを送信",
                "従業員がスマートフォンからシフト入力フォームにアクセス",
                "入力されたシフトデータをMySQLデータベースに保存",
                "管理者がPC画面で整理されたフォーマットでシフト確認",
                "完成したシフト表（PDF）をアップロード機能でドラッグ&ドロップ",
                "PDFを自動でPNGに変換してLINEグループに配信"
            ]
        },
        futureScope: [
            "AIによる自動シフト作成機能",
            "シフト調整依頼・交換機能",
        ],
        links: {
            demo: "実際の運用中のため非公開"
        },
        note: "ソースコードは公開していません。"
    };

    return <ProjectDetailSection project={projectDetails} />;
};

export default ShiftManagerPage;