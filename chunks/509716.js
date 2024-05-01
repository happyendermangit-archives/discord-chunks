function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        validateOptionContent: function() {
            return l
        }
    }), n("47120");
    var i = n("456007"),
        r = n("895924"),
        s = n("351133"),
        a = n("689079"),
        o = n("689938");

    function l(e) {
        let {
            option: t,
            content: n,
            guildId: l,
            channelId: u,
            allowEmptyValues: d,
            commandOrigin: _ = r.CommandOrigin.CHAT
        } = e, c = null != n ? (0, i.getString)({
            content: n
        }, "content").trim() : "", E = t.required, I = "" === c;
        if (!(null != n)) return E ? {
            success: !1,
            error: o.default.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
        } : {
            success: !0
        };
        if (I) return d ? {
            success: !0
        } : E ? {
            success: !1,
            error: o.default.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
        } : {
            success: !1,
            error: (0, a.getValidationErrorText)(t)
        };
        let T = n.length > 1 ? {
                type: "text",
                text: c
            } : n[0],
            f = (0, s.default)[t.type](T, t, u, l, _);
        return !f.success && null == f.error && (f.error = (0, a.getValidationErrorText)(t)), f
    }
}