import React, { useEffect, useState } from 'react'
import Friend from './Friend'
import { getFollowed } from './axios'

function friendsList (props) {
  const { authToken } = props
  const [followed, setFollowed] = useState([])

  useEffect(() => {
    getFollowed(authToken).then(data => {
      setFollowed(data.results)
    })
  }, [authToken])

  console.log(followed)

  return (
    <div>
      {followed.map(follow => (
        <Friend key={follow.id} follow={follow} />
      ))}
    </div>
  )
}

export default friendsList
