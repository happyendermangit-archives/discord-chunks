function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("623113");
    t.default = r.forwardRef(function(e, t) {
        let {
            muted: n,
            volume: s,
            playing: o,
            ...l
        } = e, [u, d] = (0, a.default)(t);
        return r.useEffect(() => {
            let e = u.current;
            if (null != e) void 0 !== n && (e.muted = n)
        }, [u, n]), r.useEffect(() => {
            let e = u.current;
            if (null != e) void 0 !== s && (e.volume = s)
        }, [u, s]), r.useEffect(() => {
            let e = u.current;
            if (null != e) void 0 !== o && (o ? e.play() : e.pause())
        }, [u, o]), (0, i.jsx)("audio", {
            ref: d,
            ...l
        })
    })
}