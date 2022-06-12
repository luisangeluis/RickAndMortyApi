import React from 'react'

const SearchLocation = ({ setIdSearch }) => {

  const searchId = (e) => {
    e.preventDefault();
    // console.log(e.target.children[0].children[0].value);
    setIdSearch(e.target.children[0].children[0].value);
  }

  return (
    <div className="row justify-content-center align-items-end">
      <div className="col-8">
        <div className='card text-center bg-dark text-white'>
          <div className="card-body">
            <form onSubmit={searchId} className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
              <div className="flex-grow-1 mb-1 mb-sm-0">
                <input type="text" className='form-control form-control-lg' id="inputSearch" placeholder='type a location id' />
              </div>
              <div>
                <button className='btn-lg'>Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchLocation