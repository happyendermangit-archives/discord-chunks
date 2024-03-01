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
            one: () => "".concat(t.number(e.optionCount), " mulighed tilg\xe6ngelig"),
            other: () => "".concat(t.number(e.optionCount), " muligheder tilg\xe6ngelige")
        }), "."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Angivet gruppe ".concat(e.groupTitle, ", med ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " mulighed"),
                other: () => "".concat(t.number(e.groupCount), " muligheder")
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