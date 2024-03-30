function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ComboboxPopout: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("639643"),
        u = n("907326"),
        s = n("758909");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        var t, n, o = e.children,
            c = e.placeholder,
            f = e.value,
            d = e.onChange,
            _ = e.onClose,
            E = e.showScrollbar,
            p = e.className,
            m = e.multiSelect,
            y = function(e, t) {
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
            }(e, ["children", "placeholder", "value", "onChange", "onClose", "showScrollbar", "className", "multiSelect"]),
            I = r.useCallback(function(e) {
                d(e), !m && (null == _ || _())
            }, [d, _, m]);
        return r.createElement(a.Dialog, {
            className: i()(s.container, p, l({}, s.scroller, E))
        }, r.createElement(u.Combobox, (t = function(e) {
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
        }({}, y), n = (n = {
            showScrollbar: E,
            value: f,
            multiSelect: m,
            onChange: I,
            placeholder: c,
            children: o,
            listClassName: s.list
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t)))
    }
}