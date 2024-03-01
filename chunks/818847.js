function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " не вибрано."),
        longPressToSelect: "Виконайте довге натиснення, щоб перейти в режим вибору.",
        select: "Вибрати",
        selectedAll: "Усі елементи вибрано.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Жодних елементів не вибрано",
            one: () => "".concat(t.number(e.count), " елемент вибрано"),
            other: () => "Вибрано елементів: ".concat(t.number(e.count))
        }), "."),
        selectedItem: e => "".concat(e.item, " вибрано.")
    }
}