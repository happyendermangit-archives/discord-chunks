function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: `Zobrazit doporu\u{10D}en\xed`,
        countAnnouncement: (e, t) => `K dispozici ${t.plural(e.optionCount,{one:()=>`je ${t.number(e.optionCount)} mo\u{17E}nost`,other:()=>`jsou/je ${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`})}.`,
        focusAnnouncement: (e, t) => `${t.select({true:()=>`Zadan\xe1 skupina \u{201E}${e.groupTitle}\u{201C} ${t.plural(e.groupCount,{one:()=>`s ${t.number(e.groupCount)} mo\u{17E}nost\xed`,other:()=>`se ${t.number(e.groupCount)} mo\u{17E}nostmi`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:` (vybr\xe1no)`,other:""},e.isSelected)}`,
        listboxLabel: `N\xe1vrhy`,
        selectedAnnouncement: e => `${e.optionText}, vybr\xe1no`
    }
}