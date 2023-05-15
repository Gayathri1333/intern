import GameEvent from './GameEvent';
import AdminHomePage from './AdminHomePage';
import Navigation from './Navigation';
function AdminHome() {
  return (
    <div>
        <Navigation/>
        <AdminHomePage/>
        <GameEvent/>
    </div>
  );
}
export default AdminHome;