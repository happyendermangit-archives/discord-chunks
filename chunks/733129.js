function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Rodyti pasiūlymus",
        countAnnouncement: (e, t) => "Yra ".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " parinktis"),
            other: () => "".concat(t.number(e.optionCount), " parinktys (-ių)")
        }), "."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Įvesta grupė ".concat(e.groupTitle, ", su ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " parinktimi"),
                other: () => "".concat(t.number(e.groupCount), " parinktimis (-ių)")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", pasirinkta",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Pasiūlymai",
        selectedAnnouncement: e => "".concat(e.optionText, ", pasirinkta")
    }
}