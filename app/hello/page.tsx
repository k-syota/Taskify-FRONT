'use client'

import type { NextPage } from 'next'
import useSWR from 'swr'
import axios from '@/libs/axios'
import { useState } from 'react'

const Hello: NextPage = () => {
    const [data, setData] = useState('')
    axios
        .get('/api/hello')
        .then(
            (res: any) => {
                setData(res.data)
            }
        )
    return (
        <div>
            <h1>ようこそ</h1>
            {data}
        </div>
    )
}

export default Hello
