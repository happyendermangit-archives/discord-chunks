function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var s = n("742270"),
        a = n("815157"),
        l = n("391679"),
        i = n("523086"),
        r = n("599110"),
        u = n("65300"),
        o = n("883069"),
        d = n("49111");
    let c = "template";
    var f = {
        ...o.default,
        openNativeAppModal(e) {
            i.default.openNativeAppModal(e, d.RPCCommands.GUILD_TEMPLATE_BROWSER)
        },
        openMobileApp(e, t) {
            if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
            let n = null != e ? (0, s.getGuildTemplateDynamicLinkTemplate)(e) : (0, s.getDefaultDynamicLinkTemplate)(),
                i = (0, a.generateAttemptId)(),
                o = (0, a.default)(n, {
                    utmSource: c,
                    fingerprint: t,
                    attemptId: i
                });
            r.default.track(d.AnalyticEvents.DEEP_LINK_CLICKED, {
                fingerprint: (0, l.maybeExtractId)(t),
                attempt_id: i,
                source: c,
                guild_template_code: e
            }), u.default.launch(o, () => {})
        }
    }
}