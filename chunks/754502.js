function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: `\u{639}\u{631}\u{636} \u{627}\u{644}\u{645}\u{642}\u{62A}\u{631}\u{62D}\u{627}\u{62A}`,
        countAnnouncement: (e, t) => `${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}`,other:()=>`${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`})} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`,
        focusAnnouncement: (e, t) => `${t.select({true:()=>`\u{627}\u{644}\u{645}\u{62C}\u{645}\u{648}\u{639}\u{629} \u{627}\u{644}\u{645}\u{62F}\u{62E}\u{644}\u{629} ${e.groupTitle}, \u{645}\u{639} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}`,other:()=>`${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`})}. `,other:""},e.isGroupChange)}${e.optionText}${t.select({true:`, \u{645}\u{62D}\u{62F}\u{62F}`,other:""},e.isSelected)}`,
        listboxLabel: `\u{645}\u{642}\u{62A}\u{631}\u{62D}\u{627}\u{62A}`,
        selectedAnnouncement: e => `${e.optionText}\u{60C} \u{645}\u{62D}\u{62F}\u{62F}`
    }
}