import './Avatar.css'


const Avatar = ({firstName, image, lastName}) => {
    return(
        <div className="avatar-container">
            <h1>Hello my name is {firstName} {lastName}</h1>
            <img src={image} alt="" />
        
        
        
        </div>

    )
}

export default Avatar