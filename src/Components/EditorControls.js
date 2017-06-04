/*
 *
 * EditorControls
 *
 */

import React, { Component } from 'react';
import Button from './Button';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import renderIf from 'render-if';
import axios from 'axios';
import {List, ListItem} from 'material-ui/List';
// import ReturnText from 'ReturnText';


import { introStart, introSave, introDemo, introResources } from '../intro';

const styles = {
  base: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  button: {
    marginRight: '10px',
  },
}



class EditorControls extends Component {
  constructor(props){
  super(props);
  this.state={
    username: '',
    password: '',
    loggedIn: false,
    loginId: '',
    signedUp: '',
    returnTexts: '',
    retrieved: false,
    saveForm: false,
    saveButton: false,
    modalSave: false,
    filename: ""
  }
}



 saveClick(e){
    e.preventDefault();
    this.setState({
      saveForm: true
    })
  }

  loginClick(e){
    e.preventDefault();
    console.log('inside loginHandle');
    axios.post('http://localhost:5000/login',{
      username: this.state.username,
      password: this.state.password
    })
      .then((response)=>{
          console.log('response from the login ' , response);
          if (response.data.status==="passwordsmatch"){
            this.setState({
              loggedIn: true,
              ulogged: "loggedin",
              loginId: response.data.postid,
              saveForm: false,
              saveButton: true
            })
          }
          if (response.data.status==="passwordsdontmatch"){
            this.setState({
              loggedIn: false,
              ulogged: "error"
            })
          }
        });
  }

  signupClick(e){
    e.preventDefault();
    console.log('inside signupHandle');
    axios.post('http://localhost:5000/signup',{
      username: this.state.username,
      password: this.state.password
    })
      .then((response)=>{
          console.log('response from the signup ' , response);
          if (response.data.status==="statusreject"){
            this.setState({
              loggedIn: false,
              signedUp: "error"
            })
          }
          if (response.data.status === "profileposted")
            this.setState({
              loggedIn: true,
              signedUp: "signedup",
              loginId: response.data.postid,
              saveForm: false,
              saveButton: true
            })
        });
   }



    saveFileClick(e){
      e.preventDefault();
      this.setState({
        modalSave: true
      })
    }


    filenameClick(e){
      e.preventDefault();
         console.log("this.props.editorInput is ", this.props.editorInput);
         axios.post('http://localhost:5000/savetext',{
            userId:  this.state.loginId,
            text: this.props.editorInput,
            name: this.state.filename
          })
            .then((response)=>{
                console.log('response from the signup ' , response);
                this.setState({
                  text: '',
                  modalSave: false
                })
              });
    }


   openFileClick(e){
     e.preventDefault();
     var self = this;

    axios.post('http://localhost:5000/retrieveText',{
      userId: this.state.loginId,
    })
      .then((response)=>{
        console.log('response from retrieveText is ', response);
          if (response.data.returnTexts.length>0){
            self.setState({
              returnTexts: response.data.returnTexts,
              retrieved: true
            }, ()=>{console.log('returnTexts is ', this.state.returnTexts)});
          }
        });
   }

   //
  //  loadRetreivedText(){
  //
  //  }


  listClick(text){

    console.log('inside listClick and the value of text is ', text);

    localStorage.setItem('retrievedText', text);

    this.props.forceUPdatefunc();

    this.setState({
      retrieved: false
    })
  }


  render(){

    let listSavedFiles;

              if(this.state.retrieved===true){
                    listSavedFiles = this.state.returnTexts.map((file,i) => {
                      return (
                        <ListItem primaryText={file.name} onClick={()=>{this.listClick(file.text)}} />
                      );
                    });
              }


  return (
    <div style={styles.base}>
      <Button
        label={'Start Program'}
        style={styles.button}
        onClick={this.props.runCode}
        dataIntro={introStart}
        dataStep={2}
      />


      {renderIf(this.state.saveButton===false)(
        <Button
          label={"LOGIN"}
          style={styles.button}
          dataIntro={introSave}
          dataStep={4}
          onClick={(e)=>{this.saveClick(e)}}
        />
      )}

      {renderIf(this.state.saveForm===true)(
        <div>
        <TextField
            hintText="Enter Username"
            floatingLabelText="Username"
            onChange={(e)=>this.setState({username: e.target.value })}
        />
        <TextField
           hintText="Enter Password"
           floatingLabelText="Password"
           onChange={(e)=>this.setState({password: e.target.value })}
         />
         <Button
           label={"LOGIN"}
           style={styles.button}
           dataIntro={introSave}
           dataStep={4}
           onClick={(e)=>{this.loginClick(e)}}
         />
         <Button
           label={"SIGNUP"}
           style={styles.button}
           dataIntro={introSave}
           dataStep={4}
           onClick={(e)=>{this.signupClick(e)}}
         />
         </div>
      )}

      {renderIf(this.state.saveButton===true)(
        <div>
         <Button
           label={"SAVE"}
           style={styles.button}
           dataIntro={introSave}
           dataStep={4}
           onClick={(e)=>{this.saveFileClick(e)}}
         />
         <Button
           label={"OPEN"}
           style={styles.button}
           dataIntro={introSave}
           dataStep={4}
           onClick={(e)=>{this.openFileClick(e)}}
         />
         </div>
      )}


      <Dialog
        title="Save your file"
        open={this.state.modalSave}
        modal={true}>

        <TextField
            hintText="Enter Filename"
            floatingLabelText="Filename"
            onChange={(e)=>this.setState({filename: e.target.value })}
        />
         <Button
           label={"SAVE FILE"}
           style={styles.button}
           dataIntro={introSave}
           dataStep={4}
           onClick={(e)=>{this.filenameClick(e)}}
         />

      </Dialog>

      <Dialog
        title="Retrieve Files"
        open={this.state.retrieved}
        modal={true}>

        <List>
          {listSavedFiles}
        </List>

      </Dialog>




      <Button
        label={"How to use this Kiwi Editor"}
        style={styles.button}
        onClick={this.props.runIntro}
        dataIntro={introDemo}
        dataStep={6}
      />
      <Button
        label={"Basic Tips"}
        style={styles.button}
        onClick={this.props.showResources}
        secondary={true}
        dataIntro={introResources}
        dataStep={5}
      />
    </div>
  )
}
}

export default EditorControls;
