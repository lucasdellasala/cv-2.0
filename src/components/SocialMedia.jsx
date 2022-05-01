import igDark from './../images/ig-dark.png';
import igLight from './../images/ig-light.png';
import ghDark from './../images/gh-dark.png';
import ghLight from './../images/gh-light.png';
import lnDark from './../images/ln-dark.png';
import lnLight from './../images/ln-light.png';
import ytDark from './../images/yt-dark.png';
import ytLight from './../images/yt-light.png';

export const SocialMedia = (props) => {
    const  theme = props.theme;

    if(theme==='dark'){
        return (
            <div className='socialMediaLayout'>        
                <a  href='https://instagram.com/dellasalalucas' target='_blank' rel="noreferrer"><img className='socialMedia' src={igDark} alt='ig logo'/></a>
                <a  href='http://github.com/lucasdellasala/' target='_blank' rel="noreferrer"><img className='socialMedia' src={ghDark} alt='gh logo'/></a>
                <a  href='https://www.linkedin.com/in/lucasdellasala/' target='_blank' rel="noreferrer"><img className='socialMedia' src={lnDark} alt='ln logo'/></a>
                <a  href='https://www.youtube.com/channel/UCoXdnmepeg11cX_MheeS10w' target='_blank' rel="noreferrer"><img className='socialMedia' src={ytDark} alt='yt logo'/></a>
            </div>
        )
    }
    return (
        <div className='socialMediaLayout'>        
            <a  href='https://instagram.com/dellasalalucas' target='_blank' rel="noreferrer"><img className='socialMedia' src={igLight} alt='ig logo'/></a>
            <a  href='http://github.com/lucasdellasala/' target='_blank' rel="noreferrer"><img className='socialMedia' src={ghLight} alt='gh logo'/></a>
            <a  href='https://www.linkedin.com/in/lucasdellasala/' target='_blank' rel="noreferrer"><img className='socialMedia' src={lnLight} alt='ln logo'/></a>
            <a  href='https://www.youtube.com/channel/UCoXdnmepeg11cX_MheeS10w' target='_blank' rel="noreferrer"><img className='socialMedia' src={ytLight} alt='yt logo'/></a>
        </div>
    )
}
