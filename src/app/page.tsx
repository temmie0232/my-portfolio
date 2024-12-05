"use client"
import AboutSection from '@/components/AboutSection';
import Navigation from '@/components/Navigation';
import SkillSection from '@/components/SkillSection';
import TopSection from '@/components/TopSection';
import React from 'react';

// セクションIDの型定義
type SectionId = 'top' | 'about' | 'app' | 'skills';

const Portfolio = () => {
  // 現在のアクティブなセクションを管理
  const [activeSection, setActiveSection] = React.useState<SectionId>('top');

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
        <SkillSection />
      </main>
    </div>
  );
};

export default Portfolio;