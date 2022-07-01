import loading from '../../images/loading.gif';
import '../../css/loading.css';

type Props = {
  message: string;
};

function Loading({ message }: Props) {
  return (
    <article className="loading">
      <h1 className="loading__title">Weather.io</h1>
      <img src={loading} alt="loading" className="loading__img" />
      <span className="loading__message">{message}</span>
    </article>
  );
}

export default Loading;
