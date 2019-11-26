import QtQuick 2.0

import "gamelogic.js" as Gamelogic;
Rectangle {

     id : name;
     width: 100; //parent.width;
     height: 100; //parent.height;
     color: "red";

     MouseArea {
         anchors.fill:  parent;

         onClicked: {
             // todo!!!
         }

     }
}
