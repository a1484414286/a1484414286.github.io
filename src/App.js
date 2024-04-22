import LandingPage from './components/LandingPage';
import ProjectsSection from './components/ProjectsSection';
import React, { useEffect, useState } from 'react';
import './css/global.css'
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {isLoading ? (
          <LoadingScreen></LoadingScreen>
      ):(
      <div>
        <LandingPage></LandingPage>
        <ProjectsSection></ProjectsSection>
      </div>
      )}

    </div>
  );
}

export default App;
