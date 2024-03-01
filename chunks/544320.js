function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "\xd6nerileri g\xf6ster",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " se\xe7enek"),
            other: () => "".concat(t.number(e.optionCount), " se\xe7enekler")
        }), " kullanılabilir."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Girilen grup ".concat(e.groupTitle, ", ile ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " se\xe7enek"),
                other: () => "".concat(t.number(e.groupCount), " se\xe7enekler")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", se\xe7ildi",
            other: ""
        }, e.isSelected)),
        listboxLabel: "\xd6neriler",
        selectedAnnouncement: e => "".concat(e.optionText, ", se\xe7ildi")
    }
}