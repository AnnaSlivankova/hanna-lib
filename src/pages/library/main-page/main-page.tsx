import { RulesCard } from '@/components/library/rules-card'
import { CarouselSlider, Page, Typography } from '@/components/ui'
import { NewBooksCarousel } from '@/pages/library/main-page/carousel/new-books-carousel'
import { MainPageTabs } from '@/pages/library/main-page/tabs/main-page-tabs'

export const MainPage = () => {
  return (
    <Page mt={'0'}>
      <CarouselSlider />
      <RulesCard />
      <Typography variant={'h1'}>New books available</Typography>
      <NewBooksCarousel />
      {/*<MainPageTabs />*/}
    </Page>
  )
}
