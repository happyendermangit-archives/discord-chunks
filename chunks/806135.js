function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("333987"),
        s = i.forwardRef(function(e, t) {
            let {
                muted: n,
                volume: s,
                playing: r,
                ...o
            } = e, [u, d] = (0, a.default)(t);
            return i.useEffect(() => {
                let e = u.current;
                if (null != e) void 0 !== n && (e.muted = n)
            }, [u, n]), i.useEffect(() => {
                let e = u.current;
                if (null != e) void 0 !== s && (e.volume = s)
            }, [u, s]), i.useEffect(() => {
                let e = u.current;
                if (null != e) void 0 !== r && (r ? e.play() : e.pause())
            }, [u, r]), (0, l.jsx)("audio", {
                ref: d,
                ...o
            })
        })
}