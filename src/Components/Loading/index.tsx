import loading from '../../images/loading.gif';
import '../../css/loading.css';
import Message from '../Message';

type Props = {
  message: string;
  error?: string;
};

function Loading({ message, error }: Props) {
  return (
    <article className="loading">
      {error ? (
        <Message message={error} />
      ) : (
        <>
          <h1 className="loading__title">Weather.io</h1>
          <img src={loading} alt="loading" className="loading__img" />
          <span className="loading__message">{message}</span>
        </>
      )}
    </article>
  );
}

export default Loading;
