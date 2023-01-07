import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children }: Props) => (
  <div>
    <Head>
      <title>Dhivas Sugumar | Software Developer</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Dhivas Sugumar, I am a Software Developer looking for new opportunities and projects."/>
      <meta data-n-head="ssr" data-hid="author" name="author" content="Dhivas Sugumar"></meta>
      <meta data-n-head="ssr" data-hid="mobile-web-app-capable" name="mobile-web-app-capable" content="yes"></meta>
      <meta name="robots" content="index,follow"/>
      <meta http-equiv = "content-language" content = "en"></meta>
    </Head>
  </div>
)

export default Layout
