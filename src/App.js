import React, {useState} from 'react'
import './css/main.css'

function App() {
  const [post, setPost] = useState({
    title:'',
    desc: '',
    photos:[]
  })

  const [highlight, setHighlight] = useState(false)
  

  const {title,desc, photos} = post
  const handleChange = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = e => {
    let files = e.target.files

    handleFile(files)
  }

  const handleFile = files => {
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


  const handleDelete = e => {
    let target = e.target.parentElement
    let targetIndex = target.dataset.imgindex * 1
    setPost({
      ...post, 
      photos:[...photos.slice(0,targetIndex), ...photos.slice(targetIndex +1)] })
  }

  const handleHighlight = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setHighlight(true)
  }
  const handleUnhighlight = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setHighlight(false)
  }
  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()

    let data = e.dataTransfer
    let files = data.files
    setHighlight(false)
    handleFile(files)
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
                <div className={handleHighlight? "custom-file-drop-area hightlight" : "custom-file-drop-area"}
                onDragEnter={handleHighlight} 
                onDragOver={handleHighlight} 
                onDragLeave={handleUnhighlight}
                onDrop={handleDrop}
                >
                    <input type="file" name="photos" placeholder="Enter photos" multiple="true" id="filephotos" onChange={handleFileChange}/>
                    <label htmlFor="filephotos">Drag & Drop</label>
                </div>
                <div className="custom-file-preview">
                {photos.length > 0 && photos.map((item, index) => (
                    <div className="prev-img" key={index} data-imgIndex={index}>
                      <span onClick={handleDelete}>&times;</span>
                      <img src={item.src} alt={item.name}/>
                  </div>
                ))}
                </div>
            </div>
            <button type="submit" className="btn-submit">Submit</button>
        </form>
    </div>
    </div>
  );
}

export default App;
