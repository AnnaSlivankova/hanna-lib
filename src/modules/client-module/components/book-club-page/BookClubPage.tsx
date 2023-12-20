import { useEffect } from 'react'
import { TITLES } from '../../../../common/constants'
import s from './BookClubPage.module.scss'

export const BookClubPage = () => {
  useEffect(() => {
    document.title = `${TITLES.SITE_NAME} | BookClub`
  }, [])
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <h1 style={{ fontSize: '36px', color: '#333' }}>Страница BookClubPage в разработке</h1>
    </div>
  )
}
