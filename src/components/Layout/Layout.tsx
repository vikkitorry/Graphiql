import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import cls from './layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import { TranslatorContext, Language } from '../../context/translatorContextProvider';
import { translationData } from '../../context/translationData/translationData';

type LayoutProps = {
  userLoggedIn: boolean;
  setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
};

const Layout = (props: LayoutProps) => {
  const { userLoggedIn, setUserLoggedIn, isLoading } = props;
  const [lang, setLang] = useState<Language>('en');

  return !isLoading ? (
    <TranslatorContext.Provider value={{ lang, data: translationData, setLang }}>
      <div className={cls.wrapper}>
        <Header userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
        <main className={cls.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </TranslatorContext.Provider>
  ) : (
    <div className={cls.wrapper}>
      <Loader />
    </div>
  );
};

export default Layout;
