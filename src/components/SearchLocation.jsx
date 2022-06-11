import React from 'react'

const SearchLocation = () => {

    const  searchId=(e)=>{
        e.preventDefault();
        console.log('hola');
    }


    return (
        <div className='card text-center bg-dark text-white'>
            <div className="card-body">
                <form onSubmit={searchId} className='d-flex justify-content-center'>
                    <input type="text" className='flex-grow-1 text-center' placeholder='type a location id'/>
                    <button className=''>Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchLocation