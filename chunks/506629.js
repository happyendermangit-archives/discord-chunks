function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        queueMicroTask: function() {
            return a
        }
    });
    var r, i = [],
        a = function(e) {
            if (!r) {
                var t = 0,
                    n = document.createTextNode("");
                new MutationObserver(function() {
                    return i.splice(0).forEach(function(e) {
                        return e()
                    })
                }).observe(n, {
                    characterData: !0
                }), r = function() {
                    n.textContent = "" + (t ? t-- : t++)
                }
            }
            i.push(e), r()
        }
}