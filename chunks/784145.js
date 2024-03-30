function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        COMMUNITY_UPSELL_MINIMUM_GUILD_SIZE: function() {
            return p
        },
        CREATE_NEW_CHANNEL_VALUE: function() {
            return d
        },
        ENABLE_COMMUNITY_FLOW_MODAL_KEY: function() {
            return m
        },
        EnableCommunityModalSteps: function() {
            return i
        },
        MODERATOR_PERMISSIONS: function() {
            return _
        },
        MODERATOR_PERMISSIONS_FLAG: function() {
            return E
        },
        PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID: function() {
            return c
        },
        PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID: function() {
            return f
        },
        PUBLIC_SUCCESS_MODAL_SEEN_KEY: function() {
            return l
        }
    });
    var r, o, i, a = n("22287"),
        u = n("281767");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var l = "publicSuccessModalSeen",
        c = "667560445975986187",
        f = "669627189624307712",
        d = "1",
        _ = [u.Permissions.ADMINISTRATOR, u.Permissions.KICK_MEMBERS, u.Permissions.BAN_MEMBERS, u.Permissions.MANAGE_GUILD, u.Permissions.MANAGE_CHANNELS, u.Permissions.MANAGE_ROLES, u.Permissions.MANAGE_MESSAGES, u.Permissions.MANAGE_GUILD_EXPRESSIONS, u.Permissions.CREATE_GUILD_EXPRESSIONS, u.Permissions.MANAGE_EVENTS, u.Permissions.CREATE_EVENTS, u.Permissions.MODERATE_MEMBERS, u.Permissions.MENTION_EVERYONE];
    var E = a.combine.apply(a, function(e) {
            if (Array.isArray(e)) return s(e)
        }(r = _) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(r) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
            }
        }(r) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()),
        p = 1e3,
        m = "Enable Community Modal";
    (o = i || (i = {})).SAFETY_CHECK = "safety_check", o.BASICS = "basics", o.FINISH = "finish"
}