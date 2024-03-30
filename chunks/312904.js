function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("470079");
    let r = e => {
        e.effects.forEach(e => {
            let {
                src: t
            } = e, n = document.createElement("link");
            n.rel = "prefetch", n.href = t, document.body.appendChild(n)
        })
    };
    t.default = e => {
        i.useEffect(() => {
            r(e)
        }, [e])
    }
}