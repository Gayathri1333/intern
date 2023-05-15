import GameEvent from './GameEvent';
import HomePage from './HomePage';
import Navigation from './Navigation';
function Home() {
  return (
    <div>
        <Navigation/>
        <HomePage/>
        <GameEvent/>
    </div>
  );
}
export default Home;
