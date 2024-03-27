function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VisuallyHidden: function() {
            return u
        },
        useVisuallyHidden: function() {
            return s
        }
    });
    var r = n("182823"),
        i = n("470079"),
        a = n("612001");
    let o = {
        border: 0,
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        width: "1px",
        whiteSpace: "nowrap"
    };

    function s(e = {}) {
        let {
            style: t,
            isFocusable: n
        } = e, [r, s] = (0, i.useState)(!1), {
            focusWithinProps: u
        } = (0, a.useFocusWithin)({
            isDisabled: !n,
            onFocusWithinChange: e => s(e)
        }), c = (0, i.useMemo)(() => r ? t : t ? {
            ...o,
            ...t
        } : o, [r]);
        return {
            visuallyHiddenProps: {
                ...u,
                style: c
            }
        }
    }

    function u(e) {
        let {
            children: t,
            elementType: n = "div",
            isFocusable: a,
            style: o,
            ...u
        } = e, {
            visuallyHiddenProps: c
        } = s(e);
        return i.createElement(n, (0, r.mergeProps)(u, c), t)
    }
}