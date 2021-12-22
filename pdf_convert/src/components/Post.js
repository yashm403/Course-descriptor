import React, { Component } from 'react';
import PDF from './PDF';
import courses from './courses.json';
class Post extends Component {
    state = {
        credit:'',
        Name:'',
        code:'',
        title: '',
        syllabus:'',
        description: '',
        //image: '',
        references:'',
        message: "",
        items: [],
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.title || !this.state.description || !this.state.references){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }

    // Table event functions

    updateMessage(event) {
        this.setState({
          message: event.target.value
        });
      }
    
      handleClick() {
        var items = this.state.items;
    
        items.push(this.state.message);
    
        this.setState({
          items: items,
          message: ""
        });
      }
    
      handleItemChanged(i, event) {
        var items = this.state.items;
        items[i]  = event.target.value;
    
        this.setState({
          items: items
        });
      }
    
      handleItemDeleted(i) {
        var items = this.state.items;
    
        items.splice(i, 1);
    
        this.setState({
          items: items
        });
      }

    // Table even function ends

    // Table -> render rows

    renderRows() {
        var context = this;
    
        return  this.state.items.map(function(o, i) {
                  return (
                    <tr key={"item-" + i}>
                      <td>
                        <input
                          type="text"
                          value={o}
                          onChange={context.handleItemChanged.bind(context, i)}
                        />
                      </td>
                      <td>
                        <button
                          onClick={context.handleItemDeleted.bind(context, i)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                });
            }
    // end render rows

    render(){
        
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Course Description</legend>
                                                <div>
                                                <select class="form-control form-control-sm"  aria-label=".form-control-sm example"  onChange={this.onChange('code')} name="code" >
                                                <option selected>Course code</option>
                                                {courses.map((dr,i) => {
							
								return (
                                                
                                                    
                                                    <option    value={i}>{dr.Code}</option>
                                                   
                                                   
                                             
                                                );
                                            })}
                                               </select>
                                                </div>
                                                <div>
                                                <input class="form-control form-control-sm"  onChange={this.onChange('credit')} name = "Credits" type="text" placeholder="Credits" aria-label=".form-control-sm example"></input>
                                                </div>
                            
                                                <div>
                                                <input class="form-control form-control-sm" onChange={this.onChange('Name')}  name ="Faculty name" type="text" placeholder="Faculty Name" aria-label=".form-control-sm example"></input>
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('title')} name="title" type="text" placeholder="Course Title" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('description')} className="form-control" name="description" placeholder="Course Description" rows="7s"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('syllabus')} className="form-control" name="syllabus" placeholder="Syllabus" rows="7"></textarea>
                                                </div>
                                                {/* <div>
                                                    <table className="">
                                                        <thead>
                                                            <tr>
                                                                <th>Marking</th>
                                                                <th>Scheme</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>{this.renderRows()}</tbody>
                                                    </table>
                                                    <hr/>
                                                    <input type="text" value={this.state.message} onChange={this.updateMessage.bind(this)}/>
                                                    <button onClick={this.handleClick.bind(this)}>Add marking component</button>
                                                </div> */}
                                                <div>
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('references')} className="form-control" name="references" placeholder="References" rows="7"></textarea>
                                                </div>
                                                <div>

                                                </div>

                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Submit</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <PDF code ={this.state.code} credit={this.state.credit} Name={this.state.Name} title={this.state.title} description={this.state.description} syllabus={this.state.syllabus} references={this.state.references} />
                    )
                }
            </>
        );
    }
}

export default Post;