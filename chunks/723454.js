function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("302454"),
        r = n.n(i);
    let a = /\n$/,
        s = {
            ...r().defaultRules.heading,
            requiredFirstCharacters: [" ", "#"],
            match: (e, t, n) => t.allowHeading ? null == n || "" === n || null != n.match(a) ? (0, i.anyScopeRegex)(/^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/)(e, t, n) : null : null
        };
    t.default = s
}