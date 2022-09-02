import { DEFAULT_VIDEO_URL } from '../../utils/constants';
import styles from './AfterSlide.module.css';

const AfterSlide = ({ intro, services }) => {
    return (
        <>
            <div className={`${styles.afterslide_container}`}>
                <div className={`${styles.afterslide_container} row col-12`}>
                    <div className='col-2'></div>
                    <div className="intro col-4">{intro?.description || ""}</div>
                    <div className="col-4">
                        <video controls width="250" poster={'/after_slide_video_placeholder.jpeg'}>
                            <source src={intro?.video || DEFAULT_VIDEO_URL} />
                            Sorry, your browser doesn&#39;t support embedded videos.
                        </video>
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>
        </>
    );
};

export default AfterSlide;
