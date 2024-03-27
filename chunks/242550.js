function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTooltip: function() {
            return a
        }
    });
    var r = n("182823"),
        i = n("612001");

    function a(e, t) {
        let n = (0, r.filterDOMProps)(e, {
                labelable: !0
            }),
            {
                hoverProps: a
            } = (0, i.useHover)({
                onHoverStart: () => null == t ? void 0 : t.open(!0),
                onHoverEnd: () => null == t ? void 0 : t.close()
            });
        return {
            tooltipProps: (0, r.mergeProps)(n, a, {
                role: "tooltip"
            })
        }
    }
    n("470079")
}