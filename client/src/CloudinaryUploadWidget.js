import React, { Component } from "react";
let imageUrl;

//Function to use photos using Cloudinary
class CloudinaryUploadWidget extends Component {

  constructor(props) {
    super(props)
  }


  componentDidMount() {
    console.log(this.props)
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: "danielbeanscorner",
      uploadPreset: "fannt0nv"
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        imageUrl = result.info.url
        this.props.setUserFormData({
          ...this.props.userFormData, imageURL: imageUrl
        })
        console.log("Done! Here is the image info: ", result.info);
      }
    }
    );
    // addEventListener for sumbit photo to form
    document.getElementById("upload_widget").addEventListener(
      "click", function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button id="upload_widget" className="cloudinary-button">
        Upload
      </button>
    );
  }
}

export default CloudinaryUploadWidget;
