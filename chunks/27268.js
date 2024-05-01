function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("481060"),
        l = n("278297"),
        u = n("897353"),
        d = n("689938"),
        _ = n("545396");

    function c(e) {
        let {
            onPlay: t,
            className: n,
            inactive: a
        } = e, c = r.useRef(null), E = (0, i.jsx)("div", {
            className: _.iconWrapper,
            ref: c,
            children: (0, i.jsx)(u.default, {
                className: s()(_.icon)
            })
        });
        return (0, i.jsx)(l.MessagesInteractionContext.Consumer, {
            children: e => a || null == t ? (0, i.jsx)("div", {
                className: _.cover,
                children: E
            }) : (0, i.jsx)(o.Clickable, {
                className: s()(n, _.cover, {
                    [_.active]: !e.disableInteractions
                }),
                onClick: t,
                tabIndex: 0,
                "aria-label": d.default.Messages.PLAY,
                focusProps: {
                    ringTarget: c
                },
                children: E
            })
        })
    }
}