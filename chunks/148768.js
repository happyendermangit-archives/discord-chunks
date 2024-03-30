function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        validateOptionContent: function() {
            return s
        }
    });
    var r = n("169850"),
        o = n("861272"),
        i = n("663563"),
        a = n("118891"),
        u = n("941504");

    function s(e) {
        var t = e.option,
            n = e.content,
            s = e.guildId,
            l = e.channelId,
            c = e.allowEmptyValues,
            f = e.commandOrigin,
            d = void 0 === f ? o.CommandOrigin.CHAT : f,
            _ = null != n ? (0, r.getString)({
                content: n
            }, "content").trim() : "",
            E = t.required,
            p = "" === _;
        if (!(null != n)) return E ? {
            success: !1,
            error: u.default.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
        } : {
            success: !0
        };
        if (p) return c ? {
            success: !0
        } : E ? {
            success: !1,
            error: u.default.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
        } : {
            success: !1,
            error: (0, a.getValidationErrorText)(t)
        };
        var m = n.length > 1 ? {
                type: "text",
                text: _
            } : n[0],
            y = (0, i.default)[t.type](m, t, l, s, d);
        return !y.success && null == y.error && (y.error = (0, a.getValidationErrorText)(t)), y
    }
}