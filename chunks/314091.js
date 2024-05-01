function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getActivityAltText: function() {
            return h
        },
        getActivityPlatform: function() {
            return f
        },
        getProfileInfo: function() {
            return S
        },
        howLong: function() {
            return T
        }
    }), n("47120");
    var i = n("866442"),
        r = n("726542"),
        a = n("503438"),
        s = n("802856"),
        o = n("420660"),
        l = n("168631"),
        u = n("621853"),
        d = n("981631"),
        _ = n("689938");
    let c = e => "".concat(e).length < 13 ? 1e3 * e : e,
        E = e => {
            let t = Date.now() / 1e3;
            return null != e.end ? I(t, c(e.end) / 1e3) : null != e.start ? I(c(e.start) / 1e3, t) : {
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        },
        I = (e, t) => {
            let n = Math.max(t - e, 0);
            return {
                hours: Math.floor(n / 3600) % 24,
                minutes: Math.floor(n / 60) % 60,
                seconds: Math.floor(n) % 60
            }
        },
        T = e => {
            let t = E(e);
            return t.hours > 0 ? "".concat(t.hours, " hours") : t.minutes > 0 ? "".concat(t.minutes, " minutes") : "".concat(t.seconds, " seconds")
        },
        f = e => (0, a.default)(e) ? r.default.get(d.PlatformTypes.SPOTIFY) : (0, s.default)(e) ? r.default.get(d.PlatformTypes.XBOX) : null != e.platform && [d.ActivityGamePlatforms.PS4, d.ActivityGamePlatforms.PS5].includes(e.platform) ? r.default.get(d.PlatformTypes.PLAYSTATION) : e.name === r.default.get(d.PlatformTypes.LEAGUE_OF_LEGENDS).name ? r.default.get(d.PlatformTypes.LEAGUE_OF_LEGENDS) : void(e.type, d.ActivityTypes.PLAYING),
        S = (e, t) => {
            var n;
            let r = u.default.getUserProfile(e.id),
                [a, s] = null !== (n = null == r ? void 0 : r.themeColors) && void 0 !== n ? n : [],
                o = (0, l.getProfileTheme)(a),
                d = null != s ? (0, i.int2hex)(s) : t;
            return {
                color: d,
                theme: d === t ? "dark" : o
            }
        },
        h = (e, t) => (0, a.default)(t) ? _.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_SPOTIFY.format({
            username: e.username,
            song: t.details,
            artist: t.state
        }) : t.type === d.ActivityTypes.PLAYING ? _.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: e.username,
            activity: t.name
        }) : t.type === d.ActivityTypes.WATCHING ? _.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
            username: e.username,
            activity: t.name
        }) : t.type === d.ActivityTypes.LISTENING ? _.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
            username: e.username,
            activity: t.name
        }) : (0, o.default)(t) || t.type === d.ActivityTypes.STREAMING ? _.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_STREAMING.format({
            username: e.username,
            activity: t.name
        }) : _.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_BASE.format({
            username: e.username,
            activity: t.name
        })
}