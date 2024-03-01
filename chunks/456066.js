function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " non selezionato."),
        longPressToSelect: "Premi a lungo per passare alla modalit\xe0 di selezione.",
        select: "Seleziona",
        selectedAll: "Tutti gli elementi selezionati.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Nessun elemento selezionato",
            one: () => "".concat(t.number(e.count), " elemento selezionato"),
            other: () => "".concat(t.number(e.count), " elementi selezionati")
        }), "."),
        selectedItem: e => "".concat(e.item, " selezionato.")
    }
}