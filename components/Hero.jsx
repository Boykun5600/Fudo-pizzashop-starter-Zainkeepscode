import Image from 'next/image'
import css from '../styles/Hero.module.css'
import Cherry from '../assets/Cherry.png'
export default function Hero() {
    return(
        <div className={CSS.container}>
            {/* left side */}

            <div className={css.cherryDiv}>
                <span>More than Faster</span>
                <Image src={Cherry} alt=""/>
            </div>
            {/* right side */}
        </div>
    )
    
};
