function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ACTIVITY_INVITE_COVER_IMAGE_SIZE: function() {
            return R
        },
        validStreamURL: function() {
            return N
        },
        XBOX_ACTIVITY_APPLICATION_ID: function() {
            return O
        },
        END_GAME_APPLICATION_ID: function() {
            return D
        },
        JAM_SPACE_APPLICATION_ID: function() {
            return L
        },
        GARTIC_PHONE_APPLICATION_ID: function() {
            return b
        },
        COLOR_TOGETHER_APPLICATION_ID: function() {
            return M
        },
        SPELL_CAST_APPLICATION_ID: function() {
            return U
        },
        LAND_IO_APPLICATION_ID: function() {
            return G
        },
        WATCH_YOUTUBE_PROD_APP_ID: function() {
            return w
        },
        KWIM_APPLICATION_ID: function() {
            return k
        },
        BOBBLE_LEAGUE_APPLICATION_ID: function() {
            return x
        },
        CHECKERS_IN_THE_PARK_APP_ID: function() {
            return F
        },
        CHESS_IN_THE_PARK_APP_ID: function() {
            return V
        },
        BLAZIN_8S_APPLICATION_ID: function() {
            return B
        },
        POKER_NIGHT_APPLICATION_ID: function() {
            return H
        },
        BYS_LETTER_APP_ID: function() {
            return Y
        },
        BYS_TWOODLE_APP_ID: function() {
            return j
        },
        CHEF_SHOWDOWN_APPLICATION_ID: function() {
            return W
        },
        PUTT_PARTY_APPLICATION_ID: function() {
            return K
        },
        KRUNKER_STRIKE_APPLICATION_ID: function() {
            return z
        },
        COLONIST_APPLICATION_ID: function() {
            return q
        },
        EMBEDDED_ACTIVITY_SURVEY_URL: function() {
            return X
        },
        ImageSizes: function() {
            return Q
        },
        STAFF_RELEASE_PHASES: function() {
            return Z
        },
        ActivityFeedbackReasons: function() {
            return i
        },
        ActivityIntent: function() {
            return r
        },
        ActivityPlatform: function() {
            return s
        },
        EmbeddedActivityUpdateCodes: function() {
            return o
        },
        OrientationLockState: function() {
            return l
        },
        ActivityShelfSlides: function() {
            return u
        },
        ACTIVITY_SHELF_WEB_MODAL_KEY: function() {
            return J
        },
        APPLICATIONS_WITH_ALLOWED_POPUPS: function() {
            return $
        },
        APPLICATIONS_WITH_NO_REFFERER: function() {
            return ee
        },
        WhatsNewSection: function() {
            return c
        },
        ActivityScreenOrientation: function() {
            return d
        },
        ActivityLayoutMode: function() {
            return f
        },
        DEFAULT_EMBEDDED_ACTIVITY_CONFIG: function() {
            return en
        },
        SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES: function() {
            return ei
        },
        PRIVATE_APPS_HELP_ARTICLE: function() {
            return er
        }
    }), n("222007");
    var i, r, s, a, o, l, u, c, d, f, E, p, h, _, S, m, T, g, I, C, v = n("798609"),
        A = n("49111");
    let R = 160,
        N = /^https?:\/\/(?:www\.)?(twitch\.tv\/(.+)|youtube.com\/watch\?v=)/,
        O = "438122941302046720",
        D = "773336526917861400",
        y = "880218832743055411",
        P = "1050941315912835122",
        L = "1070087967294631976",
        b = "1007373802981822582",
        M = "1039835161136746497",
        U = "852509694341283871",
        G = "903769130790969345",
        w = "880218394199220334",
        k = "1078728822972764312",
        x = "947957217959759964",
        F = "832013003968348200",
        V = "832012774040141894",
        B = "832025144389533716",
        H = "755827207812677713",
        Y = "879863686565621790",
        j = "902271654783242291",
        W = "1037680572660727838",
        K = "945737671223947305",
        z = "1011683823555199066",
        q = "1106787098452832296",
        X = "https://discord.sjc1.qualtrics.com/jfe/form/SV_6SvWAOxlcSRWiEu",
        Q = {
            SMALL: 64,
            LARGE: 160
        },
        Z = ["in_development", "activities_team", "employee_release"];
    (E = i || (i = {})).FAILED_LOAD = "FAILED_LOAD", E.LAGGING = "LAGGING", E.CONFUSING = "CONFUSING", E.NOT_FUN = "NOT_FUN", E.OTHER = "OTHER", (p = r || (r = {}))[p.PLAY = 0] = "PLAY", p[p.SPECTATE = 1] = "SPECTATE", (h = s || (s = {})).DESKTOP = "desktop", h.MOBILE = "mobile", (_ = a || (a = {})).BETRAYAL_MARKETING_TOOLTIP = "BETRAYAL_MARKETING_TOOLTIP", _.FISHINGTON_MARKETING_TOOLTIP = "FISHINGTON_MARKETING_TOOLTIP", _.POKER_MARKETING_TOOLTIP = "POKER_MARKETING_TOOLTIP", _.YOUTUBE_MARKETING_TOOLTIP = "YOUTUBE_MARKETING_TOOLTIP", (S = o || (o = {}))[S.NO_UPDATE = 0] = "NO_UPDATE", S[S.ACTIVITY_STATE_UPDATE = 1] = "ACTIVITY_STATE_UPDATE", S[S.ACTIVITY_STARTED = 2] = "ACTIVITY_STARTED", S[S.ACTIVITY_ENDED = 3] = "ACTIVITY_ENDED", S[S.USER_JOINED = 4] = "USER_JOINED", S[S.USER_LEFT = 5] = "USER_LEFT", S[S.ACTIVITY_TERMINATED_NO_ELIGIBLE_HOST = 6] = "ACTIVITY_TERMINATED_NO_ELIGIBLE_HOST", (m = l || (l = {}))[m.UNLOCKED = 1] = "UNLOCKED", m[m.PORTRAIT = 2] = "PORTRAIT", m[m.LANDSCAPE = 3] = "LANDSCAPE", (T = u || (u = {}))[T.DIRECTORY = 0] = "DIRECTORY", T[T.SELECT_CHANNEL = 1] = "SELECT_CHANNEL", T[T.DETAIL_PAGE = 2] = "DETAIL_PAGE";
    let J = "activity-shelf",
        $ = new Set(["755600276941176913", y, P, w, "1010174316991762534", z]),
        ee = new Set([y, P, w]);
    (g = c || (c = {})).DISCORD_TURNS_8 = "DISCORD_TURNS_8", g.GDM_ACTIVITIES = "GDM_ACTIVITIES", g.PUTT_PARTY = "PUTT_PARTY", g.JAMSPACE_OLD = "JAMSPACE", g.JAMSPACE = "JAMSPACE2", g.POKER = "POKER", g.FREE = "FREE", (I = d || (d = {}))[I.PORTRAIT = 0] = "PORTRAIT", I[I.LANDSCAPE = 1] = "LANDSCAPE", (C = f || (f = {}))[C.FOCUSED = 0] = "FOCUSED", C[C.PIP = 1] = "PIP", C[C.GRID = 2] = "GRID";
    let et = {
            label_type: v.EmbeddedActivityLabelTypes.NONE,
            release_phase: "",
            label_until: null
        },
        en = {
            application_id: "",
            requires_age_gate: !1,
            default_orientation_lock_state: 1,
            tablet_default_orientation_lock_state: 1,
            supported_platforms: [v.EmbeddedActivitySupportedPlatforms.WEB],
            client_platform_config: {
                [v.EmbeddedActivitySupportedPlatforms.WEB]: et,
                [v.EmbeddedActivitySupportedPlatforms.IOS]: et,
                [v.EmbeddedActivitySupportedPlatforms.ANDROID]: et
            },
            has_csp_exception: !1,
            displays_advertisements: !1
        },
        ei = [A.ChannelTypes.GUILD_TEXT, A.ChannelTypes.DM, A.ChannelTypes.GROUP_DM],
        er = "https://support-dev.discord.com/hc/en-us/articles/21692628851351-Private-Activity-Safety"
}