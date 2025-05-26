'use client'

import ProjectDetailSection from '@/components/ui/ProjectDetailSection';

const ObjectDetectionPage = () => {
    const projectDetails = {
        title: "リアルタイム物体検知アプリ",
        overview: {
            background: "従来の物体検知アプリは、サーバーサイドでの処理が必要で、ネットワーク環境に依存し、リアルタイム性に欠けるという課題がありました。また、モバイルデバイスでAIを活用したアプリケーションを作成する際の技術的なハードルが高く、学習コストも大きな障壁となっていました。",
            purpose: "ブラウザ上で直接動作するリアルタイム物体検知システムを構築することで、ネットワークに依存しない高速な推論を実現し、TensorFlow.jsとブラウザベースAIの可能性を探求することを目的としています。また、モバイルファーストな設計により、日常的に使いやすいAIアプリケーションの開発手法を習得することも狙いとしています。",
        },
        media: [
            {
                type: 'image' as const,
                url: '/images/object-detection/image1.jpg',
                alt: 'アプリのメイン画面'
            },
        ],
        features: [
            {
                title: "リアルタイム物体検知",
                items: [
                    "TensorFlow.jsとCOCO-SSDモデルによる高速な物体検知",
                    "80種類のオブジェクト（人物、動物、乗り物、家具、食べ物等）を検知可能",
                    "60FPSでのスムーズなリアルタイム処理",
                    "信頼度スコア付きの検知結果表示"
                ]
            },
            {
                title: "カメラ制御システム",
                items: [
                    "フロント/リアカメラの簡単切り替え機能",
                ]
            },
            {
                title: "視覚化・UI機能",
                items: [
                    "Canvas APIによる高性能なバウンディングボックス描画",
                    "緑色の境界線とラベルによる直感的な検知結果表示",
                    "モバイル最適化されたレスポンシブデザイン",
                ]
            },
            {
                title: "データ保存・エクスポート",
                items: [
                    "検知結果付きの画像キャプチャ（PNG形式）",
                    "検知データのJSON形式エクスポート",
                    "タイムスタンプ付きファイル名の自動生成",
                    "ローカル保存によるデータアクセス"
                ]
            }
        ],
        techStack: [
            {
                category: "フレームワーク・ライブラリ",
                items: [
                    "Next.js 15.1.0",
                    "React 19.0.0",
                    "TypeScript",
                    "Tailwind CSS"
                ]
            },
            {
                category: "AI・機械学習",
                items: [
                    "TensorFlow.js 4.22.0",
                    "COCO-SSD 2.2.3",
                    "MobileNet v2アーキテクチャ",
                    "事前訓練済みモデル"
                ]
            },
            {
                category: "Web API・ブラウザ技術",
                items: [
                    "MediaDevices API",
                    "Canvas API",
                    "WebRTC",
                    "requestAnimationFrame"
                ]
            },
            {
                category: "UI・アイコン",
                items: [
                    "Lucide React",
                    "React Icons",
                    "レスポンシブデザイン",
                    "PWA対応準備"
                ]
            }
        ],
        architecture: {
            structure: `src/
├── app/
│   └── object-detection/    # 物体検知アプリ
│       ├── page.tsx         # メインページ
│       └── components/      # 専用コンポーネント
├── components/
│   ├── camera/              # カメラ関連コンポーネント
│   │   ├── CameraView.tsx   # カメラ表示
│   │   ├── DetectionBox.tsx # 検知結果描画
│   │   └── Controls.tsx     # 操作コントロール
├── hooks/
│   ├── useCamera.ts         # カメラ制御フック
│   ├── useObjectDetection.ts # 物体検知フック
│   └── useCanvas.ts         # Canvas描画フック
├── lib/
│   ├── tensorflow/          # TensorFlow.js設定
│   │   ├── model.ts         # モデル管理
│   │   └── detection.ts     # 検知処理
└── types/
    └── detection.ts         # 型定義`,
            dataFlow: [
                "ユーザーがカメラアクセスを許可",
                "TensorFlow.jsとCOCO-SSDモデルの読み込み",
                "MediaDevices APIによるカメラストリーム取得",
                "リアルタイムフレーム取得とTensorFlow.jsでの推論実行",
                "検知結果をCanvas APIで視覚化（バウンディングボックス・ラベル）",
                "ユーザー操作（キャプチャ・カメラ切り替え）の処理",
                "検知データのJSONエクスポートと画像保存"
            ],
            algorithmDetails: {
                title: "COCO-SSDモデルによる物体検知システム",
                description: "COCO-SSD（Common Objects in Context - Single Shot MultiBox Detector）は、MobileNet v2をベースとした軽量で高速な物体検知モデルです。80種類のオブジェクトクラスを1回の推論で検知できる効率的なアーキテクチャを採用しています。",
                points: [
                    "Single Shot Detection: 1回の推論で複数オブジェクトの位置と種類を同時検知",
                    "MobileNet v2バックボーン: モバイルデバイス向けに最適化された軽量アーキテクチャ",
                    "信頼度スコアリング: 各検知結果に0-1の信頼度スコアを付与（通常0.5以上を採用）",
                    "Non-Maximum Suppression: 重複する検知結果を自動的に除去",
                    "リアルタイム処理: 60FPSでの連続推論を実現する効率的な実装",
                    "ブラウザ最適化: WebGL加速とメモリ効率の最適化により安定動作"
                ],
                results: [
                    "検知精度: 一般的なオブジェクトで約80-90%の正確性を実現",
                    "処理速度: モバイルデバイスで平均30-60FPSの推論速度",
                    "メモリ使用量: 約50-100MBの軽量なモデルサイズ",
                    "レスポンス性: フレーム間の遅延を最小限に抑制（<50ms）",
                    "対応オブジェクト: 80クラス（人物、動物、車両、家具、食品等）を網羅",
                    "ブラウザ互換性: Chrome、Firefox、Safari等の主要ブラウザで動作"
                ]
            }
        },
        futureScope: [
        ],
        links: {
            github: "https://github.com/temmie0232/object-detection-app",
            demo: "https://object-detection.vercel.app"
        }
    };

    return <ProjectDetailSection project={projectDetails} />;
};

export default ObjectDetectionPage;