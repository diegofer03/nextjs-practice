import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { useRouter } from 'next/router'

const Product = () => {
  const [avo, setAvo] = useState<TProduct>()
  const router = useRouter()

  React.useEffect(()=>{
    if (router.isReady){
      window.fetch(`/api/avo/${router.query.id}`)
      .then((response) => response.json())
      .then((data)=>{
        setAvo(data)
      })
    }
  },[router.isReady])
  return (
    <div>
      <Navbar />
      <img src={avo?.image}/>
      <div>{avo?.name}</div>
    </div>
  )
}

export default Product