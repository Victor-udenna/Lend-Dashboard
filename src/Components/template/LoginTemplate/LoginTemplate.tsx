import LoginForm from '@/Components/molecules/LoginForm/LoginForm';
import ImageAtom from '@/Components/atom/Image';
import logoImg from '@/assets/images/logo.svg';
import posterImg from '@/assets/images/login-img.png';
import './LoginTemplateStyle.scss';

export default function LoginTemplate() {
  return (
    <main className="login-template">
      <div className="login-template__poster">
        <div className="login-template__logo__container">
          <ImageAtom src={logoImg} width={20} height={20} className="login-template__logo" alt="image logo" />
        </div>
        <div className="login-template__img__container">
          <ImageAtom
            unOptimized={true}
            src={posterImg}
            width={20}
            height={20}
            className="login-template__img"
            alt="poster image"
          />
        </div>
      </div>
      <LoginForm />
    </main>
  );
}
