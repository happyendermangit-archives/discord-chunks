function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: `\u{C81C}\u{C548} \u{C0AC}\u{D56D} \u{D45C}\u{C2DC}`,
        countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`,other:()=>`${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`})}\u{C744} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.`,
        focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{C785}\u{B825}\u{D55C} \u{ADF8}\u{B8F9} ${e.groupTitle}, ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`,other:()=>`${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, \u{C120}\u{D0DD}\u{B428}`,other:""},e.isSelected)}`,
        listboxLabel: `\u{C81C}\u{C548}`,
        selectedAnnouncement: e => `${e.optionText}, \u{C120}\u{D0DD}\u{B428}`
    }
}