import { useEffect } from 'react'

import bookCover from '../../../../../assets/images/del/IMG_3828-rot.jpg'
import { Button } from '../../../../../common/components'
import { PageWrapper } from '../../../../../common/components/page-wrapper/PageWrapper.tsx'
import { TITLES } from '../../../../../common/constants'
import { books } from '../../../../../common/data-for-tests.ts'

import s from './BookPage.module.scss'

export const BookPage = () => {
  const title = books[0].title
  const description = books[0].description
  const period = books[0].period
  const author = books[0].author
  const category = books[0].category
  const isAvailable = books[0].isAvailable

  useEffect(() => {
    document.title = `${TITLES.SITE_NAME} | BookPage`
  }, [])

  return (
    <PageWrapper pageTitle={'BookPage'} svg={'catalog'}>
      <div className={s.bookContainer}>
        <img src={bookCover} alt={`pic-book1`} />
        <div className={s.aditionals}>
          <span className={s.title}>{title}</span>
          <span className={s.author}>{author}</span>
          <p className={s.description}>{description}</p>
          <span className={s.addInfo}>{`category: ${category}`}</span>
          <span className={s.addInfo}>page numbers: 200</span>
          <span className={s.addInfo}>{`period for reading: ${period}`}</span>
          <Button className={s.primBtn} variant="primary">
            в шкаф
          </Button>
        </div>
        <div></div>
      </div>
    </PageWrapper>
  )
}
