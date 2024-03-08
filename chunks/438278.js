function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("287585"),
        a = n("502651"),
        s = n("295999"),
        r = n("782340");

    function o(e) {
        let {
            activity: t,
            color: n,
            look: o
        } = e, u = (0, a.default)(t);
        return u ? (0, i.jsx)(s.default, {
            onClick: () => {
                let e = (0, l.default)(t);
                return window.open(null != e ? e : void 0)
            },
            color: n,
            look: o,
            fullWidth: !0,
            children: r.default.Messages.WATCH
        }, "play-activity") : null
    }
}