function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " neselectat."),
        longPressToSelect: "Apăsați lung pentru a intra \xeen modul de selectare.",
        select: "Selectare",
        selectedAll: "Toate elementele selectate.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Niciun element selectat",
            one: () => "".concat(t.number(e.count), " element selectat"),
            other: () => "".concat(t.number(e.count), " elemente selectate")
        }), "."),
        selectedItem: e => "".concat(e.item, " selectat.")
    }
}