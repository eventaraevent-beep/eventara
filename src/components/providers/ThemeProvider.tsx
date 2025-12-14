'use client';

/**
 * Theme Provider
 * Provides dark/light mode switching across the application
 * Uses next-themes for persistent theme preference
 */

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      storageKey="eventara-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
