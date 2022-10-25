import Style from '~src/assets/styles/Chat.module.css';

const ListMessage = () => {
  return (
    <div className={Style.messageContainer}>
      <MessageOther message="Salut"/>
      
      <MessageOwner message="Salut toi"/>

      <MessageOther message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic ipsa dicta qui dolores, odio quis asperiores dolorem quaerat ducimus a alias? Numquam alias quis natus quo fugiat soluta repellat"/>
      <MessageOther message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic ipsa dicta qui dolores, odio quis asperiores dolorem quaerat ducimus a alias? Numquam alias quis natus quo fugiat soluta repellat"/>
      <MessageOther message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic ipsa dicta qui dolores, odio quis asperiores dolorem quaerat ducimus a alias? Numquam alias quis natus quo fugiat soluta repellat"/>
      <MessageOther message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic ipsa dicta qui dolores, odio quis asperiores dolorem quaerat ducimus a alias? Numquam alias quis natus quo fugiat soluta repellat"/>
      <MessageOther message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic ipsa dicta qui dolores, odio quis asperiores dolorem quaerat ducimus a alias? Numquam alias quis natus quo fugiat soluta repellat"/>
      <MessageOther message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic ipsa dicta qui dolores, odio quis asperiores dolorem quaerat ducimus a alias? Numquam alias quis natus quo fugiat soluta repellat"/>
      <MessageOther message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic ipsa dicta qui dolores, odio quis asperiores dolorem quaerat ducimus a alias? Numquam alias quis natus quo fugiat soluta repellat"/>
      <MessageOther message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic ipsa dicta qui dolores, odio quis asperiores dolorem quaerat ducimus a alias? Numquam alias quis natus quo fugiat soluta repellat"/>
      <MessageOther message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic ipsa dicta qui dolores, odio quis asperiores dolorem quaerat ducimus a alias? Numquam alias quis natus quo fugiat soluta repellat"/>
    </div>
  )
}

const MessageOwner = (props: any) => {
  const {
    message
  } = props
  return (
    <div className={`${Style.messageItemContainer}`}>
      <div className={Style.messageAvatarContainer}>
      </div>

      <div className={`${Style.messageContent} w-100 align-items-end`}>
        <div className={`${Style.messageText} ${Style.messageOwner}`}>
        { message }
        </div>
        <span className={Style.messageDate}>20:55</span>
      </div>
    </div>
  )
}

const MessageOther = (props: any) => {
  const {
    message
  } = props
  return (
    <div className={`${Style.messageItemContainer}`}>
      <div className={Style.messageAvatarContainer}>
        <div className={Style.avatar}>
        </div>
      </div>

      <div className={`${Style.messageContent} w-100 align-items-start`}>
        <div className={`${Style.messageText} ${Style.messageOther}`}>
          { message }
        </div>
        <span className={Style.messageDate}>20:55</span>
      </div>
    </div>
  )
}

export default ListMessage;