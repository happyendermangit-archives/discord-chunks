function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AppLayerContainer: function() {
            return _
        },
        AppLayerProvider: function() {
            return c
        },
        AppReferencePositionLayer: function() {
            return I
        },
        appLayerContext: function() {
            return E
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("302901"),
        a = n("539907");
    let {
        Layer: o,
        LayerContainer: l,
        LayerProvider: u,
        layerContext: d
    } = (0, s.createLayer)("App"), _ = l, c = u, E = d, I = r.forwardRef(function(e, t) {
        return (0, i.jsx)(o, {
            children: (0, i.jsx)(a.ReferencePositionLayer, {
                ref: t,
                ...e
            })
        })
    });
    t.default = o
}