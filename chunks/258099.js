function(e, t, n) {
    "use strict";
    n.r(t);
    let r = "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    t.default = {
        randomUUID: r
    }
}