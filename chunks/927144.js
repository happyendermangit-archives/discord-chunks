function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ButtonLayout: function() {
            return a
        },
        CaretPosition: function() {
            return i
        },
        default: function() {
            return E
        }
    });
    var r, o, i, a, u = n("470079"),
        s = n("803997"),
        l = n.n(s),
        c = n("784184"),
        f = n("348201"),
        d = n("1006");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        var t, n, r, o = e.className,
            i = e.header,
            a = e.headerClassName,
            s = e.content,
            E = e.contentClassName,
            p = e.buttonCTA,
            m = e.secondaryButtonCTA,
            y = e.onClick,
            I = e.onSecondaryClick,
            h = e.buttonProps,
            O = void 0 === h ? {
                color: c.Button.Colors.BRAND,
                look: c.Button.Looks.FILLED
            } : h,
            T = e.secondaryButtonProps,
            S = void 0 === T ? {
                color: c.Button.Colors.BRAND,
                look: c.Button.Looks.INVERTED
            } : T,
            v = e.onComponentMount,
            g = e.asset,
            A = e.markAsDismissed,
            b = e.caretPosition,
            N = e.buttonLayout,
            R = void 0 === N ? 0 : N;
        u.useEffect(function() {
            null == v || v()
        }, []);
        var C = null != m;
        return u.createElement("div", {
            className: l()(o, d.upsellTooltipWrapper, d[void 0 === b ? "caretTopCenter" : b])
        }, g, null == i ? null : u.createElement(c.Heading, {
            className: l()(a, d.upsellTooltipHeader),
            variant: "heading-md/semibold"
        }, i), u.createElement(c.Text, {
            color: "always-white",
            className: l()(E, d.content),
            variant: "text-sm/normal"
        }, s), null != p || C ? u.createElement("div", {
            className: l()(d.upsellButtonsContainer, (_(r = {}, d.upsellButtonsAdjacent, 0 === R), _(r, d.upsellButtonsStacked, 1 === R), r))
        }, C ? u.createElement(c.Button, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    _(e, t, n[t])
                })
            }
            return e
        }({}, S), n = (n = {
            onClick: function() {
                null == I || I(), null == A || A(f.ContentDismissActionType.SECONDARY)
            }
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), m) : null, null == p ? null : u.createElement(c.Button, {
            className: l()(_({}, d.fullWidth, !C), O.className),
            color: O.color,
            look: O.look,
            onClick: function(e) {
                y(e), null == A || A(f.ContentDismissActionType.PRIMARY)
            }
        }, p)) : null)
    }(r = i || (i = {})).TOP_CENTER = "caretTopCenter", r.TOP_RIGHT = "caretTopRight", r.TOP_LEFT = "caretTopLeft", r.BOTTOM_CENTER = "caretBottomCenter", r.BOTTOM_LEFT = "caretBottomLeft", r.LEFT_CENTER = "caretLeftCenter", r.LEFT_TOP = "caretLeftTop", r.RIGHT_CENTER = "caretRightCenter", (o = a || (a = {}))[o.ADJACENT = 0] = "ADJACENT", o[o.STACKED = 1] = "STACKED", E.CaretPosition = i, E.ButtonLayout = a
}