import GameEvent from './GameEvent';
import HomePage from './HomePage';
import UserNavigation from './UserNavigation';
function UserHome() {
  return (
    <div>
        <UserNavigation/>
        <HomePage/>
        <GameEvent/>
    </div>
  );
}
export default UserHome;