function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " ikke valgt."),
        longPressToSelect: "Lav et langt tryk for at aktivere valgtilstand.",
        select: "V\xe6lg",
        selectedAll: "Alle elementer valgt.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Ingen elementer valgt",
            one: () => "".concat(t.number(e.count), " element valgt"),
            other: () => "".concat(t.number(e.count), " elementer valgt")
        }), "."),
        selectedItem: e => "".concat(e.item, " valgt.")
    }
}