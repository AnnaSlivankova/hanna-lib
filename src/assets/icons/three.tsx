import { forwardRef, memo, Ref, SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-1 0 19 19"
    ref={ref}
    width={50}
    height={50}
    fill={'var(--color-primary'}
    {...props}
  >
    <path d="M16.42 9.6A7.92 7.92 0 1 1 8.5 1.68a7.92 7.92 0 0 1 7.92 7.92zm-5.5 1.56a1.47 1.47 0 0 0-.08-.52 1.54 1.54 0 0 0-.26-.45 1.65 1.65 0 0 0-.4-.34 1.69 1.69 0 0 0-.51-.2V9.6a1.51 1.51 0 0 0 .8-.5 1.4 1.4 0 0 0 .3-.92 1.63 1.63 0 0 0-.2-.82 1.81 1.81 0 0 0-.52-.58 2.28 2.28 0 0 0-.74-.35 3.25 3.25 0 0 0-.84-.1 3.01 3.01 0 0 0-.8.1 2.63 2.63 0 0 0-.72.31 2.22 2.22 0 0 0-.57.52 2.14 2.14 0 0 0-.36.73l1.44.33a.92.92 0 0 1 .32-.53.9.9 0 0 1 .58-.2.94.94 0 0 1 .58.19.63.63 0 0 1 .25.54.65.65 0 0 1-.36.63 1.13 1.13 0 0 1-.36.12 2.7 2.7 0 0 1-.43.03h-.45v1.13H8a2.82 2.82 0 0 1 .48.04 1.5 1.5 0 0 1 .43.14.82.82 0 0 1 .3.26.71.71 0 0 1 .13.42.79.79 0 0 1-.1.39.78.78 0 0 1-.21.25.93.93 0 0 1-.31.15 1.3 1.3 0 0 1-.34.04 1.08 1.08 0 0 1-.73-.24 1.16 1.16 0 0 1-.38-.57l-1.44.38a2.19 2.19 0 0 0 1 1.33 2.73 2.73 0 0 0 .76.3 3.67 3.67 0 0 0 .87.11 3.26 3.26 0 0 0 .89-.12 2.5 2.5 0 0 0 .8-.38 1.96 1.96 0 0 0 .56-.65 1.89 1.89 0 0 0 .22-.93z" />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
