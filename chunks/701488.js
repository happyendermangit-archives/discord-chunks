function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ACTIVITY_INVITE_COVER_IMAGE_SIZE: function() {
            return C
        },
        ACTIVITY_SHELF_WEB_MODAL_KEY: function() {
            return J
        },
        APPLICATIONS_WITH_ALLOWED_POPUPS: function() {
            return Z
        },
        APPLICATIONS_WITH_NO_REFFERER: function() {
            return $
        },
        ActivityFeedbackReasons: function() {
            return i
        },
        ActivityIntent: function() {
            return r
        },
        ActivityLayoutMode: function() {
            return c
        },
        ActivityPlatform: function() {
            return s
        },
        ActivityScreenOrientation: function() {
            return _
        },
        ActivityShelfSlides: function() {
            return u
        },
        BLAZIN_8S_APPLICATION_ID: function() {
            return x
        },
        BOBBLE_LEAGUE_APPLICATION_ID: function() {
            return B
        },
        BYS_LETTER_APP_ID: function() {
            return Y
        },
        BYS_TWOODLE_APP_ID: function() {
            return j
        },
        CHECKERS_IN_THE_PARK_APP_ID: function() {
            return F
        },
        CHEF_SHOWDOWN_APPLICATION_ID: function() {
            return W
        },
        CHESS_IN_THE_PARK_APP_ID: function() {
            return V
        },
        COLOR_TOGETHER_APPLICATION_ID: function() {
            return U
        },
        DEFAULT_EMBEDDED_ACTIVITY_CONFIG: function() {
            return et
        },
        EMBEDDED_ACTIVITY_SURVEY_URL: function() {
            return X
        },
        END_GAME_APPLICATION_ID: function() {
            return D
        },
        EmbeddedActivityUpdateCodes: function() {
            return o
        },
        GARTIC_PHONE_APPLICATION_ID: function() {
            return P
        },
        ImageSizes: function() {
            return Q
        },
        JAM_SPACE_APPLICATION_ID: function() {
            return y
        },
        KRUNKER_STRIKE_APPLICATION_ID: function() {
            return z
        },
        KWIM_APPLICATION_ID: function() {
            return k
        },
        LAND_IO_APPLICATION_ID: function() {
            return G
        },
        OrientationLockState: function() {
            return l
        },
        POKER_NIGHT_APPLICATION_ID: function() {
            return H
        },
        PRIVATE_APPS_HELP_ARTICLE: function() {
            return ei
        },
        PUTT_PARTY_APPLICATION_ID: function() {
            return K
        },
        SPELL_CAST_APPLICATION_ID: function() {
            return b
        },
        STAFF_RELEASE_PHASES: function() {
            return q
        },
        SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES: function() {
            return en
        },
        WATCH_YOUTUBE_PROD_APP_ID: function() {
            return w
        },
        WhatsNewSection: function() {
            return d
        },
        XBOX_ACTIVITY_APPLICATION_ID: function() {
            return L
        },
        validStreamURL: function() {
            return g
        }
    }), n("47120");
    var i, r, s, a, o, l, u, d, _, c, E, I, T, f, S, A, h, m, N, O, p = n("911969"),
        R = n("981631");
    let C = 160,
        g = /^https?:\/\/(?:www\.)?(twitch\.tv\/(.+)|youtube.com\/watch\?v=)/,
        L = "438122941302046720",
        D = "773336526917861400",
        v = "880218832743055411",
        M = "1050941315912835122",
        y = "1070087967294631976",
        P = "1007373802981822582",
        U = "1039835161136746497",
        b = "852509694341283871",
        G = "903769130790969345",
        w = "880218394199220334",
        k = "1078728822972764312",
        B = "947957217959759964",
        F = "832013003968348200",
        V = "832012774040141894",
        x = "832025144389533716",
        H = "755827207812677713",
        Y = "879863686565621790",
        j = "902271654783242291",
        W = "1037680572660727838",
        K = "945737671223947305",
        z = "1011683823555199066",
        X = "https://discord.sjc1.qualtrics.com/jfe/form/SV_6SvWAOxlcSRWiEu",
        Q = {
            SMALL: 64,
            LARGE: 160
        },
        q = ["in_development", "activities_team", "employee_release"];
    (E = i || (i = {})).FAILED_LOAD = "FAILED_LOAD", E.LAGGING = "LAGGING", E.CONFUSING = "CONFUSING", E.NOT_FUN = "NOT_FUN", E.OTHER = "OTHER", (I = r || (r = {}))[I.PLAY = 0] = "PLAY", I[I.SPECTATE = 1] = "SPECTATE", (T = s || (s = {})).DESKTOP = "desktop", T.MOBILE = "mobile", (f = a || (a = {})).BETRAYAL_MARKETING_TOOLTIP = "BETRAYAL_MARKETING_TOOLTIP", f.FISHINGTON_MARKETING_TOOLTIP = "FISHINGTON_MARKETING_TOOLTIP", f.POKER_MARKETING_TOOLTIP = "POKER_MARKETING_TOOLTIP", f.YOUTUBE_MARKETING_TOOLTIP = "YOUTUBE_MARKETING_TOOLTIP", (S = o || (o = {}))[S.NO_UPDATE = 0] = "NO_UPDATE", S[S.ACTIVITY_STATE_UPDATE = 1] = "ACTIVITY_STATE_UPDATE", S[S.ACTIVITY_STARTED = 2] = "ACTIVITY_STARTED", S[S.ACTIVITY_ENDED = 3] = "ACTIVITY_ENDED", S[S.USER_JOINED = 4] = "USER_JOINED", S[S.USER_LEFT = 5] = "USER_LEFT", S[S.ACTIVITY_TERMINATED_NO_ELIGIBLE_HOST = 6] = "ACTIVITY_TERMINATED_NO_ELIGIBLE_HOST", (A = l || (l = {}))[A.UNLOCKED = 1] = "UNLOCKED", A[A.PORTRAIT = 2] = "PORTRAIT", A[A.LANDSCAPE = 3] = "LANDSCAPE", (h = u || (u = {}))[h.DIRECTORY = 0] = "DIRECTORY", h[h.SELECT_CHANNEL = 1] = "SELECT_CHANNEL", h[h.DETAIL_PAGE = 2] = "DETAIL_PAGE";
    let J = "activity-shelf",
        Z = new Set(["755600276941176913", v, M, w]),
        $ = new Set([v, M, w]);
    (m = d || (d = {})).DISCORD_TURNS_8 = "DISCORD_TURNS_8", m.GDM_ACTIVITIES = "GDM_ACTIVITIES", m.PUTT_PARTY = "PUTT_PARTY", m.JAMSPACE_OLD = "JAMSPACE", m.JAMSPACE = "JAMSPACE2", m.POKER = "POKER", m.FREE = "FREE", (N = _ || (_ = {}))[N.PORTRAIT = 0] = "PORTRAIT", N[N.LANDSCAPE = 1] = "LANDSCAPE", (O = c || (c = {}))[O.FOCUSED = 0] = "FOCUSED", O[O.PIP = 1] = "PIP", O[O.GRID = 2] = "GRID";
    let ee = {
            label_type: p.EmbeddedActivityLabelTypes.NONE,
            release_phase: "",
            label_until: null
        },
        et = {
            application_id: "",
            requires_age_gate: !1,
            default_orientation_lock_state: 1,
            tablet_default_orientation_lock_state: 1,
            supported_platforms: [p.EmbeddedActivitySupportedPlatforms.WEB],
            client_platform_config: {
                [p.EmbeddedActivitySupportedPlatforms.WEB]: ee,
                [p.EmbeddedActivitySupportedPlatforms.IOS]: ee,
                [p.EmbeddedActivitySupportedPlatforms.ANDROID]: ee
            },
            has_csp_exception: !1,
            displays_advertisements: !1
        },
        en = [R.ChannelTypes.GUILD_TEXT, R.ChannelTypes.DM, R.ChannelTypes.GROUP_DM],
        ei = "https://support-dev.discord.com/hc/en-us/articles/21692628851351-Private-Activity-Safety"
}