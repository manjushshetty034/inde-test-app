import React, { useEffect, useState } from "react";
import ApiService from "../utils/api-service";
import styles from "../styles/Home.module.css";

import Header from "./header";
import Carousel from "./carousel";
import AfterSlide from "./after-slider";
import WhatsNew from "./whats-new";
import HeroImage from "./common/hero-image";
import TrustedPartners from "./trusted-partners";
import Footer from "./footer/footer";
import EnquiryForm from "./enquiryForm/enquiryForm";
import Counter from "./counter/counter";
import { Skeleton } from "@mui/material";
import EnablingOutcomes from "./features/enablingOutcomes";

export default function Home() {
  const [details, setDetails] = useState(null);
  useEffect(() => {
    ApiService.getPageData()
      .then(([data]) => {
        setDetails(data);
      })
      .catch((err) => {
        console.debug("Error: ", err);
        alert("API Fetch failed.");
      });
  }, []);

  return (
    <div className={styles.container}>
      {details?.id ? (
        <>
          <Header logoUrl={details?.appBar?.logoUrl} topMenu={details?.appBar?.topMenu} menu={details?.appBar?.menu} />
          <Carousel items={details?.hero || []} />
          <AfterSlide intro={details?.intro} services={details?.services} />
          <EnablingOutcomes sections={details?.services} />
          <WhatsNew whatsNew={details?.whatNew} />
          <div>
            <h2 style={{ margin: "2rem 1rem" }}>Careers</h2>
            <HeroImage content={details?.careers} />
          </div>
          <TrustedPartners trustedPartner={details?.trustedPartner || []} />
          <Counter count={details?.counter} testimonial={details?.testimonial} />
          <EnquiryForm />
          <Footer topMenu={details?.footer?.topMenu} bottomMenu={details?.footer?.bottomMenu} />
        </>
      ) : (
        <Skeleton variant="rectangular" width={210} height={120} />
      )}
    </div>
  );
}
