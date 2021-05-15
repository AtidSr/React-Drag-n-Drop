import React from 'react'
import './css/main.css'

function App() {
  return (
    <div className="App">
          <div className="file-upload">
        <h2>Image Drag & Drop & Preview</h2>
        <form className="" encType= 'multipart/form-data'>
            <div className="custom-form-group" >
                <input type="text" name="title" placeholder="Title" />
            </div>
            <div className="custom-form-group">
                <input type="text" name="desc" placeholder="Description" />
            </div>
            <div className="custom-form-group">
                <div className="custom-file-drop-area ">
                    <input type="file"name="photos" placeholder="Enter photos" multiple="true" id="filephotos"/>
                    <label htmlFor="filephotos">Drag & Drop</label>
                </div>
                <div className="custom-file-preview">
                    <div className="prev-img">
                        <span>&times;</span>
                        <img src="https://picsum.photos/id/237/200/300" alt="asd"/>
                    </div>
                    <div className="prev-img">
                        <span>&times;</span>
                        <img src="https://picsum.photos/id/237/200/300" alt="asd"/>
                    </div>
                </div>
            </div>
            <button type="submit" className="btn-submit">Submit</button>
        </form>
    </div>
    </div>
  );
}

export default App;
