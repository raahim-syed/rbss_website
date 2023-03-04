import "./bordered-image.css"
import image from "./consultant-image.jpg"

const BorderedImage = () => {
    const style= {
        maxWidth: "450px", 
        maxHeight: "400px",
        overflow: "initial"
    }
  return (
    <div>
        <img className="bordered-image" src={image} alt="consultant-image" style={style} />
    </div>
  )
}

export default BorderedImage
