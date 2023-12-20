import { useEffect } from 'react'
import { TITLES } from '../../../../common/constants'
import { PageWrapper } from '../../../../common/components/page-wrapper/PageWrapper.tsx'

export const PodcastPage = () => {
  useEffect(() => {
    document.title = `${TITLES.SITE_NAME} | PodcastPage`
  }, [])
  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '100vh',
    //   }}
    // >
    /*<h1 style={{ fontSize: '36px', color: '#333' }}>Страница PodcastPage в разработке</h1>*/
    <PageWrapper pageTitle={'hannalib | Podcast'} svg={'podcast'}>
      <div style={{ display: 'flex', maxWidth: '1280px' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/v31kqrxhVgY?si=DBb4Ho0_u8nrCDt6"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '400px',
            border: 'solid 1px red',
          }}
        >
          <h2>podcast #1</h2>
          <p>
            description description description description description description description
            description description description description description description description
            description description description description description description description
          </p>
        </div>
      </div>
    </PageWrapper>
    // </div>
  )
}
