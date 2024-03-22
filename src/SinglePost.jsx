import './singlePost.css'

export default function SinglePost({post}){
    console.log(post);
    const {id,title,body} = post;
    // console.log(id);
    // console.log(title)
    // console.log(body)

    return(
        <div className='post'>
            <h3>Id:{id}</h3>
            <h4>Title : {title}</h4>
            <p>Description : {body}</p>
        </div>
    )
}