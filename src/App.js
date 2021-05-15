import React, {useState} from 'react'
import './css/main.css'

function App() {
  const [post, setPost] = useState({
    title:'',
    desc: '',
    photos:[]
  })


  const {title,desc, photos} = post
  const handleChange = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = e => {
    let files = e.target.files
    let photoArray = []

    for(let file of files) {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.addEventListener('load', () => {
        let fileObj = {
          name: file.name,
          type: file.type,
          size: file.size,
          src: reader.result
        }
        photoArray.push(fileObj)
        setPost({...post, photos:[...photos, ...photoArray] })
      })
    }
  }
  return (
    <div className="App">
          <div className="file-upload">
        <h2>Image Drag & Drop & Preview</h2>
        <form className="" encType= 'multipart/form-data'>
            <div className="custom-form-group" >
                <input type="text" name="title" placeholder="Title" value={title} onChange={handleChange}/>
            </div>
            <div className="custom-form-group">
                <input type="text" name="desc" placeholder="Description" value={desc} onChange={handleChange}/>
            </div>
            <div className="custom-form-group">
                <div className="custom-file-drop-area ">
                    <input type="file"name="photos" placeholder="Enter photos" multiple="true" id="filephotos" onChange={handleFileChange}/>
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
