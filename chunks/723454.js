function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("302454"),
        r = n.n(i);
    let s = /\n$/,
        a = {
            ...r().defaultRules.heading,
            requiredFirstCharacters: [" ", "#"],
            match: (e, t, n) => t.allowHeading ? null == n || "" === n || null != n.match(s) ? (0, i.anyScopeRegex)(/^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/)(e, t, n) : null : null
        };
    t.default = a
}