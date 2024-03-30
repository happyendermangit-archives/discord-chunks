function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ButtonSparkleGroup: function() {
            return h
        },
        PREMIUM_NEW_TIER_2_SVG_GRADIENT_ID: function() {
            return p
        },
        PREMIUM_OLD_TIER_2_SVG_GRADIENT_ID: function() {
            return m
        },
        SparkleGroupLeft: function() {
            return y
        },
        SparkleGroupRight: function() {
            return I
        },
        SparkleStar: function() {
            return O
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("751848"),
        u = n("523263"),
        s = n("994500"),
        l = n("868615"),
        c = n("21406");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                f(e, t, n[t])
            })
        }
        return e
    }

    function _(e, t) {
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

    function E(e, t) {
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
    var p = "premium_new_tier_2_gradient",
        m = "premium_old_tier_2_gradient",
        y = function(e) {
            var t = e.width,
                n = e.height,
                o = e.color,
                i = e.foreground,
                a = e.wrapperStyle,
                u = E(e, ["width", "height", "color", "foreground", "wrapperStyle"]),
                l = "sparkle-gradient-".concat(Math.random().toString(36).substring(2, 15));
            return r.createElement("div", {
                className: a
            }, r.createElement("svg", _(d({}, (0, s.default)(d({}, u))), {
                width: void 0 === t ? 28 : t,
                height: void 0 === n ? 53 : n,
                viewBox: "0 0 28 53",
                className: i,
                xmlns: "http://www.w3.org/2000/svg"
            }), r.createElement("defs", null, r.createElement("linearGradient", {
                id: l,
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "0%"
            }, r.createElement("stop", {
                stopColor: "#B473F5"
            }), r.createElement("stop", {
                offset: "1",
                stopColor: "#E292AA"
            }))), r.createElement("path", {
                d: "M19.1626 48.3974L21.7394 49.4231C21.7943 49.4744 21.7943 49.5256 21.7394 49.5256L19.1626 50.6026L18.0112 52.9615C18.0112 53.0128 17.9564 53.0128 17.9015 52.9615L16.805 50.6026H16.7502L14.2281 49.5256C14.1733 49.5256 14.1733 49.4744 14.2281 49.4231L16.7502 48.3974H16.805L17.9015 46.0385C17.9564 45.9872 18.0112 45.9872 18.0112 46.0385L19.1626 48.3974Z",
                fill: null != o ? o : "url(#".concat(l, ")")
            }), r.createElement("path", {
                d: "M26.5697 14.865C25.3611 15.6925 24.3322 16.7831 23.5512 18.0645C22.7702 19.3459 22.2549 20.7888 22.0395 22.2975L21.3147 27.5515C21.2999 27.676 21.2426 27.7905 21.1535 27.8732C21.0644 27.9558 20.9498 28.001 20.8315 28C20.7131 28.001 20.5986 27.9558 20.5095 27.8732C20.4204 27.7905 20.3631 27.676 20.3483 27.5515L19.5631 22.2975C19.3591 20.7849 18.8485 19.3373 18.0665 18.0542C17.2844 16.771 16.2495 15.683 15.0329 14.865L14.3685 14.4165C14.3092 14.3603 14.2623 14.291 14.231 14.2136C14.1997 14.1361 14.1847 14.0522 14.1873 13.968C14.1847 13.8929 14.2 13.8184 14.2316 13.7512C14.2633 13.6841 14.3104 13.6264 14.3685 13.5835L15.0329 13.135C16.2512 12.3038 17.2863 11.2039 18.068 9.91036C18.8497 8.61677 19.3597 7.15977 19.5631 5.63845L20.3483 0.44853C20.3631 0.323971 20.4204 0.209499 20.5095 0.126827C20.5986 0.044157 20.7131 -0.000967026 20.8315 1.71661e-05C20.9498 -0.000967026 21.0644 0.044157 21.1535 0.126827C21.2426 0.209499 21.2999 0.323971 21.3147 0.44853L22.0395 5.63845C22.2542 7.15601 22.7687 8.60832 23.5494 9.90022C24.3301 11.1921 25.3594 12.2945 26.5697 13.135L27.2341 13.5835C27.2999 13.6231 27.3561 13.6785 27.3981 13.7452C27.44 13.812 27.4666 13.8883 27.4757 13.968C27.467 14.0564 27.441 14.142 27.3994 14.2192C27.3578 14.2964 27.3015 14.3636 27.2341 14.4165L26.5697 14.865Z",
                fill: null != o ? o : "url(#".concat(l, ")")
            }), r.createElement("path", {
                d: "M8.70724 31.8901L13.2167 30.1319C13.3127 30.044 13.3127 29.9561 13.2167 29.9561L8.70724 28.1099L6.6923 24.0659C6.6923 23.978 6.59634 23.978 6.5004 24.0659L4.58145 28.1099H4.48552L0.0719606 29.9561C-0.0239869 29.9561 -0.0239869 30.044 0.0719606 30.1319L4.48552 31.8901H4.58145L6.5004 35.9341C6.59634 36.022 6.6923 36.022 6.6923 35.9341L8.70724 31.8901Z",
                fill: null != o ? o : "url(#".concat(l, ")")
            })))
        },
        I = function(e) {
            var t = e.width,
                n = e.height,
                o = e.color,
                i = e.wrapperStyle,
                a = "sparkle-gradient-".concat(Math.random().toString(36).substring(2, 15));
            return r.createElement("div", {
                className: i
            }, r.createElement("svg", {
                width: void 0 === t ? 21 : t,
                height: void 0 === n ? 22 : n,
                viewBox: "0 0 21 22",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("defs", null, r.createElement("linearGradient", {
                id: a,
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "0%"
            }, r.createElement("stop", {
                stopColor: "#B473F5"
            }), r.createElement("stop", {
                offset: "1",
                stopColor: "#E292AA"
            }))), r.createElement("path", {
                d: "M17.8554 2.39744L20.4323 3.42308C20.4871 3.47436 20.4871 3.52563 20.4323 3.52563L17.8554 4.60256L16.7041 6.96154C16.7041 7.01282 16.6492 7.01282 16.5944 6.96154L15.4979 4.60256H15.443L12.921 3.52563C12.8662 3.52563 12.8662 3.47436 12.921 3.42308L15.443 2.39744H15.4979L16.5944 0.0384612C16.6492 -0.0128207 16.7041 -0.0128207 16.7041 0.0384612L17.8554 2.39744Z",
                fill: null != o ? o : "url(#".concat(a, ")")
            }), r.createElement("path", {
                d: "M8.62582 14.7674L12.8132 16.3791C12.9023 16.4597 12.9023 16.5403 12.8132 16.5403L8.62582 18.2326L6.75481 21.9396C6.75481 22.0201 6.6657 22.0201 6.57661 21.9396L4.79473 18.2326H4.70566L0.607348 16.5403C0.518254 16.5403 0.518254 16.4597 0.607348 16.3791L4.70566 14.7674H4.79473L6.57661 11.0604C6.6657 10.9799 6.75481 10.9799 6.75481 11.0604L8.62582 14.7674Z",
                fill: null != o ? o : "url(#".concat(a, ")")
            })))
        };

    function h(e) {
        var t, n = e.tier,
            o = void 0 === n ? l.PremiumTypes.TIER_2 : n,
            s = (0, u.default)(),
            d = (0, a.isThemeLight)(s);
        return r.createElement(r.Fragment, null, !d && r.createElement(r.Fragment, null, r.createElement("div", {
            className: i()(c.rimGlowVertical, (f(t = {}, c.rimGlowVerticalTier0, o === l.PremiumTypes.TIER_0), f(t, c.rimGlowVerticalTier2, o === l.PremiumTypes.TIER_2), t))
        }), r.createElement(O, {
            foreground: c.buttonSparkleStar1
        })), r.createElement(O, {
            foreground: c.buttonSparkleStar2
        }), r.createElement(O, {
            foreground: c.buttonSparkleStar3
        }), r.createElement(O, {
            foreground: c.buttonSparkleStar4
        }), r.createElement(O, {
            foreground: c.buttonSparkleStar5
        }))
    }

    function O(e) {
        var t = e.width,
            n = e.height,
            o = e.color,
            i = e.foreground,
            a = E(e, ["width", "height", "color", "foreground"]);
        return r.createElement("svg", _(d({}, (0, s.default)(d({}, a))), {
            preserveAspectRatio: "none",
            width: void 0 === t ? 14 : t,
            height: void 0 === n ? 13 : n,
            viewBox: "0 0 14 13",
            className: i,
            xmlns: "http://www.w3.org/2000/svg"
        }), r.createElement("defs", null, r.createElement("linearGradient", {
            id: p,
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "0%"
        }, r.createElement("stop", {
            offset: "0%",
            stopColor: "#8547C6"
        }), r.createElement("stop", {
            offset: "50%",
            stopColor: "#B845C1"
        }), r.createElement("stop", {
            offset: "100%",
            stopColor: "#AB5D8A"
        })), r.createElement("linearGradient", {
            id: m,
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "0%"
        }, r.createElement("stop", {
            offset: "0%",
            stopColor: "#B473F5"
        }), r.createElement("stop", {
            offset: "100%",
            stopColor: "#E292AA"
        }))), r.createElement("path", {
            d: "M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z",
            fill: void 0 === o ? "white" : o
        }))
    }
}