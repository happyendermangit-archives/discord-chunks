function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormItem: function() {
            return a
        }
    });
    var r = n("470079"),
        o = n("512341"),
        i = n("924900"),
        a = r.forwardRef(function(e, t) {
            var n, a, u = e.children,
                s = e.disabled,
                l = e.className,
                c = e.titleClassName,
                f = e.tag,
                d = e.required,
                _ = e.style,
                E = e.title,
                p = e.error,
                m = function(e, t) {
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
                }(e, ["children", "disabled", "className", "titleClassName", "tag", "required", "style", "title", "error"]),
                y = r.useId(),
                I = r.useId(),
                h = null !== (n = m.titleId) && void 0 !== n ? n : y,
                O = null != p ? null !== (a = m.errorId) && void 0 !== a ? a : I : void 0;
            return r.createElement("div", {
                ref: t,
                className: null != l ? l : void 0,
                style: null != _ ? _ : void 0
            }, null != E || null != p ? r.createElement(i.FormTitle, function(e) {
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
                tag: void 0 === f ? "h5" : f,
                disabled: void 0 !== s && s,
                required: void 0 !== d && d,
                error: p,
                className: c,
                id: h,
                errorId: O
            }, m), E) : null, r.createElement(o.FormContextProvider, {
                titleId: h,
                errorId: O,
                error: null != p ? p : void 0
            }, u))
        })
}