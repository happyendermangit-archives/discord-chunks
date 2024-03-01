function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Afișare sugestii",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " opțiune"),
            other: () => "".concat(t.number(e.optionCount), " opțiuni")
        }), " disponibile."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Grup ".concat(e.groupTitle, " introdus, cu ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " opțiune"),
                other: () => "".concat(t.number(e.groupCount), " opțiuni")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", selectat",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Sugestii",
        selectedAnnouncement: e => "".concat(e.optionText, ", selectat")
    }
}