import { useEffect } from 'react'

import { TITLES } from '../../../../common/constants'

export const AboutUsPage = () => {
  useEffect(() => {
    document.title = `${TITLES.SITE_NAME} | AboutUsPage`
  }, [])

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <h1 style={{ fontSize: '36px', color: '#333' }}>Страница AboutUsPage в разработке</h1>
    </div>
  )
}
