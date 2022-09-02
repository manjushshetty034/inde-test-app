import Button from '@mui/material/Button';
import styles from './Common.module.css';

const HeroImage = ({ content }) => {
    return (
        <div className={styles.hero_image}>
            <div className={styles.hero_text}>
                <label>{content?.title}</label>
                <p>{content?.description}</p>
                <div className={styles.hero_text_actions}>
                    {content?.ctaGroup.map((cta, index) => <Button key={`career-action-${index}`} color={'error'} variant="contained" onClick={() => window.open(cta?.ctaLink)}>{cta?.cta || "Learn More"}</Button>)}
                </div>
            </div>
        </div>
    );
}

export default HeroImage;
