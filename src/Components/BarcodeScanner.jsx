import React from 'react'
import { BarcodeScanner } from 'react-barcode-scanner'
import "react-barcode-scanner/polyfill"

function Scanner(props) {

    const options = {
        delay: 1000,
        formats: ['qr_code', 'code_128', 'code_39']
    }

    return <BarcodeScanner
        onCapture={(detected) => props.onCapture(detected)}
        options={options}
    />
}

export default Scanner;