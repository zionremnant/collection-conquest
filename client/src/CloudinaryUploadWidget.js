import React, { Component } from "react";
let imageUrl;

//Function to use photos using Cloudinary
class CloudinaryUploadWidget extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "danielbeanscorner",
        uploadPreset: "fannt0nv",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          // console.log(result.info.url);
          imageUrl = result.info.url;
          if (this.props.imageData.length < 1) {
            this.props.setImageData([imageUrl]);
          } else {
            this.props.setImageData([...this.props.imageData, imageUrl]);
          }
          console.log(this.props.imageData);
          this.props.setUserFormData({
            ...this.props.userFormData,
            imageURL: this.props.imageData,
          });
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );
    // addEventListener for sumbit photo to form
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
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
