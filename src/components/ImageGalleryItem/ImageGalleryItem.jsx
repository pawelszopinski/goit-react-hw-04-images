import {useState, useEffect} from 'react';
import './ImageGalleryItem.css'
function ImageGalleryItem() {
    
    const [image, setImage] = useState([])
    console.log(image)
    useEffect(() => {
        async function getImages() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setImage(data.data.memes)
        }
        getImages()
    }, [])
  return (
<li className="gallery-item">
  <img className='gallery-item-image' src="https://plus.unsplash.com/premium_photo-1688114984765-308599ec1e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60" alt="" />
</li>)
}
export default ImageGalleryItem