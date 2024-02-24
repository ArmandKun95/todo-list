import { Inter, Kanit } from 'next/font/google'

export const kanit = Kanit ({
    weight: ['400', '500'],
    subsets: ['latin'],
    style: ['italic', 'normal']
})

export const inter = Inter ({
    weight: ['500'],
    subsets: ['latin'],
    style: ['normal']
})