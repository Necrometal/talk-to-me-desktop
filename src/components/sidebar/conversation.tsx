import { Card } from 'react-bootstrap';
import Style from '~src/assets/styles/Conversation.module.css';

const Conversation = () => {
  const lists = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10];

  return (
    <div className={Style.container}>
      {
        lists.map((_, index) => (
          <Card 
            key={`conversation-${index}`}
            className={Style.conversationItemContainer}
          >
            <Card.Body
              className="d-flex justify-content-between align-items-center"
            >
              <div className={Style.conversationAvatarContainer}>
                <div className={Style.conversationItemAvatar}>

                </div>
              </div>
              <div className={Style.conversationItemElement}>
                <span className={Style.userFriend}>friend { index }</span>
                <span className={Style.lastMessage}>last message</span>
              </div>
            </Card.Body>
          </Card>
        ))
      }
    </div>
  )
}

export default Conversation