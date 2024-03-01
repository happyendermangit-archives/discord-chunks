function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GUILD_EVENT_MAX_NAME_LENGTH: function() {
            return T
        },
        GUILD_EVENT_MAX_DESCRIPTION_LENGTH: function() {
            return g
        },
        MAX_EVENT_LOCATION_LENGTH: function() {
            return I
        },
        ANALYTICS_GUILD_EVENTS_MODAL_NAME: function() {
            return C
        },
        FAKE_EVENT_ID: function() {
            return v
        },
        GuildScheduledEventStatus: function() {
            return i
        },
        GuildScheduledEventStatusDone: function() {
            return A
        },
        GuildScheduledEventEntityTypes: function() {
            return r
        },
        GuildScheduledEventNotificationTypes: function() {
            return s
        },
        GuildScheduledEventPrivacyLevel: function() {
            return a
        },
        EntityChannelTypes: function() {
            return R
        },
        ENTITY_TYPES_REQUIRED_ENTITY_METADATA: function() {
            return N
        },
        ENTITY_TYPES_REQUIRED_CHANNEL_ID: function() {
            return O
        },
        EventDetailSections: function() {
            return o
        },
        MAX_RSVP_USER_DISPLAY_COUNT: function() {
            return D
        },
        NEW_EVENT_WINDOW_MILLISECONDS: function() {
            return y
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
    var i, r, s, a, o, l, u, c, d, f, E, p, h, _, S = n("718517"),
        m = n("49111");
    let T = 100,
        g = 1e3,
        I = 100,
        C = "Guild Events Modal",
        v = "-1";
    (c = i || (i = {}))[c.SCHEDULED = 1] = "SCHEDULED", c[c.ACTIVE = 2] = "ACTIVE", c[c.COMPLETED = 3] = "COMPLETED", c[c.CANCELED = 4] = "CANCELED";
    let A = new Set([3, 4]);
    (d = r || (r = {}))[d.NONE = 0] = "NONE", d[d.STAGE_INSTANCE = 1] = "STAGE_INSTANCE", d[d.VOICE = 2] = "VOICE", d[d.EXTERNAL = 3] = "EXTERNAL", (f = s || (s = {}))[f.EVENT_START = 1] = "EVENT_START", (E = a || (a = {}))[E.PUBLIC = 1] = "PUBLIC", E[E.GUILD_ONLY = 2] = "GUILD_ONLY";
    let R = {
            1: m.ChannelTypes.GUILD_STAGE_VOICE,
            2: m.ChannelTypes.GUILD_VOICE
        },
        N = new Set([3]),
        O = new Set([1, 2]);
    (p = o || (o = {}))[p.EVENT_INFO = 0] = "EVENT_INFO", p[p.RSVP_LIST = 1] = "RSVP_LIST";
    let D = 100,
        y = 2 * S.default.Millis.DAY,
        P = 12 * S.default.Millis.HOUR,
        L = 4;
    (h = l || (l = {})).NEW_EVENT = "Upcoming Event Notice", h.EVENT_STARTING_SOON = "Event Starting Soon Notice", (_ = u || (u = {}))[_.UNINTERESTED = 0] = "UNINTERESTED", _[_.INTERESTED = 1] = "INTERESTED"
}