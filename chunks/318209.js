function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("613828"),
        u = n("784184"),
        s = n("892090");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                l(e, t, n[t])
            })
        }
        return e
    }

    function f(e, t) {
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
    var d = r.forwardRef(function(e, t) {
        var n, o, d, _ = e.avatar,
            E = e.name,
            p = e.children,
            m = e.subText,
            y = e.decorators,
            I = e.onClick,
            h = e.selected,
            O = e.muted,
            T = e.to,
            S = e.avatarClassName,
            v = e.selectedClassName,
            g = e.innerClassName,
            A = e.wrapContent,
            b = e.highlighted,
            N = e.focusProps,
            R = function(e, t) {
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
            }(e, ["avatar", "name", "children", "subText", "decorators", "onClick", "selected", "muted", "to", "avatarClassName", "selectedClassName", "innerClassName", "wrapContent", "highlighted", "focusProps"]);
        R.className = i()(R.className, s.container, (l(n = {}, s.selected, h), l(n, s.highlighted, b), l(n, null != v ? v : "", h), l(n, s.clickable, !h && (null != T || null != I)), n)), R["aria-selected"] = null !== (o = R["aria-selected"]) && void 0 !== o ? o : h;
        var C = r.createElement("div", {
            className: i()(g, s.layout, (l(d = {}, s.muted, !h && O), l(d, s.wrappedLayout, A), d))
        }, r.createElement("div", {
            className: i()(s.avatar, S)
        }, _), r.createElement("div", {
            className: s.content
        }, r.createElement("div", {
            className: s.nameAndDecorators
        }, r.createElement("div", {
            className: i()(s.name, l({}, s.wrappedName, A))
        }, E), y), null != m ? r.createElement("div", {
            className: s.subText
        }, m) : null), null != p ? r.createElement("div", {
            className: s.children
        }, p) : null);
        return null != T ? r.createElement(u.FocusRing, N, r.createElement(a.Link, f(c({
            to: T,
            onClick: I
        }, R), {
            role: "listitem",
            ref: t
        }), C)) : null != I ? r.createElement(u.Clickable, f(c({
            onClick: I,
            focusProps: N
        }, R), {
            role: "listitem",
            innerRef: t
        }), C) : r.createElement(u.FocusRing, N, r.createElement("div", f(c({}, R), {
            role: "listitem",
            ref: t
        }), C))
    });
    t.default = d
}