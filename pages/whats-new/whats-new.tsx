import Card from "../common/card";
import styles from './WhatsNew.module.css';

const WhatsNew = ({ whatsNew }: CommonCardProps) => {

    return (
        <>
            <div className={styles.whats_new_title}>What&#39;s New</div>
            <div className={styles.whats_new_container}>
                {whatsNew?.map((card, index) => <div key={`whatsnew-card-${index}`}>
                    <Card data={{
                        imageUrl: card?.image,
                        title: card?.heading,
                        content: card?.title,
                        actionPrimaryLink: card?.ctaLink
                    }} />
                </div>)}
            </div>
        </>
    );
}

export default WhatsNew;

export interface CommonCardProps {
    whatsNew: CommonCardPropsObject[];
};

export interface CommonCardPropsObject {
    id: number | string;
    heading: string;
    tag?: string;
    title: string;
    ctaLink?: string;
    image: string;
};