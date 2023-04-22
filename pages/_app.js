import Layout from '@/components/Layout'
import { CameraProvider } from '@/context/CameraProvider'
import '@/styles/globals.css'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <CameraProvider>
        {/* <Layout /> */}
        <Component {...pageProps} />
      </CameraProvider>
    </>
  )
}
