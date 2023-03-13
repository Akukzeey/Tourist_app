import Image from "next/image";
import loaderGif from '../public/images/loading.gif'

function Loader() {
    return(
        <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',}}>
        <Image src={loaderGif} alt="loader"/>
        </div>
    )
}

export default Loader