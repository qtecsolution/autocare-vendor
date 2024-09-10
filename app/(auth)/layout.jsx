'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function layout({ children }) {
    const router = useRouter()
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            router.push('/');
        }
    }, [router]);
    return (
        <div>
            {children}
        </div>
    )
}

export default layout