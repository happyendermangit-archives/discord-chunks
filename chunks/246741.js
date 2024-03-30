function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("143927"),
        u = n("194320"),
        s = n("860897"),
        l = n("251384"),
        c = n("813571"),
        f = n("980671"),
        d = n("941504"),
        _ = n("23383");

    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return E(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    t.default = r.memo(r.forwardRef(function(e, t) {
        var n, o, E = e.disabled,
            y = e.type,
            I = m((0, l.useExpressionPickerStore)(function(e) {
                return [e.activeView, e.pickerId]
            }, a.default), 2),
            h = I[0],
            O = I[1],
            T = r.useContext(s.default),
            S = m(r.useState(!1), 2),
            v = S[0],
            g = S[1],
            A = h === f.ExpressionPickerViewType.STICKER,
            b = r.useCallback(function() {
                (0, l.toggleExpressionPicker)(f.ExpressionPickerViewType.STICKER, y)
            }, [y]);
        r.useEffect(function() {
            var e = function() {
                    requestAnimationFrame(function() {
                        g(!0)
                    })
                },
                t = function() {
                    requestAnimationFrame(function() {
                        g(!1)
                    })
                };
            return T.addListener("sticker-suggestions-shown", e), T.addListener("sticker-suggestions-hidden", t),
                function() {
                    T.removeListener("sticker-suggestions-shown", e), T.removeListener("sticker-suggestions-hidden", t)
                }
        }, [T]);
        var N = (0, u.useStickerLottie)(),
            R = N.Component,
            C = N.events,
            P = N.play;
        if (E) return null;
        return r.createElement("div", {
            className: i()(f.CHAT_INPUT_BUTTON_CLASSNAME, _.buttonContainer),
            ref: t
        }, r.createElement(c.default, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    p(e, t, n[t])
                })
            }
            return e
        }({
            innerClassName: i()(_.button, _.stickerButton, p({}, _.stickerButtonTilted, v && !A))
        }, C), o = (o = {
            onClick: function() {
                b(), P()
            },
            isActive: A,
            "aria-label": d.default.Messages.STICKER_BUTTON_LABEL,
            "aria-expanded": A,
            "aria-haspopup": "dialog",
            "aria-controls": O,
            sparkle: !1,
            notification: null
        }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(o)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
        }), n), r.createElement(R, {
            color: "currentColor"
        })))
    }))
}