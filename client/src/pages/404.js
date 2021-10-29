import React from 'react'

function NotFound() {
  return (
    <div className=" container d-flex justify-content-center align-items-center p-5">
      <div className="row p-5">
        <h4>
          Oops!
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/sad-but-relieved-face_1f625.png"
            height="40px"
            alt=""
          />
          page not found
        </h4>
      </div>
    </div>
  )
}

export default NotFound
