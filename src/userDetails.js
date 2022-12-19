import React, { Component } from 'react'

export default class UserDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userData: "",
        }
    }


    componentDidMount() {
        fetch("https://sb-admin-backend.vercel.app/userData", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Orgin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token")
            })

        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "UserData")
                this.setState({ userData: data.data })
            })
    }

    render() {
        return (
            <div className='auth-wrapper'>
                <div className='auth-inner'>
                    <div className='center'>
                        Name<h1>{this.state.userData.fname}</h1>
                        Email<h1>{this.state.userData.email}</h1>


                        <a href="/portal" className='ab'> <b>Student & Teacher Manage</b></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    </div>
                </div>
            </div>
        )
    }
}