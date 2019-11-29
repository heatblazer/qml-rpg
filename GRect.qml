import QtQuick 2.0
import "gamelogic.js" as Gamelogic;

Rectangle {
     id : name;
     width: 100; //parent.width;
     height: 150; //parent.height;
     color: "#ea1414"
     radius: 4;
     border.color: "black";

     MouseArea {
         anchors.fill:  parent;

         onClicked: {
             //pass the event to the game logic model form here
             Gamelogic.game.hClicked(name);
         }
     }
}
