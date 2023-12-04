type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'span'
  children: string
  size?: 'h1' | 'h2' | 'h3' | 'span'
}

export const HighlightedText = ({ as = 'h2', children, size }: Props) => {
  const height = {
    h1: 'h-8',
    h2: 'h-6',
    h3: 'h-4',
    span: 'h-2',
  }[size ?? as]
  const font = {
    h1: 'text-6xl',
    h2: 'text-4xl',
    h3: 'text-2xl',
    span: 'text-base',
  }[size ?? as]
  const padding = {
    h1: 'px-3',
    h2: 'px-2',
    h3: 'px-1.5',
    span: 'px-1',
  }[size ?? as]

  const hightlight = (
    <>
      <div className={`${height} ${padding} absolute top-1/2 translate-y-1/4 left-1/2 -translate-x-1/2 bg-sky-200 dark:bg-sky-700 rounded-full text-transparent`}>
        {children}
      </div>
      <span className="absolute top-1/2 -translate-y-1/2 left-0">{children}</span>
    </>
  )

  const content = () => {
    switch(as) {
      case 'h1': 
        return <h1>{children}</h1>
      case 'h3':
        return <h3>{children}</h3>
      case 'span':
        return <span>{children}</span>
      default:
        return <h2>{children}</h2>
    }
  }
  
  return (
    <div className={`${font} relative font-bold inline-block`}>
      {content()}
      <div className="whitespace-nowrap">{hightlight}</div>
    </div>
  )
}