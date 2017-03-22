import React, {Component} from 'react';
import NavLink from './NavLink';
import './Menu.css';

class Menu extends Component {
  componentDidMount() {
    this.hideMenu = this.hideMenu.bind(this);
    this.menuIcon = document.querySelector('.menu__icon');
    this.menu = document.querySelector('.menu');
    this.menuOverlay = document.querySelector('.menu__overlay');
    this.bindNavigation();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isMenuOpen) {
      this.showMenu();
    }
  }

  toggleMenu() {
    if (!this.isMenuOpen()) {
      this.showMenu();
    }
    else {
      this.hideMenu();
    }
  }

  isMenuOpen() {
    return this.menu.classList.contains('menu--show');
  }

  hideMenu() {
    this.menu.classList.remove('menu--show');
    this.menuOverlay.classList.remove('menu__overlay--show');
  }

  showMenu() {
    this.menu.classList.add('menu--show');
    this.menuOverlay.classList.add('menu__overlay--show');
  }

  bindNavigation() {
    document.body.addEventListener('keyup', (event) => {
      let menuListElement = document.querySelector('.menu__list a.active').parentElement;
      if (event.key === 'ArrowLeft') {
        let activeSiblingElement = menuListElement.previousElementSibling;
        if (activeSiblingElement && activeSiblingElement.children) {
          menuListElement.previousElementSibling.children[0].click();
        }
      }
      else if (event.key === 'ArrowRight') {
        let activeSiblingElement = menuListElement.nextElementSibling;
        if (activeSiblingElement && activeSiblingElement.children) {
          activeSiblingElement.children[0].click();
        }
      }
    });
  }
  render() {
    return(
      <div className="menu-container">
        <div className="menu">
          <div className="menu__header">
            <h2>Workshop 1</h2>
          </div>
          <ul className="menu__list">
          <li>
            <NavLink to="/prerequisites">
              <span className="menu__steps">0</span>
              Prerequisites
            </NavLink>
          </li>
            <li>
              <NavLink to="/introduction" onlyActiveOnIndex={true}>
                <span className="menu__steps">1</span>
                Introduction
              </NavLink>
            </li>
            <li>
              <NavLink to="/setup">
                <span className="menu__steps">2</span>
                Setup
              </NavLink>
            </li>
            <li>
              <NavLink to="/up-and-running">
                <span className="menu__steps">3</span>
                Up & Running
              </NavLink>
            </li>
            <li>
              <NavLink to="/components">
                <span className="menu__steps">4</span>
                Components
              </NavLink>
            </li>
            <li>
              <NavLink to="/routing">
                <span className="menu__steps">5</span>
                Routing
              </NavLink>
            </li>
            <li>
              <NavLink to="/fetching-data">
                <span className="menu__steps">6</span>
                Fetching Data
              </NavLink>
            </li>
            <li>
              <NavLink to="/styles">
                <span className="menu__steps">7</span>
                Styles
              </NavLink>
            </li>
            <li>
              <NavLink to="/finish">
                <span className="menu__steps">8</span>
                Finish
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="menu__overlay" onClick={this.hideMenu}></div>
      </div>
    );
  }
}

export default Menu;

Menu.defaultProps = {
  isMenuOpen: false
};
