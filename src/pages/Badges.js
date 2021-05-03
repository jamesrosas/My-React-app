import React from 'react';
import Navbar from '../components/Navbar'
import './page-estilos/Badges.css'
import Badge from '../components/Badge'
import confLogo from '../images/badge-header.svg'

class Badges extends React.Component {
    state = {
        data: [
            {
              id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
              firstName: "Freda",
              lastName: "Grady",
              email: "Leann_Berge@gmail.com",
              jobTitle: "Legacy Brand Director",
              twitter: "FredaGrady22221-7573",
              avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
            },
            {
              id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
              firstName: "Major",
              lastName: "Rodriguez",
              email: "Ilene66@hotmail.com",
              jobTitle: "Human Research Architect",
              twitter: "ajorRodriguez61545",
              avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
            },
            {
              id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
              firstName: "Daphney",
              lastName: "Torphy",
              email: "Ron61@hotmail.com",
              jobTitle: "National Markets Officer",
              twitter: "DaphneyTorphy96105",
              avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
            }
          ]       
    }
    render(){
        return(
        <div>
            <Navbar />
            <div className="hero">
                <img className="image-hero" src={confLogo} alt="hero paltzi Conf" />
            </div>
            <div className="badges-container">
                <div className="btn-container">
                    <a className="btn-badge" href="#" >New Badge</a>
                </div>
                <div className="badges-list">
                    <ul>
                        {this.state.data.map((badge)=> {
                            return (
                            <li key={badge.id}>
                                <Badge firstName={badge.firstName} lastName={badge.lastName} jobTitle={badge.jobTitle} twitter={badge.twitter} avatar={badge.avatarUrl}/>
                            </li>
                            )
                        })} 
                    </ul>

                </div>

            </div>
        </div>
        );
    }
}
        
export default Badges;