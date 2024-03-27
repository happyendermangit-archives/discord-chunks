function(e, t, n) {
    "use strict";
    let r;
    n.r(t), n.d(t, {
        FocusRing: function() {
            return P
        },
        FocusRingManager: function() {
            return O
        },
        FocusRingScope: function() {
            return N
        }
    });
    var i, a, o, s = n("470079"),
        u = Object.defineProperty,
        c = (e, t, n) => t in e ? u(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n,
        l = (e, t, n) => (c(e, "symbol" != typeof t ? t + "" : t, n), n),
        d = {
            exports: {}
        };
    i = d,
        function() {
            var e = {}.hasOwnProperty;

            function t() {
                for (var n = [], r = 0; r < arguments.length; r++) {
                    var i = arguments[r];
                    if (i) {
                        var a = typeof i;
                        if ("string" === a || "number" === a) n.push(i);
                        else if (Array.isArray(i)) {
                            if (i.length) {
                                var o = t.apply(null, i);
                                o && n.push(o)
                            }
                        } else if ("object" === a) {
                            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
                                n.push(i.toString());
                                continue
                            }
                            for (var s in i) e.call(i, s) && i[s] && n.push(s)
                        }
                    }
                }
                return n.join(" ")
            }
            i.exports ? (t.default = t, i.exports = t) : window.classNames = t
        }();
    let f = d.exports;
    var p = function(e, t, n, r, i, a, o, s) {
        if (!e) {
            var u;
            if (void 0 === t) u = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var c = [n, r, i, a, o, s],
                    l = 0;
                (u = Error(t.replace(/%s/g, function() {
                    return c[l++]
                }))).name = "Invariant Violation"
            }
            throw u.framesToPop = 1, u
        }
    };
    let h = /^#[0-9a-f]{3,8}$/i,
        m = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
    class g {
        constructor(e, t, n, r) {
            this.red = e, this.green = t, this.blue = n, this.alpha = r
        }
        toHexString() {
            var e = Math.round(this.red).toString(16),
                t = Math.round(this.green).toString(16),
                n = Math.round(this.blue).toString(16);
            return "#" + (this.red > 15.5 ? e : "0" + e) + (this.green > 15.5 ? t : "0" + t) + (this.blue > 15.5 ? n : "0" + n)
        }
        static parseString(e) {
            return e.match(m) ? this.parseColorFnString(e) : e.match(h) ? this.parseHexString(e) : void 0
        }
        static parseRgbString(e) {
            return "transparent" === e ? new g(0, 0, 0, 0) : this.parseColorFnString(e)
        }
        static parseHexString(e) {
            if (!(!e.match(h) || [6, 8].includes(e.length))) {
                if ((e = e.replace("#", "")).length < 6) {
                    let [t, n, r, i] = e.split("");
                    e = t + t + n + n + r + r, i && (e += i + i)
                }
                var t = e.match(/.{1,2}/g);
                if (null != t) return new g(parseInt(t[0], 16), parseInt(t[1], 16), parseInt(t[2], 16), null != t[3] ? parseInt(t[3], 16) / 255 : 1)
            }
        }
        static parseColorFnString(e) {
            var t;
            let [, n, r] = null != (t = e.match(m)) ? t : [];
            if (!n || !r) return;
            let i = r.split(/\s*[,/\s]\s*/).map(e => e.replace(",", "").trim()).filter(e => "" !== e).map((e, t) => (function(e, t, n) {
                if (/%$/.test(t)) return 3 === n ? parseFloat(t) / 100 : 255 * parseFloat(t) / 100;
                if ("h" === e[n]) {
                    if (/turn$/.test(t)) return 360 * parseFloat(t);
                    if (/rad$/.test(t)) return 57.3 * parseFloat(t)
                }
                return parseFloat(t)
            })(n, e, t));
            if ("hsl" === n.substr(0, 3)) {
                let e = function({
                    hue: e,
                    saturation: t,
                    lightness: n,
                    alpha: r
                }) {
                    let i;
                    t /= 255;
                    let a = (1 - Math.abs(2 * (n /= 255) - 1)) * t,
                        o = a * (1 - Math.abs(e / 60 % 2 - 1)),
                        s = n - a / 2,
                        u = (i = e < 60 ? [a, o, 0] : e < 120 ? [o, a, 0] : e < 180 ? [0, a, o] : e < 240 ? [0, o, a] : e < 300 ? [o, 0, a] : [a, 0, o]).map(e => Math.round((e + s) * 255));
                    return {
                        red: u[0],
                        green: u[1],
                        blue: u[2],
                        alpha: r
                    }
                }({
                    hue: i[0],
                    saturation: i[1],
                    lightness: i[2],
                    alpha: i[3]
                });
                return new g(e.red, e.green, e.blue, e.alpha)
            }
            return new g(i[0], i[1], i[2], "number" == typeof i[3] ? i[3] : 1)
        }
        toHSL() {
            return function({
                red: e,
                green: t,
                blue: n,
                alpha: r
            }) {
                let i = e / 255,
                    a = t / 255,
                    o = n / 255,
                    s = Math.max(i, a, o),
                    u = Math.min(i, a, o),
                    c = s - u,
                    l = (s + u) / 2,
                    d = c > 0 ? c / (1 - Math.abs(2 * l - 1)) : 0;
                if (0 === c) return {
                    hue: 0,
                    saturation: d,
                    lightness: l,
                    alpha: r
                };
                let f = 0;
                switch (s) {
                    case i:
                        f = (a - o) / c % 6;
                        break;
                    case a:
                        f = (o - i) / c + 2;
                        break;
                    case o:
                        f = (a - o) / c + 4
                }
                return {
                    hue: 60 * f,
                    saturation: d,
                    lightness: l,
                    alpha: r
                }
            }({
                red: this.red,
                green: this.green,
                blue: this.blue,
                alpha: this.alpha
            })
        }
        getRelativeLuminance() {
            var e = this.red / 255,
                t = this.green / 255,
                n = this.blue / 255;
            return .2126 * (e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .7152 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4))
        }
    }

    function _(e, t) {
        let n = e.alpha,
            r = (1 - n) * t.red + n * e.red,
            i = (1 - n) * t.green + n * e.green,
            a = (1 - n) * t.blue + n * e.blue;
        return new g(r, i, a, e.alpha + t.alpha * (1 - e.alpha))
    }

    function b(e) {
        if (e) return parseInt(e) > 0 ? e : void 0
    }
    class v {
        constructor() {
            l(this, "targetElement"), l(this, "targetAncestry"), l(this, "boundingBox"), l(this, "className"), l(this, "offset", 0), l(this, "zIndex"), l(this, "container", null), l(this, "themeOptions"), l(this, "invalidate", () => null)
        }
        setContainer(e) {
            this.container = e
        }
        setThemeOptions(e) {
            this.themeOptions = e
        }
        showElement(e, t = {}) {
            var n, i;
            this.targetElement = e, this.targetAncestry = this.getElementAncestors(this.targetElement), this.boundingBox = void 0, this.className = t.className, this.offset = null != (n = t.offset) ? n : 0, this.zIndex = t.zIndex, i = this, i !== r && (null == r || r.hide(), r = i), this.invalidate()
        }
        hide() {
            this.targetElement = void 0, this.targetAncestry = void 0, this.boundingBox = void 0, this.className = void 0, this.offset = 0, this.zIndex = void 0, this.invalidate()
        }
        get visible() {
            return null != this.targetElement || null != this.boundingBox
        }
        getElementAncestors(e) {
            if (null == e) return {
                elements: [],
                styles: []
            };
            let t = [],
                n = [],
                r = e;
            for (; null != r;) t.push(r), "u" > typeof window && n.push(window.getComputedStyle(r)), r = r.parentElement;
            return {
                elements: t,
                styles: n
            }
        }
        getNextZIndexForAncestry(e) {
            for (let t = 0; t < e.elements.length; t++) {
                let n = e.elements[t],
                    r = parseInt(e.styles[t].getPropertyValue("z-index"));
                if (!isNaN(r)) return r + 1;
                if (n === this.container) break
            }
        }
        getBorderRadius(e) {
            var t, n, r, i, a, o, s, u;
            let c = null != (n = b(null == (t = e.styles[0]) ? void 0 : t.borderTopLeftRadius)) ? n : "0",
                l = null != (i = b(null == (r = e.styles[0]) ? void 0 : r.borderTopRightRadius)) ? i : "0",
                d = null != (o = b(null == (a = e.styles[0]) ? void 0 : a.borderBottomRightRadius)) ? o : "0",
                f = null != (u = b(null == (s = e.styles[0]) ? void 0 : s.borderBottomLeftRadius)) ? u : "0";
            if (!("0" === c && "0" === l && "0" === d && "0" === f)) return `${c} ${l} ${d} ${f}`
        }
        makePositionFromDOMRect(e) {
            var t, n, r, i;
            if (null == this.container) return {};
            let a = this.container.getBoundingClientRect(),
                {
                    scrollTop: o,
                    scrollLeft: s
                } = this.container,
                u = 0,
                c = 0,
                l = 0,
                d = 0;
            return "number" == typeof this.offset ? (u = this.offset, c = this.offset, l = this.offset, d = this.offset) : (u = null != (t = this.offset.top) ? t : 0, c = null != (n = this.offset.right) ? n : 0, l = null != (r = this.offset.bottom) ? r : 0, d = null != (i = this.offset.left) ? i : 0), {
                top: o + e.top - a.top + u,
                width: e.width - (c + d),
                height: e.height - (l + u),
                left: s + e.left - a.left + d
            }
        }
        getStyle() {
            var e;
            let t = {};
            if (null != this.boundingBox && (t = {
                    ...this.makePositionFromDOMRect(this.boundingBox),
                    zIndex: this.zIndex
                }), null != this.targetElement && null != this.targetAncestry) {
                let n = function(e) {
                    let t = [];
                    for (let n of e.styles.slice(1)) {
                        let e = g.parseString(n.backgroundColor);
                        if (null != e) {
                            if (e.alpha > .95) return e;
                            t.push(e)
                        }
                    }
                    return t.push(new g(255, 255, 255, 1)), t.reduce(_)
                }(this.targetAncestry);
                t = {
                    ...this.makePositionFromDOMRect(this.targetElement.getBoundingClientRect()),
                    zIndex: null != (e = this.zIndex) ? e : this.getNextZIndexForAncestry(this.targetAncestry),
                    "--__adaptive-focus-ring-color": function(e, t) {
                        if (null == e) return "var(--focus-primary)";
                        let {
                            saturation: n
                        } = e.toHSL(), r = e.getRelativeLuminance();
                        return n <= .4 ? "var(--focus-primary)" : "u" > typeof t ? r < (t.brightnessTreshold || .2) ? "var(--focus-light, rgba(255,255,255,0.7))" : "var(--focus-dark, rgba(0, 0, 0, 0.85))" : "rgba(255,255,255,0.7)"
                    }(n, this.themeOptions),
                    "--__adaptive-focus-ring-radius": this.getBorderRadius(this.targetAncestry)
                }
            }
            return t
        }
    }
    let y = new v;
    "u" > typeof window && y.setContainer(document.body);
    let E = s.createContext(y);
    var S = function(e, t, n, r) {
        var i = n ? n.call(r, e, t) : void 0;
        if (void 0 !== i) return !!i;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var a = Object.keys(e),
            o = Object.keys(t);
        if (a.length !== o.length) return !1;
        for (var s = Object.prototype.hasOwnProperty.bind(t), u = 0; u < a.length; u++) {
            var c = a[u];
            if (!s(c)) return !1;
            var l = e[c],
                d = t[c];
            if (!1 === (i = n ? n.call(r, l, d, c) : void 0) || void 0 === i && l !== d) return !1
        }
        return !0
    };
    let x = !1,
        w, T = {};

    function C() {
        if (!x) return;
        let e = null == r ? void 0 : r.getStyle();
        null == e || S(e, T) ? null != w && cancelAnimationFrame(w) : (T = e, null == r || r.invalidate()), w = requestAnimationFrame(C)
    }
    let D = !1,
        O = {
            get ringsEnabled() {
                return D
            },
            setRingsEnabled(e) {
                D = e, null == r || r.invalidate()
            },
            enableAnimationTracking() {
                x = !0, w = requestAnimationFrame(C)
            },
            disableAnimationTracking() {
                x = !1, null != w && cancelAnimationFrame(w)
            }
        };
    var M = {
            exports: {}
        },
        A = {};
    M.exports = function() {
        if (a) return A;
        a = 1;
        var e = Symbol.for("react.element"),
            t = Symbol.for("react.fragment"),
            n = Object.prototype.hasOwnProperty,
            r = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
            i = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };

        function o(t, a, o) {
            var s, u = {},
                c = null,
                l = null;
            for (s in void 0 !== o && (c = "" + o), void 0 !== a.key && (c = "" + a.key), void 0 !== a.ref && (l = a.ref), a) n.call(a, s) && !i.hasOwnProperty(s) && (u[s] = a[s]);
            if (t && t.defaultProps)
                for (s in a = t.defaultProps) void 0 === u[s] && (u[s] = a[s]);
            return {
                $$typeof: e,
                type: t,
                key: c,
                ref: l,
                props: u,
                _owner: r.current
            }
        }
        return A.Fragment = t, A.jsx = o, A.jsxs = o, A
    }();
    let k = M.exports.jsx,
        R = M.exports.jsxs;

    function N(e) {
        let {
            containerRef: t,
            children: n,
            themeOptions: r
        } = e, i = s.useRef(new v);
        return s.useEffect(() => {
            i.current.setContainer(t.current), i.current.setThemeOptions(r)
        }, [t.current]), R(E.Provider, {
            value: i.current,
            children: [n, k(I, {})]
        })
    }

    function I() {
        let e = s.useContext(E),
            [, t] = s.useState({});
        return s.useEffect(() => (e.invalidate = () => t({}), () => {
            e.invalidate = () => null
        }), [e]), O.ringsEnabled && e.visible ? k("div", {
            className: f("focus-rings-ring", e.className),
            style: e.getStyle()
        }) : null
    }
    let L = "u" > typeof window && (null == (o = window.document) ? void 0 : o.createElement) != null ? s.useLayoutEffect : s.useEffect;

    function P(e) {
        let {
            within: t = !1,
            enabled: n = !0,
            focused: r,
            offset: i = 0,
            focusTarget: a,
            ringTarget: o,
            ringClassName: u,
            focusClassName: c,
            focusWithinClassName: l,
            children: d
        } = e;
        null != a && p(null != o, "FocusRing was given a focusTarget but the required ringTarget was not provided. A ringTarget is required to avoid ambiguity of where the ring will be applied."), null != r && p(null != o, "FocusRing was given a controlled focused prop but no ringTarget to apply the ring to. A ringTarget is required since it cannot be inferred through regular focus events.");
        let h = s.useRef(!1),
            [m, g] = s.useState(!1),
            _ = s.useContext(E),
            b = s.Children.only(d),
            {
                onBlur: v,
                onFocus: y,
                ...S
            } = b.props,
            x = s.useMemo(() => ({
                className: u,
                offset: i
            }), [u, i]);
        L(() => {
            n && _.invalidate()
        }), s.useEffect(() => {
            n || _.hide()
        }, [n, _]), s.useEffect(() => () => {
            h.current && _.hide()
        }, [_]), s.useEffect(() => {
            let e = null == o ? void 0 : o.current;
            null == r || null == e || (h.current = r, r ? _.showElement(e, x) : !1 === r && _.hide())
        }, [r, x, _, o]), L(() => {
            if (null != r) return;
            let e = null == a ? void 0 : a.current,
                n = null == o ? void 0 : o.current;
            if (null != e && null != n) return e.addEventListener("focusin", i, !0), e.addEventListener("focusout", s, !0), () => {
                e.removeEventListener("focusin", i, !0), e.removeEventListener("focusout", s, !0)
            };

            function i(e) {
                if (null != n) {
                    if (e.currentTarget === e.target) {
                        h.current = !0, _.showElement(n, x);
                        return
                    }
                    g(!0), t && _.showElement(n, x)
                }
            }

            function s() {
                _.hide(), h.current = !1, g(!1)
            }
        }, [t, x, r, _, a, o]);
        let w = s.useCallback(e => {
                _.hide(), h.current = !1, g(!1), null == v || v(e)
            }, [v, _]),
            T = s.useCallback(e => {
                let n = null == o ? void 0 : o.current;
                e.currentTarget === e.target ? (h.current = !0, _.showElement(null != n ? n : e.currentTarget, x)) : (g(!0), t && _.showElement(null != n ? n : e.currentTarget, x)), null == y || y(e)
            }, [o, t, y, _, x]);
        return n && null == a && null == r ? s.cloneElement(b, {
            ...S,
            className: f(S.className, h.current ? c : void 0, m ? l : void 0),
            onBlur: w,
            onFocus: T
        }) : b
    }
}