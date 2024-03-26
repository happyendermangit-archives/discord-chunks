function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return u
        }
    });
    var n = r("884691");
    let o = e => {
        e.effects.forEach(e => {
            let {
                src: t
            } = e, r = document.createElement("link");
            r.rel = "prefetch", r.href = t, document.body.appendChild(r)
        })
    };
    var u = e => {
        n.useEffect(() => {
            o(e)
        }, [e])
    }
}