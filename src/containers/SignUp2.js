import React from 'react';
import {Link} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import profileImage from "../assets/images/placeholder.jpg";
import { connect } from "react-redux";
import { singUp} from "actions/user";
import Button from "@material-ui/core/Button";



class UploadImg extends React.Component {
    constructor (props){
        super(props);
        this.handleImageChange=this.handleImageChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={
            imageChanged:false,
            file:profileImage
        }
    }

    handleSubmit=(e)=>{
        // console.log(this.props.new_User);
        const {name,email,password} =this.props.new_User;
        console.log(name,email,password)
        e.preventDefault()
        let formData = new FormData();
        formData.append('name',name);
        formData.append('email',email);
        formData.append('password',password);
        formData.append('image',this.state.file);
        
        console.log(formData)
        
        // this.props.singUp(formData)
       
    }

    handleImageChange(event) {

        if (event.target.files[0]) {
            this.setState({
                file: URL.createObjectURL(event.target.files[0]),
                activeClass: "imgPreview"
            })

        } else {
            this.setState({
                file: profileImage
            })

        }
        var registeringUser=this.props.new_User;
        registeringUser.image=this.state.file;
        console.log(registeringUser);

    }

 render () {
    //  console.log(this.props.new_User)
  return (
    <div
      className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      <div className="login-content text-center">
        <div className="login-header">
          <Link className="app-logo" to="/app/app-module/login-1" title="Jambo">
            <img src={require("assets/images/logo-color.png")} alt="jambo" title="jambo"/>
          </Link>
        </div>

        {/* <div className="login-avatar mb-4">
          <img className="rounded-circle size-120" src={require("assets/images/placeholder.jpg")} alt="" title=""/>
        </div> */}
        <form>
        <div className="mb-4">
          <label htmlFor="userProfile">
                                                <input type="file" name="userProfile" id="userProfile" onChange={this.handleImageChange} style={{display:"none"}}/>
                                                <img src={this.state.file} title="choose your profile image" alt="Profile" className={this.state.activeClass} className="rounded-circle size-120" />
                                            </label>
                                            </div>
          {/* <p><IntlMessages id="choose your profile picture"/></p> */}

          <br /><h3>John Smith</h3><br />
                                            <Link to="/app/app-module/login-1" onClick={(e)=>{this.handleSubmit(e)}} className="btn btn-primary jr-btn-rounded">
              <IntlMessages id="upload"/>
            </Link>
            </form>   
      
        {/* <form method="get" action="/app/app-module/login-1">
          <div className="form-group mb-4">
            <input type="file" placeholder="Password"
                   className="form-control form-control-lg"/>
          </div>
          <div className="form-group">
            <Link to="/app/app-module/login-1" className="btn btn-primary jr-btn-rounded">
              <IntlMessages id="upload"/>
            </Link>
          </div>
        </form> */}
        <div>
          <Link className="right-arrow" to="/app/app-module/login-1">
            <IntlMessages id="signUp.alreadyMember"/>
          </Link>
        </div>
      </div>
    </div>
  );
};
}
const mapStateToProps=(state)=>{
    return {
        new_User:state.userReducer.new_User
    }
}

export default connect(mapStateToProps,{
    singUp
})(UploadImg);