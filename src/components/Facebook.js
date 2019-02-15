import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login'

class Facebook extends Component {

    state = {

        isLoggedIn: false,
        userid: '',
        name: '',
        email: '',
        picture: '',
        mydata: []
    }

    //if user is not logged in, he'll be promted to login using facebook
    componentClicked = () => {
        if (this.state.isLoggedIn) {
            alert("You are already logged in")
        }

    }

    responseFacebook = response => {
        console.log(response)

        this.setState({
            isLoggedIn: true,
            mydata: response,
            email: response.email,
            name: response.name,
            picture: response.picture.data.url,
            userid: response.userID

        })
        console.log(this.state.mydata)
    }
    render() {

      //declare a variable
        let fbContent;
        
       // condition is isLogged in state changes to true
        if (this.state.isLoggedIn) {
            fbContent = (
                <div
                    style={{
                    background: '#ececec',
                    padding: 20,
                    width: '30%',
                    margin: 20,
                    borderRadius: 10
                }}>
                    <img
                        src={this.state.picture}
                        style={{
                        height: 50,
                        width: 50,
                        borderRadius: 50
                    }}
                        alt=""/><br/>
                    Email: {this.state.email}
                    <br/>
                    Welcome {this.state.name}
                    to the website

                </div>
            )

        } else {}

        return (
            <div className="App">

                < FacebookLogin
                cssClass="my-facebook-button-class"
                appId = "517981558728623"
                autoLoad = {
                    true
                }
                fields = "name,email,picture"
                onClick = {
                    this.componentClicked
                }
                callback = {
                    this.responseFacebook
                } />

              {fbContent}
            </div>
        );
    }
}

export default Facebook;
