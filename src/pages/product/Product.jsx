import './product.css'
import { useState } from 'react';
import { Publish } from '@mui/icons-material'
import app from "../../firebase";
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateProduct } from '../../redux/apiCalls';

const Product = () => {
  const [inputs, setInputs] =  useState({});
  const [sets, setSets] = useState({});  
  const [updateButtonClicked, setUpdateButtonClicked] = useState(false);
  const [file, setFile] = useState(null);
  const [perc, setPerc] = useState(0);
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.zealProducts);
  const product = useSelector((state) => state.zealProducts.products.find((product) => product._id === productId));

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev,  [e.target.name]: e.target.value };
    });
  };

  const handleSet = (e) => {
    setSets((prev) => {
      return { ...prev,  [e.target.name]: e.target.value.split(",") };
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if(file !== null) {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      const id = productId;

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
          // Handle unsuccessful uploads
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const product = {...inputs, ...sets, img: downloadURL };
            updateProduct(id, dispatch, product);
            setUpdateButtonClicked(true);
          });
        }
      );
    } else {
      const id = productId;
      const product = {...inputs, ...sets};
      updateProduct(id, dispatch, product);
      setUpdateButtonClicked(true);
    }
  }

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/new-product">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
            <div className="roomImage">
              <img src={product.img} alt="PR" />
            </div>
          </div>
          
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img} alt="" className="productInfoImg" />
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Price:</span>
                      <span className="productInfoValue">Tsh {product.price}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Rating:</span>
                      <span className="productInfoValue">{product.rating}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Status:</span>
                      <span className="productInfoValue">{product.status === 1 ? "On stock" : "Off stock"}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Categories:</span>
                      <span className="productInfoValue">
                        {product.categories.map((cat) => (
                          <p key={cat.id} style={{whiteSpace: "nowrap"}}>{cat}</p>
                        ))}
                      </span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Brand: </span>
                      <span className="productInfoValue">{product.brand}</span>
                  </div>
                  <div className="productInfoItemm">
                      <p>"We take pride in offering a wide range of high quality electrical"</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <div className="productFormLeft-title">
                    <p>{product.title}</p>
                  </div>

                  <div className="productFormLeft-container">
                    <div className="productFormLeft-item">
                      <div className="updateProductItem">
                        <label>Title</label>
                        <input 
                          name='title'
                          type="text" 
                          placeholder={product.title} 
                          onChange={handleChange}
                        />
                      </div>
                      <div className="updateProductItem">
                        <label>Description</label>
                        <input
                          name="desc"
                          type="text"
                          placeholder={product.desc}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="updateProductItem">
                        <label>Categories</label>
                        <input
                          type="text" 
                          name="categories"
                          placeholder={product.categories.map((c) => (c))}
                          onChange={handleSet}
                        />
                      </div>
                      <div className="updateProductItem">
                        <label>Brand</label>
                        <input
                          name="brand"
                          type="text"
                          placeholder={product.brand}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="productFormLeft-item">
                      <div className="updateProductItem">
                        <label>Type</label>
                        <input
                          name="type"
                          type="text"
                          placeholder={product.type}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="updateProductItem">
                        <label>Status</label>
                        <select name="status" id="active" onChange={handleChange}>
                          <option value="true">On stock</option>
                          <option value="false">Off stock</option>
                        </select>
                      </div>
                      <div className="updateProductItem">
                        <label>Image</label>
                        <input
                            type="file" 
                            id="file" 
                            style={{border: "none"}}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                      </div>
                      <div style={{marginBottom: 30}}>
                        <p>uploading progress: {Math.floor(perc)}%</p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="productFormRight">
                  <div className="productUpload LARGESCREEN">
                      <img src={product.img} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish />
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <div className="productButton-container">
                    <button onClick={handleUpdate} className="productButton">{updateButtonClicked ? (isFetching ? "Updating.." : "Update") : "Update"}</button>
                    {updateButtonClicked && error &&
                      <div className="error">
                        <p>error occurred</p>
                      </div>
                    } 
                  </div>
              </div>
          </form>
      </div>
    </div>
  )
}

export default Product