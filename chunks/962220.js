function(e, t, n) {
    "use strict";
    n.r(t);
    var l = n("39612"),
        a = n("271579"),
        u = n("756647"),
        r = n("625128"),
        i = n("626135"),
        s = n("954824"),
        o = n("751189"),
        _ = n("981631");
    let c = "template";
    t.default = {
        ...o.default,
        openNativeAppModal(e) {
            r.default.openNativeAppModal(e, _.RPCCommands.GUILD_TEMPLATE_BROWSER)
        },
        openMobileApp(e, t) {
            if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
            let n = null != e ? (0, l.getGuildTemplateDynamicLinkTemplate)(e) : (0, l.getDefaultDynamicLinkTemplate)(),
                r = (0, a.generateAttemptId)(),
                o = (0, a.default)(n, {
                    utmSource: c,
                    fingerprint: t,
                    attemptId: r
                });
            i.default.track(_.AnalyticEvents.DEEP_LINK_CLICKED, {
                fingerprint: (0, u.maybeExtractId)(t),
                attempt_id: r,
                source: c,
                guild_template_code: e
            }), s.default.launch(o, () => {})
        }
    }
}