import Style from '~src/assets/styles/Chat.module.css';
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ChatHeader = () => {
  return (
    <div className={Style.headerContainer}>
      <div className='d-flex justify-content align-items-center'>
        <div className={Style.avatar}>

        </div>
        <div className={Style.userInfoContainer}>
          <span>My friend name</span>
          <span className={Style.connectedIndicator}>Connected</span>
        </div>
      </div>

      <FontAwesomeIcon 
        size='xl'
        icon={faCircleInfo}
        className={Style.infoIcon}
      />
    </div>
  )
}

export default ChatHeader;