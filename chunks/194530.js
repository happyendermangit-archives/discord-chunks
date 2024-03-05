function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        queueMicroTask: function() {
            return a
        }
    }), r("424973");
    var n, u = [],
        a = function(e) {
            if (!n) {
                var t = 0,
                    r = document.createTextNode("");
                new MutationObserver(function() {
                    return u.splice(0).forEach(function(e) {
                        return e()
                    })
                }).observe(r, {
                    characterData: !0
                }), n = function() {
                    r.textContent = "".concat(t ? t-- : t++)
                }
            }
            u.push(e), n()
        }
}