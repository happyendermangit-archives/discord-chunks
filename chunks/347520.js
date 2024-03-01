function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Mostrar sugest\xf5es",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " op\xe7\xe3o"),
            other: () => "".concat(t.number(e.optionCount), " op\xe7\xf5es")
        }), " dispon\xedvel."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Grupo inserido ".concat(e.groupTitle, ", com ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " op\xe7\xe3o"),
                other: () => "".concat(t.number(e.groupCount), " op\xe7\xf5es")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", selecionado",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Sugest\xf5es",
        selectedAnnouncement: e => "".concat(e.optionText, ", selecionado")
    }
}