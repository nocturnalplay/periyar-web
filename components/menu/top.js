import Image from "next/image";
import { useEffect } from "react";

export default function Top() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let top = document.getElementById("topview")
            // console.log("dfg")
            // console.log(window.scrollY)
            if(window.scrollY > 200){
                top.style.display="block"
            }else{
                top.style.display="none"
            }
        })
    }, [])
    return <div id="topview" onClick={()=>{
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    }}>
        <Image src="/top-view.png" alt="top" width={30} height={30} />
    </div>
}