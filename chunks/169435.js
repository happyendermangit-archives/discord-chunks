function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Zobrazit doporučen\xed",
        countAnnouncement: (e, t) => "K dispozici ".concat(t.plural(e.optionCount, {
            one: () => "je ".concat(t.number(e.optionCount), " možnost"),
            other: () => "jsou/je ".concat(t.number(e.optionCount), " možnosti/-\xed")
        }), "."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Zadan\xe1 skupina „".concat(e.groupTitle, "“ ").concat(t.plural(e.groupCount, {
                one: () => "s ".concat(t.number(e.groupCount), " možnost\xed"),
                other: () => "se ".concat(t.number(e.groupCount), " možnostmi")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: " (vybr\xe1no)",
            other: ""
        }, e.isSelected)),
        listboxLabel: "N\xe1vrhy",
        selectedAnnouncement: e => "".concat(e.optionText, ", vybr\xe1no")
    }
}