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
        <h2 className='center my-5 pt-5'>You can start from any of these clues</h2>
        <p className='center'>First Clue is I get dirty when I become white who am i?</p>
      <p className='center'>Second clue is Ancient Egyptians wrote me upside down, creating a symbol that resembled a steer with horns. Whom am I?</p>
      <p className='center'>Third clue is I can cause love, but that’s not the ideal outcome. I’m always happy to serve. who am I?</p>
        <AdminGameEvent/>
        <Details/>
    </div>
  );
}
export default AdminHome;