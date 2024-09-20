import Image from 'next/image';
import me from '/public/me.png'
import mePeek from '/public/me_peek.png'

export default function ProfilePic({className, cropped = false}: {className?: string, cropped?: boolean}) {
    if(cropped){
        return (
            <Image
            src={mePeek}
            alt="Picture of Jonas glancing to the right."
            width={100}
            placeholder="blur"
            className={className}
            />
        )      
    }
    return (
        <Image
          src={me}
          alt="Picture of Jonas peeking over the header, glancing at it."
          width={200}
          placeholder="blur"
          className={className}
        />
      )
  }