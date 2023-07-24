import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

function HomePage() {
  
  const [allAvo, setAllAvo] = React.useState<Array<TProduct>>([])

  React.useEffect(()=>{
    window.fetch('/api/avo')
    .then((response) => response.json())
    .then(({data, length})=>{
        setAllAvo(data)
    })
  },[])
  return (
    <div>
        HomePage
        {allAvo.map(avo => (
            <div key={avo.id}> <Link href={`/product/${avo.id}`}>{avo.name}</Link></div>
        ))
        }
    </div>
  )
}

export default HomePage