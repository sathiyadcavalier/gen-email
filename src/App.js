import React from "react"
import "./style/myStyle.css"
import axios from "axios";

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = { list: [], status: false, selectedContent: null }

    this.getData()

  };

  changeState = (item) => {

    this.setState({ status: true, selectedContent: item }, () => this.getBody());

  }

  emailContainer = (item, index) => {

    return (

      <div className={`emailContainer ${!this.state.status ? "fullWidth" : ""}`} onClick={() => this.changeState(item)}>

        <div className="emailInfo">
          <div className="icon-wrapper">
            <div id="icon">
              {item?.from?.name[0].toUpperCase()}
            </div>
          </div>

          <div id="shortDesc">

            <p>From: <strong>{item?.from?.email}</strong></p>
            <p>Subject: <strong>{item?.subject}</strong></p>
            <p className="desc">{item?.short_description}</p>
            <p>{new Date(item?.date).toLocaleDateString()}</p>

          </div>

        </div>

      </div>

    )

  }

  getData = () => {

    axios({
      method: 'get',
      url: 'https://flipkart-email-mock.now.sh/',
    })

      .then((response) => {


        if (response && response.data && response.data.list)
          this.setState({ list: response.data.list })
      })

      .catch((error) => { console.log(error) })

  }

  getBody = () => {

    axios({
      method: 'get',
      url: `https://flipkart-email-mock.now.sh?id=${this.state.selectedContent.id}`,
    })

      .then((response) => {

        if (response && response.data && response.data.body) {

          this.setState({ bodyContent: response.data.body })

        }

      })

      .catch((error) => { console.log(error) })

  }


  render() {

    return (
      <>

        <div className="parent">

          <div className="filterOptions">

            <ul>

              <li>FILTER BY :</li>
              <li>Unread</li>
              <li>Read</li>
              <li>Favorites</li>

            </ul>

          </div>


          <div className="mainContainer">

            <div className={`${!this.state.status ? "fullWidth" : "overflow-handling"}`}>

              {this.state.list.map((item, index) => this.emailContainer(item, index))}

            </div>

            {this.state.status && this.state.selectedContent ? <div className="emailBody">

              <div className="leftContent">

                <p id="icon">{this.state.selectedContent.from.name[0].toUpperCase()}</p>

                <h3 id="subject">{this.state.selectedContent.subject}</h3>

                <div className="mar-wrapper">
                  <p className="mark-as-favourite">Mark as favourite</p>
                </div>

              </div>

              <div className="rightContent">

                <p id="datetime">{new Date(this.state.selectedContent.date).toLocaleDateString()}</p>

                <p id="content">

                  <span dangerouslySetInnerHTML={{
                    __html: this.state.bodyContent
                  }}></span>

                </p>

              </div>

            </div> : null}

          </div>

        </div>

      </>

    )
  }

}

export default App;
