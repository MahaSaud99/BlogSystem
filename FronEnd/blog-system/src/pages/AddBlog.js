import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



const AddBlog=()=>{

    const Navigate=useNavigate();
    const [blogTitle,setBlogTitle]=useState('');
    const [blogBody,setBlogBody]=useState('');
    const MySwal = withReactContent(Swal);

    


    const addBlog = async ()=>{
        const bodyValue={
            title:blogTitle,
            body:blogBody
        }

        const request= await fetch('http://localhost:8080/api/v1/blog' ,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyValue),
          });

          const data = await request.json();

          if (request.status === 201) {
            MySwal.fire({
              title: <strong>Good job!</strong>,
              html: <i>The blog added successfully!</i>,
              icon: 'success',
              showConfirmButton: false,
              timer: 2000
            })
              Navigate('/');
          }
          console.log(data);
    }

return(
    <div className="w-25 text-center">
     <h1 className="mb-5">Add New Blog</h1>

     <div className="mb-3">
      <input value={blogTitle} onChange={(e)=>setBlogTitle(e.target.value)} type="text" className="form-control" placeholder="Blog Title"/>
     </div>
     <div className="mb-3">
      <textarea value={blogBody} onChange={(e)=>setBlogBody(e.target.value)} className="form-control" rows="3" placeholder="Blog Body"></textarea>
     </div>


     <button type="button" className="btn btn-light m-3" onClick={addBlog}>Add Blog</button>


    </div>
);
}
export default AddBlog;