function ImageItem({propimage}) {
    console.log(propimage);
    return (
         <div>
            <img className="imageListimg" src={propimage.urls.small} alt={propimage.alt_description}/>
         </div> 
         );
}

export default ImageItem;