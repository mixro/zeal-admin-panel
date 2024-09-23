import { useState } from 'react';
import './newService.css'
import app from "../../firebase";
import { useDispatch, useSelector } from 'react-redux';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addService } from '../../redux/apiCalls';

const NewService = () => {
  const [inputs, setInputs] =  useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const [perc, setPerc] = useState(0);
  const {error, isFetching} = useSelector((state) => state.zealServices);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev,  [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setPerc(progress);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            console.log("Upload is in progress");
        }
      }, 
      (error) => {
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const service = { ...inputs, img: downloadURL };
          addService(service, dispatch);
        });
      }
    );
  } 

  return (
    <div className="newProduct">
        <h1 className="addProductTitle">NEW SERVICE</h1>
        <form className="addProductForm">
          <div className="addProduct_Padding">
            <div className="addProductItem">
              <label>Image</label>
              <input 
                type="file" 
                id="file" 
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div style={{marginBottom: 30}}>
              <p>uploading progress: {Math.floor(perc)}%</p>
            </div>
          </div>
          <div className="addProduct_container">
            <div className="addProduct_left">
              <div className="addProductItem">
                <label>Title</label>
                <input 
                  name='title'
                  type="text" 
                  placeholder="Eg; Autmation systems installation" 
                  onChange={handleChange}
                />
              </div>
              <div className="addProductItem">
                <label>Price</label>
                <input
                  name="price"
                  type="number"
                  placeholder="Eg; 349045"
                  onChange={handleChange}
                />
              </div>
              <div className="addProductItem">
                <label>Technicians</label>
                <input
                  name="technicians"
                  type="number"
                  placeholder="Eg; 34"
                  onChange={handleChange}
                />
              </div>
            </div>
  
            <div className="addProduct_left">
                <div className="addProductItem">
                    <label>Category</label>
                    <input
                    name="category"
                    type="text"
                    placeholder="Eg; Automation and robotics"
                    />
                </div>
                <div className="addProductItem">
                    <label>Field</label>
                    <input
                    name="field"
                    type="text"
                    placeholder="Eg; Electrical"
                    />
                </div>
                <div className="addProductItem">
                    <label>Description</label>
                    <textarea 
                      defaultValue="Add Product description" 
                      name='desc'
                      onChange={handleChange} 
                    >
                    </textarea>
                </div>
            </div>
          </div>
  
          <div className="newRoom_margin">
            <button onClick={handleClick} className="addProductButton">{isFetching ? "Creating..." : "create"}</button>
            {error && <p style={{color: "red"}}>Error occured</p>}
          </div>      
        </form>
    </div>
  )
}

export default NewService