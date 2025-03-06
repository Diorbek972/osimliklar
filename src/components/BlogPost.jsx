import PostBlog from "./PostBlog"
// img
import imgbir from '../assets/fotos/tuvakbir.jpg'
import imgiki from '../assets/fotos/tuvakiki.jpg'
import imguch from '../assets/fotos/tuvakuch.jpg'
import imgtort from '../assets/fotos/tuvaktort.jpg'

function BlogPost() {
    return (
        <div className="container">
            <h1 className="text-center margin-top">Our Blog Posts</h1>
            <p className="text-center text-black-50 bg-white">We are an online plant shop offering a wide range of cheap and trendy plants. </p>
            <div className="row">
                <div className="col-md-3">
                    <PostBlog images={imgbir} decriptions={"Cactus & Succulent "} posts={"Cacti are succulents are easy care plants for any home or patio. "} />
                </div>
                <div className="col-md-3">
                    <PostBlog images={imgiki} decriptions={"Cactus & Succulent "} posts={"Cacti are succulents are easy care plants for any home or patio. "} />
                </div>
                <div className="col-md-3">
                    <PostBlog images={imguch} decriptions={"Cactus & Succulent "} posts={"Cacti are succulents are easy care plants for any home or patio. "} />
                </div>
                <div className="col-md-3">
                    <PostBlog images={imgtort} decriptions={"Cactus & Succulent "} posts={"Cacti are succulents are easy care plants for any home or patio. "} />
                </div>
            </div>
        </div>
    )
}

export default BlogPost
