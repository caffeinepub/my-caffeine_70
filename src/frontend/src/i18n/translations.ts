export type Language = 'en' | 'ja';

export interface Translations {
  // Header
  header: {
    logoAlt: string;
    title: string;
    subtitle: string;
  };
  // Language selector
  language: {
    label: string;
    english: string;
    japanese: string;
  };
  // Theme toggle
  theme: {
    light: string;
    dark: string;
    switchToLight: string;
    switchToDark: string;
  };
  // Why section
  why: {
    title: string;
    description: string;
  };
  // Counter card
  counter: {
    title: string;
    subtitle: string;
    loading: string;
    error: string;
    totalLabel: string;
    buttonIdle: string;
    buttonLoading: string;
    resultDoubled: string;
    resultNormal: string;
    hint: string;
  };
  // Instructions
  instructions: {
    title: string;
    description: string;
    mysteryNote: string;
  };
  // Disclaimer
  disclaimer: {
    honesty: string;
    doublingNote: string;
  };
  // Footer
  footer: {
    copyright: string;
    builtWith: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      logoAlt: 'Achievement Power Logo',
      title: 'Achievement Power Counter',
      subtitle: '~ Reach new heights with mysterious multipliers ~',
    },
    language: {
      label: 'Language',
      english: 'English',
      japanese: '日本語',
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
    },
    why: {
      title: 'Why Self-Discipline?',
      description: 'Daily acts of self-control lead to improved focus, enhanced self-esteem, and the creation of new opportunities. This counter records your efforts (anonymously) and visualizes that you\'re part of a community sharing the same goals.',
    },
    counter: {
      title: 'Current Total Achievement Power',
      subtitle: 'The collective strength of all participants',
      loading: 'Loading...',
      error: 'Failed to load Achievement Power. Please try again.',
      totalLabel: 'Total Achievements',
      buttonIdle: 'I Achieved Today! (+1 or +2?)',
      buttonLoading: 'Recording...',
      resultDoubled: '🎉 Amazing! +{amount} (Doubled!) 🎉',
      resultNormal: '✨ Great job! +{amount} ✨',
      hint: 'Click to add your achievement to the global total',
    },
    instructions: {
      title: 'How It Works',
      description: 'If you achieved your goal today, press the button to mark your progress! Your contribution adds to the collective Achievement Power of everyone using this counter.',
      mysteryNote: '(Sometimes the universe rewards extra effort with a mysterious +2 boost... but that\'s just how it works! 🎲)',
    },
    disclaimer: {
      honesty: '※ This is a self-reported counter. Please click with an honest heart.',
      doublingNote: '(The doubling feature is by design and adds a touch of mystery to your journey.)',
    },
    footer: {
      copyright: '© 2026. Built with',
      builtWith: 'using',
    },
  },
  ja: {
    header: {
      logoAlt: '達成パワーロゴ',
      title: '達成パワーカウンター',
      subtitle: '〜 神秘的な倍率で新たな高みへ 〜',
    },
    language: {
      label: '言語',
      english: 'English',
      japanese: '日本語',
    },
    theme: {
      light: 'ライト',
      dark: 'ダーク',
      switchToLight: 'ライトモードに切り替え',
      switchToDark: 'ダークモードに切り替え',
    },
    why: {
      title: 'なぜ自己規律が大切なのか？',
      description: '日々の自制心の実践は、集中力の向上、自尊心の強化、そして新たな機会の創出につながります。このカウンターはあなたの努力を（匿名で）記録し、同じ目標を共有するコミュニティの一員であることを可視化します。',
    },
    counter: {
      title: '現在の総達成パワー',
      subtitle: '全参加者の集合的な力',
      loading: '読み込み中...',
      error: '達成パワーの読み込みに失敗しました。もう一度お試しください。',
      totalLabel: '総達成数',
      buttonIdle: '今日達成しました！（+1 または +2？）',
      buttonLoading: '記録中...',
      resultDoubled: '🎉 素晴らしい！+{amount}（倍増！）🎉',
      resultNormal: '✨ よくできました！+{amount} ✨',
      hint: 'クリックして世界の総数にあなたの達成を追加',
    },
    instructions: {
      title: '使い方',
      description: '今日の目標を達成したら、ボタンを押して進捗を記録しましょう！あなたの貢献は、このカウンターを使用しているすべての人の集合的な達成パワーに加算されます。',
      mysteryNote: '（時々、宇宙は特別な努力に神秘的な+2のボーナスで報いてくれます...でもそれがこのカウンターの仕組みなのです！🎲）',
    },
    disclaimer: {
      honesty: '※ これは自己申告制のカウンターです。正直な心でクリックしてください。',
      doublingNote: '（倍増機能は設計上の仕様であり、あなたの旅に神秘性を加えます。）',
    },
    footer: {
      copyright: '© 2026. ❤️を込めて',
      builtWith: 'で構築',
    },
  },
};
