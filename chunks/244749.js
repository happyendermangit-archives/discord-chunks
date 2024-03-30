function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AppLayerContainer: function() {
            return f
        },
        AppLayerProvider: function() {
            return d
        },
        AppReferencePositionLayer: function() {
            return E
        },
        appLayerContext: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("508625"),
        i = n("527310"),
        a = (0, o.createLayer)("App"),
        u = a.Layer,
        s = a.LayerContainer,
        l = a.LayerProvider,
        c = a.layerContext,
        f = s,
        d = l,
        _ = c,
        E = r.forwardRef(function(e, t) {
            return r.createElement(u, null, r.createElement(i.ReferencePositionLayer, function(e) {
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
                ref: t
            }, e)))
        });
    t.default = u
}