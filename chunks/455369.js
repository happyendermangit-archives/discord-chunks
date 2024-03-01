function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        queueMicroTask: function() {
            return o
        }
    }), n("424973");
    var r, a = [],
        o = function(e) {
            if (!r) {
                var t = 0,
                    n = document.createTextNode("");
                new MutationObserver(function() {
                    return a.splice(0).forEach(function(e) {
                        return e()
                    })
                }).observe(n, {
                    characterData: !0
                }), r = function() {
                    n.textContent = "" + (t ? t-- : t++)
                }
            }
            a.push(e), r()
        }
}