function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("655922"),
        s = n("420660"),
        a = n("915863"),
        o = n("689938");

    function l(e) {
        let {
            activity: t,
            color: n,
            look: l
        } = e;
        return (0, s.default)(t) ? (0, i.jsx)(a.default, {
            onClick: () => {
                let e = (0, r.default)(t);
                return window.open(null != e ? e : void 0)
            },
            color: n,
            look: l,
            fullWidth: !0,
            children: o.default.Messages.WATCH
        }, "play-activity") : null
    }
}