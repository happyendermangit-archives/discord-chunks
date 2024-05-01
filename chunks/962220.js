function(e, t, n) {
    "use strict";
    n.r(t);
    var s = n("39612"),
        a = n("271579"),
        l = n("756647"),
        i = n("625128"),
        r = n("626135"),
        u = n("954824"),
        o = n("751189"),
        d = n("981631");
    let c = "template";
    t.default = {
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