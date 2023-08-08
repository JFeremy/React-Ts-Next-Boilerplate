import { AppProps } from 'next/app'
import React from 'react'
import { appWithTranslation } from 'next-i18next'
import RootLayout from '@/app/layouts/globals'

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    </>
)

export default appWithTranslation(App)
