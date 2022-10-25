import Style from '~src/assets/styles/Home.module.css';
import NavBar from '~src/components/navbar';
import Conversation from '~src/components/sidebar/conversation';
import Chat from '~src/components/chat';

const Home = () => {
  return (
    <div className={Style.body}>
      <NavBar />
      <div className={Style.container}>
        <div className={Style.sidebarContainer}>
          <Conversation />
        </div>

        <div className={Style.chatContainer}>
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default Home;
