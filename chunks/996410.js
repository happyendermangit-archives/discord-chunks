function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "Položka ".concat(e.item, " nen\xed vybr\xe1na."),
        longPressToSelect: "Dlouh\xfdm stisknut\xedm přejdete do režimu v\xfdběru.",
        select: "Vybrat",
        selectedAll: "Vybr\xe1ny všechny položky.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Nevybr\xe1ny ž\xe1dn\xe9 položky",
            one: () => "Vybr\xe1na ".concat(t.number(e.count), " položka"),
            other: () => "Vybr\xe1no ".concat(t.number(e.count), " položek")
        }), "."),
        selectedItem: e => "Vybr\xe1na položka ".concat(e.item, ".")
    }
}