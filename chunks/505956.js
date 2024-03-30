function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("416801"),
        s = n("328545"),
        l = n("941504"),
        c = n("444155");

    function f(e) {
        var t = e.onPlay,
            n = e.className,
            o = e.inactive,
            f = r.useRef(null),
            d = r.createElement("div", {
                className: c.iconWrapper,
                ref: f
            }, r.createElement(s.default, {
                className: i()(c.icon)
            }));
        return r.createElement(u.MessagesInteractionContext.Consumer, null, function(e) {
            var u, s, _;
            return o || null == t ? r.createElement("div", {
                className: c.cover
            }, d) : r.createElement(a.Clickable, {
                className: i()(n, c.cover, (u = {}, s = c.active, _ = !e.disableInteractions, s in u ? Object.defineProperty(u, s, {
                    value: _,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : u[s] = _, u)),
                onClick: t,
                tabIndex: 0,
                "aria-label": l.default.Messages.PLAY,
                focusProps: {
                    ringTarget: f
                }
            }, d)
        })
    }
}