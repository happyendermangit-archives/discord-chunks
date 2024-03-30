function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("784184"),
        o = n("609879"),
        l = n("393158"),
        i = n("941504"),
        u = n("761666"),
        c = n("794711");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != a) {
                var o = [],
                    l = !0,
                    i = !1;
                try {
                    for (a = a.call(e); !(l = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); l = !0);
                } catch (e) {
                    i = !0, r = e
                } finally {
                    try {
                        !l && null != a.return && a.return()
                    } finally {
                        if (i) throw r
                    }
                }
                return o
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var f = function(e) {
        var t, n, s = e.data,
            f = s.title,
            m = s.subtitle,
            p = s.placeholder,
            v = s.rows,
            y = s.character_limit,
            E = s.pattern,
            b = e.onChange,
            h = e.initialText,
            g = e.isRequired;
        var _ = r.useRef(o.default.reactParserFor((t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, a, o;
                        r = e, a = t, o = n[t], a in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    })
                }
                return e
            }({}, o.default.defaultRules), n = (n = {
                link: l.LinkMarkupRule
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))),
            S = d(r.useState(""), 2),
            R = S[0],
            O = S[1],
            N = d(r.useState(""), 2),
            I = N[0],
            T = N[1];
        r.useEffect(function() {
            var e;
            O(null !== (e = null == h ? void 0 : h.value) && void 0 !== e ? e : "")
        }, [h]);
        var M = r.useCallback(function(e) {
            var t = null != E ? new RegExp(E) : null;
            null != t && null == t.exec(e) ? (T(i.default.Messages.IN_APP_REPORTING_FREE_TEXT_INPUT_ERROR), b({
                value: e,
                isValid: !1
            })) : null != e && (T(""), O(e), b({
                value: e,
                isValid: !0
            }))
        }, [b, E]);
        return r.createElement("div", {
            className: c.marginBottom8
        }, null != f && r.createElement("div", {
            className: c.marginBottom8
        }, r.createElement(a.Text, {
            variant: "text-sm/bold"
        }, f, g && r.createElement("span", {
            className: u.required
        }, "*"))), r.createElement(a.TextArea, {
            maxLength: y,
            onChange: M,
            value: R,
            error: I,
            rows: v,
            placeholder: p,
            autoFocus: !0
        }), null != m && r.createElement("div", null, r.createElement(a.Text, {
            variant: "text-sm/normal"
        }, _.current(m))))
    };
    t.default = function(e) {
        var t = e.elements,
            n = e.onChange,
            a = e.state,
            o = t.map(function(e) {
                var t, o = e.name;
                return r.createElement(f, {
                    data: e.data,
                    key: o,
                    onChange: function(e) {
                        return n(o, e.value, e.isValid)
                    },
                    initialText: null !== (t = null == a ? void 0 : a[o]) && void 0 !== t ? t : void 0,
                    isRequired: e.should_submit_data
                })
            });
        return r.createElement("div", null, o)
    }
}