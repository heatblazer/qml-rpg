var Entity = function(name, x_, y_, color_)
{

    var Stats = function() {
        var hp = 0;
        var str = 0;
        var def = 0;
        var spd = 0;
        var dex = 0;
        var lck = 0;
        var canAct = false;

        var _getStats = function()
        {
            var s =  "Stats: "  + hp + ":" + str + ":" + def + ":" + spd + ":" + dex + ":" + lck;
            return s;
        }
        return {
            "getStats" : function() { return _getStats(); }
        }
    };

    var _stats = new Stats();

    var _component = Qt.createComponent("GRect.qml");
    var _sprite = _component.createObject(gameCanvas, {"radius": 4, "color" : color_, "x":x_, "y":y_});
    var _name = ""+_sprite;

    var _destroy = function()
    {
        delete _sprite;
        delete _component;
    }

    return {
        "getName" : function() { return _name; },
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
            console.log("Global tick test[" + entities[i].getName() + "]" + entities[i].getStats());
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
        "addEntity" : function(ent) { _addEnt(ent); },
        "hClicked" : function(who) {
            //todo update the logic needed per entitiy here
                if (entities[who] !== null)
                    console.log(who+ " clicked!");
            }
    };
}


// creates a single gameobject
var game = new GameObject();

function setArea(x_, y_)
{
    console.log(game.init());
    gameCanvas.color = "green";
    game.addEntity(new Entity("test", x_, y_));

}
