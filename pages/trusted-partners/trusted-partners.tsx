import { useState } from 'react';
import { Grid } from '@mui/material';
import { DEFAULT_VIDEO_URL } from '../../utils/constants';
import styles from './TrustedPartner.module.css';

const TrustedPartners = ({ trustedPartner }: TrustedPartnerProps) => {
    const [slider, setSlider] = useState(0);
    const onSlide = (type: string) => {
        switch (type) {
            case "nxt":
                setSlider((slider + 1) % (trustedPartner.length - 1));
            case "prev":
                if (slider === 0) setSlider(trustedPartner.length - 1);
                else setSlider(slider - 1);
        }
    }
    return (
        <>
            <div className={styles.trusted_partner_title}>Trusted Partner</div>

            <div id="carouselExampleControls" className={`${styles.trusted_partner} carousel slide`} data-bs-ride="carousel">
                <div className="carousel-inner">
                    {trustedPartner?.map((entry, index) => <div key={`trusted-partner-${index}`} className={`carousel-item ${slider === index ? 'active' : ''}`}>
                        <Grid container spacing={5} marginTop={'1rem'}>
                            <Grid xs={0} md={2} lg={2}></Grid>
                            <Grid xs={6} md={4} lg={4} className={styles.centered} marginRight={'1rem'}>
                                <video controls width={"100%"} preload="none" poster={'/trusted_partners_video_thumbnail.jpeg'}>
                                    <source src={entry?.video || DEFAULT_VIDEO_URL} type={'video/mp4'} />
                                    Sorry, your browser doesn&#39;t support embedded videos.
                                </video>
                            </Grid>
                            <Grid xs={6} md={4} lg={4} className={styles.centered} direction={"column"}>
                                {entry?.resources?.map(resource => <div key={`trusted-partner-resource-${resource?.tag}`} className={styles.trusted_partner_case_studies}>
                                    <div className={styles.trusted_partner_case_studies_case_title}>{resource?.tag}</div>
                                    <div className={styles.trusted_partner_case_studies_case}>{resource?.title}</div>
                                </div>)}
                            </Grid>
                            <Grid xs={0} md={2} lg={2}></Grid>
                        </Grid>
                    </div>)}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" onClick={() => onSlide("nxt")} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" onClick={() => onSlide("prev")} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default TrustedPartners;

export interface TrustedPartnerProps {
    trustedPartner: TrustedPartnerType[];
};
export interface TrustedPartnerType {
    id: string | number;
    video: string;
    resources: TrustedPartnersResourcesType[];
};

export interface TrustedPartnersResourcesType {
    id: string | number;
    tag: string;
    title: string;
};
