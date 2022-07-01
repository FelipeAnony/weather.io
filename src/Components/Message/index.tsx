import { BiError } from 'react-icons/bi';

import '../../css/message.css';

type Props = {
  message: string;
  bgColor?: string;
  fontColor?: string;
};

function Message({ message, bgColor, fontColor }: Props) {
  return (
    <article
      className="message"
      style={{
        backgroundColor: bgColor || '#fbfbfb80',
        color: fontColor || '#f00',
      }}
    >
      <BiError className="message__icon" />
      <p className="message__text">{message}</p>
    </article>
  );
}

export default Message;
