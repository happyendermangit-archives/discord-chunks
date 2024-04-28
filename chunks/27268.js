function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("278297"),
        u = n("897353"),
        d = n("689938"),
        _ = n("954886");

    function c(e) {
        let {
            onPlay: t,
            className: n,
            inactive: s
        } = e, c = r.useRef(null), E = (0, i.jsx)("div", {
            className: _.iconWrapper,
            ref: c,
            children: (0, i.jsx)(u.default, {
                className: a()(_.icon)
            })
        });
        return (0, i.jsx)(l.MessagesInteractionContext.Consumer, {
            children: e => s || null == t ? (0, i.jsx)("div", {
                className: _.cover,
                children: E
            }) : (0, i.jsx)(o.Clickable, {
                className: a()(n, _.cover, {
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