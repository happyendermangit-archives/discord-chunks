function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        howLong: function() {
            return h
        },
        getActivityPlatform: function() {
            return x
        },
        getProfileInfo: function() {
            return E
        },
        getActivityAltText: function() {
            return y
        }
    }), n("222007");
    var i = n("509043"),
        l = n("376556"),
        a = n("429928"),
        s = n("36539"),
        r = n("502651"),
        o = n("388491"),
        u = n("713135"),
        d = n("49111"),
        c = n("782340");
    let f = e => "".concat(e).length < 13 ? 1e3 * e : e,
        p = e => {
            let t = Date.now() / 1e3;
            return null != e.end ? m(t, f(e.end) / 1e3) : null != e.start ? m(f(e.start) / 1e3, t) : {
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        },
        m = (e, t) => {
            let n = Math.max(t - e, 0);
            return {
                hours: Math.floor(n / 3600) % 24,
                minutes: Math.floor(n / 60) % 60,
                seconds: Math.floor(n) % 60
            }
        },
        h = e => {
            let t = p(e);
            return t.hours > 0 ? "".concat(t.hours, " hours") : t.minutes > 0 ? "".concat(t.minutes, " minutes") : "".concat(t.seconds, " seconds")
        },
        x = e => (0, a.default)(e) ? l.default.get(d.PlatformTypes.SPOTIFY) : (0, s.default)(e) ? l.default.get(d.PlatformTypes.XBOX) : null != e.platform && [d.ActivityGamePlatforms.PS4, d.ActivityGamePlatforms.PS5].includes(e.platform) ? l.default.get(d.PlatformTypes.PLAYSTATION) : e.name === l.default.get(d.PlatformTypes.LEAGUE_OF_LEGENDS).name ? l.default.get(d.PlatformTypes.LEAGUE_OF_LEGENDS) : void(e.type, d.ActivityTypes.PLAYING),
        E = (e, t) => {
            var n;
            let l = u.default.getUserProfile(e.id),
                [a, s] = null !== (n = null == l ? void 0 : l.themeColors) && void 0 !== n ? n : [],
                r = (0, o.getProfileTheme)(a),
                d = null != s ? (0, i.int2hex)(s) : t;
            return {
                color: d,
                theme: d === t ? "dark" : r
            }
        },
        y = (e, t) => (0, a.default)(t) ? c.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_SPOTIFY.format({
            username: e.username,
            song: t.details,
            artist: t.state
        }) : t.type === d.ActivityTypes.PLAYING ? c.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: e.username,
            activity: t.name
        }) : t.type === d.ActivityTypes.WATCHING ? c.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
            username: e.username,
            activity: t.name
        }) : t.type === d.ActivityTypes.LISTENING ? c.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
            username: e.username,
            activity: t.name
        }) : (0, r.default)(t) || t.type === d.ActivityTypes.STREAMING ? c.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_STREAMING.format({
            username: e.username,
            activity: t.name
        }) : c.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_BASE.format({
            username: e.username,
            activity: t.name
        })
}