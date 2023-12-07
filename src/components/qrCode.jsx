import React, { useEffect, useState } from 'react';

import qrModule from '../api/qrModule';

const QRCode = () => {
    const [qrSVG, setQRSVG] = useState()
    useEffect(() => {
        setup()
    }, []);

    const setup = async () => {
        try {
            const qrCode = await qrModule.getQRCode('65711c717eb2dbd7567625a5')
            console.log(qrCode)
            setQRSVG(qrCode.QRSVG)
        } catch (e) {  
        }
    }

    return (
        <div>
            <img src={`data:image/svg+xml;utf8,${encodeURIComponent(qrSVG)}`} />
        </div>
    )
}

export default QRCode;
