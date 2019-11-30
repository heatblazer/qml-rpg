import QtQuick 2.12
import QtQuick.Window 2.12

import "gamelogic.js" as Gamelogic

Window
{

    Timer
    {
        id: globalTick;
        interval: 1000;
        running: true;
        repeat:  true;
        onTriggered: {
            Gamelogic.game.update();
        }
    }

    id: screen;
    visible: true
    width: 780
    height: 800

    onSceneGraphInitialized: {
        startMenu.visible = true;
        gameCanvas.visible = false;
    }

    Rectangle
    {
        id : gameCanvas;
        width: parent.width;
        height: parent.height;
        color: "green";

        MouseArea{
            id: mouseAreaRoot;
            anchors.fill:  parent;
            onClicked:{
                startMenu.visible=true;
                gameCanvas.visible = false;
                //todo!!! Gamelogic.setArea(mouseX, mouseY);
            }
        }
    }

    Rectangle
    {
        id : startMenu;
        width: parent.width;
        height: parent.height;
        color: "blue";

        Rectangle { id: enterName;
            width: parent.width /5;
            height: parent.height/10;
            y: height;
            color: "red";
        }
        Rectangle { id: enterRace;
            width: parent.width /5;
            height: parent.height/10;
            y: height * 2 ;
            color: "green";
        }
        Rectangle { id: enterClass;
            width: parent.width /5;
            height: parent.height/10;
            y: height * 3 ;
            color: "yellow";
        }

        MouseArea{
            id: startMenuMA;
            anchors.fill:  parent;
            onClicked:{
                startMenu.visible=false;
                gameCanvas.visible = true;
                //Gamelogic.setArea(mouseX, mouseY);
            }
        }
    }
}
