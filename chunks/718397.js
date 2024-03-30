function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("143927"),
        u = n("251384"),
        s = n("754250"),
        l = n("980671"),
        c = n("23383");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    t.default = r.memo(r.forwardRef(function(e, t) {
        var n, o, d = e.disabled,
            _ = e.type;
        var E = (n = (0, u.useExpressionPickerStore)(function(e) {
                return [e.activeView, e.activeViewType, e.pickerId]
            }, a.default), o = 3, function(e) {
                if (Array.isArray(e)) return e
            }(n) || function(e, t) {
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
            }(n, o) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }
            }(n, o) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            p = E[0],
            m = E[1],
            y = E[2],
            I = r.useCallback(function() {
                (0, u.toggleExpressionPicker)(l.ExpressionPickerViewType.EMOJI, _)
            }, [_]);
        return d ? null : r.createElement("div", {
            className: i()(l.CHAT_INPUT_BUTTON_CLASSNAME, c.buttonContainer),
            ref: t
        }, r.createElement(s.default, {
            className: c.emojiButton,
            onClick: I,
            active: p === l.ExpressionPickerViewType.EMOJI && m === _,
            "aria-controls": y,
            tabIndex: 0,
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: -4,
                    right: -4
                }
            }
        }))
    }))
}