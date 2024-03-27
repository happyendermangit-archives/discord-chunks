function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: `Wy\u{15B}wietlaj sugestie`,
        countAnnouncement: (e, t) => `dost\u{119}pna/dost\u{119}pne(-nych) ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcja`,other:()=>`${t.number(e.optionCount)} opcje(-i)`})}.`,
        focusAnnouncement: (e, t) => `${t.select({true:()=>`Do\u{142}\u{105}czono do grupy ${e.groupTitle}, z ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcj\u{105}`,other:()=>`${t.number(e.groupCount)} opcjami`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:", wybrano",other:""},e.isSelected)}`,
        listboxLabel: "Sugestie",
        selectedAnnouncement: e => `${e.optionText}, wybrano`
    }
}