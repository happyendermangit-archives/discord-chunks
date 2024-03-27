function(e, t, n) {
    "use strict";
    var i, l, a, s, r, o, u, d, c, f, m, p, h, x;

    function E(e, t) {
        let {
            sound_id: n,
            emoji_id: i,
            emoji_name: l,
            user_id: a,
            available: s,
            ...r
        } = e;
        return {
            ...r,
            soundId: n,
            guildId: t,
            emojiId: i,
            emojiName: l,
            userId: a,
            available: null == s || s
        }
    }

    function y(e) {
        let {
            soundId: t,
            guildId: n,
            emojiId: i,
            emojiName: l,
            userId: a,
            ...s
        } = e;
        return {
            ...s,
            sound_id: t,
            guild_id: n,
            emoji_id: i,
            emoji_name: l,
            user_id: a
        }
    }
    n.r(t), n.d(t, {
        SoundButtonOverlay: function() {
            return i
        },
        AnalyticsSoundType: function() {
            return l
        },
        AnalyticsChangeType: function() {
            return a
        },
        AnalyticsSoundSource: function() {
            return s
        },
        soundboardSoundFromAPI: function() {
            return E
        },
        soundboardSoundToAPI: function() {
            return y
        },
        SoundboardSoundGridSectionType: function() {
            return r
        },
        SoundboardSoundItemType: function() {
            return o
        },
        LocalSoundTrigger: function() {
            return u
        }
    }), (d = i || (i = {}))[d.PLAY = 0] = "PLAY", d[d.ADD = 1] = "ADD", (c = l || (l = {})).ENTRY = "entry_sound", c.EXIT = "exit_sound", c.DEFAULT = "default", (f = a || (a = {})).ADDED = "added", f.UPDATED = "updated", f.REMOVED = "removed", (m = s || (s = {})).DEFAULT = "default", m.CUSTOM = "custom", (p = r || (r = {}))[p.FAVORITES = 0] = "FAVORITES", p[p.RECENTLY_HEARD = 1] = "RECENTLY_HEARD", p[p.FREQUENTLY_USED = 2] = "FREQUENTLY_USED", p[p.GUILD = 3] = "GUILD", p[p.DEFAULTS = 4] = "DEFAULTS", p[p.SEARCH = 5] = "SEARCH", (h = o || (o = {}))[h.SOUND = 0] = "SOUND", h[h.ADD_SOUND = 1] = "ADD_SOUND", (x = u || (u = {}))[x.GIFT_CODE = 0] = "GIFT_CODE", x[x.SOUNDBOARD = 1] = "SOUNDBOARD", x[x.JOINED_VOICE_CHANNEL = 2] = "JOINED_VOICE_CHANNEL"
}