import QtQuick 2.12
import QtQuick.Window 2.12
import QtQuick.Controls 2.5;
import QtQuick.Layouts 1.3;

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
                //startMenu.visible=true;
                //gameCanvas.visible = false;
                //todo!!! Gamelogic.setArea(mouseX, mouseY);
            }
        }
    }

    Rectangle //character creation
    {
        id : startMenu;
        width: parent.width;
        height: parent.height;
        Frame{
            x: startMenu.width / 6;
            y:startMenu.height / 6;

            ColumnLayout{
                TextEdit{
                    text: "Enter name:";
                }
                ComboBox {
                    model:["Human", "Dwarf", "Elf", "Troll", "Ogre"];
                }
                ComboBox {
                    model:["Fighter", "Archer", "Thief", "Wizard", "Cleric"];
                }
            }
        }
    }
    //character creation

    //TODO:
        //MouseArea{
        //    id: startMenuMA;
        //    anchors.fill:  parent;
        //    onClicked:{
//                startMenu.visible=false;
//                gameCanvas.visible = true;
//                //Gamelogic.setArea(mouseX, mouseY);
//            }
//        }

}
