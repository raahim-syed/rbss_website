import "./photo-gallery.css"

import siteImage1 from "../../../../assets/images/site-images/site-photo-1.jpg"
import siteImage2 from "../../../../assets/images/site-images/site-photo-2.jpg"
import siteImage3 from "../../../../assets/images/site-images/site-photo-3.jpg"


const PhotoGallery = ({extraClasses, ...props}) => {
  return (
    <div>
      <section className={extraClasses ? `photo-gallery-section ${extraClasses}` : "photo-gallery-section"} >
        <div className="container grid grid-center">
            <div className="left">
                <img src={siteImage1} alt="site-1" />
            </div>
            <div className="right">
                <img src={siteImage3} alt="site-3" />
                <img src={siteImage2} alt="site2" />
            </div> 
        </div>
      </section>
    </div>
  )
}

export default PhotoGallery
