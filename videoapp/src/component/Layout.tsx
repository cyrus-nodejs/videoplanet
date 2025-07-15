import { Outlet} from 'react-router-dom';
import Appbar from './Navbar/Appbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-Seasalt dark:bg-Richblack">
      {/* Fixed Top Bar */}
    <Appbar />

    
      <div>
          <Outlet />
      </div>
    </div>
  );
};

export default Layout;
