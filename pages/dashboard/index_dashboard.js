import Dashboard from './dashboard/Dashboard';
import LayoutDashboard from './layout/Layout';


const IndexDashboard = () => {

  return (
    <>
      <LayoutDashboard title='Home Layout'>
        <Dashboard />
    </LayoutDashboard>
    </>
  );
};

export default IndexDashboard;
