function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isFirefox: function() {
            return i
        },
        isSafari: function() {
            return a
        }
    });
    var r = n("708644"),
        i = (0, r.memoize)(function() {
            return /firefox/i.test(navigator.userAgent)
        }),
        a = (0, r.memoize)(function() {
            return !!window.safari
        })
}