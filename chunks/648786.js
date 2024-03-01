function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Prikaži predloge",
        countAnnouncement: (e, t) => "Na voljo je ".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " opcija"),
            other: () => "".concat(t.number(e.optionCount), " opcije")
        }), "."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Vnesena skupina ".concat(e.groupTitle, ", z ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " opcija"),
                other: () => "".concat(t.number(e.groupCount), " opcije")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", izbrano",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Predlogi",
        selectedAnnouncement: e => "".concat(e.optionText, ", izbrano")
    }
}