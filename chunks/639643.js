function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Dialog: function() {
            return l
        },
        DialogContext: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("979820"),
        i = n("35628"),
        a = n("433952"),
        u = n("451627"),
        s = r.createContext(void 0),
        l = r.forwardRef(function(e, t) {
            var n, l, c = e.children,
                f = e.impressionType,
                d = e.impression,
                _ = e.disableTrack,
                E = e.returnRef,
                p = function(e, t) {
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
                }(e, ["children", "impressionType", "impression", "disableTrack", "returnRef"]),
                m = r.useRef(null);
            return (0, o.useFocusLock)(m, {
                returnRef: E
            }), r.useContext(u.default)({
                type: f,
                name: null == d ? void 0 : d.impressionName,
                properties: null == d ? void 0 : d.impressionProperties
            }, {
                disableTrack: _
            }), r.useImperativeHandle(t, function() {
                return m.current
            }), r.createElement(s.Provider, {
                value: !0
            }, r.createElement("div", (n = function(e) {
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
            }({}, p), l = (l = {
                ref: m,
                role: "dialog",
                tabIndex: -1,
                "aria-modal": !0
            }, l), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(l)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
            }), n), r.createElement(a.HeadingLevel, {
                forceLevel: 1
            }, r.createElement(i.FocusRingScope, {
                containerRef: m
            }, c))))
        })
}