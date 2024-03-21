function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClickableContainer: function() {
            return o
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("227645"),
        a = n("863157");

    function o(e) {
        let {
            tag: t = "div",
            children: n,
            className: o,
            focusProps: l,
            onClick: u,
            onDoubleClick: d,
            onContextMenu: c,
            onKeyDown: _,
            onFocus: f,
            onBlur: E,
            onMouseOver: h,
            onMouseDown: g,
            onMouseLeave: m,
            buttonProps: p,
            "aria-label": S
        } = e, v = s.useRef(null);
        return (0, i.jsxs)(t, {
            ref: v,
            className: o,
            onClick: u,
            onMouseOver: h,
            onMouseLeave: m,
            onDoubleClick: d,
            onContextMenu: c,
            children: [(0, i.jsx)(r.Clickable, {
                ...p,
                focusProps: {
                    ringTarget: v,
                    ...l
                },
                className: a.focusTarget,
                "aria-label": S,
                onClick: e => {
                    e.stopPropagation(), null == u || u(e)
                },
                onKeyDown: _,
                onFocus: f,
                onBlur: E,
                onMouseDown: g
            }), n]
        })
    }
}