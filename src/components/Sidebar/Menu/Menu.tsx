import React, { Component } from'react';
import MenuItem from './MenuItem/MenuItem';
import { connect } from "react-redux";
import * as actions from "../../../store/actions/sidebar.Actions";


interface Props {
    SubmiGetWidthToSideBar: any;
    
}
interface State{
    flagWidthFirst:boolean
}
class Menu extends Component<Props,State> {
    
    constructor(props:Props){
        super(props);
        this.state={
            flagWidthFirst:false
        }
    }
   async componentDidMount(){
        const getWithSidebarClick:any = document.getElementById("Sidebar__menu");
        if(this.state.flagWidthFirst===false)
        {   
            this.setState({
                flagWidthFirst:true
            })
            getWithSidebarClick.click();   
        } 
        
    }
    getWidthSidebar=(e:any)=>{
        if(this.state.flagWidthFirst===false)
        {   
            this.setState({
                flagWidthFirst:true
            })
            this.props.SubmiGetWidthToSideBar(e.target.offsetWidth);   
        } 
            
    }
    render() {
        return (
            <div className="Sidebar__menu" id="Sidebar__menu"
                onClick={(e)=>this.getWidthSidebar(e)}
            >
                <div className="force-overflow"></div>
                <nav className="navbar Sidebar__menu_nav">
                <ul className="nav navbar-nav Sidebar__menu_nav-ul">
                     <MenuItem/>
                </ul>
              </nav>
            </div>
           
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
    
    };
  };
  const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
        SubmiGetWidthToSideBar: (width:any) => {
            dispatch(actions.GetWidthtoSidebar(width));
          }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
