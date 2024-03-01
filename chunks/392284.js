function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("62843"),
        u = n("132755"),
        d = n("782340"),
        c = n("689426");

    function f(e) {
        let {
            onPlay: t,
            className: n,
            inactive: a
        } = e, f = i.useRef(null), m = (0, l.jsx)("div", {
            className: c.iconWrapper,
            ref: f,
            children: (0, l.jsx)(u.default, {
                className: s(c.icon)
            })
        });
        return (0, l.jsx)(o.MessagesInteractionContext.Consumer, {
            children: e => a || null == t ? (0, l.jsx)("div", {
                className: c.cover,
                children: m
            }) : (0, l.jsx)(r.Clickable, {
                className: s(n, c.cover, {
                    [c.active]: !e.disableInteractions
                }),
                onClick: t,
                tabIndex: 0,
                "aria-label": d.default.Messages.PLAY,
                focusProps: {
                    ringTarget: f
                },
                children: m
            })
        })
    }
}