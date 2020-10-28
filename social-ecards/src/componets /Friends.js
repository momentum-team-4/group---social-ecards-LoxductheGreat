import React, { useEffect, useState } from 'react'
import Friend from './Friend'
import { getFollowed, getFollowers } from './axios'

function FriendsList (props) {
  const { authToken } = props
  const [followed, setFollowed] = useState([])
  const [followers, setFollowers] = useState(0)

  useEffect(() => {
    getFollowed(authToken).then(data => {
      setFollowed(data.results)
    })
  }, [authToken])

  useEffect(() => {
    getFollowers(authToken).then(data => {
      setFollowers(data)
    })
  }, [authToken])

  console.log(followers)



  // console.log(followed)

  // its not console logging data at all

  return (
    <div>
      {followed.map(follow => (
        <Friend key={follow.id} follow={follow} />
      ))}
    </div>
  )
}

export default FriendsList
