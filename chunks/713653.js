function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ACKED_RECENTLY_WINDOW_DAYS: function() {
            return M
        },
        ANALYTICS_GUILD_EVENTS_MODAL_NAME: function() {
            return g
        },
        ENTITY_TYPES_REQUIRED_CHANNEL_ID: function() {
            return C
        },
        ENTITY_TYPES_REQUIRED_ENTITY_METADATA: function() {
            return R
        },
        EVENT_STARTING_SOON_WINDOW_MILLISECONDS: function() {
            return L
        },
        EntityChannelTypes: function() {
            return N
        },
        EventDetailSections: function() {
            return p
        },
        FAKE_EVENT_ID: function() {
            return A
        },
        GUILD_EVENT_MAX_DESCRIPTION_LENGTH: function() {
            return S
        },
        GUILD_EVENT_MAX_NAME_LENGTH: function() {
            return T
        },
        GuildScheduledEventEntityTypes: function() {
            return f
        },
        GuildScheduledEventNotificationTypes: function() {
            return d
        },
        GuildScheduledEventPrivacyLevel: function() {
            return _
        },
        GuildScheduledEventStatus: function() {
            return c
        },
        GuildScheduledEventStatusDone: function() {
            return b
        },
        GuildScheduledEventUserResponses: function() {
            return y
        },
        MAX_EVENT_LOCATION_LENGTH: function() {
            return v
        },
        MAX_RSVP_USER_DISPLAY_COUNT: function() {
            return P
        },
        NEW_EVENT_WINDOW_MILLISECONDS: function() {
            return D
        },
        UpcomingGuildEventNoticeTypes: function() {
            return m
        }
    });
    var r, o, i, a, u, s, l, c, f, d, _, E, p, m, y, I = n("388990"),
        h = n("281767");

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var T = 100,
        S = 1e3,
        v = 100,
        g = "Guild Events Modal",
        A = "-1";
    (r = c || (c = {}))[r.SCHEDULED = 1] = "SCHEDULED", r[r.ACTIVE = 2] = "ACTIVE", r[r.COMPLETED = 3] = "COMPLETED", r[r.CANCELED = 4] = "CANCELED";
    var b = new Set([3, 4]);
    (o = f || (f = {}))[o.NONE = 0] = "NONE", o[o.STAGE_INSTANCE = 1] = "STAGE_INSTANCE", o[o.VOICE = 2] = "VOICE", o[o.EXTERNAL = 3] = "EXTERNAL", (i = d || (d = {}))[i.EVENT_START = 1] = "EVENT_START", (a = _ || (_ = {}))[a.PUBLIC = 1] = "PUBLIC", a[a.GUILD_ONLY = 2] = "GUILD_ONLY";
    var N = (O(E = {}, 1, h.ChannelTypes.GUILD_STAGE_VOICE), O(E, 2, h.ChannelTypes.GUILD_VOICE), E),
        R = new Set([3]),
        C = new Set([1, 2]);
    (u = p || (p = {}))[u.EVENT_INFO = 0] = "EVENT_INFO", u[u.RSVP_LIST = 1] = "RSVP_LIST";
    var P = 100,
        D = 2 * I.default.Millis.DAY,
        L = 12 * I.default.Millis.HOUR,
        M = 4;
    (s = m || (m = {})).NEW_EVENT = "Upcoming Event Notice", s.EVENT_STARTING_SOON = "Event Starting Soon Notice", (l = y || (y = {}))[l.UNINTERESTED = 0] = "UNINTERESTED", l[l.INTERESTED = 1] = "INTERESTED"
}