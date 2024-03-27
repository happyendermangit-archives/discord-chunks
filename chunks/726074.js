function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        makeRequestCall: function() {
            return o
        },
        makeRequestCallFromTimer: function() {
            return a
        }
    });
    let r = "undefined" != typeof global ? global : self,
        i = r.MutationObserver || r.WebKitMutationObserver;

    function a(e) {
        return function() {
            let t = setTimeout(r, 0),
                n = setInterval(r, 50);

            function r() {
                clearTimeout(t), clearInterval(n), e()
            }
        }
    }
    let o = "function" == typeof i ? function(e) {
        let t = 1,
            n = new i(e),
            r = document.createTextNode("");
        return n.observe(r, {
                characterData: !0
            }),
            function() {
                t = -t, r.data = t
            }
    } : a
}