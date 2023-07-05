import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './page/home';
import Flashscore from './page/flashscore';
import Ranking from './page/FootballRanking';
import Prediction from './page/prediction';
import News from './page/news';
import Contact from './page/contact';
import Goals from './page/goalsLight';
import PremierLeague from './page/PremierLeague';
import SerieA from './page/SerieA';
import Bundesliga from './page/Bundesliga';
import Laliga from './page/Laliga';
import League1 from './page/league1';
import Champions from './page/Champions';
import Europa from './page/Europa';
import Footer from './component/footer';
import LiveStream from './component/Singlematch/LiveStream';

function App() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light';

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark';

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme');
  return (
    <div className=' bg-[#e4e5e6] pb-10 dark:bg-gray-800'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='flashscore' element={<Flashscore />} />
          <Route path='football-ranking' element={<Ranking />} />
          <Route path='prediction' element={<Prediction />} />
          <Route path='news' element={<News />} />
          <Route path='contact' element={<Contact />} />
          <Route path='goals-highlight' element={<Goals />} />
          <Route path='SerieA' element={<SerieA />} />
          <Route path='Bundesliga' element={<Bundesliga />} />
          <Route path='Laliga' element={<Laliga />} />
          <Route path='Premierleague' element={<PremierLeague />} />
          <Route path='league1' element={<League1 />} />
          <Route path='ChampionLeague' element={<Champions />} />
          <Route path='EuropaLeague' element={<Europa />} />
          <Route path='/p/live_stream' element={<LiveStream />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
