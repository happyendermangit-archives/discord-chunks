function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("404828"),
        s = n.n(i);
    let r = /\n$/,
        a = {
            ...s.defaultRules.heading,
            requiredFirstCharacters: [" ", "#"],
            match: (e, t, n) => t.allowHeading ? null == n || "" === n || null != n.match(r) ? (0, i.anyScopeRegex)(/^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/)(e, t, n) : null : null
        };
    var o = a
}