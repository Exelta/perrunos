import { useState } from 'react'
import Ether from '/Ether.jpg'
import './etherMuchos.css'



function EtherMuchos() {

    let ethersito = <img src={Ether} />;
    const ethersin = () => {
        const audio = new Audio();
        audio.src='/Ether.mp3'
        audio.play();

        setEther((ether) => <>{ether} {ethersito}</>)
    }
    const [ether, setEther] = useState(null)

    return (
        <div className='etherMuchos'>

            <div className='etherMuchos_button'><button onClick={ethersin}>Ethersin</button></div>
            <div className='etherMuchos_imagenes'>{ether}</div>

        </div>

    )
}

export default EtherMuchos
