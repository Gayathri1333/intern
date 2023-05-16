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
        <br/>
        <p className='center my-5 pt-5'>First Clue is I get dirty when I become white who am i?</p>
      <p className='center'>Second clue is Ancient Egyptians wrote me upside down, creating a symbol that resembled a steer with horns. Whom am I?</p>
        <AdminGameEvent/>
        <Details/>
    </div>
  );
}
export default AdminHome;