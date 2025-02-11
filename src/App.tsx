import { useEffect, useState } from 'react'
import { HomeScreen } from './pages/HomeScreen'
import { LoadingScreen } from './pages/LoadingScreen';
import { GlobalStyle } from './styles/GlobalStyles';
import { LanguajeProvider } from './providers/LanguajeProvider';
import { AudioProvider } from './providers/AudioProvider';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4300);
    console.log('Que haces viendo la consola bb? 🤨🤨🤨')
  }, [])

  return (
    <LanguajeProvider>
      <AudioProvider>
        <BrowserRouter>

          <Analytics />
          <GlobalStyle />
          {isLoading ? <LoadingScreen /> :
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<HomeScreen />} />
              <Route path="/experience" element={<HomeScreen />} />
              <Route path="/experiments" element={<HomeScreen />} />
              <Route path="/works" element={<HomeScreen />} />
              <Route path="/contact" element={<HomeScreen />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          }
        </BrowserRouter>
      </AudioProvider>
    </LanguajeProvider>
  )
}

export default App
