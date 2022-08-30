import ReactPlayer from "react-player"
import { useState } from "react"
import myVideo from "./test.mp4"


export const Home: React.FC = () => {
    const [videoPath, setVideoPath] = useState("")
    const [uploadToggle, setUploadToggle] = useState(false)
    const handleVideoUpload = (event: any ) => {
        setVideoPath(URL.createObjectURL(event.target.files[0]))
        console.log(URL.createObjectURL(event.target.files[0]))
        setUploadToggle(true)
        console.log(videoPath)
  }




  //const videoSRC = URL.createObjectURL(myVideo)
    return(
        <> 
            <div>
                Hello! Upload a file:
            </div>

            <input type="file" onChange={handleVideoUpload} />
            <ReactPlayer id="video" url={uploadToggle ? videoPath : myVideo} autoPlay={true} width="50%" height="50%" loop={true} muted={true} playing={true} type="video/mp4"/>
        </>
    )
}