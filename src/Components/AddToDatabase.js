import React, { Component } from "react";
import axios from "axios";

class AddToDatabase extends Component{

    constructor(props){
        super(props);
        this.state={
            AlbumId:'',
            Title:'',
            FileName:'',
            Color: this.getRandomColor(),
        }
    }
//create random hex color
getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    ChangeRandomColor = () => {
        this.setState({Color:this.getRandomColor()});
    }

    submitHandler = (e) => {
        e.preventDefault();
        const albumId=this.state.AlbumId;
        const title=this.state.Title;
        const url="https://via.placeholder.com/600/"+this.state.FileName;
        const thumbnailUrl="https://via.placeholder.com/"+this.state.FileName;

        const data = {albumId,title,url,thumbnailUrl};

        axios.post("https://jsonplaceholder.typicode.com/photos",data)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        }
        );
    }

render(){
   // const Color=this.getRandomColor();
const Color=this.state.Color;
const AlbumId=this.state.AlbumId;
const Title=this.state.Title;
const FileName=this.state.FileName;


    return(
        <div>
            <form onSubmit={this.submitHandler}>
                <div>
                <label>AlbumId: </label>
                <input type="text" name="AlbumId" value={AlbumId} onChange={this.changeHandler}/>

                <label>Title: </label>
                <input type="text" name="Title" value={Title} onChange={this.changeHandler}/>

                    <label>File Name: </label>
                    <input type="text" name="FileName" value={FileName} onChange={this.changeHandler}/>
                </div>

                    <div className="Box" style={{backgroundColor:Color}} onClick={this.ChangeRandomColor}>150 x 150</div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
}

export default AddToDatabase;
