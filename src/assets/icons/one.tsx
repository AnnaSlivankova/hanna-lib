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
    <path d="M16.42 9.6A7.92 7.92 0 1 1 8.5 1.68a7.92 7.92 0 0 1 7.92 7.92zM9.67 6.5H8.25L6.09 8.1l.8 1.1 1.23-.94v4.81h1.55z" />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
