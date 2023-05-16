import AdminGameEvent from './AdminGameEvent';
import AdminHomePage from './AdminHomePage';
import Navigation from './Navigation';
import Details from './Details';
import UserNavigation from './UserNavigation';
function AdminHome() {
  return (
    <div>
        <UserNavigation/>
        <AdminHomePage/>
        <AdminGameEvent/>
        <Details/>
    </div>
  );
}
export default AdminHome;