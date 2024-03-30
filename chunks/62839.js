function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        humanizeAbortCode: function() {
            return d
        },
        validateDiscordTag: function() {
            return f
        }
    });
    var r = n("870331"),
        o = n("210320"),
        i = n("281767"),
        a = n("941504");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var s = /^\d+$/,
        l = /^(.+?@.+?\..+?|.+?#\d{4})$/,
        c = /^[a-zA-Z0-9_\\.]+$/;

    function f(e) {
        return c.test(e) || e.includes("#") && l.test(e) ? null : (function(e) {
            var t, n, a = (t = e.split("#"), n = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(t) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            u = !0, r = e
                        } finally {
                            try {
                                !a && null != o.return && o.return()
                            } finally {
                                if (u) throw r
                            }
                        }
                        return i
                    }
                }(t, n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return u(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                l = a[0],
                c = a[1];
            r.default.track(i.AnalyticEvents.FRIEND_REQUEST_FAILED, {
                reason: "Invalid Username",
                query: e,
                discrim_len: (null != c ? c : "").length,
                username_len: l.length,
                is_email_like: o.default.isEmail(e),
                is_invite_like: o.default.isInvite(e),
                is_num_only: s.test(e)
            })
        }(e), a.default.Messages.POMELO_ADD_FRIEND_ERROR)
    }

    function d(e, t) {
        switch (e) {
            case i.AbortCodes.RELATIONSHIP_INCOMING_DISABLED:
                return a.default.Messages.ADD_FRIEND_ERROR_INVALID_DISCORD_TAG.format({
                    discordTag: t
                });
            case i.AbortCodes.TOO_MANY_FRIENDS:
                return a.default.Messages.ADD_FRIEND_ERROR_TOO_MANY_FRIENDS;
            case i.AbortCodes.RELATIONSHIP_ALREADY_FRIENDS:
                return a.default.Messages.ADD_FRIEND_ERROR_ALREADY_FRIENDS;
            case i.AbortCodes.USER_QUARANTINED:
            case i.AbortCodes.USER_FRIEND_REQUEST_LIMITED_ACCESS:
                return a.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING;
            case i.AbortCodes.TOO_MANY_BLOCKED_USERS:
                return a.default.Messages.BLOCK_USER_ERROR_TOO_MANY_BLOCKED_USERS;
            case i.AbortCodes.RELATIONSHIP_INCOMING_BLOCKED:
            case i.AbortCodes.RELATIONSHIP_INVALID_SELF:
            case i.AbortCodes.RELATIONSHIP_INVALUD_USER_BOT:
            case i.AbortCodes.RELATIONSHIP_INVALID_DISCORD_TAG:
            default:
                return a.default.Messages.POMELO_ADD_FRIEND_ERROR
        }
    }
}