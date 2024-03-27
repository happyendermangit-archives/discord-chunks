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
        s = n("981631"),
        a = n("689938");
    let o = /^\d+$/,
        l = /^(.+?@.+?\..+?|.+?#\d{4})$/,
        u = /^[a-zA-Z0-9_\\.]+$/;

    function d(e) {
        return u.test(e) || e.includes("#") && l.test(e) ? null : (function(e) {
            let [t, n] = e.split("#");
            i.default.track(s.AnalyticEvents.FRIEND_REQUEST_FAILED, {
                reason: "Invalid Username",
                query: e,
                discrim_len: (null != n ? n : "").length,
                username_len: t.length,
                is_email_like: r.default.isEmail(e),
                is_invite_like: r.default.isInvite(e),
                is_num_only: o.test(e)
            })
        }(e), a.default.Messages.POMELO_ADD_FRIEND_ERROR)
    }

    function _(e, t) {
        switch (e) {
            case s.AbortCodes.RELATIONSHIP_INCOMING_DISABLED:
                return a.default.Messages.ADD_FRIEND_ERROR_INVALID_DISCORD_TAG.format({
                    discordTag: t
                });
            case s.AbortCodes.TOO_MANY_FRIENDS:
                return a.default.Messages.ADD_FRIEND_ERROR_TOO_MANY_FRIENDS;
            case s.AbortCodes.RELATIONSHIP_ALREADY_FRIENDS:
                return a.default.Messages.ADD_FRIEND_ERROR_ALREADY_FRIENDS;
            case s.AbortCodes.USER_QUARANTINED:
            case s.AbortCodes.USER_FRIEND_REQUEST_LIMITED_ACCESS:
                return a.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING;
            case s.AbortCodes.TOO_MANY_BLOCKED_USERS:
                return a.default.Messages.BLOCK_USER_ERROR_TOO_MANY_BLOCKED_USERS;
            case s.AbortCodes.RELATIONSHIP_INCOMING_BLOCKED:
            case s.AbortCodes.RELATIONSHIP_INVALID_SELF:
            case s.AbortCodes.RELATIONSHIP_INVALUD_USER_BOT:
            case s.AbortCodes.RELATIONSHIP_INVALID_DISCORD_TAG:
            default:
                return a.default.Messages.POMELO_ADD_FRIEND_ERROR
        }
    }
}