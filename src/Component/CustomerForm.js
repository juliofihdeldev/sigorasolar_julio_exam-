import React, { Component } from 'react';
import '../App.css';

class CustomerForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            info : ""
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);   
    }


    
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        this.setState({
            info: JSON.parse(stringifyFormData(data))
        })

        alert("data have been add to the state")
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="contentForm" >
                <div className="title"> Customer information </div>
                <div className="form"> 
                    <div className="basicInfo">
                        <div className="title">
                            Basic info
                        </div>
                        <div className="flexProps">
                            <label name="name"> Name : </label>
                            <input type="text" className="inputForm" name="name"/>
                        </div>
                        <div className="flexProps">
                            <label name="Addresse"> Addresse : </label>
                            <input type="text" name="Addresse" value="1878 Coltn Road Charlotte ville, VA 22911 "  className="noBorder" readOnly/>
                        </div>
                        <div className="flexProps">   
                            <label name="email"> Email : </label>
                            <input type="mail" name="email" className="inputForm"  />
                        </div>
                        <div className="flexProps">   
                            <label name="email"> Phone : </label>
                            <input type="tel" name="phone" className="inputForm"  />
                        </div>
                        <div className="flexProps">
                            <label name="Addresse"> Account #: </label>
                            <input type="text" name="Addresse" value="11376"  className="noBorder" />
                        </div>
                    </div>

                    <div className="infoBox">
                        <div className="title">
                            Home info
                        </div>
                        <div  className="flexProps">
                            <label name="squareFootageHome"> Square Footage of Home: </label>
                            <input type="text" name="squareFootageHome"  className="inputForm"  />
                        </div>
                        <div  className="flexProps">
                            <label name="homeValue"> Home value (Cost estimation) </label>
                            <input type="text" name="homeValue"  className="inputForm" />
                        </div>
            
                        <div  className="flexProps">
                            <label name="Addresse">  New construction ? </label>
                            <input type="radio" name="if_new_construction" value="Yes" /> yes 
                            <input type="radio" name="if_new_construction" value="No" className="spaceForNo"/> No
                        </div>
                    </div>

                     <div className="infoBox">
                        <div className="title">
                            Energy Info
                        </div>
                        <div  className="flexProps">
                            <label name="squareFootageHome"> Utility Company </label>
                            <select className="inputForm">
                                {/* <option value="company"> </option> */}
                            </select>
                        </div>

                        <div  className="flexProps">
                            <label name="account"> Account #</label>
                            <input type="text" name="account"  className="inputFormShort"  />

                           <span className="spaceForNo" > Heating: </span> <input type="radio" name="if_new_construction" value="Yes" className="spaceForNo" /> Electric  
                            <input type="radio" name="if_new_construction" value="Yes" /> Propane  
                        </div>

                        <div className="">
                            <label name="account"> 12 month consumption</label> <br/>

                            <table className="spaceForNo"> 
                            <tbody>
                                <tr>
                                    <td>  Jan: <input type="text" name="Jan"  className="inputFormShort"  /></td>
                                    <td>  May: <input type="text" name="May"  className="inputFormShort"  /> </td>
                                    <td>  Sep: <input type="text" name="Sep"  className="inputFormShort"  /> </td>
                                </tr>
                                <tr>
                                    <td> Feb: <input type="text" name="Feb"  className="inputFormShort"  /></td>
                                    <td>  Jun: <input type="text" name="Jun"  className="inputFormShort"  /> </td>
                                    <td>  Oct: <input type="text" name="Oct"  className="inputFormShort"  /> </td>
                                </tr>
                                <tr>
                                    <td>  Mar: <input type="text" name="Mar"  className="inputFormShort"  /></td>
                                    <td>  Jul: <input type="text" name="Jul"  className="inputFormShort"  /> </td>
                                    <td>  Nov: <input type="text" name="Nov"  className="inputFormShort"  /> </td>
                                </tr>
                                <tr>
                                    <td> Apr: <input type="text" name="Apr"  className="inputFormShort"  /></td>
                                    <td>  Aug: <input type="text" name="Aug"  className="inputFormShort"  /> </td>
                                    <td>  Dec: <input type="text" name="Dec"  className="inputFormShort"  /> </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="infoBox">
                            <div className="title">
                                Financial info 
                            </div>

                            <div  className="flexProps">
                                <label name="combineInfo"> Combined income </label>
                                <input type="text" name="combineInfo"  className="inputForm"  />
                            </div>
                            <div  className="flexProps">
                                <label name="Debt"> Debt </label>
                                <input type="text" name="Debt"  className="inputFormShort" />
                            
                                <label name="creditScore"> Credit score </label>
                                <input type="text" name="creditScore"  className="inputFormShort" />
                            </div>

                            <div  className="flexProps">
                                <label name="numberYearAdress"> Number of the years at Address </label>
                                <input type="text" name="numberYearAdress"  className="inputForm"  />
                            </div>
                
                            <div  className="flexProps">
                                <label name="employer"> Employer </label>
                                <input type="text" name="employer"  className="inputForm"  />
                            </div>

                            <div  className="flexProps">
                                <label name="numberYearEmployer"> Number of the years with employer </label>
                                <input type="text" name="numberYearEmployer"  className="inputForm"  />
                            </div>

                            <div  className="flexProps">
                                <label name="legaly"> Legaly</label>
                                <input type="radio" name="legaly" value="Maried" /> Maried  
                                <input type="radio" name="legaly" value="Single" /> Single  
                            </div>


                            <div  className="flexProps">
                                <label name="annualLiability"> Annual Liabilities </label>
                                <input type="text" name="annualLiability"  className="inputForm"  />
                            </div>

                            <div  className="flexProps">
                                <label name="assot"> Assots </label>
                                <input type="text" name="assot"  className="inputForm"  />
                            </div>

                            <div  className="flexProps">
                                <label name="bank"> Bank </label>
                                <input type="text" name="bank" className="inputForm"  />
                            </div>

                            <div className="flexProps">
                                <label name="numberBank"> # of the year at Bank </label>
                                <input type="text" name="numberBank"  className="inputForm"  />
                            </div>

                             <div className="flexProps">
                                <label name="totalBalance"> Total Balances </label>
                                <input type="text" name="totalBalance"  className="inputForm"  />
                            </div>
                        </div>

                         <div className="infoBox">
                            <div className="title">
                                Preferred communication method 
                            </div>
                            <input type="radio" name="communicationMethod" className="spaceForNo"/> Phone 
                            <input type="radio" name="communicationMethod" className="spaceForNo"/> Text
                            <input type="radio" name="communicationMethod" className="spaceForNo"/> Email
                        </div>
                        <div className="infoBox">
                            <div className="title">
                                Sales notes
                            </div>
                            <textarea name="salesNotes"> </textarea>
                        </div>

                         <div className="infoBox">
                            <div className="title">
                                Account Management Notes
                            </div>
                            <textarea name="accountManagerNotes"> </textarea>
                        </div>

                         <div className="infoBox">
                            <div className="title">
                               Project info
                            </div>
                           <label>  Signed Date  </label> <br/>
                            <div  className="flexProps">
                                <label name="signPrice"> Price </label>
                                <input type="number" name="signPrice"  className="inputFormShort"  />

                                <label name="systemSize"> System size </label>
                                <input type="number" name="systemSize"  className="inputFormShort"  />
                            </div>

                            <label> Adders </label> <br/>
                            <div  className="flexProps">
                                <label name="adders"> Details </label>
                                <input type="text" name="adders"  className="inputForm"  />
                            </div>
                        </div>

                        <div className="infoBox">
                            <div className="title">
                               Sales Info
                            </div>
                          
                            <div  className="flexProps">
                                <label name="salePerson"> Sales person </label>
                                <input type="text" name="salePerson"  className="inputForm"  />
                            </div>

                            <div  className="flexProps">
                                <label name="setter"> Setter </label>
                                <input type="text" name="setter"  className="inputForm"  />
                            </div>

                            <div  className="flexProps">
                                <label name="referBy"> Reffered by  </label>
                                <input type="text" name="referBy"  className="inputForm"  />
                            </div>
                        </div>

                        <div className="infoBox">
                            <div className="title">
                                Lead Info
                            </div>

                            <div  className="flexProps">
                                <label name="leadSources"> Load sources </label>

                                <select className="inputForm">
                                   
                                </select>
                            </div>

                            <div  className="flexProps">
                                <label name="squareFootageHome"> Describe Brand Company  </label>
                                <input type="text" name="squareFootageHome"  className="inputForm"  />
                            </div>
                        </div>

                        <div className="infoBox">
                            <div className="title">
                                Upload Documents
                            </div>

                            <div  className="flexPropsColun">
                                <input type="checkbox" name="State_issued_drivers_licence" value="State issued Drivers Licence (Restrited ) "/> 1. State issued Drivers Licence (Restrited ) <br/>
                                <input type="checkbox" name="w2" value="W2 "/> 2. W2 (Restrited) <br/>
                                <input type="checkbox" name="sales_photos" value="Sales photos "/> 3. Sales photos <br/>
                                <input type="checkbox" name="correct_nmim_bc" value="Correct NMIM BC "/> 4. Correct NMIM BC <br/>
                                <input type="checkbox" name="home_insurrance_policy" value="Home Insurrance policy "/> 5. Home Insurrance policy  <br/>
                                <input type="checkbox" name="home_insurrance_policy" value="Home Insurrance policy "/> 6.Latest Propose  <br/>
                            </div>
                            
                            <input type="file" name="fileToUpload" id="fileToUpload"/><br/>
                            <input type="submit" value="Done" name="submit" className="submit"/>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        )
    }
}

// helper function
function stringifyFormData(fd) {
    const data = {};
      for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
}

export default CustomerForm;
