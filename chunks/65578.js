function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Vis forslag",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " alternativ"),
            other: () => "".concat(t.number(e.optionCount), " alternativer")
        }), " finnes."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Angitt gruppe ".concat(e.groupTitle, ", med ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " alternativ"),
                other: () => "".concat(t.number(e.groupCount), " alternativer")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", valgt",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Forslag",
        selectedAnnouncement: e => "".concat(e.optionText, ", valgt")
    }
}