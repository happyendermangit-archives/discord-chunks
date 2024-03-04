function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isFirefox: function() {
            return i
        },
        isSafari: function() {
            return o
        }
    });
    var r = n("988641"),
        i = (0, r.memoize)(function() {
            return /firefox/i.test(navigator.userAgent)
        }),
        o = (0, r.memoize)(function() {
            return !!window.safari
        })
}