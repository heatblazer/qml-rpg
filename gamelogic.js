var Entity = function(name, x_, y_)
{
    var _component = Qt.createComponent("GRect.qml");
    var _name ;
    var _create = function()
    {
        var sprite = _component.createObject(gameCanvas, {"x":x_, "y":y_});
        _name = ""+sprite;
    }

    var _destroy = function()
    {
        delete _component;
    }

    return {
        "create" : function() { _create(); },
        "destroy" : function() { _destroy();},
        "getName" : function() { return _name; }
    }
}


var entities = [];

function getEntityByName(name_)
{
    console.log("Name is: " + name);
}



var GameObject = function(options)
{

    this._init = function()
    {
        return "init"; // init map and other objects
    }

    var _deinit = function()
    {
        return "deinit" // close and cleanup stuff here
    }

    return {
        "init" : this._init,
        "deinit" : this._deinit,
    };
}


// creates a single gameobject
var go = new GameObject();


function setArea(x_, y_)
{
    console.log(go.init());
    console.log("click setArea(", x_, ", ", y_, ")");
    gameCanvas.color = "green";

    var e = new Entity("test", x_, y_)

    e.create();

    console.log("Item is: " + e.getName());

    entities[e.getName()] = e;
}
