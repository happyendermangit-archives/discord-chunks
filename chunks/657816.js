function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " ej markerat."),
        longPressToSelect: "Tryck l\xe4nge n\xe4r du vill \xf6ppna v\xe4ljarl\xe4ge.",
        select: "Markera",
        selectedAll: "Alla markerade objekt.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Inga markerade objekt",
            one: () => "".concat(t.number(e.count), " markerat objekt"),
            other: () => "".concat(t.number(e.count), " markerade objekt")
        }), "."),
        selectedItem: e => "".concat(e.item, " markerat.")
    }
}