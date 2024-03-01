function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "N\xe4yt\xe4 ehdotukset",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " vaihtoehto"),
            other: () => "".concat(t.number(e.optionCount), " vaihtoehdot")
        }), " saatavilla."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Mentiin ryhm\xe4\xe4n ".concat(e.groupTitle, ", ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " vaihtoehdon"),
                other: () => "".concat(t.number(e.groupCount), " vaihtoehdon")
            }), " kanssa."),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", valittu",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Ehdotukset",
        selectedAnnouncement: e => "".concat(e.optionText, ", valittu")
    }
}