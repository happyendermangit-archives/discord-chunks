function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("406434");
    t.default = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(e) {
            var t = e.state,
                n = e.name;
            t.modifiersData[n] = (0, r.default)({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
            })
        },
        data: {}
    }
}