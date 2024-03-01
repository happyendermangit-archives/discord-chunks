function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " pole valitud."),
        longPressToSelect: "Valikurežiimi sisenemiseks vajutage pikalt.",
        select: "Vali",
        selectedAll: "K\xf5ik \xfcksused valitud.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "\xdcksusi pole valitud",
            one: () => "".concat(t.number(e.count), " \xfcksus valitud"),
            other: () => "".concat(t.number(e.count), " \xfcksust valitud")
        }), "."),
        selectedItem: e => "".concat(e.item, " valitud.")
    }
}