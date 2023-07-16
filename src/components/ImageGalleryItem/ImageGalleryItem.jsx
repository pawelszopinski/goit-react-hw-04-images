import {useState, useEffect} from 'react';
import './ImageGalleryItem.css'
function ImageGalleryItem() {
    
    const [image, setImage] = useState([])
    console.log(image)
    useEffect(() => {
        async function getImages() {
            const res = await fetch("https://pixabay.com/api/?key=36237308-42aa754ef31b34db7b4fcf11d&q=yellow+flowers&image_type=photo&pretty=true")
            const data = await res.json()
            setImage(data.hits)
        }
        getImages()
    }, [])
    
  return ( <pre>{JSON.stringify(image, null, 2)}</pre>

  )
  }
export default ImageGalleryItem