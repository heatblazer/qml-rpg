var Entity = function(name, x_, y_, color_)
{

    var Stats = function() {
        var hp = 0;
        var str = 0;
        var def = 0;
        var spd = 0;
        var dex = 0;
        var lck = 0;

        var _getStats = function()
        {
            var s =  "Stats: "  + hp + ":" + str + ":" + def + ":" + spd + ":" + dex + ":" + lck;
            return s;
        }
        return {
            "getStats" : function() { return _getStats(); }
        }
    };

    var _stats = Stats();

    var _component = Qt.createComponent("GRect.qml");

    var _name = "";


    var _create = function()
    {
        var sprite = _component.createObject(gameCanvas, {"color" : color_, "x":x_, "y":y_});
        _name = name;
    }

    var _destroy = function()
    {
        delete _component;
    }

    _create();

    return {
        "entityName" : function() { return _name; },
        "getStats" : function() { return _stats.getStats(); }
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
        for (var i=0; i < entities.length; ++i)
        {
            console.log("Global tick test[" + entities[i].entityName() + "]" + entities[i].getStats());
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
    gCounter += 1;
    game.addEntity(new Entity("test" + gCounter, x_, y_));
}
