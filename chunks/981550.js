function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "Nevybrat\xe9 položky: ".concat(e.item, "."),
        longPressToSelect: "Dlhš\xedm stlačen\xedm prejdite do režimu v\xfdberu.",
        select: "Vybrať",
        selectedAll: "Všetky vybrat\xe9 položky.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Žiadne vybrat\xe9 položky",
            one: () => "".concat(t.number(e.count), " vybrat\xe1 položka"),
            other: () => "Počet vybrat\xfdch položiek:".concat(t.number(e.count))
        }), "."),
        selectedItem: e => "Vybrat\xe9 položky: ".concat(e.item, ".")
    }
}