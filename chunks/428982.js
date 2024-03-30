function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Anchor: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("515936"),
        u = n("324377"),
        s = n("35628"),
        l = n("626399"),
        c = n("549823"),
        f = n("996176");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                d(e, t, n[t])
            })
        }
        return e
    }

    function E(e) {
        var t, n, o = e.href,
            E = e.onClick,
            p = e.className,
            m = e.children,
            y = e.rel,
            I = e.target,
            h = e.useDefaultUnderlineStyles,
            O = e.title,
            T = e.style,
            S = e.focusProps,
            v = function(e, t) {
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
            }(e, ["href", "onClick", "className", "children", "rel", "target", "useDefaultUnderlineStyles", "title", "style", "focusProps"]);
        null != o && null == E && (E = l.designConfig.getDefaultLinkInterceptor(o));
        var g = r.useContext(a.BlockInteractionsContext),
            A = {
                className: i()(f.anchor, d({}, f.anchorUnderlineOnHover, void 0 === h || h), p),
                href: o,
                onClick: E,
                rel: null != y ? y : void 0,
                target: null != I ? I : void 0,
                title: null != O ? O : void 0,
                style: null != T ? T : void 0
            };
        if (null != o && !(0, c.isSafeRedirect)(o) && (A.rel = "noreferrer noopener", A.target = "_blank"), g && delete A.href, null != E) {
            ;
            return r.createElement(u.Clickable, (t = _({
                tag: "a"
            }, v, A), n = (n = {
                onClick: E,
                focusProps: S
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t), m)
        }
        return r.createElement(s.FocusRing, S, r.createElement("a", _({}, v, A), m))
    }
}