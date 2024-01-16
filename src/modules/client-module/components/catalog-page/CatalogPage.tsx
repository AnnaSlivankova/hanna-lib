import { useEffect, useState } from 'react'

import sprite from '../../../../assets/_sprite.svg'
import { CardBook } from '../../../../common/components/card-book/CardBook.tsx'
import { PageWrapper } from '../../../../common/components/page-wrapper/PageWrapper.tsx'
import { Select } from '../../../../common/components/select-radix/SelectRadix.tsx'
import { TextField } from '../../../../common/components/text-field/TextField.tsx'
import { TITLES } from '../../../../common/constants'
import { authors, categories } from '../../../../common/data-for-tests.ts'

import s from './CatalogPage.module.scss'

export const CatalogPage = () => {
  const categoriesOptions = categories.map(el => ({ label: el.category, value: el.value }))
  const authorsOptions = authors.map(el => ({ label: el.author, value: el.value }))

  const [category, setCategory] = useState('')
  const [author, setAuthor] = useState('')

  const selectCategoryHandler = (category: string) => {
    setCategory(category)
  }
  const selectAuthorHandler = (author: string) => {
    setAuthor(author)
  }

  useEffect(() => {
    document.title = `${TITLES.SITE_NAME} | CatalogPage`
  }, [])

  return (
    <PageWrapper pageTitle={'Каталог'} svg={'catalog'}>
      <form>
        <div className={s.filters}>
          <Select
            placeholder={'Choose category'}
            value={category}
            options={categoriesOptions}
            onChange={selectCategoryHandler}
          />
          <Select
            placeholder={'Choose author'}
            value={author}
            options={authorsOptions}
            onChange={selectAuthorHandler}
          />
          <TextField placeholder={'Search here...'} search />

          <button className={s.reset} aria-label="reset filters">
            <span>reset all filters</span>
            <svg>
              <use xlinkHref={`${sprite}#close`} />
            </svg>
          </button>
        </div>
      </form>
      <CardBook />
    </PageWrapper>
  )
}
