import { Publish } from '@mui/icons-material'
import './service.css'
import app from "../../firebase";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { updateService } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Service = () => {
  const [inputs, setInputs] =  useState({});
  const [updateButtonClicked, setUpdateButtonClicked] = useState(false);
  const [file, setFile] = useState(null);
  const [perc, setPerc] = useState(0);
  const location = useLocation();
  const serviceId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.zealServices);
  const service = useSelector((state) => state.zealServices.services.find((service) => service._id === serviceId));

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev,  [e.target.name]: e.target.value };
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if(file !== null) {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      const id = serviceId;

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
            const service = {...inputs, img: downloadURL };
            updateService(id, dispatch, service);
            setUpdateButtonClicked(true);
          });
        }
      );
    } else {
      const id = serviceId;
      const service = {...inputs};
      updateService(id, dispatch, service);
      setUpdateButtonClicked(true);
    }
  }
  
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Service</h1>
        <Link to="/new-service">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
            <div className="roomImage">
              <img src={service.img} alt="PR" />
            </div>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={service.img} alt="" className="productInfoImg" />
                  <span className="productName">{service.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{service._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Price:</span>
                      <span className="productInfoValue">Tsh {service.price}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Technicians:</span>
                      <span className="productInfoValue">{service.technicians}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Status:</span>
                      <span className="productInfoValue">On stock</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Category:</span>
                      <span className="productInfoValue">Automation and Robotics</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Brand: </span>
                      <span className="productInfoValue">Siemes</span>
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
                    <p>{service.title}</p>
                  </div>

                  <div className="productFormLeft-container">
                    <div className="productFormLeft-item">
                      <div className="updateProductItem">
                        <label>Title</label>
                        <input 
                          name='title'
                          type="text" 
                          placeholder="Circuit breaker" 
                          onChange={handleChange}
                        />
                      </div>
                      <div className="updateProductItem">
                        <label>Description</label>
                        <input
                          name="desc"
                          type="text"
                          onChange={handleChange}
                          placeholder="We take pride in offering a wide range of "
                        />
                      </div>
                      <div className="updateProductItem">
                        <label>Category</label>
                        <input
                          name="seats"
                          type="text"
                          placeholder="Automation"
                        />
                      </div>
                      <div className="updateProductItem">
                        <label>Technicians</label>
                        <input
                          name="technicians"
                          type="number"
                          placeholder="Siemens"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="productFormLeft-item">
                      <div className="updateProductItem">
                        <label>Price</label>
                        <input
                          name="price"
                          type="number"
                          placeholder="Siemens"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="updateProductItem">
                        <label>Status</label>
                        <select name="status" id="active">
                          <option value="free">On stock</option>
                          <option value="occupied">Off stock</option>
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
                      <img src={service.img} alt="" className="productUploadImg" />
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

export default Service