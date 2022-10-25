import Style from '~src/assets/styles/Chat.module.css';
import ChatHeader from '~src/components/chat/header';
import ChatInput from '~src/components/chat/input';
import ListMessage from './list-message';

const Chat = () => {
  return (
    <div className={Style.container}>
      <ChatHeader />

      <ListMessage />

      <ChatInput />
    </div>
  )
}

export default Chat