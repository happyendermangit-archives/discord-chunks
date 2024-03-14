function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GUILD_EVENT_MAX_NAME_LENGTH: function() {
            return S
        },
        GUILD_EVENT_MAX_DESCRIPTION_LENGTH: function() {
            return v
        },
        MAX_EVENT_LOCATION_LENGTH: function() {
            return T
        },
        ANALYTICS_GUILD_EVENTS_MODAL_NAME: function() {
            return I
        },
        FAKE_EVENT_ID: function() {
            return C
        },
        GuildScheduledEventStatus: function() {
            return i
        },
        GuildScheduledEventStatusDone: function() {
            return A
        },
        GuildScheduledEventEntityTypes: function() {
            return s
        },
        GuildScheduledEventNotificationTypes: function() {
            return r
        },
        GuildScheduledEventPrivacyLevel: function() {
            return a
        },
        EntityChannelTypes: function() {
            return y
        },
        ENTITY_TYPES_REQUIRED_ENTITY_METADATA: function() {
            return N
        },
        ENTITY_TYPES_REQUIRED_CHANNEL_ID: function() {
            return R
        },
        EventDetailSections: function() {
            return o
        },
        MAX_RSVP_USER_DISPLAY_COUNT: function() {
            return O
        },
        NEW_EVENT_WINDOW_MILLISECONDS: function() {
            return D
        },
        EVENT_STARTING_SOON_WINDOW_MILLISECONDS: function() {
            return P
        },
        ACKED_RECENTLY_WINDOW_DAYS: function() {
            return L
        },
        UpcomingGuildEventNoticeTypes: function() {
            return l
        },
        GuildScheduledEventUserResponses: function() {
            return u
        }
    }), n("222007");
    var i, s, r, a, o, l, u, d, c, f, _, E, h, g, m = n("718517"),
        p = n("49111");
    let S = 100,
        v = 1e3,
        T = 100,
        I = "Guild Events Modal",
        C = "-1";
    (d = i || (i = {}))[d.SCHEDULED = 1] = "SCHEDULED", d[d.ACTIVE = 2] = "ACTIVE", d[d.COMPLETED = 3] = "COMPLETED", d[d.CANCELED = 4] = "CANCELED";
    let A = new Set([3, 4]);
    (c = s || (s = {}))[c.NONE = 0] = "NONE", c[c.STAGE_INSTANCE = 1] = "STAGE_INSTANCE", c[c.VOICE = 2] = "VOICE", c[c.EXTERNAL = 3] = "EXTERNAL", (f = r || (r = {}))[f.EVENT_START = 1] = "EVENT_START", (_ = a || (a = {}))[_.PUBLIC = 1] = "PUBLIC", _[_.GUILD_ONLY = 2] = "GUILD_ONLY";
    let y = {
            1: p.ChannelTypes.GUILD_STAGE_VOICE,
            2: p.ChannelTypes.GUILD_VOICE
        },
        N = new Set([3]),
        R = new Set([1, 2]);
    (E = o || (o = {}))[E.EVENT_INFO = 0] = "EVENT_INFO", E[E.RSVP_LIST = 1] = "RSVP_LIST";
    let O = 100,
        D = 2 * m.default.Millis.DAY,
        P = 12 * m.default.Millis.HOUR,
        L = 4;
    (h = l || (l = {})).NEW_EVENT = "Upcoming Event Notice", h.EVENT_STARTING_SOON = "Event Starting Soon Notice", (g = u || (u = {}))[g.UNINTERESTED = 0] = "UNINTERESTED", g[g.INTERESTED = 1] = "INTERESTED"
}