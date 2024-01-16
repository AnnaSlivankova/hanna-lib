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
    <path d="M16.42 9.6A7.92 7.92 0 1 1 8.5 1.68a7.92 7.92 0 0 1 7.92 7.92zm-5.28.93h-.91V6.5H8.37L5.7 10.48v1.3h3.08v1.29h1.46v-1.28h.9zM8.77 8.1h.02v2.43H7.21z" />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
