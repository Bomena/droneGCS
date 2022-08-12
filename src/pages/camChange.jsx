import SetViz from "./camera";
import { useState } from "react"


function Change() {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <h2 onClick={() => {
                setVisible(!visible);
                document.getElementById('pic').src = "";
            }} className='color'>
            {visible ? "CAM" : "cam"}</h2>
            {visible && <SetViz />}
        </div>
    )
}

export default Change;