"use client"
import Navigation from '@/features/components/Navigation';
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
      <main className="ml-32 w-full">
        <h1>Main Content</h1>
      </main>
    </div>
  );
};

export default Portfolio;