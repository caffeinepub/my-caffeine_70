import { AchievementCounter } from './components/AchievementCounter';
import { Sparkles, Globe } from 'lucide-react';
import { I18nProvider } from './i18n/I18nProvider';
import { useI18n } from './i18n/useI18n';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider } from './theme/ThemeProvider';
import { AppErrorBoundary } from './components/AppErrorBoundary';

function AppContent() {
  const { language, setLanguage, t } = useI18n();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <img 
                src="/assets/generated/abstinence-logo.dim_512x512.png" 
                alt={t.header.logoAlt}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
                  {t.header.title}
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground mt-0.5 italic">
                  {t.header.subtitle}
                </p>
              </div>
            </div>
            
            {/* Controls: Theme Toggle + Language Selector */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Globe className="w-4 h-4" />
                    <span className="hidden sm:inline">{language === 'en' ? 'EN' : 'JA'}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem 
                    onClick={() => setLanguage('en')}
                    className={language === 'en' ? 'bg-accent' : ''}
                  >
                    {t.language.english}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setLanguage('ja')}
                    className={language === 'ja' ? 'bg-accent' : ''}
                  >
                    {t.language.japanese}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {/* Why Section */}
          <section className="text-center space-y-4 animate-slide-up">
            <div className="inline-flex items-center gap-2 text-primary mb-2">
              <Sparkles className="w-5 h-5" />
              <h2 className="text-xl sm:text-2xl font-display font-semibold">
                {t.why.title}
              </h2>
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed max-w-2xl mx-auto">
              {t.why.description}
            </p>
          </section>

          {/* Counter Component */}
          <AchievementCounter />

          {/* Instructions */}
          <section className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 sm:p-8 shadow-warm space-y-4">
            <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground flex items-center gap-2">
              <span className="text-2xl">📝</span>
              {t.instructions.title}
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-foreground/80">
              <p>
                {t.instructions.description}
              </p>
              <p className="italic text-muted-foreground">
                {t.instructions.mysteryNote}
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="text-center text-xs sm:text-sm text-muted-foreground italic space-y-1">
            <p>
              {t.disclaimer.honesty}
            </p>
            <p className="text-xs">
              {t.disclaimer.doublingNote}
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>
            {t.footer.copyright} ❤️ {t.footer.builtWith}{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors underline decoration-dotted"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <AppErrorBoundary>
      <ThemeProvider>
        <I18nProvider>
          <AppContent />
        </I18nProvider>
      </ThemeProvider>
    </AppErrorBoundary>
  );
}

export default App;
