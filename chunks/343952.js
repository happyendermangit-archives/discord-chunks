function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        validateOptionContent: function() {
            return o
        }
    }), n("222007");
    var l = n("118200"),
        i = n("524768"),
        a = n("810065"),
        s = n("317041"),
        r = n("782340");

    function o(e) {
        let {
            option: t,
            content: n,
            guildId: o,
            channelId: u,
            allowEmptyValues: d,
            commandOrigin: c = i.CommandOrigin.CHAT
        } = e, f = null != n ? (0, l.getString)({
            content: n
        }, "content").trim() : "", m = t.required, p = null != n, h = "" === f;
        if (!p) return m ? {
            success: !1,
            error: r.default.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
        } : {
            success: !0
        };
        if (h) return d ? {
            success: !0
        } : m ? {
            success: !1,
            error: r.default.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
        } : {
            success: !1,
            error: (0, s.getValidationErrorText)(t)
        };
        let E = n.length > 1 ? {
                type: "text",
                text: f
            } : n[0],
            g = (0, a.default)[t.type](E, t, u, o, c);
        return !g.success && null == g.error && (g.error = (0, s.getValidationErrorText)(t)), g
    }
}