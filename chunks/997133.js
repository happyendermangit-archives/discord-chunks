function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ACTIVITY_INVITE_COVER_IMAGE_SIZE: function() {
            return N
        },
        ACTIVITY_SHELF_WEB_MODAL_KEY: function() {
            return $
        },
        APPLICATIONS_WITH_ALLOWED_POPUPS: function() {
            return ee
        },
        APPLICATIONS_WITH_NO_REFFERER: function() {
            return et
        },
        ActivityFeedbackReasons: function() {
            return _
        },
        ActivityIntent: function() {
            return E
        },
        ActivityLayoutMode: function() {
            return S
        },
        ActivityPlatform: function() {
            return p
        },
        ActivityScreenOrientation: function() {
            return T
        },
        ActivityShelfSlides: function() {
            return h
        },
        BLAZIN_8S_APPLICATION_ID: function() {
            return x
        },
        BOBBLE_LEAGUE_APPLICATION_ID: function() {
            return F
        },
        BYS_LETTER_APP_ID: function() {
            return W
        },
        BYS_TWOODLE_APP_ID: function() {
            return K
        },
        CHECKERS_IN_THE_PARK_APP_ID: function() {
            return V
        },
        CHEF_SHOWDOWN_APPLICATION_ID: function() {
            return z
        },
        CHESS_IN_THE_PARK_APP_ID: function() {
            return H
        },
        COLOR_TOGETHER_APPLICATION_ID: function() {
            return w
        },
        DEFAULT_EMBEDDED_ACTIVITY_CONFIG: function() {
            return er
        },
        EMBEDDED_ACTIVITY_SURVEY_URL: function() {
            return Q
        },
        END_GAME_APPLICATION_ID: function() {
            return P
        },
        EmbeddedActivityUpdateCodes: function() {
            return y
        },
        GARTIC_PHONE_APPLICATION_ID: function() {
            return U
        },
        ImageSizes: function() {
            return J
        },
        JAM_SPACE_APPLICATION_ID: function() {
            return M
        },
        KRUNKER_STRIKE_APPLICATION_ID: function() {
            return q
        },
        KWIM_APPLICATION_ID: function() {
            return j
        },
        LAND_IO_APPLICATION_ID: function() {
            return G
        },
        OrientationLockState: function() {
            return I
        },
        POKER_NIGHT_APPLICATION_ID: function() {
            return Y
        },
        PRIVATE_APPS_HELP_ARTICLE: function() {
            return ei
        },
        PUTT_PARTY_APPLICATION_ID: function() {
            return X
        },
        SPELL_CAST_APPLICATION_ID: function() {
            return k
        },
        STAFF_RELEASE_PHASES: function() {
            return Z
        },
        SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES: function() {
            return eo
        },
        WATCH_YOUTUBE_PROD_APP_ID: function() {
            return B
        },
        WhatsNewSection: function() {
            return O
        },
        XBOX_ACTIVITY_APPLICATION_ID: function() {
            return C
        },
        validStreamURL: function() {
            return R
        }
    });
    var r, o, i, a, u, s, l, c, f, d, _, E, p, m, y, I, h, O, T, S, v, g = n("29570"),
        A = n("281767");

    function b(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var N = 160,
        R = /^https?:\/\/(?:www\.)?(twitch\.tv\/(.+)|youtube.com\/watch\?v=)/,
        C = "438122941302046720",
        P = "773336526917861400",
        D = "880218832743055411",
        L = "1050941315912835122",
        M = "1070087967294631976",
        U = "1007373802981822582",
        w = "1039835161136746497",
        k = "852509694341283871",
        G = "903769130790969345",
        B = "880218394199220334",
        j = "1078728822972764312",
        F = "947957217959759964",
        V = "832013003968348200",
        H = "832012774040141894",
        x = "832025144389533716",
        Y = "755827207812677713",
        W = "879863686565621790",
        K = "902271654783242291",
        z = "1037680572660727838",
        X = "945737671223947305",
        q = "1011683823555199066",
        Q = "https://discord.sjc1.qualtrics.com/jfe/form/SV_6SvWAOxlcSRWiEu",
        J = {
            SMALL: 64,
            LARGE: 160
        },
        Z = ["in_development", "activities_team", "employee_release"];
    (r = _ || (_ = {})).FAILED_LOAD = "FAILED_LOAD", r.LAGGING = "LAGGING", r.CONFUSING = "CONFUSING", r.NOT_FUN = "NOT_FUN", r.OTHER = "OTHER", (o = E || (E = {}))[o.PLAY = 0] = "PLAY", o[o.SPECTATE = 1] = "SPECTATE", (i = p || (p = {})).DESKTOP = "desktop", i.MOBILE = "mobile", (a = m || (m = {})).BETRAYAL_MARKETING_TOOLTIP = "BETRAYAL_MARKETING_TOOLTIP", a.FISHINGTON_MARKETING_TOOLTIP = "FISHINGTON_MARKETING_TOOLTIP", a.POKER_MARKETING_TOOLTIP = "POKER_MARKETING_TOOLTIP", a.YOUTUBE_MARKETING_TOOLTIP = "YOUTUBE_MARKETING_TOOLTIP", (u = y || (y = {}))[u.NO_UPDATE = 0] = "NO_UPDATE", u[u.ACTIVITY_STATE_UPDATE = 1] = "ACTIVITY_STATE_UPDATE", u[u.ACTIVITY_STARTED = 2] = "ACTIVITY_STARTED", u[u.ACTIVITY_ENDED = 3] = "ACTIVITY_ENDED", u[u.USER_JOINED = 4] = "USER_JOINED", u[u.USER_LEFT = 5] = "USER_LEFT", u[u.ACTIVITY_TERMINATED_NO_ELIGIBLE_HOST = 6] = "ACTIVITY_TERMINATED_NO_ELIGIBLE_HOST", (s = I || (I = {}))[s.UNLOCKED = 1] = "UNLOCKED", s[s.PORTRAIT = 2] = "PORTRAIT", s[s.LANDSCAPE = 3] = "LANDSCAPE", (l = h || (h = {}))[l.DIRECTORY = 0] = "DIRECTORY", l[l.SELECT_CHANNEL = 1] = "SELECT_CHANNEL", l[l.DETAIL_PAGE = 2] = "DETAIL_PAGE";
    var $ = "activity-shelf",
        ee = new Set(["755600276941176913", D, L, B, "1010174316991762534", q]),
        et = new Set([D, L, B]);
    (c = O || (O = {})).DISCORD_TURNS_8 = "DISCORD_TURNS_8", c.GDM_ACTIVITIES = "GDM_ACTIVITIES", c.PUTT_PARTY = "PUTT_PARTY", c.JAMSPACE_OLD = "JAMSPACE", c.JAMSPACE = "JAMSPACE2", c.POKER = "POKER", c.FREE = "FREE", (f = T || (T = {}))[f.PORTRAIT = 0] = "PORTRAIT", f[f.LANDSCAPE = 1] = "LANDSCAPE", (d = S || (S = {}))[d.FOCUSED = 0] = "FOCUSED", d[d.PIP = 1] = "PIP", d[d.GRID = 2] = "GRID";
    var en = {
            label_type: g.EmbeddedActivityLabelTypes.NONE,
            release_phase: "",
            label_until: null
        },
        er = {
            application_id: "",
            requires_age_gate: !1,
            default_orientation_lock_state: 1,
            tablet_default_orientation_lock_state: 1,
            supported_platforms: [g.EmbeddedActivitySupportedPlatforms.WEB],
            client_platform_config: (b(v = {}, g.EmbeddedActivitySupportedPlatforms.WEB, en), b(v, g.EmbeddedActivitySupportedPlatforms.IOS, en), b(v, g.EmbeddedActivitySupportedPlatforms.ANDROID, en), v),
            has_csp_exception: !1,
            displays_advertisements: !1
        },
        eo = [A.ChannelTypes.GUILD_TEXT, A.ChannelTypes.DM, A.ChannelTypes.GROUP_DM],
        ei = "https://support-dev.discord.com/hc/en-us/articles/21692628851351-Private-Activity-Safety"
}