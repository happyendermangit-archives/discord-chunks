function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormText: function() {
            return c
        },
        FormTextTypes: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("785720"),
        u = n("485459"),
        s = {
            DEFAULT: "default",
            INPUT_PLACEHOLDER: "placeholder",
            DESCRIPTION: "description",
            LABEL_BOLD: "labelBold",
            LABEL_SELECTED: "labelSelected",
            LABEL_DESCRIPTOR: "labelDescriptor",
            ERROR: "error",
            SUCCESS: "success"
        },
        l = {
            DEFAULT: "modeDefault",
            DISABLED: "modeDisabled",
            SELECTABLE: "modeSelectable"
        };

    function c(e) {
        var t = e.type,
            n = void 0 === t ? s.DEFAULT : t,
            o = e.className,
            c = e.disabled,
            f = e.selectable,
            d = e.children,
            _ = e.style,
            E = function(e, t) {
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
            }(e, ["type", "className", "disabled", "selectable", "children", "style"]),
            p = l.DEFAULT;
        return c ? p = l.DISABLED : f && (p = l.SELECTABLE), r.createElement(a.default, function(e) {
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
            className: i()(u[n], o, u[p]),
            style: _
        }, E), d)
    }
    c.Types = s
}