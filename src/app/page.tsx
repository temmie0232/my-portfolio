"use client"
import AboutSection from '@/components/ui/AboutSection';
import AppSection from '@/components/ui/AppSection';
import Navigation from '@/components/layouts/Navigation';
import SkillSection from '@/components/ui/SkillSection';
import TopSection from '@/components/ui/TopSection';
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
        <AppSection />
        <SkillSection />
      </main>
    </div>
  );
};

export default Portfolio;