function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Entered group ".concat(e.groupTitle, ", with ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " option"),
                other: () => "".concat(t.number(e.groupCount), " options")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", selected",
            other: ""
        }, e.isSelected)),
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " option"),
            other: () => "".concat(t.number(e.optionCount), " options")
        }), " available."),
        selectedAnnouncement: e => "".concat(e.optionText, ", selected"),
        buttonLabel: "Show suggestions",
        listboxLabel: "Suggestions"
    }
}