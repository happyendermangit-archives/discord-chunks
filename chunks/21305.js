function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Javaslatok megjelen\xedt\xe9se",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " lehetős\xe9g"),
            other: () => "".concat(t.number(e.optionCount), " lehetős\xe9g")
        }), " \xe1ll rendelkez\xe9sre."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Bel\xe9pett a(z) ".concat(e.groupTitle, " csoportba, amely ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " lehetős\xe9get"),
                other: () => "".concat(t.number(e.groupCount), " lehetős\xe9get")
            }), " tartalmaz. "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", kijel\xf6lve",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Javaslatok",
        selectedAnnouncement: e => "".concat(e.optionText, ", kijel\xf6lve")
    }
}