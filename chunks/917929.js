function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = function(e) {
            e.effects.forEach(function(e) {
                var t = e.src,
                    n = document.createElement("link");
                n.rel = "prefetch", n.href = t, document.body.appendChild(n)
            })
        };
    t.default = function(e) {
        r.useEffect(function() {
            o(e)
        }, [e])
    }
}