function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useVisuallyHidden: function() {
            return a
        },
        VisuallyHidden: function() {
            return c
        }
    }), n("222007");
    var r = n("240849"),
        i = n("884691"),
        o = n("388032");
    let s = {
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

    function a() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                style: t,
                isFocusable: n
            } = e,
            [r, a] = (0, i.useState)(!1),
            {
                focusWithinProps: c
            } = (0, o.useFocusWithin)({
                isDisabled: !n,
                onFocusWithinChange: e => a(e)
            }),
            u = (0, i.useMemo)(() => r ? t : t ? {
                ...s,
                ...t
            } : s, [r]);
        return {
            visuallyHiddenProps: {
                ...c,
                style: u
            }
        }
    }

    function c(e) {
        let {
            children: t,
            elementType: Element = "div",
            isFocusable: n,
            style: o,
            ...s
        } = e, {
            visuallyHiddenProps: c
        } = a(e);
        return i.createElement(Element, (0, r.mergeProps)(s, c), t)
    }
}