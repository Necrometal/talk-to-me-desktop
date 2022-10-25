import { Button, Form } from 'react-bootstrap';
import Style from '~src/assets/styles/Chat.module.css';
import { faPaperPlane, faImage, faCamera } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ChatInput = () => {
  return (
    <div className={Style.inputContainer}>
      <div className={Style.otherOptionContainer}>
      <Button 
          variant="outline-primary"
          className={Style.otherOptionButton}
        >
          <FontAwesomeIcon 
            size='xl'
            icon={faCamera}
          />
        </Button>

        <Button 
          variant="outline-primary"
          className={Style.otherOptionButton}
        >
          <FontAwesomeIcon 
            size='xl'
            icon={faImage}
          />
        </Button>
      </div>

      <div className={Style.textInputContainer}>
        <Form.Control 
          type="text" 
          placeholder="Message" 
          className={Style.textInputMessage}
        />
      </div>

      <div className={Style.submitContainer}>
        <Button 
          variant="outline-primary"
          className={Style.submitButtonSend}
        >
          <FontAwesomeIcon 
            size='xl'
            icon={faPaperPlane}
          />
        </Button>
      </div>
    </div>
  )
}

export default ChatInput;