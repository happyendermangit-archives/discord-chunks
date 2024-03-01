function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Afficher les suggestions",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " option"),
            other: () => "".concat(t.number(e.optionCount), " options")
        }), " disponible(s)."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Groupe ".concat(e.groupTitle, " saisi, avec ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " option"),
                other: () => "".concat(t.number(e.groupCount), " options")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", s\xe9lectionn\xe9(s)",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Suggestions",
        selectedAnnouncement: e => "".concat(e.optionText, ", s\xe9lectionn\xe9")
    }
}