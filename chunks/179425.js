function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Mostrar sugerencias",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " opci\xf3n"),
            other: () => "".concat(t.number(e.optionCount), " opciones")
        }), " disponible(s)."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Se ha unido al grupo ".concat(e.groupTitle, ", con ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " opci\xf3n"),
                other: () => "".concat(t.number(e.groupCount), " opciones")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", seleccionado",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Sugerencias",
        selectedAnnouncement: e => "".concat(e.optionText, ", seleccionado")
    }
}