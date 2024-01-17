import { Outlet } from 'react-router-dom';
import classes from './layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

type LayoutProps = {
  userLoggedIn: boolean;
  setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
};

const Layout = (props: LayoutProps) => {
  const { userLoggedIn, setUserLoggedIn, isLoading } = props;

  return !isLoading ? (
    <div className={classes.wrapper}>
      <Header userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div className={classes.wrapper}>
      <Loader />
    </div>
  );
};

export default Layout;
