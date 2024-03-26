function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return o
        }
    }), r("222007"), r("808653"), r("424973");
    var n = r("884691"),
        o = (e, t) => {
            let [r, o] = n.useState(-1), u = n.useRef(-1);
            return n.useEffect(() => {
                let t = e.reduce((e, t) => (!e.includes(t.src) && e.push(t.src), e), []);
                o(t.length), u.current = t.length
            }, [e, u, o]), n.useEffect(() => {
                0 === r && t()
            }, [r, t]), {
                pending: r,
                pendingRef: u,
                setPending: o
            }
        }
}