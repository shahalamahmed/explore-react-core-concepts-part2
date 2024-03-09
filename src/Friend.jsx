export default function Friend ({friend}){
    const {name, email } = friend;
    return(
        <div>
            <h4>name:{name}</h4>
            <h4>Email: {email} </h4>
        </div>
    )
}