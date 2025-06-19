'use client'

import ProjectDetailSection from '@/components/ui/ProjectDetailSection';

const ObjectDetectionPage = () => {
    const projectDetails = {
        title: "リアルタイム物体検知アプリ",
        shortDescription: "ブラウザ上でリアルタイム物体検知を行うモバイルアプリ。TensorFlow.jsとCOCO-SSDモデルによる80種類のオブジェクト検知が可能。",
        screenshots: [
            {
                type: 'image' as const,
                url: '/images/object-detection/1.jpg',
                alt: 'アプリのメイン画面'
            },
        ],

        // 開発背景・目的
        development: {
            background: "従来の物体検知アプリは、サーバーサイドでの処理が必要で、ネットワーク環境に依存し、リアルタイム性に欠けるという課題がありました。また、モバイルデバイスでAIを活用したアプリケーションを作成する際の技術的なハードルが高く、学習コストも大きな障壁となっていました。",
            target: "ブラウザ上で直接動作するリアルタイム物体検知システムを構築することで、ネットワークに依存しない高速な推論を実現し、TensorFlow.jsとブラウザベースAIの可能性を探求することを目的としています。また、モバイルファーストな設計により、日常的に使いやすいAIアプリケーションの開発手法を習得することも狙いとしています。"
        },

        // 主な機能
        features: [
            "TensorFlow.jsとCOCO-SSDモデルによる高速な物体検知",
            "80種類のオブジェクト（人物、動物、乗り物、家具、食べ物等）を検知可能",
            "60FPSでのスムーズなリアルタイム処理",
            "信頼度スコア付きの検知結果表示",
            "フロント/リアカメラの簡単切り替え機能",
            "Canvas APIによる高性能なバウンディングボックス描画",
            "緑色の境界線とラベルによる直感的な検知結果表示",
            "モバイル最適化されたレスポンシブデザイン",
            "検知結果付きの画像キャプチャ（PNG形式）",
            "検知データのJSON形式エクスポート",
            "タイムスタンプ付きファイル名の自動生成",
            "ローカル保存によるデータアクセス"
        ],

        // 使用技術・開発環境
        techStack: {
            frontend: [
                "Next.js 15.1.0",
                "React 19.0.0",
                "TypeScript",
                "Tailwind CSS"
            ],
            backend: [
                "TensorFlow.js 4.22.0",
                "COCO-SSD 2.2.3",
                "MobileNet v2アーキテクチャ",
                "事前訓練済みモデル"
            ],
            infrastructure: [
                "Vercel",
                "GitHub"
            ],
            tools: [
                "MediaDevices API",
                "Canvas API",
                "WebRTC",
                "requestAnimationFrame",
                "Lucide React",
                "React Icons"
            ]
        },

        // 工夫した点・こだわり
        improvements: {
            uiux: [
                "モバイルファーストな設計でスマートフォンでの操作性を重視",
                "直感的なバウンディングボックス表示で検知結果を分かりやすく可視化",
                "シンプルなカメラ切り替えUIで使いやすさを追求"
            ],
            design: [
                "COCO-SSDモデルを活用したリアルタイム推論の実装",
                "Canvas APIを使用した効率的な描画処理",
                "メモリ効率を考慮したフレーム処理の最適化"
            ],
            performance: [
                "60FPSでの安定したリアルタイム処理を実現",
                "ブラウザのWebGL加速を活用したパフォーマンス最適化",
                "モバイルデバイスでも快適に動作する軽量な実装"
            ]
        },

        // 苦労した点と解決方法
        challenges: [
            {
                problem: "モバイルデバイスでのパフォーマンス最適化に苦労しました。特に、リアルタイム推論とCanvas描画の両方を60FPSで維持することが困難でした。",
                solution: "フレーム処理のスケジューリングを最適化し、requestAnimationFrameを活用して効率的な描画ループを実装しました。また、TensorFlow.jsの設定を調整してWebGL加速を最大限活用しました。",
                learning: "ブラウザベースAIアプリケーションにおけるパフォーマンス最適化の重要性と、WebAPIを効果的に活用する手法を学びました。"
            },
            {
                problem: "カメラAPIの扱いとブラウザ間の互換性確保に課題がありました。特に、異なるデバイスでのカメラアクセス権限とストリーム取得の実装に時間がかかりました。",
                solution: "MediaDevices APIの適切な使用方法を学び、エラーハンドリングを充実させることで、様々なデバイスとブラウザで安定して動作するよう実装しました。",
                learning: "Web APIの扱い方とクロスブラウザ対応の重要性について理解を深めました。"
            }
        ],

        // GitHub・デモリンク
        links: {
            github: "https://github.com/temmie0232/object-detection-app",
            demo: "https://object-detection.vercel.app"
        }
    };

    return <ProjectDetailSection project={projectDetails} />;
};

export default ObjectDetectionPage;