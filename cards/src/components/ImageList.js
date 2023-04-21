import ImageItem from "./ImageItem";

function ImageList({imagePlaceholder}) {
    return  ( 
    <div className="imageList">
        {imagePlaceholder.map((image,index)=>{

        return <ImageItem key={index} propimage={image}/>

        })}
    </div> 
    );
}

export default ImageList;