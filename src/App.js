import './App.css';
import { Footer } from './Components';
import { Blog, Hero, Industries, Projects } from './Sections';

function App() {
  return (
    <div id='Home'>
      <Hero />
      <Projects />
      <Industries />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
