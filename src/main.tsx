import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RecoilRoot } from "recoil"
import { ThemeProvider } from './components/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <ThemeProvider defaultTheme='light' storageKey='shop-karo-theme'>
      <App />
    </ThemeProvider>
  </RecoilRoot>,
)
