import { useEffect, useState } from 'react'

interface Params {
  id?: number
  url: string
}

const useData = (params: Params) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()

  const { id, url } = params

  useEffect(() => {
    const path = id ? `${url}/${id}` : url
    setLoading(true)

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5193/${path}`)
        const json = await response.json()
        setData(json)
      } catch (error) {
        console.log('error', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id, url])

  return { data, loading }
}

export default useData
