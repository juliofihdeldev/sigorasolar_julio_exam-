import React, { Component } from "react";
import "../css/BuildMoneyStuff.css";

class BuildMoneyStuff extends Component {
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

    // this.refs.fieldPercent.value = "";
    // this.refs.fieldName.value = "";
    // this.refs.fieldAdress.value = "";
    // this.refs.fieldTelephone.value = "";
    console.log("Our data should be ", this.dataRes);
  }

  render() {
    return (

        <div className="content">
        <div className="payment">
          <div className="paymentTitle">
            Payment
          </div>
          <form onSubmit={this.handleSubmit}>
          <div className="contentChoice">
            <div className="choice">
              <p> <input type="radio" name="paymentMethod" value="cash"/> <span className="Cash"> Cash</span> </p>
              <p> 
                <input type="radio" name="paymentMethod" value="check"/> <span className="Check"> Check  </span> 
                <input type="radio" name="paymentMethod" value="Credit"/> <span className="Credit"> Credit  </span> 
              </p>
            </div>

            <div className="choiceRigth">
              <p> 
                  <input type="radio" name="paymentMethod" value="Finance" /> 
                  <span className="Cash"> Finance</span>
                  <select name="company" className="eggSelect">
                    <option name="company" value="ECG"> EGG</option>
                  </select> <br/>

                  <select name="company" className="eggSelect margin50">
                    <option name="company" value="ECG"> EGG - Product 1 </option>
                  </select>
              </p>
            </div>
          </div>
          <div className="Line-Copy-2" > </div>
            <div className="contentPriceInfos">
            <div className="priceInfo">
                <div className="contentSpan">
                <span className="span1"> System Price per watt </span>
                <span className="span1Value"> 
                 <input type="number" placeholder="$4.05" className="inputprice" name="System_Price_per_watt" />
                </span>
                </div>
                <div className="contentSpan">
                <span className="span1">Federal Tax Credit: </span>
                <span className="span1Value">
                
                    <input type="text" value="30%" className="borderNone" name="Federal_Tax_Credit:"/>
                </span>
                </div>
                <div className="contentSpan">
                <span className="span1"> State Tax Credit:  </span>
                <span className="span1Value">                 
                    <input type="text" name= "State_Tax_Credit" value="10%" className="inputprice" /> </span>
                </div>

                <div className="Line-Copy-2"> </div>

                  <div className="contentSpan">
                    <span className="span1">Utility Company:  </span>
                    <span className="span1Value"> 
                    <select name="Utility_Company" className="companyList">
                    <option name="Utility_Company" value="ECG"> Dominion energy</option>
                  </select> <br/>
                    </span>
                </div>

                <div className="contentSpan">
                    <span className="span1">Utility rate:   </span>
                    <span className="span1Value"> 
                    <input type="number" name="utility_rate" placeholder="$0.14" className="inputprice" />
                    </span>
                </div>

                <div className="contentSpan">
                    <span className="span1">  Utility rebate:   </span>
                    <span className="span1Value"> 
                    <input type="number" name="utility_rebate" placeholder="$0" className="inputprice" />
                    </span>
                </div>
              
                <div className="contentSpan">
                    <span className="span1"> SRECS: </span>

                    <span className="span1Value">
                        <input type="text" value="12%" name="srecs" className="borderNone"  />
                    </span> 
                </div>
                <div className="Line-Copy-2"> </div>

                <div className="contentSpan">
                    <span className="span1"> Finance Term: </span>
                    <span className="span1Value">
                        <input type="text" value="25 years" name="Finance_Term:" className="borderNone"  />
                    </span>
                </div>

                <div className="contentSpan">
                    <span className="span1">  Interest Rate: </span>

                    <span className="span1Value">
                        <input type="text" value="5.45%" name="Interest_Rate:" className="borderNone" />
                    </span>
                </div>

               <div className="Line-Copy-2"> </div>
            </div>
            <div className="contentSpan">
                    <span className="span1"> No interest, no payments:    </span>
                    <span className="span1Value"> 
                    <input type="number" name="No_interest_no_payments" placeholder="12 month" className="inputprice" />
                    </span>
                </div>
            <div className="contentSpan">
                <span className="span1">  Manual Discount:    </span>
                <span className="span1Value"> 
                <input type="number" name="Manual_Discount" placeholder="$0" className="inputprice" />
                </span>
            </div>
            <div className="contentSpan">
                <span className="span1"> Sales Promotion:    </span>
                <span className="span1Value"> 
                <input type="number" name="Sales_Promotion" placeholder="$500" className="inputprice" />
                </span>
            </div>
            <div className="contentSpan">
                <span className="span1"> Referral Discount:   </span>
                <span className="span1Value"> 
                <input type="number" name="Referral_Discount" placeholder="$150" className="inputprice" />
                </span>
            </div>
        </div>
            <input type="submit" value="Input Referrals " className="submit" />
        </form>
        </div>
        <div className="result">
            <div className="images">
             <img src="https://www.scdi.ch/pub/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/k/p/kpv_tp.jpg"/>
            </div>
            <div className="resContent">
                <div className="resultInfo">
                    <div className="theTitle">   
                        Turn-key Solar Installation
                    </div>
                    <div className="descriptionInfo">
                        <div className="kw">
                            24.6 kW  
                        </div>
                        <div className="module">
                         82 Mods
                        </div>
                    </div>
                </div>
                <div className="Line_Copy_result"> </div>

                <div className="resultInfo">
                    <div className="theTitle">   
                        Energy Efficiency Upgrades
                    </div>
                    <div className="descriptionInfo">
                    
                        <div className="module">
                        Based on BPI Energy Audit
                        </div>
                    </div>
                </div>
                <div className="Line_Copy_result"> </div>

                <div className="resultInfo">
                    <div className="theTitle">   
                    Programmable Thermostat
                    </div>
                    <div className="descriptionInfo">
                       
                        <div className="module">
                        Full Install and Set-up
                        </div>
                    </div>
                </div>
                <div className="Line_Copy_result"> </div>

                <div className="resultInfo">
                    <div className="theTitle">   
                        Standing Seam Metal Roof
                    </div>
                    <div className="descriptionInfo">
                        <div className="module">
                        Color Patina Green
                        </div>
                    </div>
                </div>
                <div className="Line_Copy_result"> </div>

               
                <div className="month">
                    <div className="monthSave">
                        <div className="titleSaving">
                            MONTHLY SAVINGS
                        </div>
                        <div className="amountSaving">
                            $435 per month
                        </div>
                    </div>

                    <div className="monthSave">
                        <div className="titleSaving marginMonth">
                        MONTHLY COST
                        </div>
                        <div className="monthtotal">
                            $4 per month
                        </div>
                    </div>
                </div>

                 <div className="month">
                    <div className="monthSave">
                        <div className="titleSaving">
                            25 YEAR SAVINGS
                        </div>
                        <div className="amountSaving">
                            $58,932
                        </div>
                    </div>

                    <div className="monthSave">
                        <div className="titleSaving marginMonth">
                        TOTAL COST
                        </div>
                        <div className="monthtotal">
                        $98,038
                        </div>
                    </div>
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

export default BuildMoneyStuff;
