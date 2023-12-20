import { useNavigate } from 'react-router-dom'

import { PATH } from '../../constants'
import { books } from '../../data-for-tests.ts'
import { Button } from '../button/Button.tsx'

import s from './CardBook.module.scss'

export const CardBook = () => {
  const navigate = useNavigate()

  const goToBookCard = (bookId: number) => {
    navigate(`${PATH.CATALOG}/${bookId}`)
  }

  return (
    <div className={s.wrapper}>
      {books.map(el => {
        return (
          <div key={el.id} className={s.container}>
            <img src={el.cover} alt={`pic-${el.title}`} onClick={() => goToBookCard(el.id)} />

            <p>{el.title}</p>
            <p>{el.author}</p>
            {/*<p>{el.description}</p>*/}

            <Button className={s.linkBtn} variant="tertiary">
              в шкаф
            </Button>
          </div>
        )
      })}
    </div>
  )
}
