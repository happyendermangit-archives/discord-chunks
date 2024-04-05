function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClickableContainer: function() {
            return o
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("1561"),
        a = n("641076");

    function o(e) {
        let {
            tag: t = "div",
            children: n,
            className: o,
            focusProps: l,
            onClick: u,
            onDoubleClick: d,
            onContextMenu: _,
            onKeyDown: c,
            onFocus: E,
            onBlur: I,
            onMouseOver: T,
            onMouseDown: f,
            onMouseLeave: S,
            buttonProps: A,
            "aria-label": h
        } = e, m = r.useRef(null);
        return (0, i.jsxs)(t, {
            ref: m,
            className: o,
            onClick: u,
            onMouseOver: T,
            onMouseLeave: S,
            onDoubleClick: d,
            onContextMenu: _,
            children: [(0, i.jsx)(s.Clickable, {
                ...A,
                focusProps: {
                    ringTarget: m,
                    ...l
                },
                className: a.focusTarget,
                "aria-label": h,
                onClick: e => {
                    e.stopPropagation(), null == u || u(e)
                },
                onKeyDown: c,
                onFocus: E,
                onBlur: I,
                onMouseDown: f
            }), n]
        })
    }
}