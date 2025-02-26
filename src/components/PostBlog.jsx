// icon
import { FaArrowRight } from "react-icons/fa";

function PostBlog({images, decriptions, posts, }) {
  return (
    <div className="bg-black-50 ">
      <img src={images} className="img-fluid" alt="" />
      <p className="text-success my-2">September 12  I Read in 6 minutes</p>
      <h2>{decriptions}</h2>
      <p className="text-black-50 bg-white my-3">{posts}</p>
      <button className="btn btn-success"> Read more <FaArrowRight /></button>
    </div>
  )
}

export default PostBlog
