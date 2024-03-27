function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        validateOptionContent: function() {
            return o
        }
    }), n("222007");
    var i = n("118200"),
        l = n("524768"),
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
            commandOrigin: c = l.CommandOrigin.CHAT
        } = e, f = null != n ? (0, i.getString)({
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
        let x = n.length > 1 ? {
                type: "text",
                text: f
            } : n[0],
            E = (0, a.default)[t.type](x, t, u, o, c);
        return !E.success && null == E.error && (E.error = (0, s.getValidationErrorText)(t)), E
    }
}