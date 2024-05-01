function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        humanizeAbortCode: function() {
            return _
        },
        validateDiscordTag: function() {
            return d
        }
    }), n("47120");
    var i = n("626135"),
        r = n("777754"),
        a = n("981631"),
        s = n("689938");
    let o = /^\d+$/,
        l = /^(.+?@.+?\..+?|.+?#\d{4})$/,
        u = /^[a-zA-Z0-9_\\.]+$/;

    function d(e) {
        return u.test(e) || e.includes("#") && l.test(e) ? null : (function(e) {
            let [t, n] = e.split("#");
            i.default.track(a.AnalyticEvents.FRIEND_REQUEST_FAILED, {
                reason: "Invalid Username",
                query: e,
                discrim_len: (null != n ? n : "").length,
                username_len: t.length,
                is_email_like: r.default.isEmail(e),
                is_invite_like: r.default.isInvite(e),
                is_num_only: o.test(e)
            })
        }(e), s.default.Messages.POMELO_ADD_FRIEND_ERROR)
    }

    function _(e, t) {
        switch (e) {
            case a.AbortCodes.RELATIONSHIP_INCOMING_DISABLED:
                return s.default.Messages.ADD_FRIEND_ERROR_INVALID_DISCORD_TAG.format({
                    discordTag: t
                });
            case a.AbortCodes.TOO_MANY_FRIENDS:
                return s.default.Messages.ADD_FRIEND_ERROR_TOO_MANY_FRIENDS;
            case a.AbortCodes.RELATIONSHIP_ALREADY_FRIENDS:
                return s.default.Messages.ADD_FRIEND_ERROR_ALREADY_FRIENDS;
            case a.AbortCodes.USER_QUARANTINED:
            case a.AbortCodes.USER_FRIEND_REQUEST_LIMITED_ACCESS:
                return s.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING;
            case a.AbortCodes.TOO_MANY_BLOCKED_USERS:
                return s.default.Messages.BLOCK_USER_ERROR_TOO_MANY_BLOCKED_USERS;
            case a.AbortCodes.RELATIONSHIP_INCOMING_BLOCKED:
            case a.AbortCodes.RELATIONSHIP_INVALID_SELF:
            case a.AbortCodes.RELATIONSHIP_INVALUD_USER_BOT:
            case a.AbortCodes.RELATIONSHIP_INVALID_DISCORD_TAG:
            default:
                return s.default.Messages.POMELO_ADD_FRIEND_ERROR
        }
    }
}