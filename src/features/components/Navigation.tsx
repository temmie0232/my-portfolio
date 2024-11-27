// src/components/navigation/Navigation.tsx
'use client'
import React from 'react';
import { Menu, X } from 'lucide-react';

// セクションIDの型定義
type SectionId = 'top' | 'about' | 'app' | 'skills';

interface NavigationProps {
    activeSection: SectionId;
    onSectionChange: (section: SectionId) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
    // サイドバーの開閉状態を管理
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    // セクションの配列
    const sections: SectionId[] = ['top', 'about', 'app', 'skills'];

    // 指定されたセクションまでスムーズにスクロールする関数
    const scrollToSection = (sectionId: SectionId) => {
        // 指定されたIDを持つHTML要素を取得
        const element = document.getElementById(sectionId);
        // 要素までスクロール
        element?.scrollIntoView({ behavior: 'smooth' });
        // アクティブなセクションの更新
        onSectionChange(sectionId);
        // モバイル時はスクロール後にサイドバーを閉じる
        setIsSidebarOpen(false);
    };

    return (
        <>
            {/* ハンバーガーメニューボタン - モバイル時のみ表示 */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="fixed top-4 left-4 z-50 p-2 rounded-full bg-gray-800/50 md:hidden"
            >
                {isSidebarOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>

            {/* オーバーレイ - サイドバーが開いているときのみ表示 */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* ナビゲーションバー - デスクトップでは左側固定、モバイルではサイドバーとして表示 */}
            <nav className={`
        fixed md:left-12 top-0 md:top-1/2 md:-translate-y-1/2 
        flex flex-col items-start space-y-8 
        md:p-0 p-8 pt-20 // モバイル時のパディング
        bg-zinc-800/20 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none // モバイル時の背景
        h-full md:h-auto w-64 md:w-auto // モバイル時の幅と高さ
        transform transition-transform duration-300 ease-in-out z-40
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} // モバイル時のスライド
      `}>
                {/* セクション配列をマッピングしてボタンを生成 */}
                {sections.map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className="group flex items-center space-x-4" // ドットとテキストを横並びに
                    >
                        {/* ドット */}
                        <div className={`
              w-2 h-2 rounded-full              // ドットの基本スタイル
              transition-all duration-300 ease-in-out  // アニメーション設定
              ${activeSection === section
                                ? 'bg-white scale-150'          // アクティブ時: 白色で1.5倍に拡大
                                : 'bg-white/40 group-hover:bg-white/75'} // 非アクティブ時: 40%透明度、ホバー時75%
            `} />
                        {/* テキストとアンダーラインのコンテナ */}
                        <div className="flex flex-col">
                            {/* セクション名のラベル */}
                            <span className={`
                text-2xl capitalize              // テキストの基本スタイル
                transition-all duration-300 ease-in-out  // アニメーション設定
                ${activeSection === section
                                    ? 'text-white scale-120 translate-x-1' // アクティブ時: 白色で1.1倍に拡大、右に移動
                                    : 'text-white/40 group-hover:text-white/75'} // 非アクティブ時: 40%透明度、ホバー時75%
              `}>
                                {section}
                            </span>
                            {/* アンダーラインのコンテナ */}
                            <div className="relative h-[2px] overflow-hidden mt-1">
                                {/* 
                  relative: 子要素の絶対配置の基準点となる
                  h-[2px]: 線の太さを2pxに設定
                  overflow-hidden: はみ出た部分を隠し、スライドインアニメーションを実現
                  mt-1: テキストとの間隔を確保
                */}
                                {/* アニメーション付きのライン本体 */}
                                <div className={`
                  absolute inset-0 bg-orange-400 rounded    // 位置とスタイル
                  transition-transform duration-300 ease-out    // アニメーション設定
                  ${activeSection === section         // アクティブ状態による表示制御
                                        ? 'translate-x-0'                // アクティブ時: 通常位置に表示
                                        : '-translate-x-full'}           // 非アクティブ時: 左に完全に移動して非表示
                `}
                                    style={{ width: '100%' }}  // ラインの幅をコンテナいっぱいに設定
                                />
                            </div>
                        </div>
                    </button>
                ))}
            </nav>
        </>
    );
};

export default Navigation;