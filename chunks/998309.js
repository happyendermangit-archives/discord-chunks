function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        updateIsInTabsUI: function() {
            return c
        }
    });
    var r, o, i, a = n("953853"),
        u = n("204974"),
        s = n("870331"),
        l = n("285910");

    function c(e) {
        if (r !== e) {
            var t;
            r = e, o = e, t = i && r && o ? a.DesignIds.YOU_BAR_IA : r ? o ? a.DesignIds.DESIGN_TABS_IA : a.DesignIds.DESIGN_IA : a.DesignIds.CLASSIC_IA, s.default.extendSuperProperties({
                design_id: t
            }), u.addGlobalTag("design_id", t), l.default.setTags({
                design_id: "".concat(t)
            })
        }
    }
}