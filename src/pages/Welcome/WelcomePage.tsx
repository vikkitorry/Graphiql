import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import cls from './welcome-page.module.scss';
import { TranslatorContext } from '../../context/translatorContextProvider';
import { AppRoutes } from '../../routes/routeConfig/routeConfig';

type WelcomePageProps = {
  userLoggedIn: boolean;
};

const WelcomePage = ({ userLoggedIn }: WelcomePageProps) => {
  const { lang, data } = useContext(TranslatorContext);
  return (
    <section className={cls.container} data-testid="welcome-page">
      <h2>{data[lang].welcomePage}</h2>
      <div className={cls.links}>
        {userLoggedIn ? (
          <>
            <NavLink to={AppRoutes.GRAPHI_QL} className={cls.link}>
              {data[lang].goToGraphi}
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to={AppRoutes.SIGN_IN} className={cls.link}>
              {data[lang].signIn}
            </NavLink>
            <NavLink to={AppRoutes.SIGN_UP} className={`${cls.link} ${cls.linkColor}`}>
              {data[lang].signUp}
            </NavLink>
          </>
        )}
      </div>
    </section>
  );
};

export default WelcomePage;
