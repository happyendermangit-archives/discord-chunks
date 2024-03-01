function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Empfehlungen anzeigen",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " Option"),
            other: () => "".concat(t.number(e.optionCount), " Optionen")
        }), " verf\xfcgbar."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Eingetretene Gruppe ".concat(e.groupTitle, ", mit ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " Option"),
                other: () => "".concat(t.number(e.groupCount), " Optionen")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", ausgew\xe4hlt",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Empfehlungen",
        selectedAnnouncement: e => "".concat(e.optionText, ", ausgew\xe4hlt")
    }
}