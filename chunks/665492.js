function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " nincs kijel\xf6lve."),
        longPressToSelect: "Nyomja hosszan a kijel\xf6l\xe9shez.",
        select: "Kijel\xf6l\xe9s",
        selectedAll: "Az \xf6sszes elem kijel\xf6lve.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Egy elem sincs kijel\xf6lve",
            one: () => "".concat(t.number(e.count), " elem kijel\xf6lve"),
            other: () => "".concat(t.number(e.count), " elem kijel\xf6lve")
        }), "."),
        selectedItem: e => "".concat(e.item, " kijel\xf6lve.")
    }
}