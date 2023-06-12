import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { Copyright } from '@/components/Copyright'

import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baijamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baijam',
})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construída pela Rocketseat',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baijamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="flex min-h-screen flex-col md:grid md:grid-cols-2">
          {/* Left */}
          <div
            className="relative flex flex-col items-center justify-between overflow-hidden border-b border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-0 py-4
                      md:items-start md:border-r md:px-28 md:py-16"
          >
            {/* Blur */}
            <div
              className="absolute bottom-0 left-1/2 h-[208px] w-[326px] -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-700 opacity-50 blur-full 
                        md:right-0 md:top-1/2 md:h-[288px] md:w-[526px] md:-translate-y-1/2 md:translate-x-1/2"
            />

            {/* Stripes */}
            <div
              className="absolute bottom-2 right-1/2 top-0 w-2 translate-y-1/2 rotate-90 bg-stripes 
                          md:bottom-0 md:right-2 md:top-0 md:translate-y-0 md:rotate-0"
            />

            {isAuthenticated ? <Profile /> : <SignIn />}

            <Hero />

            <Copyright />
          </div>

          {/* Right */}
          <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
