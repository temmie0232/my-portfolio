// app/apps/spotify-share/page.tsx
'use client'

import ProjectDetailSection from '@/components/ui/ProjectDetailSection';

const SpotifySharePage = () => {
    const projectDetails = {
        title: "Spotify Share App",
        overview: {
            background: "車内やパーティーなど、複数人で音楽を共有する際の課題を解決するWebアプリケーション。従来のBluetooth接続では1台のデバイスしか接続できず、曲の選択や操作が制限されるという問題があります。",
            purpose: "複数人での音楽共有をより快適にし、全ての参加者が音楽の選択や操作に参加できる環境を提供することを目指しています。",
        },
        media: [
            {
                type: 'youtube' as const,
                url: 'GSP6QGZpyq4',  // YouTubeの動画ID
            },
        ],
        features: [
            {
                title: "セッション管理",
                items: [
                    "Spotifyアカウントを使用したユーザー認証",
                    "セッション（部屋）の作成",
                    "QRコードまたはURLによるセッションの共有",
                    "参加者の一時的なセッション管理"
                ]
            },
            {
                title: "音楽再生制御",
                items: [
                    "現在再生中の曲の詳細表示（曲名、アーティスト、アルバム情報、アートワーク）",
                    "基本的な再生操作（再生/一時停止、スキップ）",
                    "再生状態のリアルタイム同期"
                ]
            },
            {
                title: "キュー管理",
                items: [
                    "曲の追加・削除機能",
                    "再生順序の変更",
                    "曲の検索機能（キーワード検索）"
                ]
            }
        ],
        techStack: [
            {
                category: "フロントエンド",
                items: [
                    "Next.js 14",
                    "TypeScript",
                    "NextAuth.js",
                    "Zustand",
                    "shadcn/ui",
                    "Tailwind CSS",
                    "Radix UI"
                ]
            },
            {
                category: "バックエンド",
                items: [
                    "MongoDB",
                    "mongoose",
                    "Spotify Web API",
                    "OAuth 2.0"
                ]
            }
        ],
        architecture: {
            structure: `src/
├── app/             # ルーティングとページ構造
├── components/      # 再利用可能なUIコンポーネント
├── lib/            # ユーティリティ関数とライブラリラッパー
├── models/         # データベースモデル
├── types/          # TypeScript型定義
└── hooks/          # カスタムフック`,
            dataFlow: [
                "ユーザーがSpotifyでログイン",
                "セッション作成またはセッションへの参加",
                "WebSocketを介したリアルタイムな状態同期",
                "MongoDBでのセッション情報の永続化"
            ]
        },
        deployment: [
            "Vercel（フロントエンド）",
            "MongoDB Atlas（データベース）",
            "環境変数による設定管理"
        ],
        futureScope: [
            "WebSocketを導入してリアルタイム性を向上",
            "プレイリストの共同編集機能",
        ],
        links: {
            github: "https://github.com/temmie0232/music-controller",
            demo: "https://spotify-share.vercel.app"
        }
    };

    return <ProjectDetailSection project={projectDetails} />;
};

export default SpotifySharePage;