import React from 'react'
import { BarcodeScanner } from 'react-barcode-scanner'
import "react-barcode-scanner/polyfill"

function Scanner(props) {

    const options = {
        delay: 3000,
        formats: ['data_matrix']
    }

    return <BarcodeScanner
        onCapture={(detected) => props.onCapture(detected)}
        options={options}
    />
}

export default Scanner;