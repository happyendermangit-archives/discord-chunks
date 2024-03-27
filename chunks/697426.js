function(e, t, n) {
    "use strict";
    var i, r, s, a, o, l, u, d, _, c, E, I, T, f;

    function S(e, t) {
        let {
            sound_id: n,
            emoji_id: i,
            emoji_name: r,
            user_id: s,
            available: a,
            ...o
        } = e;
        return {
            ...o,
            soundId: n,
            guildId: t,
            emojiId: i,
            emojiName: r,
            userId: s,
            available: null == a || a
        }
    }

    function h(e) {
        let {
            soundId: t,
            guildId: n,
            emojiId: i,
            emojiName: r,
            userId: s,
            ...a
        } = e;
        return {
            ...a,
            sound_id: t,
            guild_id: n,
            emoji_id: i,
            emoji_name: r,
            user_id: s
        }
    }
    n.r(t), n.d(t, {
        AnalyticsChangeType: function() {
            return s
        },
        AnalyticsSoundSource: function() {
            return a
        },
        AnalyticsSoundType: function() {
            return r
        },
        LocalSoundTrigger: function() {
            return u
        },
        SoundButtonOverlay: function() {
            return i
        },
        SoundboardSoundGridSectionType: function() {
            return o
        },
        SoundboardSoundItemType: function() {
            return l
        },
        soundboardSoundFromAPI: function() {
            return S
        },
        soundboardSoundToAPI: function() {
            return h
        }
    }), (d = i || (i = {}))[d.PLAY = 0] = "PLAY", d[d.ADD = 1] = "ADD", (_ = r || (r = {})).ENTRY = "entry_sound", _.EXIT = "exit_sound", _.DEFAULT = "default", (c = s || (s = {})).ADDED = "added", c.UPDATED = "updated", c.REMOVED = "removed", (E = a || (a = {})).DEFAULT = "default", E.CUSTOM = "custom", (I = o || (o = {}))[I.FAVORITES = 0] = "FAVORITES", I[I.RECENTLY_HEARD = 1] = "RECENTLY_HEARD", I[I.FREQUENTLY_USED = 2] = "FREQUENTLY_USED", I[I.GUILD = 3] = "GUILD", I[I.DEFAULTS = 4] = "DEFAULTS", I[I.SEARCH = 5] = "SEARCH", (T = l || (l = {}))[T.SOUND = 0] = "SOUND", T[T.ADD_SOUND = 1] = "ADD_SOUND", (f = u || (u = {}))[f.GIFT_CODE = 0] = "GIFT_CODE", f[f.SOUNDBOARD = 1] = "SOUNDBOARD", f[f.JOINED_VOICE_CHANNEL = 2] = "JOINED_VOICE_CHANNEL"
}