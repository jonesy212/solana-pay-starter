import React from "react";
import styles from "../styles/Product.module.css";
import IPFSDownload from './ipfsDownload';

export default function Product({ product }) {
  const { id, name, price, description, image_url } = product;

  return (
    <div className={styles.product_container}>
      <div>
        <img className={styles.product_image} src={image_url} alt={name} />
      </div>

      <div className={styles.product_details}>
        <div className={styles.product_text}>
          <div className={styles.product_title}>{name}</div>
          <div className={styles.product_description}>{description}</div>
        </div>

        <div className={styles.product_action}>
          <div className={styles.product_price}>{price} USDC</div>

          {/* <Buy itemID={id} /> */}

          {/* for free downloads...connect this to  */}
          {/* I'm hardcoding these for now, we'll fetch the hash from the API later */}
          <IPFSDownload
                      filename="Intro to Cryptocurrency.zip"
                      hash="QmcPVawa3PahHkTFrZC7WjiS2fqnQR8et1VtQpncny2ZDN"
                      cta="Download book"
          />
        </div>
      </div>
    </div>
  );
}
