function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Prikaži prijedloge",
        countAnnouncement: (e, t) => "Dostupno još: ".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " opcija"),
            other: () => "".concat(t.number(e.optionCount), " opcije/a")
        }), "."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Unesena skupina ".concat(e.groupTitle, ", s ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " opcijom"),
                other: () => "".concat(t.number(e.groupCount), " opcije/a")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", odabranih",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Prijedlozi",
        selectedAnnouncement: e => "".concat(e.optionText, ", odabrano")
    }
}