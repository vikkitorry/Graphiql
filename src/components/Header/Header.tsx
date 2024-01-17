import { NavLink } from 'react-router-dom';
import cls from './header.module.scss';
import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { TranslatorContext } from '../../context/translatorContextProvider';
import { useWindowWidth } from '../../utils/hooks/useWindowWidth';
import { AppRoutes } from '../../routes/routeConfig/routeConfig';
import { Flex, Switch } from 'antd';
import Service from '../../app/service/service';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import logo from '../../assets/GraphiQL.png';

type HeaderProps = {
  userLoggedIn: boolean;
  setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ userLoggedIn, setUserLoggedIn }: HeaderProps) => {
  const { lang, data, setLang } = useContext(TranslatorContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const header = useRef<HTMLElement>(null);
  const { width } = useWindowWidth();

  useLayoutEffect(() => {
    window.addEventListener('scroll', () => setScrollPosition(window.scrollY));
  }, []);

  useEffect(() => {
    scrollPosition > 0
      ? header.current?.classList.add(cls.sticky)
      : header.current?.classList.remove(cls.sticky);
  }, [scrollPosition]);

  const logout = async () => {
    await Service.signOut();
    setUserLoggedIn(false);
  };

  const changeLang = () => {
    if (setLang) {
      lang === 'ru' ? setLang('en') : setLang('ru');
    }
  };

  return (
    <header ref={header} className={cls.header}>
      <Flex gap={'middle'} align={'center'} className={cls.logobox}>
        <NavLink to={AppRoutes.MAIN} className={cls.logo}>
          <img src={logo} alt="logo" />
        </NavLink>

        <Switch
          data-testid="switch"
          checked={lang === 'ru'}
          checkedChildren="RU"
          unCheckedChildren="EN"
          onChange={changeLang}
        />
      </Flex>

      <Flex gap={'middle'} justify={'center'} className={cls.mainLink}>
        <NavLink to={'/'}>{data[lang].welcome}</NavLink>
      </Flex>

      <Flex className={cls.authLinks}>
        {userLoggedIn ? (
          <Flex gap={'middle'} justify={'center'}>
            <NavLink to={AppRoutes.GRAPHI_QL}>{data[lang].mainPage}</NavLink>
            <NavLink to={AppRoutes.MAIN} onClick={logout}>
              {data[lang].signOut}
            </NavLink>
          </Flex>
        ) : (
          <Flex gap={'middle'} justify={'center'}>
            <NavLink to={AppRoutes.SIGN_IN}>{data[lang].signIn}</NavLink>
            <NavLink to={AppRoutes.SIGN_UP}>{data[lang].signUp}</NavLink>
          </Flex>
        )}
      </Flex>

      {width <= 755 && <BurgerMenu userLoggedIn={userLoggedIn} logout={logout} />}
    </header>
  );
};

export default Header;
