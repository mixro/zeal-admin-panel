import { useState } from 'react';
import './newProduct.css'
import { useDispatch, useSelector } from 'react-redux';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addProduct } from '../../redux/apiCalls';
import app from "../../firebase";

const NewProduct = () => {
  const [inputs, setInputs] =  useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();
  const [perc, setPerc] = useState(0);
  const {error, isFetching} = useSelector((state) => state.zealProducts);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev,  [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
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
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProduct(product, dispatch);
        });
      }
    );
  } 

  return (
    <div className="newProduct">
        <h1 className="addProductTitle">NEW PRODUCT</h1>
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
                  placeholder="Eg; Circuit Breaker" 
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
                <label>Brand</label>
                <input
                  name="brand"
                  type="text"
                  placeholder="Eg; Siemens"
                  onChange={handleChange}
                />
              </div>
              <div className="addProductItem">
                <label>Type</label>
                <input
                  name="type"
                  type="text"
                  placeholder="Eg; Device"
                  onChange={handleChange}
                />
              </div>
            </div>
  
            <div className="addProduct_left">
                <div className="addProductItem">
                    <label>Categories</label>
                    <input
                      name="categories"
                      type="text"
                      placeholder="Eg; Automation and robotics"
                      onChange={handleCat}
                    />
                </div>
                <div className="addProductItem">
                    <label>Status</label>
                    <select name="status" id="active" onChange={handleChange}>
                      <option value="true">On stock</option>
                      <option value="false">Off stock</option>
                    </select>
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

export default NewProduct