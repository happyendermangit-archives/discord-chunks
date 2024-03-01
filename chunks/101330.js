function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        queueMicroTask: function() {
            return o
        }
    }), n("424973");
    var r, i = [],
        o = function(t) {
            if (!r) {
                var e = 0,
                    n = document.createTextNode("");
                new MutationObserver(function() {
                    return i.splice(0).forEach(function(t) {
                        return t()
                    })
                }).observe(n, {
                    characterData: !0
                }), r = function() {
                    n.textContent = "" + (e ? e-- : e++)
                }
            }
            i.push(t), r()
        }
}