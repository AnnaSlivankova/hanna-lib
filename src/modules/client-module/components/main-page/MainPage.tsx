import { useEffect } from 'react'

import { CardRules, Carusel } from '../../../../common/components'
import { TITLES } from '../../../../common/constants'

export const MainPage = () => {
  useEffect(() => {
    document.title = `${TITLES.SITE_NAME} | Частная христианская библиотека`
  }, [])

  return (
    <>
      <Carusel />
      <CardRules />
    </>
  )
}
