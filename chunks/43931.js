function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "Vienums ".concat(e.item, " nav atlasīts."),
        longPressToSelect: "Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.",
        select: "Atlasīt",
        selectedAll: "Atlasīti visi vienumi.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Nav atlasīts neviens vienums",
            one: () => "Atlasīto vienumu skaits: ".concat(t.number(e.count)),
            other: () => "Atlasīto vienumu skaits: ".concat(t.number(e.count))
        }), "."),
        selectedItem: e => "Atlasīts vienums ".concat(e.item, ".")
    }
}