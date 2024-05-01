function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        textMarkupPatternWithExclusions: function() {
            return s
        }
    });
    var i = n("302454"),
        r = n.n(i);
    let s = e => new RegExp("^[\\s\\S]+?(?=".concat(e, "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)")),
        a = {
            ...r().defaultRules.text,
            match: (0, i.anyScopeRegex)(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/)
        };
    t.default = a
}