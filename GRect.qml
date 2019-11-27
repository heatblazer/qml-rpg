import QtQuick 2.0

import "gamelogic.js" as Gamelogic;
Rectangle {

     id : name;
     width: 100; //parent.width;
     height: 150; //parent.height;
     color: "red";
     radius: 4;
     MouseArea {
         anchors.fill:  parent;

         onClicked: {
             // todo!!!
         }

     }
}
