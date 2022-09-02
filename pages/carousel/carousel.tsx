// import Image from 'next/image';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { DEFAULT_HERO_IMAGE } from '../../utils/constants';

const Carousel = ({ items }) => {
    const [slider, setSlider] = useState(0);
    const onSlide = (type: string) => {
        switch (type) {
            case "nxt":
                setSlider((slider + 1) % (items.length - 1));
            case "prev":
                if (slider === 0) setSlider(items.length - 1);
                else setSlider(slider - 1);
        }
    }
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {items.map((entry, index) => <div key={`carousel-item-${index}`} className={`carousel-item ${slider === index ? 'active' : ''}`}>
                <img src={entry?.image || DEFAULT_HERO_IMAGE} className="d-block w-100" alt={entry?.title} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{entry?.title}</h5>
                        <Button variant="contained" href={entry?.ctaLink || "https://www.google.com"}>
                            {entry?.cta || "Learn More"}
                        </Button>
                    </div>
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
    );
}

export default Carousel;
