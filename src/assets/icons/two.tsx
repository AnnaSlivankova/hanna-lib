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
    <path d="M16.42 9.6A7.92 7.92 0 1 1 8.5 1.68a7.92 7.92 0 0 1 7.92 7.92zm-5.43 2.11H8.3l1.52-1.35.43-.41a2.97 2.97 0 0 0 .37-.45 2.1 2.1 0 0 0 .25-.52 2.04 2.04 0 0 0 .1-.64 1.89 1.89 0 0 0-.2-.89 1.85 1.85 0 0 0-.53-.63 2.3 2.3 0 0 0-.76-.37 3.23 3.23 0 0 0-.88-.12 2.85 2.85 0 0 0-.92.15 2.37 2.37 0 0 0-.76.42 2.31 2.31 0 0 0-.55.66 2.34 2.34 0 0 0-.27.9l1.49.2a1.23 1.23 0 0 1 .29-.72.9.9 0 0 1 1.23-.06.76.76 0 0 1 .22.57 1 1 0 0 1-.15.54 2.42 2.42 0 0 1-.39.47l-2.56 2.31v1.3H11z" />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
