import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { PwaInstallProvider } from '@/hooks/usePwaInstall'
import { ThemeProvider } from '@/hooks/useTheme'
import { ChapterPage } from '@/pages/ChapterPage'
import { CoverPage } from '@/pages/CoverPage'

/** HashRouter = reliable deep links on GitHub Pages (no server rewrite needed). */
export default function App() {
  return (
    <ThemeProvider>
      <PwaInstallProvider>
        <HashRouter>
          <AppShell>
            <Routes>
              <Route path="/" element={<CoverPage />} />
              <Route path="/adhyay/:slug" element={<ChapterPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AppShell>
        </HashRouter>
      </PwaInstallProvider>
    </ThemeProvider>
  )
}
