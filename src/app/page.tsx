"use client"
import AboutSection from '@/components/ui/AboutSection';
import AppSection from '@/components/ui/AppSection';
import Navigation from '@/components/layouts/Navigation';
import SkillSection from '@/components/ui/SkillSection';
import TopSection from '@/components/ui/TopSection';
import React, { useEffect } from 'react';

// セクションIDの型定義
type SectionId = 'top' | 'about' | 'app' | 'skills';

const Portfolio = () => {
  // 現在のアクティブなセクションを管理
  const [activeSection, setActiveSection] = React.useState<SectionId>('top');

  useEffect(() => {
    // スクロール位置に基づいてアクティブセクションを更新する関数
    const handleScroll = () => {
      const sections = ['top', 'about', 'app', 'skills'];

      // 各セクションの位置を取得
      const sectionElements = sections.map(section => ({
        id: section,
        element: document.getElementById(section),
        offset: document.getElementById(section)?.offsetTop || 0
      }));

      // 現在のスクロール位置
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // アクティブなセクションを見つける
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionElements[i].offset) {
          setActiveSection(sectionElements[i].id as SectionId);
          break;
        }
      }
    };

    // スクロールイベントリスナーを追加
    window.addEventListener('scroll', handleScroll);
    // 初期化時にも実行
    handleScroll();

    // クリーンアップ関数
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // 全体のコンテナ - 最小高さを画面いっぱいに設定
    <div className="flex min-h-screen">
      {/* ナビゲーションコンポーネント */}
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* メインコンテンツ */}
      <main className="w-full">
        <TopSection />
        <AboutSection />
        <AppSection />
        <SkillSection />
      </main>
    </div>
  );
};

export default Portfolio;