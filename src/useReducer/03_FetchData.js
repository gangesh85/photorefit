import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FetchData() {

    const [post, setPost] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            setLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch(() => {
            setLoading(false)
            setPost('')
            setError('Something went wrong')
        })
    }, [])

  return (
    <div>
        {loading ? 'Loading..' : post.title}
        {error ? error : null}
    </div>
  )
}

export default FetchData