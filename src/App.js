import './App.css';
import { Blog, Hero, Industries, Projects, Skills } from './Sections';

function App() {
  return (
    <>
      <Hero />
      <div className='mt-[-50px] z-10 absolute'>
        <Projects />
      </div>
      <Industries />
      <Skills />
      <Blog />
    </>
  );
}

export default App;
