import { CardRules, Carusel } from '../../../../common/components'

export const MainPage = () => {
  return (
    <>
      <Carusel />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CardRules />
      </div>
    </>
  )
}
