var Entity = function(name, x_, y_)
{
    var _component = Qt.createComponent("GRect.qml");
    var _name;
    var _create = function()
    {
        var sprite = _component.createObject(gameCanvas, {"x":x_, "y":y_});
        _name = name;
    }

    var _destroy = function()
    {
        delete _component;
    }

    _create();

    return {
        "getName" : function() { return _name; }
    };
}


var GameObject = function(options)
{
    var entities = [];


    var _init = function()
    {
        return "init"; // init map and other objects
    }

    var _deinit = function()
    {
        return "deinit" // close and cleanup stuff here
    }

    var _update = function()
    {
        for (var entity in entities)
        {
            console.log("Global tick test" + entity.getName());
        }
    }

    var _addEnt = function(entity)
    {
        entities.push(entity);
    }

    return {
        "init" : function () { _init(); },
        "deinit" : function() { _deinit(); },
        "update" : function () { _update(); },
        "addEntity" : function(ent) { _addEnt(ent); }
    };
}


// creates a single gameobject
var game = new GameObject();
var gCounter = 0;

function setArea(x_, y_)
{
    console.log(game.init());
    console.log("click setArea(", x_, ", ", y_, ")");
    gameCanvas.color = "green";

    var e = new Entity("test" + gCounter, x_, y_)
    gCounter += 1;
    console.log("Item is: " + e);
    game.addEntity(e);
}
