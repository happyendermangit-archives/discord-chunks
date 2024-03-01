function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return o
        }
    });
    var n = r("884691");
    let u = e => {
        e.effects.forEach(e => {
            let {
                src: t
            } = e, r = document.createElement("link");
            r.rel = "prefetch", r.href = t, document.body.appendChild(r)
        })
    };
    var o = e => {
        n.useEffect(() => {
            u(e)
        }, [e])
    }
}