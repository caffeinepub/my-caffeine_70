import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '../hooks/useTheme';
import { useI18n } from '../i18n/useI18n';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="gap-2"
            aria-label={theme === 'light' ? t.theme.switchToDark : t.theme.switchToLight}
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">
              {theme === 'light' ? t.theme.dark : t.theme.light}
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{theme === 'light' ? t.theme.switchToDark : t.theme.switchToLight}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
