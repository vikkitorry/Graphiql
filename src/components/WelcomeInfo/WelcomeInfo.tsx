import { useContext } from 'react';
import cls from './WelcomeInfo.module.scss';
import cat from '../../assets/cat.gif';
import mobileScreen from '../../assets/mobile.png';
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
          <div className={cls.animatedHexagon}></div>
          <p className={cls.request}>{data[lang].request}</p>
          <p className={cls.response}>{data[lang].response}</p>
        </div>
      </div>
      <h2 className={cls.tittle}>{data[lang].mobileVersion}</h2>
      <div className={cls.mobileContainer}>
        <div className={cls.mobileSection}>
          <img src={mobileScreen} />
          <img src={mobileScreen} />
          <img src={mobileScreen} />
        </div>
      </div>
      <div className={`${cls.container} ${cls.gradient}`}>
        <h2 className={cls.tittle}>{data[lang].techStack}</h2>
        <div className={cls.techContainer}>
          <div className={cls.hexagon}>React</div>
          <div className={cls.triangle}>Html</div>
          <div className={cls.hexagon}>Vitest</div>
          <div className={cls.triangle}>Vite</div>
          <div className={cls.hexagon}>Ant Design</div>
          <div className={cls.triangle}>Sass</div>
          <div className={cls.hexagon}>Firebase</div>
        </div>
      </div>
      <div className={cls.container}>
        <h2 className={cls.tittle}>{data[lang].contactMe}</h2>
        <div className={cls.contactsContainer}>
          <a href="mailto:vikkitorry6716@gmail.com" className={`${cls.sprite} ${cls.gmail}`} />
          <a href="https://telegram.me/mokroe_more" className={`${cls.sprite} ${cls.telegram}`} />
          <a href="mailto:vikkitorry6716@mail.ru" className={`${cls.sprite} ${cls.mail}`} />
          <a
            href="https://github.com/vikkitorry/Graphiql"
            className={`${cls.sprite} ${cls.github}`}
          />
        </div>
      </div>
      <div className={cls.line}>
        <span>{data[lang].start}</span>
      </div>
    </section>
  );
};

export default WelcomeInfo;
