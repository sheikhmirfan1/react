


const User = ({name, power, identity}) => {
    
    return(
        <>
        <h1>Hello superhero : {name} </h1>
        <p>My power is : {power}</p>
        {identity && <p>We know you</p> }
        </>
    )
}


export default User