import React from 'react'


export default function FullLayout({ children }) {
    return (
        <div style={{ padding: '24px', backgroundColor: '#F0F5FE', height: '90vh' }} >
            {children}
        </div>
    )
}
