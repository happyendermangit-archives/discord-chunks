function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("724458"), n("653041");
    var i = n("470079");
    t.default = (e, t) => {
        let [n, r] = i.useState(-1), a = i.useRef(-1);
        return i.useEffect(() => {
            let t = e.reduce((e, t) => (!e.includes(t.src) && e.push(t.src), e), []);
            r(t.length), a.current = t.length
        }, [e, a, r]), i.useEffect(() => {
            0 === n && t()
        }, [n, t]), {
            pending: n,
            pendingRef: a,
            setPending: r
        }
    }
}