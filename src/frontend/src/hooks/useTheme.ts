import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeProvider';

export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    console.error('useTheme must be used within a ThemeProvider. Falling back to default theme.');
    
    // Return a safe fallback to prevent app crash
    return {
      theme: 'light' as const,
      setTheme: () => {
        console.warn('setTheme called outside ThemeProvider - no-op');
      },
      toggleTheme: () => {
        console.warn('toggleTheme called outside ThemeProvider - no-op');
      },
    };
  }
  
  return context;
}
