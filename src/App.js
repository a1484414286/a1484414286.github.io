import LandingPage from './components/LandingPage';
import ProjectsSection from './components/ProjectsSection';
import React from 'react';

function App() {
  const [progress, setProgress] = React.useState(0);
  
  return (
    <div>
       {/* <LandingPage></LandingPage> */}
       <ProjectsSection value = {progress}></ProjectsSection>
    </div>
  );
}

export default App;
