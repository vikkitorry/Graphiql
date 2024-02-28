import { useContext } from 'react';
import cls from './WelcomeInfo.module.scss';
import cat from '../../assets/cat.gif';
import screen from '../../assets/mobile.png';
import { TranslatorContext } from '../../context/translatorContextProvider';

const WelcomeInfo = () => {
  const { lang, data } = useContext(TranslatorContext);
  return (
    <section className={cls.container}>
      <h2 className={cls.tittle}>{data[lang].welcomeTittle}</h2>
      <p className={cls.text}>{data[lang].welcomeTittleText}</p>
      <div className={`${cls.blockLight} ${cls.block}`}>
        <div className={cls.imgContainer}>
          <img src={cat} className={cls.cat} />
        </div>
        <p className={cls.desc}>{data[lang].welcomeAboutTool}</p>
      </div>
      <div className={`${cls.blockDark} ${cls.block}`}>
        <p className={cls.desc}>{data[lang].welcomeAboutProject}</p>
        <div className={cls.imgContainer}>
          <div className={cls.hexagon}></div>
          <p className={cls.request}>{data[lang].request}</p>
          <p className={cls.response}>{data[lang].response}</p>
        </div>
      </div>
      <h2 className={cls.tittle}>{data[lang].mobileVersion}</h2>
      <div className={cls.mobileContainer}>
        <div className={cls.mobileSection}>
          <img src={screen} />
          <img src={screen} />
          <img src={screen} />
        </div>
      </div>
    </section>
  );
};

export default WelcomeInfo;
