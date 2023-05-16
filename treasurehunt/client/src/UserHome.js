import GameEvent from './GameEvent';
import HomePage from './HomePage';
import UserHomePage from './UserHomePage';
import UserNavigation from './UserNavigation';
function UserHome() {
  return (
    <div>
        <UserNavigation/>
        <UserHomePage/>
        <br/>
        <h2 className='center my-5 pt-5'>You can start from any of these clues</h2>
        <p className='center'>First Clue is I get dirty when I become white who am i?</p>
      <p className='center'>Second clue is Ancient Egyptians wrote me upside down, creating a symbol that resembled a steer with horns. Whom am I?</p>
      <p className='center'>Third clue is I can cause love, but that’s not the ideal outcome. I’m always happy to serve. who am I?</p>
        <GameEvent/>
    </div>
  );
}
export default UserHome;