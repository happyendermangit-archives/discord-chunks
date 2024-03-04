function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        textMarkupPatternWithExclusions: function() {
            return r
        },
        default: function() {
            return o
        }
    });
    var i = n("404828"),
        s = n.n(i);
    let r = e => new RegExp("^[\\s\\S]+?(?=".concat(e, "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)")),
        a = {
            ...s.defaultRules.text,
            match: (0, i.anyScopeRegex)(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/)
        };
    var o = a
}