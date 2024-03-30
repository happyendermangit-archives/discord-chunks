function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CenterControlButton: function() {
            return h
        },
        default: function() {
            return y
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("795858"),
        s = n("701958"),
        l = n("845265"),
        c = n("51897"),
        f = n("748747"),
        d = n("941504"),
        _ = n("524841");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                E(e, t, n[t])
            })
        }
        return e
    }

    function m(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }

    function y(e) {
        var t = e.label,
            n = e.onClick,
            o = e.onKeyDown,
            u = e.onMouseEnter,
            s = e.onMouseLeave,
            l = e.onContextMenu,
            f = e.className,
            d = e.wrapperClassName,
            y = e.iconClassName,
            I = e.iconComponent,
            h = e.themeable,
            O = void 0 !== h && h,
            T = e.disabled,
            S = void 0 !== T && T,
            v = e.isActive,
            g = void 0 !== v && v,
            A = e.tooltipPosition,
            b = e.shouldShowTooltip,
            N = e.forceTooltipOpen,
            R = e.buttonRef,
            C = e.grow,
            P = e["aria-label"];
        return r.createElement(c.default, null, r.createElement(a.Tooltip, {
            position: void 0 === A ? "top" : A,
            text: t,
            "aria-label": P,
            shouldShow: void 0 === b || b,
            forceOpen: void 0 !== N && N
        }, function(e) {
            var t, c = e.onClick,
                h = e.onContextMenu,
                T = e.onMouseEnter,
                v = e.onMouseLeave,
                A = m(e, ["onClick", "onContextMenu", "onMouseEnter", "onMouseLeave"]);
            return r.createElement(a.Button, p({
                look: a.Button.Looks.BLANK,
                size: a.Button.Sizes.NONE,
                onKeyDown: function(e) {
                    null == o || o(e)
                },
                onClick: function(e) {
                    null == c || c(), null == n || n(e)
                },
                onMouseEnter: function(e) {
                    null == T || T(), null == u || u(e)
                },
                onMouseLeave: function(e) {
                    null == v || v(), null == s || s(e)
                },
                onContextMenu: function(e) {
                    null == h || h(), null == l || l(e)
                },
                onFocus: function(e) {
                    null == T || T(), null == u || u(e)
                },
                onBlur: function(e) {
                    null == v || v(), null == s || s(e)
                },
                disabled: S,
                innerClassName: _.lineHeightReset,
                className: i()(E({}, _.active, g), f),
                wrapperClassName: d,
                buttonRef: R,
                grow: C,
                "aria-label": P
            }, A), r.createElement(I, {
                className: i()(_.controlIcon, y, (E(t = {}, _.themeable, O), E(t, _.active, g), t)),
                color: "currentColor"
            }))
        }))
    }
    var I = {
        red: _.red,
        white: _.white,
        green: _.green,
        yellow: _.yellow,
        primaryDark: _.primaryDark,
        primaryLight: _.primaryLight,
        activeLight: _.activeLight
    };

    function h(e) {
        var t, n, o = e.color,
            h = e.isActive,
            O = e.className,
            T = e.iconClassName,
            S = e.onPopoutClick,
            v = e.popoutOpen,
            g = void 0 !== v && v,
            A = m(e, ["color", "isActive", "className", "iconClassName", "onPopoutClick", "popoutOpen"]),
            b = (0, f.default)(o, void 0 !== h && h),
            N = (0, u.default)("(max-width: 456px)");
        var R = r.createElement(y, (t = p({}, A), n = (n = {
            grow: !1,
            onContextMenu: S,
            iconClassName: i()(T, _.centerIcon),
            className: i()(N ? O : null, _.staticButton, _.centerButton, I[b])
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t));
        return N ? R : r.createElement("div", {
            className: i()(O, _.contextMenuContainer)
        }, r.createElement(l.default, {
            mask: null == S ? null : l.MaskIDs.CHANNEL_CALL_CONTROL_BUTTON,
            width: 56,
            height: 56
        }, R), null != S ? r.createElement(c.default, null, r.createElement(a.Clickable, {
            "aria-label": d.default.Messages.MORE_OPTIONS,
            onClick: S,
            onContextMenu: S,
            className: i()(_.contextMenuNub, I[b], E({}, _.active, g))
        }, r.createElement(s.default, {
            className: i()(_.contextMenuCaret, E({}, _.open, g))
        }))) : null)
    }
}