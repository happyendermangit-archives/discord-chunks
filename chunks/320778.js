function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "הצג הצעות",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "אפשרות ".concat(t.number(e.optionCount)),
            other: () => "".concat(t.number(e.optionCount), " אפשרויות")
        }), " במצב זמין."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "נכנס לקבוצה ".concat(e.groupTitle, ", עם ").concat(t.plural(e.groupCount, {
                one: () => "אפשרות ".concat(t.number(e.groupCount)),
                other: () => "".concat(t.number(e.groupCount), " אפשרויות")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", נבחר",
            other: ""
        }, e.isSelected)),
        listboxLabel: "הצעות",
        selectedAnnouncement: e => "".concat(e.optionText, ", נבחר")
    }
}