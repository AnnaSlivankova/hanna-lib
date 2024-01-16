import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import clsx from 'clsx'
import { Menu, ShoppingBasket, UserRound, UserRoundCog } from 'lucide-react'
import { Link } from 'react-router-dom'

import s from './header.module.scss'

import { Logo } from '@/assets'
import { PATH } from '@/common/constants'
import { Button, Navbar, Sidebar } from '@/components/ui'

export const Header = forwardRef<ElementRef<'header'>, HeaderProps>(
  ({ className, ...rest }, ref) => {
    const [open, setOpen] = useState(false)
    const isLogin = false
    const isAdmin = false
    const classes = clsx(s.header, className)

    return (
      <header className={classes} ref={ref} {...rest}>
        <div className={s.container}>
          <Link to={PATH.MAIN}>
            <Logo fill={'var(--color-tertriary'} height={30} />
          </Link>
          <Navbar />
          <div className={s.btnsBox}>
            {isLogin ? (
              <>
                {isAdmin && (
                  <Button as={Link} to={PATH.CRM} variant={'icon'}>
                    <UserRoundCog />
                  </Button>
                )}

                <Button as={Link} to={PATH.USER} variant={'icon'}>
                  <UserRound />
                </Button>
                <Button as={Link} to={PATH.CART} variant={'icon'}>
                  <ShoppingBasket />
                </Button>
              </>
            ) : (
              <Button as={Link} to={PATH.LOGIN} variant={'tertiary'}>
                Войти
              </Button>
            )}
          </div>
          <Button variant={'icon'} onClick={() => setOpen(!open)} className={s.burgerBtn}>
            <Menu color={'var(--color-light-100'} />
          </Button>
          {open && <Sidebar isOpen={open} handleClose={() => setOpen(!open)} />}
        </div>
      </header>
    )
  }
)

export type HeaderProps = ComponentPropsWithoutRef<'header'>
