function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        makeRequestCallFromTimer: function() {
            return i
        },
        makeRequestCall: function() {
            return o
        }
    }), n("854508");
    let r = "undefined" != typeof global ? global : self,
        a = r.MutationObserver || r.WebKitMutationObserver;

    function i(e) {
        return function() {
            let t = setTimeout(r, 0),
                n = setInterval(r, 50);

            function r() {
                clearTimeout(t), clearInterval(n), e()
            }
        }
    }
    let o = "function" == typeof a ? function(e) {
        let t = 1,
            n = new a(e),
            r = document.createTextNode("");
        return n.observe(r, {
                characterData: !0
            }),
            function() {
                t = -t, r.data = t
            }
    } : i
}