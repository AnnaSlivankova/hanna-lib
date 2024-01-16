import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    height={'100%'}
    viewBox={'0 0 24 24'}
    width={'100%'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#prefix__clip0_124_21527)'}>
      <path
        d={
          'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z'
        }
        fill={'currentColor'}
      />
    </g>
    <defs>
      <clipPath id={'prefix__clip0_124_21527'}>
        <path d={'M0 0h24v24H0z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
