import { Link } from 'react-router-dom'
import './product.css'
import { Publish } from '@mui/icons-material'

const Product = () => {
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
              <img src="../../../images/cb.jpg" alt="PR" />
            </div>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="../../../images/cb.jpg" alt="" className="productInfoImg" />
                  <span className="productName">Circuit Breaker</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">sd8934uiwr988945j</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Price:</span>
                      <span className="productInfoValue">Tsh 344,556</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Rating:</span>
                      <span className="productInfoValue">4.5</span>
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
                    <p>Circuit Breaker</p>
                  </div>

                  <div className="productFormLeft-container">
                    <div className="productFormLeft-item">
                      <div className="updateProductItem">
                        <label>Title</label>
                        <input 
                          name='roomName'
                          type="text" 
                          placeholder="Circuit breaker" 
                        />
                      </div>
                      <div className="updateProductItem">
                        <label>Description</label>
                        <input
                          name="description"
                          type="text"
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
                        <label>Brand</label>
                        <input
                          name="building"
                          type="text"
                          placeholder="Siemens"
                        />
                      </div>
                    </div>

                    <div className="productFormLeft-item">
                      <div className="updateProductItem">
                        <label>Type</label>
                        <input
                          name="type"
                          type="text"
                          placeholder="Siemens"
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
                        />
                      </div>
                      <div style={{marginBottom: 30}}>
                        <p>uploading progress: 30%</p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="productFormRight">
                  <div className="productUpload LARGESCREEN">
                      <img src= "/assets/room-1.jpg" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish />
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <div className="productButton-container">
                    <button className="productButton">Update</button>
                    {/* {error && <p style={{color: "red"}}>error occurred</p>} */}
                  </div>
              </div>
          </form>
      </div>
    </div>
  )
}

export default Product