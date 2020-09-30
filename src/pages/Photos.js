import React,{useContext} from "react"
import {Context} from "../Context";
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {
    const {photos} = useContext(Context);

    const ImageComponent = photos.map((photo,index) => <Image key={photo.id} img={photo} className={getClass(index)}/>);
    
    return (
        <main className="photos">
            {ImageComponent}
        </main>
    )
}

export default Photos