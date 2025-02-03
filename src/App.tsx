import { useEffect, useState } from 'react'
import { HomeScreen } from './pages/HomeScreen'
import { LoadingScreen } from './pages/LoadingScreen';
import { GlobalStyle } from './styles/GlobalStyles';
import { LanguajeProvider } from './providers/LanguajeProvider';
import { AudioProvider } from './providers/AudioProvider';

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


        <GlobalStyle />
        {isLoading ? <LoadingScreen /> : <HomeScreen />}
      </AudioProvider>
    </LanguajeProvider>
  )
}

export default App
