import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Utilities/Layout'
import NProgress from 'nprogress'

import "../styles/globals.css";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return <Layout>
    <Component {...pageProps} />
  </Layout>;
}

export default MyApp;
