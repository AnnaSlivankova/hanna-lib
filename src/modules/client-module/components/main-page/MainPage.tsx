import { CardRules, Carusel } from '../../../../common/components'
import { useEffect } from 'react'
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
