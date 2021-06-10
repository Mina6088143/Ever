import React from "react";
import userImg from "../avatar.svg";
import {storage} from "../firebase/firebase"

export class UserInfo extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
    this.forChange = this
      .forChange
      .bind(this);
      this.forUpload = this.forUpload.bind(this);
  }
  forChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  forUpload = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
        console.log(error);
      }, 
    () => {
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">UserInfo</div>
        <div className="content">
          <div className="image">
          
            <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
            <br/>
              <input type="file" onChange={this.forChange}/>
              <button onClick={this.forUpload} className="btnSub">Upload</button>
            <br/>            
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">Summit</button>
        </div>
      </div>
    );
  }
}
