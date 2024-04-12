function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ACKED_RECENTLY_WINDOW_DAYS: function() {
            return y
        },
        ANALYTICS_GUILD_EVENTS_MODAL_NAME: function() {
            return O
        },
        ENTITY_TYPES_REQUIRED_CHANNEL_ID: function() {
            return L
        },
        ENTITY_TYPES_REQUIRED_ENTITY_METADATA: function() {
            return g
        },
        EVENT_STARTING_SOON_WINDOW_MILLISECONDS: function() {
            return M
        },
        EntityChannelTypes: function() {
            return C
        },
        EventDetailSections: function() {
            return o
        },
        FAKE_EVENT_ID: function() {
            return p
        },
        GUILD_EVENT_MAX_DESCRIPTION_LENGTH: function() {
            return m
        },
        GUILD_EVENT_MAX_NAME_LENGTH: function() {
            return h
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
        GuildScheduledEventStatus: function() {
            return i
        },
        GuildScheduledEventStatusDone: function() {
            return R
        },
        GuildScheduledEventUserResponses: function() {
            return u
        },
        MAX_EVENT_LOCATION_LENGTH: function() {
            return N
        },
        MAX_RSVP_USER_DISPLAY_COUNT: function() {
            return D
        },
        NEW_EVENT_WINDOW_MILLISECONDS: function() {
            return v
        },
        UpcomingGuildEventNoticeTypes: function() {
            return l
        }
    }), n("47120");
    var i, r, s, a, o, l, u, d, _, c, E, I, T, f, S = n("70956"),
        A = n("981631");
    let h = 100,
        m = 1e3,
        N = 100,
        O = "Guild Events Modal",
        p = "-1";
    (d = i || (i = {}))[d.SCHEDULED = 1] = "SCHEDULED", d[d.ACTIVE = 2] = "ACTIVE", d[d.COMPLETED = 3] = "COMPLETED", d[d.CANCELED = 4] = "CANCELED";
    let R = new Set([3, 4]);
    (_ = r || (r = {}))[_.NONE = 0] = "NONE", _[_.STAGE_INSTANCE = 1] = "STAGE_INSTANCE", _[_.VOICE = 2] = "VOICE", _[_.EXTERNAL = 3] = "EXTERNAL", _[_.PRIME_TIME = 4] = "PRIME_TIME", (c = s || (s = {}))[c.EVENT_START = 1] = "EVENT_START", (E = a || (a = {}))[E.PUBLIC = 1] = "PUBLIC", E[E.GUILD_ONLY = 2] = "GUILD_ONLY";
    let C = {
            1: A.ChannelTypes.GUILD_STAGE_VOICE,
            2: A.ChannelTypes.GUILD_VOICE
        },
        g = new Set([3]),
        L = new Set([1, 2]);
    (I = o || (o = {}))[I.EVENT_INFO = 0] = "EVENT_INFO", I[I.RSVP_LIST = 1] = "RSVP_LIST";
    let D = 100,
        v = 2 * S.default.Millis.DAY,
        M = 12 * S.default.Millis.HOUR,
        y = 4;
    (T = l || (l = {})).NEW_EVENT = "Upcoming Event Notice", T.EVENT_STARTING_SOON = "Event Starting Soon Notice", (f = u || (u = {}))[f.UNINTERESTED = 0] = "UNINTERESTED", f[f.INTERESTED = 1] = "INTERESTED"
}