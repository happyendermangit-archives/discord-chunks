function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Kuva soovitused",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " valik"),
            other: () => "".concat(t.number(e.optionCount), " valikud")
        }), " saadaval."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Sisestatud r\xfchm ".concat(e.groupTitle, ", valikuga ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " valik"),
                other: () => "".concat(t.number(e.groupCount), " valikud")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", valitud",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Soovitused",
        selectedAnnouncement: e => "".concat(e.optionText, ", valitud")
    }
}