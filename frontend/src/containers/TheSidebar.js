import React, { Component } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CLabel,
} from '@coreui/react'


// sidebar nav config
import adminNavigation from './_adminNav'
import guestNavigation from './_guestNav'
import userNavigation from './_userNav'
const userType=''
class TheSidebar extends Component {
  

  sidebarToggle = () => {
  this.props.showChange(this.props.changeState.sidebarShow)
}
  render(){
    return (
      <CSidebar
        show={this.props.changeState.sidebarShow}
        onShowChange={this.sidebarToggle}
      >
        <CSidebarBrand className="d-md-down-none" to="/">
          <CLabel>Demo Project</CLabel>
        </CSidebarBrand>
        <CSidebarNav>

          <CCreateElement
            items={
              userType === 'admin'
                ? adminNavigation
                : userType === 'user'
                  ? userNavigation
                  : guestNavigation
            }
            components={{
              CSidebarNavDivider,
              CSidebarNavDropdown,
              CSidebarNavItem,
              CSidebarNavTitle
            }}
          />
        </CSidebarNav>
        <CSidebarMinimizer className="c-d-md-down-none" />
      </CSidebar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showChange: (val) => dispatch({ type: 'set', sidebarShow: val })
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(TheSidebar)
