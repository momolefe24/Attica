import React from 'react';
import './LatestArticles.css';
import LatestArticle from '../LatestArticle/LatestArticle';

// Sample data for latest articles
const latestArticlesData = [
  // Repeat this structure to create 12 objects
  { id: 1, title: "DJ Maphorisa", date: "Dec 23, 2023 6:31am GMT+2", author: "#Braamfest", imageUrl: "https://wallpapercave.com/dwp1x/wp10974945.jpg" },
  { id: 2, title: "Kabza De Small", date: "Dec 23, 2023 3:50am GMT+2", author: "#Hey Neighbour", imageUrl: "https://wallpapercave.com/dwp1x/wp6256179.jpg" },
  { id: 3, title: "DBN Gogo.", date: "Dec 23, 2023 6:31am GMT+2", author: "#Konka", imageUrl: "https://fakazanews.com/wp-content/uploads/2021/07/DBN-Gogo.jpg" },
  { id: 4, title: "Tyla", date: "Dec 23, 2023 3:50am GMT+2", author: "#Coachella", imageUrl: "https://ceconline.co.za/wp-content/uploads/2023/10/Tyla-%E2%80%93-Water-Single-Cover-Courtesy-of-IG.jpg" },
  { id: 5, title: "Shekinah", date: "Dec 23, 2023 6:31am GMT+2", author: "#Rocking The Daiseys", imageUrl: "https://lastfm.freetls.fastly.net/i/u/770x0/1b8613e6ef9f64de0b061cc2f48ff8db.jpg#1b8613e6ef9f64de0b061cc2f48ff8db" },
  { id: 6, title: "Maglera", date: "Dec 23, 2023 3:50am GMT+2", author: "#Cotton Fest", imageUrl: "https://image-prod.iol.co.za/16x9/800/Is-there-anyone-who-s-been-as-consistently-good-as-Maglera-Doe-Boy-this-year-Picture-Supplied?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/5f23ae51-b543-5032-9bc2-b0e9d0b84192&operation=CROP&offset=0x19&resize=1170x658&webp=true" },
  { id: 7, title: "Espiquet", date: "Dec 23, 2023 6:31am GMT+2", author: "#Kandy Koated", imageUrl: "https://cdn.24.co.za/files/Cms/General/d/11138/4fe11880c1cd4a63a1891799e100c98e.jpg" },
  { id: 8, title: "Oscar Mbo", date: "Dec 23, 2023 3:50am GMT+2", author: "#Konka", imageUrl: "https://storage.googleapis.com/website-zkhiphani/uploads/2022/08/872dcd5c-oscarmbo.jpeg" },
  //  10 more article objects
];

const LatestArticles = () => {
    return (
      <div className="latest-articles-container">
        <h3>Latest</h3>
        <div className="latest-articles">
          {latestArticlesData.map(article => (
            <LatestArticle
              key={article.id}
              title={article.title}
              date={article.date}
              author={article.author}
              imageUrl={article.imageUrl}
            />
          ))}
        </div>
      </div>
    );
  };

export default LatestArticles;
