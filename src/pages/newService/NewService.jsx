import './newService.css'

const NewService = () => {
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
              />
            </div>
            <div style={{marginBottom: 30}}>
              <p>uploading progress: 50%</p>
            </div>
          </div>
          <div className="addProduct_container">
            <div className="addProduct_left">
              <div className="addProductItem">
                <label>Name</label>
                <input 
                  name='name'
                  type="text" 
                  placeholder="Eg; Autmation systems installation" 
                />
              </div>
              <div className="addProductItem">
                <label>Price</label>
                <input
                  name="price"
                  type="number"
                  placeholder="Eg; 349045"
                />
              </div>
              <div className="addProductItem">
                <label>Technicians</label>
                <input
                  name="technician"
                  type="number"
                  placeholder="Eg; 34"
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
                      name='description' 
                    >
                    </textarea>
                </div>
            </div>
          </div>
  
          <div className="newRoom_margin">
            <button className="addProductButton">Create</button>
            {/* {error && <p style={{color: "red"}}>Error occured</p>}  */}
          </div>      
        </form>
    </div>
  )
}

export default NewService