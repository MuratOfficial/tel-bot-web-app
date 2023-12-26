import React, {useEffect, useState} from 'react'
import "./ProductImg.css"
import axios from 'axios';

function ProductImg({item}) {

    const [image, setImages] = useState("");

    
  
    useEffect(() => {
      const fetchData = async () => {

        
        try {
          const response = await axios.get(`https://magnificent-speculoos-ca08a4.netlify.app/.netlify/functions/img-get?productId=${encodeURIComponent(item.id)}`);
          setImages(response.data.rows[0].miniature.downloadHref);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };
    
      if(item.images.meta.size > 0) {
        fetchData();
      }

      
    }, [ item]); 

    const imageUrls = [
        "/pies/pie1.png",
        '/pies/pie2.png',
        '/pies/pie3.png',
        '/pies/pie4.png',
        '/pies/pie5.png',
        '/pies/pie6.png',
      ];
    
      // Generate a random index to select a random image
      const randomIndex = Math.floor(Math.random() * imageUrls.length);

  return (
    <>
    {
        image ? (<div className={'imgStyle'} style={{backgroundImage:`url(${image})`}}>
                    
        </div>) : (<div className={'imgStyle'} style={{backgroundImage:`url(${imageUrls[randomIndex]})`}}>
                    
                    </div>)
    }
    </>
    
    
  )
}

export default ProductImg