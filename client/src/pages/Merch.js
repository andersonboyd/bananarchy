import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import AlertBox from "../components/AlertBox";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Display from "../components/Display";
import Footer from "../components/Footer";
import API from "../utils/API";

const merchStyle = {
    width: "75%",
    margin: "0 auto",
    display: "flex",
    marginTop: "20px",
    flexFlow: "row wrap",
    textAlign: "center",
    alignItems: "center",
    alignContent: "space-around",
    justifyContent: "space-evenly"
};

const wrapStyle = {
    width: "85%",
    margin: "0 auto",
    paddingTop: "20px",
    paddingBottom: "20px",
    backgroundColor: "white",
    borderRadius: "3px"
}

class Merch extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.getDisplay();
        console.log(this.state.items);
    }

    getDisplay = () => {
        console.log("hello")
        API.getDisplay()
        .then(res => {
            let merch = res.data;
            let merchArr = merch.filter(m => {
                let mArmy = (m.color === "Army" && m.size === "Small");
                let mShirt = (m.name.lastIndexOf("T-shirt") && m.color === "White" && m.size === "Small")
                let mTank = (m.name.slice(-1) === "k" && m.size === "XS" && m.color === "Vintage Black")
                let mBaby = (m.size === "6M" && m.color === "White")
                return (mArmy + mShirt + mTank + mBaby)
            })
            console.log(merchArr)
            this.setState({ items: merchArr })
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Nav />
                <Header />
                <div style={wrapStyle}>
                    <Container fluid>
                        <AlertBox />
                        <h4 style={{textAlign: "center"}}>Merch</h4>
                        <div className="merch" style={merchStyle}>
                            {
                            this.state.items && this.state.items.map((item) =>
                                <div key={item._id} style={{marginBottom: "20px"}}>
                                    <Display
                                        id={item._id}
                                        src={item.img}
                                        alt={item.name}
                                        desc={item.name}
                                    />
                                    <Button variant="primary" size="sm" id={item._id}>Select options</Button>
                                </div>
                                )
                            }
                        </div>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }

}

export default Merch;