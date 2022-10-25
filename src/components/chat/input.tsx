import { Button, Form } from 'react-bootstrap';
import Style from '~src/assets/styles/Chat.module.css';
import { faPaperPlane, faImage, faCamera, faFaceSmile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useEffect, useRef, useState } from 'react';

const ChatInput = () => {
  const [emoji, setEMoji] = useState<boolean>(false)
  const showEmoji = () => setEMoji(true)
  const hideEmoji = () => setEMoji(false)
  const refEmoji = useRef<any>(null)
  const refEmojiContainer = useRef<any>(null)

  useEffect(() => {
    document.addEventListener('click', (e: any) => {
      if(
        refEmoji.current
        && refEmojiContainer.current
        && !refEmoji.current.contains(e.target)
        && !refEmojiContainer.current.contains(e.target)
      ){
        hideEmoji()
      }
    })
    return () => {
      document.removeEventListener('click', () => {})
    }
  }, [])

  return (
    <>
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

          <Button 
            onClick={emoji ? hideEmoji : showEmoji}
            variant="outline-primary"
            className={Style.otherOptionButton}
            ref={refEmoji}
          >
            <FontAwesomeIcon 
              size='xl'
              icon={faFaceSmile}
            />
          </Button>
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
      {
        emoji && (
          <div className={Style.emojiContainer} ref={refEmojiContainer}>
            <Picker 
              data={data} 
              onEmojiSelect={(e) => console.log(e)} 
              icons='outline'
            />
          </div>
        )
      }
    </>
  )
}

export default ChatInput;