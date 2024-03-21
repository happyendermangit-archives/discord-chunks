function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AppLayerContainer: function() {
            return c
        },
        AppLayerProvider: function() {
            return _
        },
        appLayerContext: function() {
            return f
        },
        AppReferencePositionLayer: function() {
            return E
        },
        default: function() {
            return h
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
    } = (0, r.createLayer)("App"), c = l, _ = u, f = d, E = s.forwardRef(function(e, t) {
        return (0, i.jsx)(o, {
            children: (0, i.jsx)(a.ReferencePositionLayer, {
                ref: t,
                ...e
            })
        })
    });
    var h = o
}