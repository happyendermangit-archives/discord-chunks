function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: `Zobrazi\u{165} n\xe1vrhy`,
        countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} mo\u{17E}nos\u{165}`,other:()=>`${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`})} k dispoz\xedcii.`,
        focusAnnouncement: (e, t) => `${t.select({true:()=>`Zadan\xe1 skupina ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} mo\u{17E}nos\u{165}ou`,other:()=>`${t.number(e.groupCount)} mo\u{17E}nos\u{165}ami`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, vybrat\xe9`,other:""},e.isSelected)}`,
        listboxLabel: `N\xe1vrhy`,
        selectedAnnouncement: e => `${e.optionText}, vybrat\xe9`
    }
}