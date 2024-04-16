function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        updateIsInTabsUI: function() {
            return u
        }
    });
    var s = n("804098"),
        a = n("20186"),
        o = n("626135"),
        l = n("960048");

    function u(e) {
        i !== e && (i = e, r = e, ! function() {
            let e = i ? r ? s.DesignIds.DESIGN_TABS_IA : s.DesignIds.DESIGN_IA : s.DesignIds.CLASSIC_IA;
            o.default.extendSuperProperties({
                design_id: e
            }), a.addGlobalTag("design_id", e), l.default.setTags({
                design_id: "".concat(e)
            })
        }())
    }
}