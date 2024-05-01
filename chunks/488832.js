function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        updateIsInTabsUI: function() {
            return u
        }
    });
    var a = n("804098"),
        s = n("20186"),
        o = n("626135"),
        l = n("960048");

    function u(e) {
        i !== e && (i = e, r = e, ! function() {
            let e = i ? r ? a.DesignIds.DESIGN_TABS_IA : a.DesignIds.DESIGN_IA : a.DesignIds.CLASSIC_IA;
            o.default.extendSuperProperties({
                design_id: e
            }), s.addGlobalTag("design_id", e), l.default.setTags({
                design_id: "".concat(e)
            })
        }())
    }
}