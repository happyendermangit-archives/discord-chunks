function(e, t, n) {
    "use strict";
    let i, s, r;
    n.r(t), n.d(t, {
        updateIsInTabsUI: function() {
            return d
        }
    });
    var a = n("411916"),
        o = n("827032"),
        l = n("599110"),
        u = n("286235");

    function d(e) {
        i !== e && (i = e, s = e, ! function() {
            let e = r && i && s ? a.DesignIds.YOU_BAR_IA : i ? s ? a.DesignIds.DESIGN_TABS_IA : a.DesignIds.DESIGN_IA : a.DesignIds.CLASSIC_IA;
            l.default.extendSuperProperties({
                design_id: e
            }), o.addGlobalTag("design_id", e), u.default.setTags({
                design_id: "".concat(e)
            })
        }())
    }
}