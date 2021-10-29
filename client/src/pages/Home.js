import React, { useContext } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import { AuthContext } from '../context/authContext'
import { useHistory } from 'react-router-dom'

const GET_ALL_POSTS = gql`
  {
    allPosts {
      id
      title
      description
    }
  }
`

const Home = () => {
  const { data, loading, err } = useQuery(GET_ALL_POSTS)
  const [fetchPosts, { data: posts }] = useLazyQuery(GET_ALL_POSTS)

  // access context
  const { state, dispatch } = useContext(AuthContext)

  // react router
  let history = useHistory()

  const ChangeUser = () => {
    dispatch({
      type: 'LOGGED_IN_USER',
      payload: 'Fredrick Otabil',
    })
  }
  if (loading) return <p className="p-5">Loading....</p>

  return (
    <div className="container">
      <div className="row p-5">
        {data.allPosts.map((post) => {
          const { id, title, description } = post
          return (
            <div className="col-md-4" key={id}>
              <div className=" bg-info card m-3 drop-in">
                <div className="card-body">
                  <div className="card-title flex">
                    <h3
                      className="text-dark"
                      style={{ fontSize: '25px', fontWeight: 'bold' }}
                    >
                      {title}
                    </h3>
                  </div>
                  <p className="card-text text-light font-large">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <button
          onClick={() => fetchPosts()}
          type="button"
          className="btn btn-primary"
        >
          Fetch Posts
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={ChangeUser}
        >
          Change User
        </button>
      </div>

      <hr />
      {JSON.stringify(posts)}
      {JSON.stringify(state.user)}

      <hr />

      {JSON.stringify(history)}
    </div>
  )
}

export default Home
