import { CSSProperties } from 'react'

import s from './book-card.module.scss'

import { Button, Card, Chip, Rating, Typography } from '@/components/ui'

export const BookCard = ({
  cover,
  pageCount,
  onButtonClick,
  title,
  author,
  category,
  rating,
  id,
  onCardClick,
  style,
  isNew,
}: BookCardProps) => {
  return (
    <Card className={s.common} style={style}>
      {isNew && (
        <div className={s.chip}>
          <Chip color={'brown'} label={'NEW ✨'} />
          <Chip color={'green'} label={'green 🌟'} />
          <Chip color={'blue'} label={'blue ☘️'} />
        </div>
      )}

      <img src={cover} alt={title} className={s.cover} onClick={() => onCardClick(id)} />

      <div className={s.ratingBox}>
        <Rating readonly value={rating} direction={'ltr'} />
      </div>
      <div className={s.infoBox}>
        <Typography variant={'h3'}>{title}</Typography>
        <Typography variant={'caption'}>{author}</Typography>
        <Typography variant={'body1'}>{category}</Typography>
        <Typography variant={'body1'}>{pageCount}</Typography>
        <Button variant={'tertiary'} onClick={() => onButtonClick(title)}>
          book it
        </Button>
      </div>
    </Card>
  )
}

export type BookCardProps = {
  id: string | number
  cover: string
  title: string
  author: string
  category: string
  pageCount?: string
  rating?: any
  isNew?: boolean
  onButtonClick: (title: string) => void
  onCardClick: (id: string) => void
  style?: CSSProperties
}
