function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " not selected."),
        select: "Select",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "No items selected",
            one: () => "".concat(t.number(e.count), " item selected"),
            other: () => "".concat(t.number(e.count), " items selected")
        }), "."),
        selectedAll: "All items selected.",
        selectedItem: e => "".concat(e.item, " selected."),
        longPressToSelect: "Long press to enter selection mode."
    }
}