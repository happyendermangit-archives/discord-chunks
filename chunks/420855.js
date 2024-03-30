function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClickableContainer: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("324377"),
        i = n("641076");

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function u(e) {
        var t, n, u = e.tag,
            s = e.children,
            l = e.className,
            c = e.focusProps,
            f = e.onClick,
            d = e.onDoubleClick,
            _ = e.onContextMenu,
            E = e.onKeyDown,
            p = e.onFocus,
            m = e.onBlur,
            y = e.onMouseOver,
            I = e.onMouseDown,
            h = e.onMouseLeave,
            O = e.buttonProps,
            T = e["aria-label"],
            S = r.useRef(null);
        return r.createElement(void 0 === u ? "div" : u, {
            ref: S,
            className: l,
            onClick: f,
            onMouseOver: y,
            onMouseLeave: h,
            onDoubleClick: d,
            onContextMenu: _
        }, r.createElement(o.Clickable, (t = a({}, O), n = (n = {
            focusProps: a({
                ringTarget: S
            }, c),
            className: i.focusTarget,
            "aria-label": T,
            onClick: function(e) {
                e.stopPropagation(), null == f || f(e)
            },
            onKeyDown: E,
            onFocus: p,
            onBlur: m,
            onMouseDown: I
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t)), s)
    }
}