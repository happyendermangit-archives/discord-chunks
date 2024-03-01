function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Visa f\xf6rslag",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " alternativ"),
            other: () => "".concat(t.number(e.optionCount), " alternativ")
        }), " tillg\xe4ngliga."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Ingick i gruppen ".concat(e.groupTitle, " med ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " alternativ"),
                other: () => "".concat(t.number(e.groupCount), " alternativ")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", valda",
            other: ""
        }, e.isSelected)),
        listboxLabel: "F\xf6rslag",
        selectedAnnouncement: e => "".concat(e.optionText, ", valda")
    }
}