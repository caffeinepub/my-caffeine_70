import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAchievementPower, useIncrementAchievementPower } from '../hooks/useAchievementPower';
import { Loader2, TrendingUp, Sparkles } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useI18n } from '../i18n/useI18n';

export function AchievementCounter() {
  const { t } = useI18n();
  const { data: currentPower, isLoading, error } = useAchievementPower();
  const { mutate: increment, isPending } = useIncrementAchievementPower();
  const [lastIncrement, setLastIncrement] = useState<{ amount: number; doubled: boolean } | null>(null);

  const handleIncrement = () => {
    // Simulate the doubling mystery (since backend doesn't support it yet)
    // In production, this would come from the backend response
    const doubled = Math.random() < 0.5;
    const amount = doubled ? 2 : 1;
    
    increment(undefined, {
      onSuccess: () => {
        setLastIncrement({ amount, doubled });
        // Clear the message after 3 seconds
        setTimeout(() => setLastIncrement(null), 3000);
      }
    });
  };

  return (
    <Card className="shadow-warm-lg border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden relative">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-tr-full" />
      
      <CardHeader className="text-center space-y-2 relative z-10">
        <CardTitle className="text-2xl sm:text-3xl font-display flex items-center justify-center gap-2">
          <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
          {t.counter.title}
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          {t.counter.subtitle}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6 relative z-10">
        {/* Power Display */}
        <div className="text-center py-8 sm:py-12">
          {isLoading ? (
            <div className="flex items-center justify-center gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <span className="text-lg text-muted-foreground">{t.counter.loading}</span>
            </div>
          ) : error ? (
            <Alert variant="destructive">
              <AlertDescription>
                {t.counter.error}
              </AlertDescription>
            </Alert>
          ) : (
            <div className="space-y-2">
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-primary font-display animate-pulse-glow">
                {currentPower?.toString() || '0'}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground uppercase tracking-wider">
                {t.counter.totalLabel}
              </div>
            </div>
          )}
        </div>

        {/* Result Message */}
        {lastIncrement && (
          <div className="animate-slide-up">
            <Alert className="bg-primary/10 border-primary/30">
              <Sparkles className="w-4 h-4 text-primary" />
              <AlertDescription className="text-center font-semibold">
                {lastIncrement.doubled ? (
                  <span className="text-accent">
                    {t.counter.resultDoubled.replace('{amount}', lastIncrement.amount.toString())}
                  </span>
                ) : (
                  <span className="text-primary">
                    {t.counter.resultNormal.replace('{amount}', lastIncrement.amount.toString())}
                  </span>
                )}
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* Action Button */}
        <div className="flex justify-center pt-4">
          <Button
            size="lg"
            onClick={handleIncrement}
            disabled={isPending || isLoading}
            className="text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 font-semibold shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
          >
            {isPending ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                {t.counter.buttonLoading}
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                {t.counter.buttonIdle}
              </>
            )}
          </Button>
        </div>

        {/* Hint Text */}
        <p className="text-center text-xs sm:text-sm text-muted-foreground italic pt-2">
          {t.counter.hint}
        </p>
      </CardContent>
    </Card>
  );
}
