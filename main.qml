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
        onTriggered: Gamelogic.game.update();
    }

    id: screen;
    visible: true
    width: 780
    height: 800

    Rectangle
    {
        id : gameCanvas;
        width: parent.width;
        height: parent.height;

        MouseArea{
            id: mouseAreaRoot;
            anchors.fill:  parent;
            onClicked:{
                Gamelogic.setArea(mouseX, mouseY);
            }
        }
    }
}
