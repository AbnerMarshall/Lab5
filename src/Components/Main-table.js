import axios from "axios";
import React, { Component } from "react";

class Maintable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(response => {
            this.setState({data: response.data});
        })
        .catch(error => {
            console.log(error);
        }
        );
    }

    // Delete a row from the table
    deleteRow(id) {
       const data = this.state.data;
     axios.delete("https://jsonplaceholder.typicode.com/photos/"+id)
        .then(()=> {this.setState({data: data.filter(item => item.id !== id)})})
         .catch(error => {
             console.log(error);
         });



        //this.setState({data: data.filter(item => item.id !== id)});
    }

    render(){
        const {data} = this.state;
        return (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Url</th>
                    <th></th>
                </tr>
              </thead>
              <tbody>

                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                      <td>{<img src={item.thumbnailUrl} alt=""></img>}</td>
                      <td><button onClick={()=>this.deleteRow(item.id)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }

}

export default Maintable;

