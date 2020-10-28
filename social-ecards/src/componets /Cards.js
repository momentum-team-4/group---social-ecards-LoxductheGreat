import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { getcards, getAuth } from './axios'
import Card from './Card'

function Cards (props) {
  // Going to show the list of cards

  const { authToken } = props
  const [cards, setCards] = useState([])
  const [next, setNext] = useState(null)
  const [postLoading, setpostLoading] = useState(true)

  function loadMorePost () {
    if (next && !postLoading) {
      setpostLoading(true)
      getAuth(authToken, next).then(loadPosts)
    }
  }

  function loadPosts (data) {
    setCards(cards.concat(data.results))
    setNext(data.next)
    setpostLoading(false)
  }

  useEffect(() => {
    setpostLoading(true)
    getcards(authToken)
      .then(loadPosts)
  }, [authToken])

  // useEffect(() => {
  //   getcards(authToken).then(data => {
  //     setCards(data.results)
  //   })
  // }, [authToken])

  return (

    <div>
      <InfiniteScroll
        initialLoad={false}
        loadMore={loadMorePost}
        hasMore={next}
        loader={<p key={0}>Loading...</p>}
      >
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </InfiniteScroll>
    </div>
    // <div>
    //   {cards.map(card => (
    //     <Card key={card.id} card={card} />
    //   ))}
    // </div>
  )
}

export default Cards
