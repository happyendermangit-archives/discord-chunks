function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " no seleccionado."),
        longPressToSelect: "Mantenga pulsado para abrir el modo de selecci\xf3n.",
        select: "Seleccionar",
        selectedAll: "Todos los elementos seleccionados.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Ning\xfan elemento seleccionado",
            one: () => "".concat(t.number(e.count), " elemento seleccionado"),
            other: () => "".concat(t.number(e.count), " elementos seleccionados")
        }), "."),
        selectedItem: e => "".concat(e.item, " seleccionado.")
    }
}