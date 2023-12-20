import two from '../../../assets/images/hiw-login.jpg'
// import three from '../../../assets/images/hiw-read.jpg'
import three from '../../../assets/images/hiw-read2.jpg'
import four from '../../../assets/images/hiw-return.jpg'
import one from '../../../assets/images/hiw-search.jpg'
import sprite from '../../../assets/sprite.svg'

import s from './CardRules.module.scss'

const pics = [
  {
    id: 0,
    number: 'one',
    path: one,
    description:
      'Выбираете книгу, которая пришлась вам по-душе и добавляете её в свой книжный шкаф',
  },
  {
    id: 1,
    number: 'two',
    path: two,
    description: 'Входите в личный кабинет пользователя и бронируете выбранную вами книгу',
  },
  {
    id: 2,
    number: 'three',
    path: three,
    description:
      'После получения емейла с подтверждением и дополнительной информацией, забираете книгу и наслаждаетесь чтением',
  },
  {
    id: 3,
    number: 'four',
    path: four,
    description: 'В указанный срок возвращаете книгу',
  },
]

export const CardRules = () => {
  return (
    <div className={s.container}>
      {pics.map(el => {
        return (
          <div key={el.id} className={s.card}>
            <svg>
              <use xlinkHref={`${sprite}#${el.number}`} />
            </svg>
            <img src={el.path} alt={`pic-${el.id}`} />
            <p>{el.description}</p>
          </div>
        )
      })}
    </div>
  )
}
