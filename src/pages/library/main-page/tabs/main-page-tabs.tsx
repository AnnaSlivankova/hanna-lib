import { TabContent, Tabs, TabType } from '@/components/ui'

export const MainPageTabs = () => {
  return (
    <div style={{ maxWidth: '500px', width: '100%', minHeight: '225px' }}>
      <Tabs tabs={tabs} defaultValue={'main'}>
        <TabContent value={'main'}>main tab content</TabContent>
        <TabContent value={'description'}>description tab content</TabContent>
        <TabContent value={'reviews'}> reviews tab content </TabContent>
      </Tabs>
    </div>
  )
}

const tabs: TabType[] = [
  {
    value: 'main',
    title: 'main',
  },
  {
    value: 'description',
    title: 'Описание',
  },
  {
    value: 'reviews',
    title: 'Отзывы',
  },
]
