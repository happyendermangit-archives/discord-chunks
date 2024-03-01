function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Wyświetlaj sugestie",
        countAnnouncement: (e, t) => "dostępna/dostępne(-nych) ".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " opcja"),
            other: () => "".concat(t.number(e.optionCount), " opcje(-i)")
        }), "."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Dołączono do grupy ".concat(e.groupTitle, ", z ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " opcją"),
                other: () => "".concat(t.number(e.groupCount), " opcjami")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", wybrano",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Sugestie",
        selectedAnnouncement: e => "".concat(e.optionText, ", wybrano")
    }
}