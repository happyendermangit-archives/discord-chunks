function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
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
            focusProps: p
        } = e, [m, h] = l.useState(!1);

        function x() {
            h(!0)
        }

        function E() {
            h(!1)
        }
        return (0, i.jsx)(r.Button, {
            look: r.Button.Looks.BLANK,
            size: r.Button.Sizes.NONE,
            tabIndex: t,
            className: s(d.activityButton, n),
            onClick: a,
            onMouseEnter: x,
            onMouseOver: x,
            onMouseLeave: E,
            onFocus: x,
            onBlur: E,
            "aria-label": u.default.Messages.SELECT_ACTIVITY,
            "aria-expanded": c,
            "aria-controls": f,
            focusProps: p,
            children: (0, i.jsx)(o.default, {
                className: s(d.rocket, m ? d.rocketHovered : d.rocketUnhovered)
            })
        })
    }
}