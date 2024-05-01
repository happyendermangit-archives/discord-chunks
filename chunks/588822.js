function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("481060"),
        l = n("240991"),
        u = n("278297"),
        d = n("990291");

    function _(e) {
        let {
            userBio: t,
            className: n,
            animateOnHover: a = !1,
            isHovering: _ = !1,
            lineClamp: c = 6,
            setLineClamp: E = !0
        } = e, I = r.useMemo(() => (0, l.parseBioReact)(t), [t]);
        return (0, i.jsx)("div", {
            className: s()(n, d.markup),
            children: (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                lineClamp: E ? c : void 0,
                children: (0, i.jsx)(u.MessagesInteractionContext.Provider, {
                    value: {
                        disableAnimations: a && !_,
                        disableInteractions: !1
                    },
                    children: I
                })
            })
        })
    }
}