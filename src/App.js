import LandingPage from './components/LandingPage';
import ProjectsSection from './components/ProjectsSection';
import React from 'react';

function App() {
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    const timer = setInterval(() => 
  {
    setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
  }, 800);

  return () => {
    clearInterval(timer);
  }
  },[])
  console.log(progress)

  return (
    <div>
       <LandingPage></LandingPage>
       <ProjectsSection value = {progress}></ProjectsSection>
    </div>
  );
}

export default App;
