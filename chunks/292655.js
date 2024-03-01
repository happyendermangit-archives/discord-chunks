function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("82636"),
        u = n("782340"),
        d = n("497855");

    function c(e) {
        let {
            tabIndex: t,
            className: n,
            onClick: a,
            "aria-expanded": c,
            "aria-controls": f,
            focusProps: m
        } = e, [p, h] = i.useState(!1);

        function E() {
            h(!0)
        }

        function g() {
            h(!1)
        }
        return (0, l.jsx)(r.Button, {
            look: r.Button.Looks.BLANK,
            size: r.Button.Sizes.NONE,
            tabIndex: t,
            className: s(d.activityButton, n),
            onClick: a,
            onMouseEnter: E,
            onMouseOver: E,
            onMouseLeave: g,
            onFocus: E,
            onBlur: g,
            "aria-label": u.default.Messages.SELECT_ACTIVITY,
            "aria-expanded": c,
            "aria-controls": f,
            focusProps: m,
            children: (0, l.jsx)(o.default, {
                className: s(d.rocket, p ? d.rocketHovered : d.rocketUnhovered)
            })
        })
    }
}