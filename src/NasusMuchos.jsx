import { useState } from 'react'
import Nasus from '/Nasus.jpg'
import './nasusMuchos.css'

function NasusMuchos() {

    let nasusito = <img src={Nasus} />;
    const nasusin = () => {
        const audio = new Audio();
        audio.src='/Nasus.mp3'
        audio.play();

        setNasus((nasus) => <>{nasus} {nasusito}</>)
    }
    const [nasus, setNasus] = useState(null)

    return (
        <div className='nasusMuchos'>
            <div className='nasusMuchos_button'><button onClick={nasusin}>Nasusin</button></div>

            <div className='nasusMuchos_imagenes'>{nasus}</div>
        </div>

    )
}

export default NasusMuchos
