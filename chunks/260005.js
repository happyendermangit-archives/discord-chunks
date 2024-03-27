function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: `Afi\u{219}are sugestii`,
        countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\u{21B}iune`,other:()=>`${t.number(e.optionCount)} op\u{21B}iuni`})} disponibile.`,
        focusAnnouncement: (e, t) => `${t.select({true:()=>`Grup ${e.groupTitle} introdus, cu ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\u{21B}iune`,other:()=>`${t.number(e.groupCount)} op\u{21B}iuni`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", selectat",other:""},e.isSelected)}`,
        listboxLabel: "Sugestii",
        selectedAnnouncement: e => `${e.optionText}, selectat`
    }
}