function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuSubmenuItem: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("527310"),
        u = n("131248"),
        s = n("175071"),
        l = n("989608");

    function c(e) {
        var t = e.subMenuClassName,
            n = e.parentItem,
            o = e.isFocused,
            c = e.menuSubmenuProps,
            f = e.renderSubmenu;
        c.focusIndex, c.isUsingKeyboardNavigation;
        var d = function(e, t) {
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
            }(c, ["focusIndex", "isUsingKeyboardNavigation"]),
            _ = r.useRef(null),
            E = r.useRef(null),
            p = r.useRef(null);
        return r.useLayoutEffect(function() {
            var e;
            o && ((0, u.ensureItemVisible)(_), null === (e = p.current) || void 0 === e || e.focus())
        }, [o]), r.createElement("div", {
            ref: _,
            className: l.__invalid_submenuContainer
        }, r.createElement("div", {
            ref: E
        }), n, o ? r.createElement(a.ReferencePositionLayer, {
            reference: E,
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            fixed: !0,
            spacing: 4,
            position: "right",
            align: "top"
        }, function() {
            var e, n;
            return r.createElement("div", {
                className: l.submenuPaddingContainer
            }, r.createElement("div", (e = function(e) {
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
            }({
                className: i()(l.submenu, t)
            }, d), n = (n = {
                ref: p
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }), e), r.createElement(s.ScrollerThin, {
                className: l.scroller
            }, f())))
        }) : null)
    }
}