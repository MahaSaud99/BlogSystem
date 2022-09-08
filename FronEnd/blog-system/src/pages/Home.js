import { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner"

const Home=()=>{

    const [blogList , setBlogList]=useState([]);
    const [loading, setLoading] = useState(true);
    const myStyle={
      color:"black",
      textDecoration:"none",
    }

    const Navigate=useNavigate();


    useEffect(() => {
        const fetchBlogs = async () => {
          const request = await fetch('http://localhost:8080/api/v1/blog');
          const data = await request.json();
          setBlogList(data);
          setLoading(false);
        };
        fetchBlogs();
      }, []);


      const addBlog=()=>{
       Navigate('/addBlog');
      }

return(

  <>
  { loading ? <Spinner/> :(
    <>
    <h1>Blog System</h1>
      <ul className='list-group w-25 mt-3'>
        {blogList.map((blog) => (
          <li key={blog.id} id={blog.id} className="list-group-item list-group-item-action list-group-item-light">
            <Link style={myStyle} to={`/blogDetails/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>

      <button type="button" class="btn btn-light m-3" onClick={addBlog}>Add Blog</button>
      </>
       ) }
      </>
);
 }
export default Home;