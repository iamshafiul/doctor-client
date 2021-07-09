import React from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddDoctor.scss';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e)=>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo) 
    };

    const handleFileChanged = (e)=>{
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    const handleSubmit = (e) =>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('email', info.email)
        formData.append('name', info.name)
        formData.append('number', info.number)
        
      
        fetch('http://localhost:5000/addADoctor', {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
        
    }

    return (
        <section className="addDoctor">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 p-0">
                        <div className="my-sidebar">
                            <Sidebar></Sidebar>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-12">
                        <div className="title">
                            <h5>Add a doctor</h5>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input onBlur={handleBlur} type="email" class="form-control" name="email" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input onBlur={handleBlur} type="text" name="name"  class="form-control"  />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Number</label>
                                <input onBlur={handleBlur} type="text" name="number"  class="form-control"  />
                            </div>
                            <div class="mb-3 form-check">
                                <input onChange={handleFileChanged}  type="file" name="file" class="form-check-input" />
                                <label class="form-check-label">Upload Image</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddDoctor;