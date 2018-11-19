import React, { Component } from "react";
import "../css/RoofingMaterial.css";
import imagesForOptions from "../utils/allImages";

console.log(imagesForOptions);
class RoofingMaterial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: [],
      showImagesOptionOne: false,
      showImagesOptionTwo: false,
      showImagesOptionTree: false,
      showImagesOptionFor: false,
     
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
    console.log("Our data should be ", this.dataRes);
  }
  displayOptionOne=()=>{
    this.setState({
      showImagesOptionOne: !this.state.showImagesOptionOne
    }) 
 }
 displayOptionTwo=()=>{
    this.setState({
      showImagesOptionTwo: !this.state.showImagesOptionTwo
    }) 
 }
 displayOptionTree=()=>{
    this.setState({
      showImagesOptionTree: !this.state.showImagesOptionTree
    }) 
 }
 displayOptionFor=()=>{
    this.setState({
      showImagesOptionFor: !this.state.showImagesOptionFor
    }) 
 }
  
  render() {

    return (
      <div className="contentRoofingMateriel">
        <div className="titleForRoofingMateriel">ROOFING MATERIAL</div>
        <div className="formForRoofingMateriel">
          <form onSubmit={this.handleSubmit}>
            {/* one */}
            <div className="contentOptions">
              <div className="cardForOptions">
                <div className="imagesContent">
                  <img src="https://s3.amazonaws.com/sigorasolar/br/rooftypes/shingle- black.jpg" />
                </div>
                <div className="nameOptions">Asphalt Shingle</div>
                <div className="selectOptions">
                  <select name="colorChoice1" onClick={this.displayOptionOne}>
                    <option  value="gray">
                      {" "}
                      Gray{" "}
                    </option>
                  </select>
                </div>
                <div className="ChoiceName">
                  <div className="include "> INCLUDED      </div>
                </div>
                <div className="ChoiceOptions">
                  <input type="checkbox" name="include" />
                </div>
              </div>
              {this.state.showImagesOptionOne === true ? (
                <div className="imagesChoiceForOptionsOne">
                  <div className="allImagesForOptions">
                    {imagesForOptions[0].optionsOne.map(info => (
                      <div className="contentImagesTitle" key={info.name}>
                            <div className="theImages"> 
                                <img src={info.images} alt="" 
                                />
                            </div>
                            <input type="radio" name="imagesChoiceForOptions1" value={info.name} className="imagesChoiceForOptions1"/>  
                            <span  className="theName">{info.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            {/* two */}
            <div className="contentOptions">
              <div className="cardForOptions">
                <div className="imagesContent">
                  <img src="https://s3.amazonaws.com/sigorasolar/br/rooftypes/premium.jpg" />
                </div>
                <div className="nameOptions">Premium Asphalt Shingle</div>
                <div className="selectOptions">
                  <select  name="colorChoice2" onClick={this.displayOptionTwo}>
                    <option name="" value="gray">
                      {" "}
                      Gray{" "}
                    </option>
                  </select>
                </div>
                <div className="ChoiceName">
                  <span> + $280/ Square </span>
                </div>
                <div className="ChoiceOptions">
                  <input type="checkbox" name="Square280"/>
                </div>
              </div>
              {this.state.showImagesOptionTwo === true ? (
                <div className="imagesChoiceForOptionsOne">
                  <div className="allImagesForOptions">
                  {imagesForOptions[1].optionsTwo.map(info => (
                      <div className="contentImagesTitle" key={info.name}>
                            <div className="theImages"> 
                                <img src={info.images} alt="" 
                                />
                            </div>
                            <input type="radio" name="imagesChoiceForOptions2" value={info.name} className="imagesChoiceForOptions1"/>  
                            <span  className="theName">{info.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            {/* tree */}
            <div className="contentOptions">
              <div className="cardForOptions">
                <div className="imagesContent">
                  <img src="https://s3.amazonaws.com/sigorasolar/br/rooftypes/GRAY-metal-roofing.jpg" />
                </div>
                <div className="nameOptions">Standing Seam Metal</div>
                <div className="selectOptions">
                  <select name="colorChoice3" onClick={this.displayOptionTree}>
                    <option value="gray">
                      {" "}
                      Gray{" "}
                    </option>
                  </select>
                </div>
                <div className="ChoiceName">
                  <span> + $330/ Square </span>
                </div>
                <div className="ChoiceOptions">
                  <input type="checkbox" name="Square330" />
                </div>
              </div>
              {this.state.showImagesOptionTree === true ? (
                <div className="imagesChoiceForOptionsOne">
                  <div className="allImagesForOptions">
                    {imagesForOptions[2].optionsTree.map(info => (
                      <div className="contentImagesTitle" key={info.name}>
                            <div className="theImages"> 
                                <img src={info.images} alt="" 
                            />
                            </div>
                            <input type="radio" name="imagesChoiceForOptions3" value={info.name} className="imagesChoiceForOptions1"/>  
                            <span  className="theName">{info.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            {/* for */}
            <div className="contentOptions">
              <div className="cardForOptions">
                <div className="imagesContent">
                  <img src="https://s3.amazonaws.com/sigorasolar/br/rooftypes/CO-metal-roofing.jpg" />
                </div>
                <div className="nameOptions">Corrugated Metal</div>
                <div className="selectOptions">
                  <select name="colorChoice4"  onClick={this.displayOptionFor}>
                    <option value="gray">
                      {" "}
                      Gray{" "}
                    </option>
                  </select>
                </div>
                <div className="ChoiceName">
                  <span> + $130/ Square </span>
                </div>
                <div className="ChoiceOptions">
                  <input type="checkbox" name="Square130"  />
                </div>
              </div>
              {this.state.showImagesOptionFor === true ? (
                <div className="imagesChoiceForOptionsOne">
                  <div className="allImagesForOptions">
                  {imagesForOptions[3].optionsFor.map(info => (
                      <div className="contentImagesTitle" key={info.name}>
                            <div className="theImages">
                                <img src={info.images} alt="" />
                            </div>
                            <input type="radio" name="imagesChoiceForOptions4" value={info.name} className="imagesChoiceForOptions1"/>  
                            <span  className="theName">{info.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="contentSubmit">
              <input type="submit" value="DONE" className="submit" />
            </div>
          </form>
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

export default RoofingMaterial;
