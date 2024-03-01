function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("368639"),
        u = n("62843"),
        d = n("919163");

    function c(e) {
        let {
            userBio: t,
            className: n,
            animateOnHover: a = !1,
            isHovering: c = !1,
            lineClamp: f = 6
        } = e, m = i.useMemo(() => (0, o.parseBioReact)(t), [t]);
        return (0, l.jsx)("div", {
            className: s(n, d.markup),
            children: (0, l.jsx)(r.Text, {
                variant: "text-sm/normal",
                lineClamp: f,
                children: (0, l.jsx)(u.MessagesInteractionContext.Provider, {
                    value: {
                        disableAnimations: a && !c,
                        disableInteractions: !1
                    },
                    children: m
                })
            })
        })
    }
}