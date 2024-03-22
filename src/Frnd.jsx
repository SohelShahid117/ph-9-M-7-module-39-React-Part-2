export default function Frnd({frind}){
    console.log(frind)
    const brdrStyle = {
        border :'2px dashed white',
        backgroundColor :'green',
        margin :'10px',
        padding :'20px',
        borderRadius : '10px'
    }
    const {email,id,name}=frind;
    // console.log(id);
    // console.log(email);
    // console.log(name);
    return(
        <div style={brdrStyle}>
            {/* <h4>ID:{frind.id}</h4>
            <h2>Name:{frind.name}</h2>
            <h4>Title:{frind.title}</h4>
            <h4>Email:{frind.email}</h4>
            <h4>city:{frind.address.city}</h4> */}

            <h4>ID:{id}</h4>
            <h2>Name:{name}</h2>
            {/* <h4>Title:{title}</h4> */}
            <h4>Email:{email}</h4>

            {/* <h4>city:{frind.address.city}</h4> */}
        </div>
    )
}