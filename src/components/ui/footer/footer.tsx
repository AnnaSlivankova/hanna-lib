import { Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

import s from './footer.module.scss'

import { Logo, Telegram } from '@/assets'
import { INFO, PATH } from '@/common/constants'
import { Button, Navbar } from '@/components/ui'

export const Footer = () => {
  return (
    <footer className={s.root}>
      <div className={s.container}>
        <div className={s.infoBlocks}>
          <Link to={PATH.MAIN}>
            <Logo fill={'var(--color-light-100'} height={30} />
          </Link>
          <p>{`© 2023 - ${new Date().getFullYear()} HannaLIB. Все права защищены`}</p>
        </div>

        <Navbar vertical />

        <div className={s.infoBlocks}>
          <p>{INFO.EMAIL}</p>
          <p>{INFO.LOCATION}</p>
          <Button
            variant={'icon'}
            as={'a'}
            href={INFO.INST_LINK}
            title="Перейти на instagram страницу"
            target="_blank"
            rel="nofollow noreferrer"
            aria-label="Ссылка на instagram"
          >
            <Instagram color={'var(--color-light-100'} />
          </Button>
          <Button
            variant={'icon'}
            as={'a'}
            href={INFO.TG_LINK}
            title="Перейти на telegram страницу"
            target="_blank"
            rel="nofollow noreferrer"
            aria-label="Ссылка на telegram"
          >
            <Telegram color={'var(--color-light-100'} />
          </Button>
        </div>
      </div>
    </footer>
  )
}
