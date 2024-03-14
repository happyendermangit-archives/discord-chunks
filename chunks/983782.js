function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AppLayerContainer: function() {
            return c
        },
        AppLayerProvider: function() {
            return f
        },
        appLayerContext: function() {
            return _
        },
        AppReferencePositionLayer: function() {
            return h
        },
        default: function() {
            return E
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("228256"),
        a = n("222163");
    let {
        Layer: o,
        LayerContainer: l,
        LayerProvider: u,
        layerContext: d
    } = (0, r.createLayer)("App"), c = l, f = u, _ = d, h = s.forwardRef(function(e, t) {
        return (0, i.jsx)(o, {
            children: (0, i.jsx)(a.ReferencePositionLayer, {
                ref: t,
                ...e
            })
        })
    });
    var E = o
}