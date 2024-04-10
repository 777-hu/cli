/*
 * @Description: 
 * @Author: yanpin
 * @Date: 2020-06-17 10:36:39
 * @LastEditTime: 2021-04-08 17:16:41
 * @LastEditors: yanpin
 */ 

import React from 'react'

class WindowsGestureOpponent extends React.Component {
    constructor(props) {
        super(props);       
    }

    componentDidMount() {
        if(this.isWindows()) {
            this.disableTwoFingerGesture();
            this.disableOverscrollBebavior();
            this.disablePinchZoom();
            this.disableContextMenu();
        }
    }

    disableTwoFingerGesture() {
        window.addEventListener('touchstart', function(e) {
            if(e.targetTouches.length === 2) {
                e.preventDefault();
            }
            if(e.targetTouches.length > 2) {
                e.preventDefault();
            }
        }, {passive: false});
    }

    disableContextMenu() {
        window.addEventListener("contextmenu", function(e) {
            e.preventDefault();
        })
    }

    disableOverscrollBebavior() {
        document.body.style.overscrollBebaviorX = 'none';
    }

    disablePinchZoom() {
        document.body.style.touchAction = "none";
    }

    isWindows() {
        return navigator.appVersion.indexOf("Windows") !== -1;
    }
  
    render() {
        return null;
    }  
}

export default WindowsGestureOpponent;
