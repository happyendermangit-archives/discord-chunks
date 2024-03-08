function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("333987"),
        s = l.forwardRef(function(e, t) {
            let {
                muted: n,
                volume: s,
                playing: r,
                ...o
            } = e, [u, d] = (0, a.default)(t);
            return l.useEffect(() => {
                let e = u.current;
                if (null != e) void 0 !== n && (e.muted = n)
            }, [u, n]), l.useEffect(() => {
                let e = u.current;
                if (null != e) void 0 !== s && (e.volume = s)
            }, [u, s]), l.useEffect(() => {
                let e = u.current;
                if (null != e) void 0 !== r && (r ? e.play() : e.pause())
            }, [u, r]), (0, i.jsx)("audio", {
                ref: d,
                ...o
            })
        })
}