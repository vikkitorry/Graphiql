import cls from './Footer.module.scss';
import GithubIcon from '../../assets/githubIcon.svg';

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className={cls.links}>
        <a href="https://github.com/vikkitorry">
          <img src={GithubIcon} alt={'Github icon'} />
        </a>
      </div>
      <div className={cls.year}>2024</div>
      <div className={cls.links}>
        <a href="https://github.com/vikkitorry">
          <img src={GithubIcon} alt={'Github icon'} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
