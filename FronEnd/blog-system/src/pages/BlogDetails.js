import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from './Spinner';

const BlogDetails = () => {

    const [blogTitle,setBlogTitle]=useState('');
    const [blogBody,setBlogBody]=useState('');
    const [loading, setLoading] = useState(true);


  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const request = await fetch('http://localhost:8080/api/v1/blog/' + id);
      const data = await request.json();
      setBlogTitle(data.title);
      setBlogBody(data.body);
      setLoading(false);
    };
    fetchBlogDetails();
  }, []);

  const goBackHandler = () => {
    navigate(-1);
  };

  return(
    
     <div className="w-25 text-center">
        {loading ? (
        <Spinner />
      ) : (
        <>
     <h1 className="mb-5">Blog Details</h1>

     <div className="mb-3">
      <input readOnly value={blogTitle} type="text" className="form-control"/>
     </div>
     <div className="mb-3">
      <textarea readOnly value={blogBody} className="form-control" rows="3" ></textarea>
     </div>

     <button type="button" className="btn btn-light m-3" onClick={goBackHandler}>Back</button>
     </>
      )}
    </div>
  );

}
export default BlogDetails;