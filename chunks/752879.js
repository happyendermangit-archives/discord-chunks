function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getActivityAltText: function() {
            return h
        },
        getActivityPlatform: function() {
            return y
        },
        getProfileInfo: function() {
            return I
        },
        howLong: function() {
            return m
        }
    });
    var r = n("194926"),
        o = n("386823"),
        i = n("157941"),
        a = n("99406"),
        u = n("896154"),
        s = n("624850"),
        l = n("903716"),
        c = n("281767"),
        f = n("941504");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var _ = function(e) {
            return "".concat(e).length < 13 ? 1e3 * e : e
        },
        E = function(e) {
            var t = Date.now() / 1e3;
            return null != e.end ? p(t, _(e.end) / 1e3) : null != e.start ? p(_(e.start) / 1e3, t) : {
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        },
        p = function(e, t) {
            var n = Math.max(t - e, 0);
            return {
                hours: Math.floor(n / 3600) % 24,
                minutes: Math.floor(n / 60) % 60,
                seconds: Math.floor(n) % 60
            }
        },
        m = function(e) {
            var t = E(e);
            return t.hours > 0 ? "".concat(t.hours, " hours") : t.minutes > 0 ? "".concat(t.minutes, " minutes") : "".concat(t.seconds, " seconds")
        },
        y = function(e) {
            return (0, i.default)(e) ? o.default.get(c.PlatformTypes.SPOTIFY) : (0, a.default)(e) ? o.default.get(c.PlatformTypes.XBOX) : null != e.platform && [c.ActivityGamePlatforms.PS4, c.ActivityGamePlatforms.PS5].includes(e.platform) ? o.default.get(c.PlatformTypes.PLAYSTATION) : e.name === o.default.get(c.PlatformTypes.LEAGUE_OF_LEGENDS).name ? o.default.get(c.PlatformTypes.LEAGUE_OF_LEGENDS) : void(e.type, c.ActivityTypes.PLAYING)
        },
        I = function(e, t) {
            var n, o, i, a = l.default.getUserProfile(e.id);
            var u = (n = null !== (i = null == a ? void 0 : a.themeColors) && void 0 !== i ? i : [], o = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(n) || function(e, t) {
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
                }(n, o) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return d(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                    }
                }(n, o) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                c = u[0],
                f = u[1],
                _ = (0, s.getProfileTheme)(c),
                E = null != f ? (0, r.int2hex)(f) : t;
            return {
                color: E,
                theme: E === t ? "dark" : _
            }
        },
        h = function(e, t) {
            return (0, i.default)(t) ? f.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_SPOTIFY.format({
                username: e.username,
                song: t.details,
                artist: t.state
            }) : t.type === c.ActivityTypes.PLAYING ? f.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
                username: e.username,
                activity: t.name
            }) : t.type === c.ActivityTypes.WATCHING ? f.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
                username: e.username,
                activity: t.name
            }) : t.type === c.ActivityTypes.LISTENING ? f.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
                username: e.username,
                activity: t.name
            }) : (0, u.default)(t) || t.type === c.ActivityTypes.STREAMING ? f.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_STREAMING.format({
                username: e.username,
                activity: t.name
            }) : f.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_BASE.format({
                username: e.username,
                activity: t.name
            })
        }
}