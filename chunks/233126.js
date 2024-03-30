function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        renderAutocompleteGroup: function() {
            return a
        },
        renderHeader: function() {
            return i
        }
    });
    var r = n("470079");
    n("624308");
    var o = n("587996");

    function i(e) {
        var t = e.titleWithQuery,
            n = e.titleWithoutQuery,
            i = e.query,
            a = e.getQuery,
            u = e.headerClassName,
            s = e.headerTrailingContent,
            l = i.length > 0 ? t.format({
                prefix: a(i)
            }) : n;
        return r.createElement(o.default.Title, {
            className: u,
            title: l,
            key: "autocomplete-title-".concat(l)
        }, s)
    }

    function a(e) {
        var t = e.query,
            n = e.selectedIndex,
            o = e.autocompletes,
            a = e.onHover,
            u = e.onClick,
            s = e.titleWithQuery,
            l = e.titleWithoutQuery,
            c = e.Component,
            f = e.getProps,
            d = e.getQuery,
            _ = e.key,
            E = e.indexOffset,
            p = void 0 === E ? 0 : E,
            m = e.headerClassName,
            y = e.headerTrailingContent,
            I = e.footer,
            h = e.subHeader;
        if (null == I && (null == o || 0 === o.length)) return null;
        var O = null == o ? void 0 : o.map(function(e, t) {
            var o, i, s = t + p,
                l = f(e, s);
            return r.createElement(c, (o = function(e) {
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
                onClick: u,
                onHover: a,
                selected: n === s,
                index: s
            }, l), i = (i = {
                key: l.key
            }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(i)).forEach(function(e) {
                Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
            }), o))
        });
        return r.createElement(r.Fragment, {
            key: _
        }, null != s && null != l ? i({
            titleWithQuery: s,
            titleWithoutQuery: l,
            query: t,
            getQuery: d,
            headerClassName: m,
            headerTrailingContent: y
        }) : null, h, O, I)
    }
}