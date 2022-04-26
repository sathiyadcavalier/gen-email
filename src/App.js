import React from "react"
import "./style/myStyle.css"

class App extends React.Component {

  constructor() {

    super();

    this.state = { arr: [1, 2, 3, 4, 5, 6, 7] }

  }


  emailContainer(num) {

    return (

      <div className="emailContainer">

        <div className="emailInfo">

          <div id="icon">

          </div>

          <div id="shortDesc">

            <p>From: <strong>Foo Bar foo.bar@gmail.com</strong></p>
            <p>Subject: <strong>Lorem Ipsum</strong></p>
            <p>This is in reagrds to the verification of employment</p>
            <p>26/02/2020 10:30am</p>

          </div>

        </div>

      </div>

    )

  }

  render() {

    return (
      <>

        <div className="parent">

          <div className="filterOptions">

            <ul>

              <li>Filter By:</li>
              <li>Unread</li>
              <li>Read</li>
              <li>Favorites</li>

            </ul>

          </div>



          <div className="mainContainer">

            <div>

              {this.state.arr.map(this.emailContainer)}

            </div>

            <div className="emailBody">

              <div className="leftContent">

                <p id="icon"></p>

              </div>

              <div className="rightContent">

                <h3 id="subject">Lorem Ispum</h3>

                <p id="datetime">26/02/2020 10:30am</p>

                <p id="content">

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, ad voluptate saepe molestiae dicta quo delectus amet. Eaque aspernatur id, eos neque nulla rem, exercitationem, error sit quas unde magnam.
                  Eos sapiente maxime aliquam, totam voluptate veritatis perferendis, cum vitae sint atque recusandae dolorem repudiandae minus obcaecati doloremque nesciunt aut! Reiciendis ad ducimus ipsam, quisquam rem enim blanditiis amet accusamus.
                  Quasi odit quidem nostrum fuga dolore saepe laudantium voluptas dicta magni. Obcaecati temporibus quos, odio debitis ducimus animi deserunt alias, eius, aut voluptas eveniet ut unde at delectus ea! Aperiam.
                  Dolores cum iste nulla eius tenetur totam fuga cumque commodi aperiam, iure atque est assumenda inventore ipsam, repellat magni placeat voluptatum magnam nemo unde tempora quam. Non iste rem pariatur!
                  Itaque sequi porro quidem deserunt assumenda esse quasi ipsam nisi asperiores dolorem. Iste quod impedit eum aliquam, sunt repellat voluptatem provident, quae ratione officiis voluptates nemo reprehenderit culpa fuga autem?

                </p>

                <p id="content">

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, ad voluptate saepe molestiae dicta quo delectus amet. Eaque aspernatur id, eos neque nulla rem, exercitationem, error sit quas unde magnam.
                  Eos sapiente maxime aliquam, totam voluptate veritatis perferendis, cum vitae sint atque recusandae dolorem repudiandae minus obcaecati doloremque nesciunt aut! Reiciendis ad ducimus ipsam, quisquam rem enim blanditiis amet accusamus.
                  Quasi odit quidem nostrum fuga dolore saepe laudantium voluptas dicta magni. Obcaecati temporibus quos, odio debitis ducimus animi deserunt alias, eius, aut voluptas eveniet ut unde at delectus ea! Aperiam.
                  Dolores cum iste nulla eius tenetur totam fuga cumque commodi aperiam, iure atque est assumenda inventore ipsam, repellat magni placeat voluptatum magnam nemo unde tempora quam. Non iste rem pariatur!
                  Itaque sequi porro quidem deserunt assumenda esse quasi ipsam nisi asperiores dolorem. Iste quod impedit eum aliquam, sunt repellat voluptatem provident, quae ratione officiis voluptates nemo reprehenderit culpa fuga autem?

                </p>

                <p id="content">

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, ad voluptate saepe molestiae dicta quo delectus amet. Eaque aspernatur id, eos neque nulla rem, exercitationem, error sit quas unde magnam.
                  Eos sapiente maxime aliquam, totam voluptate veritatis perferendis, cum vitae sint atque recusandae dolorem repudiandae minus obcaecati doloremque nesciunt aut! Reiciendis ad ducimus ipsam, quisquam rem enim blanditiis amet accusamus.
                  Quasi odit quidem nostrum fuga dolore saepe laudantium voluptas dicta magni. Obcaecati temporibus quos, odio debitis ducimus animi deserunt alias, eius, aut voluptas eveniet ut unde at delectus ea! Aperiam.
                  Dolores cum iste nulla eius tenetur totam fuga cumque commodi aperiam, iure atque est assumenda inventore ipsam, repellat magni placeat voluptatum magnam nemo unde tempora quam. Non iste rem pariatur!
                  Itaque sequi porro quidem deserunt assumenda esse quasi ipsam nisi asperiores dolorem. Iste quod impedit eum aliquam, sunt repellat voluptatem provident, quae ratione officiis voluptates nemo reprehenderit culpa fuga autem?

                </p>
              </div>

            </div>

          </div>

        </div>

      </>


    )
  }

}

export default App;
