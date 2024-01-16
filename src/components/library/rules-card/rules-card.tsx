import s from './rules-card.module.scss'

import { ChoseRule, Four, LoginRule, One, ReadRule, ReturnRule, Three, Two } from '@/assets'
import { Typography } from '@/components/ui'

const data = [
  {
    id: 0,
    pic: <ChoseRule />,
    text: 'Выбираете книгу, которая пришлась вам по-душе и добавляете её в свой книжный шкаф',
    num: <One />,
  },
  {
    id: 1,
    pic: <LoginRule />,
    text: 'Входите в личный кабинет пользователя и бронируете выбранную вами книгу',
    num: <Two />,
  },
  {
    id: 2,
    pic: <ReadRule />,
    text: 'После получения емейла с подтверждением и дополнительной информацией, забираете книгу и наслаждаетесь чтением',
    num: <Three />,
  },
  {
    id: 3,
    pic: <ReturnRule />,
    text: 'В указанный срок возвращаете книгу',
    num: <Four />,
  },
]

export const RulesCard = () => {
  return (
    <div className={s.root}>
      {data.map(el => (
        <div className={s.card} key={el.id}>
          <div>{el.num}</div>
          {el.pic}
          <Typography style={{ textAlign: 'justify', textTransform: 'uppercase' }}>
            {el.text}
          </Typography>
        </div>
      ))}
    </div>
  )
}
