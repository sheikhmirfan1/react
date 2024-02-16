import './Welcome.css'



const Welcome = () => {

    const heading = <h1>Welcome this is my first component</h1>
    const myName = 'John'
    const myAge = 32

    const myUser = {
        myName: 'Ana',
        myLastName: 'Martinez'
    }

    const myUsers = [
        {
            name: 'John',
            lastName: 'Doe'
        },
        {
            name: 'Jane',
            lastName: 'Doe'
        }
    ]
    
    let myBoolean = true
    let isLoading = true

        

    return (
        <div className='welcome-card'>
            {isLoading && <p>Loading...</p>}

            {!myBoolean ? <p>Hello this is a true statement</p> : <p>This is a false statement</p>}
            <h1 style={{color : 'purple', fontSize : '20px'}}>Hello {myBoolean ? 'User' : 'Guest'}</h1>
            <h2 className={myBoolean ? 'welcome' : 'good-bye'}>Welcome {myUser.myName} {myUser.myLastName}, I am {30 + 34} </h2>
            {myUsers.map(user => {
                return (
                    <>
                        <p>{user.name}</p>
                        <p>{user.lastName}</p>
                    </>
                )
            })}
        </div>
    )
}


export default Welcome