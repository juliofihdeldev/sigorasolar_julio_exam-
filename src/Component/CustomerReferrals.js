import React, { Component } from "react";
import "../css/CustomerReferrals.css";

class CustomerReferrals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  dataRes = [];

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    this.dataRes.push(JSON.parse(stringifyFormData(data)));

    this.setState({
      info: this.dataRes
    });

    this.refs.fieldPercent.value = "";
    this.refs.fieldName.value = "";
    this.refs.fieldAdress.value = "";
    this.refs.fieldTelephone.value = "";
    console.log("Our data should be ", this.dataRes);
  }

  render() {
    return (
    
      <div className="content">
        <div className="card">
          <div className="CUSTOMER-REFERRALS">CUSTOMER REFERRALS</div>
          <div className="customerAndCompanyInfo">
            <div className="customerBoxInfo">
              <div className="fromAndName">
                <span className="FROM"> FROM: </span>
                <span className="Larissa-Harrington"> Larissa Harrington </span>
              </div>
              <div className="-Catlin-Rd-Samu">
                1878 Catlin Rd, <br /> Samuel Miller, VA 22901
              </div>
            </div>
            <div className="Line"> </div>
            <div className="customerBoxInfo margin">
              <div className="fromAndName">
                <span className="FROM"> TO: </span>
                <span className="Larissa-Harrington">Harper Murphy </span>
              </div>
              <div className="-Catlin-Rd-Samu">
                <div className="addressCompany">
                  Sigora Sales Team <br />
                  harper.murphy@sigorasolar.com
                </div>
              </div>
            </div>
          </div>
          <div className="Line-Copy-2" />

          <div>
            <div className="priceInfo">
              <div className="contentSpan">
                <span className="span1"> Price per referral: </span>
                <span className="span1Value"> $50 </span>
              </div>
              <div className="contentSpan">
                <span className="span1"> Referrals given: </span>
                <span className="span1Value">
    
                  <input type="number" placeholder="3" className="inputprice" />
                </span>
              </div>

              <div className="contentSpan">
                <span className="span1"> Total discount: </span>
                <span className="span1Value"> $150 </span>
              </div>
            </div>
            <div className="Line-Copy-2"> </div>

            <div className="result">
              <div className="headerResult">
                <table>
                    <tbody>
                  <tr>
                    <td>
                  
                      <div className="titleHeader"> NAME </div>{" "}
                    </td>
                    <td>
                  
                      <div className="titleHeader phone"> ADDRESS </div>{" "}
                    </td>
                    <td>
                  
                      <div className="titleHeader phone"> PHONE </div>{" "}
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              {this.dataRes.map(users => (
                <div className="resultData" key={users.name}>
                  <table>
                    <tbody>
                    <tr>
                      <td>
                    
                        <div className="nameResult"> {users.name} </div>
                      </td>
                      <td>
                    
                        <div className="adresseResult">
                          {users.adresse}
                        </div>
                      </td>
                      <td>
                    
                        <div className="telephoneResult">
                          {users.phone}
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
            <div className="Line-Copy-2"> </div>

            <div className="formAdd">
              <div className="titleFormAdd"> ADD </div>
              <form onSubmit={this.handleSubmit}>
                <div className="contentSpan">
                  <span className="spanForm1"> Name: </span>
                  <span className="span1Value">
                    <input
                      type="text"
                      name="name"
                      className="inputpriceForm"
                      ref="fieldName"
                      required
                    />{" "}
                  </span>
                </div>
                <div className="contentSpan">
                  <span className="spanForm1"> Adresse: </span>
                  <span className="span1Value">
                
                    <input
                      type="text"
                      name="adresse"
                      className="inputpriceForm"
                      ref="fieldAdress"
                      required
                    />
                  </span>
                </div>
                <div className="contentSpan">
                  <span className="spanForm1"> Phone: </span>
                  <span className="span1Value">
                
                    <input
                      type="text"
                      name="phone"
                      className="inputpriceForm"
                      ref="fieldTelephone"
                      required
                    />{" "}
                  </span>
                </div>

                <div className="warnIntoContent">
                  <span className="Warmntro"> Warm Intro? </span>
                  <span className="more">
                    <input
                      type="checkbox"
                      ref="fieldPercent"
                      name="percent"
                      value="20"
                    />
                    + 20 % more
                  </span>
                </div>
                <input
                  type="submit"
                  value="Add Name"
                  name="submit"
                  className="submit"
                />

                <div className="Line-Copy-2"> </div>

                <div className="Button-Background-Copy-9 ">DONE</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
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

export default CustomerReferrals;
