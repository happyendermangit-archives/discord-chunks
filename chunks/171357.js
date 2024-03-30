function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuItem: function() {
            return y
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("324377"),
        u = n("148153"),
        s = n("20487"),
        l = n("131248"),
        c = n("942320"),
        f = n("379698"),
        d = n("367628"),
        _ = n("989608");

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
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function y(e) {
        var t, n = e.color,
            o = e.label,
            y = e.icon,
            I = e.showIconFirst,
            h = void 0 !== I && I,
            O = e.imageUrl,
            T = e.hint,
            S = e.subtext,
            v = e.hasSubmenu,
            g = e.disabled,
            A = e.isFocused,
            b = e.menuItemProps,
            N = e.action,
            R = e.onClose,
            C = e.onFocus,
            P = e.className,
            D = e.focusedClassName,
            L = e.subMenuIconClassName,
            M = e.dontCloseOnActionIfHoldingShiftKey,
            U = e.dontCloseOnAction,
            w = e.iconProps,
            k = e.sparkle,
            G = r.useContext(s.OnMenuSelectContext),
            B = r.useRef(null),
            j = r.useCallback(function(e) {
                if (null == N) return !1;
                !(e.shiftKey && M) && !U && R(), e.persist(), null == G || G(), requestAnimationFrame(function() {
                    return N(e)
                })
            }, [N, R, G, M, U]);
        return r.useEffect(function() {
            A && ((0, l.ensureItemVisible)(B), null == C || C())
        }, [A, C]), r.createElement(a.Clickable, m(p({
            innerRef: B,
            className: i()(_.item, _.labelContainer, d.MENU_ITEM_COLORS[void 0 === n ? "default" : n], P, (E(t = {}, _.disabled, g), E(t, _.focused, A), E(t, null != D ? D : "", A), t)),
            onClick: g ? void 0 : j,
            "aria-disabled": g
        }, b), {
            "data-menu-item": "true"
        }), h && null != y && r.createElement("div", {
            className: _.iconContainerLeft
        }, r.createElement(y, m(p({}, w), {
            className: i()(_.icon, null == w ? void 0 : w.className),
            isFocused: A
        }))), r.createElement("div", {
            className: _.label
        }, (0, u.renderSubnode)(o, e), null != S && r.createElement("div", {
            className: _.subtext
        }, S)), null != T && r.createElement("div", {
            className: _.hintContainer
        }, (0, u.renderSubnode)(T, e)), !h && null != y && r.createElement("div", {
            className: _.iconContainer
        }, r.createElement(y, m(p({}, w), {
            className: i()(_.icon, null == w ? void 0 : w.className),
            isFocused: A
        }))), null != O && r.createElement("div", {
            className: _.imageContainer
        }, r.createElement("img", {
            className: _.image,
            src: (0, u.renderSubnode)(O, e),
            alt: ""
        })), v && r.createElement("div", {
            className: _.iconContainer
        }, r.createElement(f.default, {
            className: i()(_.caret, L)
        }), k && r.createElement(c.default, {
            className: _.sparkles
        })))
    }
}