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
                            Name:
                            <input type="text" className="inputForm" name="name"/>
                        </div>
                        <div className="flexProps">
                            Addresse: 
                            <input type="text" name="Addresse" value="1878 Coltn Road Charlotte ville, VA 22911 "  className="noBorder" readOnly/>
                        </div>
                        <div className="flexProps">   
                            Email:
                            <input type="mail" name="email" className="inputForm"  />
                        </div>
                        <div className="flexProps">   
                           Phone : 
                            <input type="tel" name="phone" className="inputForm"  />
                        </div>
                        <div className="flexProps">
                           Account #:
                            <input type="text" name="Addresse" value="11376"  className="noBorder" />
                        </div>
                    </div>

                    <div className="infoBox">
                        <div className="title">
                            Home info
                        </div>
                        <div  className="flexProps">
                            Square Footage of Home:
                            <input type="text" name="squareFootageHome"  className="inputForm"  />
                        </div>
                        <div  className="flexProps">
                           Home value (Cost estimation)
                            <input type="text" name="homeValue"  className="inputForm" />
                        </div>
            
                        <div  className="flexProps">
                             New construction ?
                            <input type="radio" name="if_new_construction" value="Yes" /> yes 
                            <input type="radio" name="if_new_construction" value="No" className="spaceForNo"/> No
                        </div>
                    </div>

                     <div className="infoBox">
                        <div className="title">
                            Energy Info
                        </div>
                        <div  className="flexProps">
                            Utility Company :
                            <select className="inputForm">
                                {/* <option value="company"> </option> */}
                            </select>
                        </div>

                        <div  className="flexProps">
                            Account #
                            <input type="text" name="account"  className="inputFormShort"  />

                           Heating: <input type="radio" name="if_new_construction" value="Yes" className="spaceForNo" /> Electric  
                            <input type="radio" name="if_new_construction" value="Yes" /> Propane  
                        </div>

                        <div className="cnt">
                            12 month consumption <br/>

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
                                Combined income:
                                <input type="text" name="combineInfo"  className="inputForm"  />
                            </div>
                            <div  className="flexProps">
                                Debt:
                                <input type="text" name="Debt"  className="inputFormShort" />
                            
                                 Credit score:
                                <input type="text" name="creditScore"  className="inputFormShort" />
                            </div>

                            <div  className="flexProps">
                                Number of the years at Address:
                                <input type="text" name="numberYearAdress"  className="inputForm"  />
                            </div>
                
                            <div  className="flexProps">
                               Employer:
                                <input type="text" name="employer"  className="inputForm"  />
                            </div>

                            <div  className="flexProps">
                                Number of the years with employer:
                                <input type="text" name="numberYearEmployer"  className="inputForm"  />
                            </div>

                            <div  className="flexProps">
                                Legaly:
                                <input type="radio" name="legaly" value="Maried" /> Maried  
                                <input type="radio" name="legaly" value="Single" /> Single  
                            </div>


                            <div  className="flexProps">
                                Annual Liabilities:
                                <input type="text" name="annualLiability"  className="inputForm"  />
                            </div>

                            <div  className="flexProps">
                                Assots:
                                <input type="text" name="assot"  className="inputForm"  />
                            </div>

                            <div  className="flexProps">
                                Bank:
                                <input type="text" name="bank" className="inputForm"  />
                            </div>

                            <div className="flexProps">
                               # of the year at Bank:
                                <input type="text" name="numberBank"  className="inputForm"  />
                            </div>

                             <div className="flexProps">
                                Total Balances:
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
                                Price:
                                <input type="number" name="signPrice"  className="inputFormShort"  />

                                 System size :
                                <input type="number" name="systemSize"  className="inputFormShort"  />
                            </div>

                          Adders: <br/>
                            <div  className="flexProps">
                                Details :
                                <input type="text" name="adders"  className="inputForm"  />
                            </div>
                        </div>

                        <div className="infoBox">
                            <div className="title">
                               Sales Info
                            </div>
                          
                            <div  className="flexProps">
                                Sales person :
                                <input type="text" name="salePerson"  className="inputForm"  />
                            </div>

                            <div  className="flexProps">
                                 Setter :
                                <input type="text" name="setter"  className="inputForm"  />
                            </div>

                            <div  className="flexProps">
                                 Reffered by :
                                <input type="text" name="referBy"  className="inputForm"  />
                            </div>
                        </div>

                        <div className="infoBox">
                            <div className="title">
                                Lead Info
                            </div>

                            <div  className="flexProps">
                               Load sources :

                                <select className="inputForm">
                                   
                                </select>
                            </div>

                            <div  className="flexProps">
                                 Describe Brand Company :
                                <input type="text" name="squareFootageHome"  className="inputForm"  />
                            </div>
                        </div>

                        <div className="infoBox">
                            <div className="title">
                                Upload Documents
                            </div>

                            <div  className="flexPropsColum">
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
