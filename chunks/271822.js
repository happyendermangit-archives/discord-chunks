function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Mostra suggerimenti",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " opzione disponibile"),
            other: () => "".concat(t.number(e.optionCount), " opzioni disponibili")
        }), "."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Ingresso nel gruppo ".concat(e.groupTitle, ", con ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " opzione"),
                other: () => "".concat(t.number(e.groupCount), " opzioni")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", selezionato",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Suggerimenti",
        selectedAnnouncement: e => "".concat(e.optionText, ", selezionato")
    }
}