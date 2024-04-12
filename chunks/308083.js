function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AGE_TRAITS: function() {
            return D
        },
        ALL_TRAITS_SET: function() {
            return y
        },
        ARBITRARY_MIDNIGHT: function() {
            return m
        },
        CLAN_BRAND_PALETTE_PRESETS: function() {
            return U
        },
        CLAN_SETUP_MODAL_LAYER_KEY: function() {
            return T
        },
        ClanBannerKind: function() {
            return a
        },
        ClanPlaystyles: function() {
            return i
        },
        ClanSetupModalPages: function() {
            return r
        },
        ClanSetupSteps: function() {
            return s
        },
        GENSHIN_ID: function() {
            return g
        },
        IDENTITY_TRAITS: function() {
            return v
        },
        LANGUAGES_SET: function() {
            return P
        },
        LOCALE_TIME_FORMAT: function() {
            return N
        },
        LOCALE_TRAITS: function() {
            return M
        },
        MAX_GAME_HOURS: function() {
            return h
        },
        MAX_INTEREST_LENGTH: function() {
            return A
        },
        MAX_NUM_INTERESTS: function() {
            return S
        },
        MAX_NUM_SELECTED_GAMES: function() {
            return f
        },
        MAX_TAG_LENGTH: function() {
            return I
        },
        PLACEHOLDER_CLAN_LANGUAGE: function() {
            return G
        },
        PLACEHOLDER_CLAN_LOCATION: function() {
            return b
        },
        PLAYSTYLE_GROUPS: function() {
            return O
        },
        VALORANT_ID: function() {
            return C
        },
        VALORANT_TRAITS: function() {
            return L
        },
        ensureUserClanData: function() {
            return w
        },
        getPlaystyleOptions: function() {
            return R
        },
        getPlaystyleTitle: function() {
            return p
        },
        toServerClanData: function() {
            return k
        }
    }), n("47120");
    var i, r, s, a, o, l, u, d, _ = n("913527"),
        c = n.n(_),
        E = n("689938");
    let I = 4,
        T = "ClanSetupModal",
        f = 20,
        S = 50,
        A = 50,
        h = 7,
        m = c()("2024-01-01T00:00:00"),
        N = "LT";
    (o = i || (i = {}))[o.NONE = 0] = "NONE", o[o.SOCIAL = 1] = "SOCIAL", o[o.CASUAL = 2] = "CASUAL", o[o.COMPETITIVE = 3] = "COMPETITIVE", o[o.CREATIVE = 4] = "CREATIVE", o[o.VERY_HARDCORE = 5] = "VERY_HARDCORE";
    let O = {
        0: "NONE",
        4: "NONE",
        1: "CASUAL",
        2: "CASUAL",
        3: "COMPETITIVE",
        5: "COMPETITIVE"
    };

    function p(e) {
        switch (e) {
            case 1:
                return E.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE;
            case 2:
                return E.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE;
            case 3:
                return E.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE;
            case 5:
                return E.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE;
            default:
                return null
        }
    }

    function R() {
        return {
            1: {
                type: 1,
                emoji: "\uD83D\uDC4B",
                title: E.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE,
                subtitle: E.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_SUBTITLE
            },
            2: {
                type: 2,
                emoji: "\uD83C\uDFAE",
                title: E.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE,
                subtitle: E.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_SUBTITLE
            },
            3: {
                type: 3,
                emoji: "⚔️",
                title: E.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE,
                subtitle: E.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_SUBTITLE
            },
            5: {
                type: 5,
                emoji: "\uD83D\uDC80",
                title: E.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE,
                subtitle: E.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_SUBTITLE
            }
        }
    }(l = r || (r = {}))[l.INTRO_ANIMATION = 0] = "INTRO_ANIMATION", l[l.SETUP = 1] = "SETUP", l[l.SIGN = 2] = "SIGN", (u = s || (s = {}))[u.FOUNDATIONAL_INTRO = 0] = "FOUNDATIONAL_INTRO", u[u.GAMES = 1] = "GAMES", u[u.PLAYSTYLE = 2] = "PLAYSTYLE", u[u.PERSONALITY_INTRO = 3] = "PERSONALITY_INTRO", u[u.INTERESTS = 4] = "INTERESTS", u[u.UTILITY_TRAITS = 5] = "UTILITY_TRAITS", u[u.DESCRIPTION = 6] = "DESCRIPTION", u[u.PRIMETIME = 7] = "PRIMETIME", u[u.IDENTITY_INTRO = 8] = "IDENTITY_INTRO", u[u.CUSTOMIZE_TAG_BADGE = 9] = "CUSTOMIZE_TAG_BADGE", u[u.CUSTOMIZE_BANNER = 10] = "CUSTOMIZE_BANNER", u[u.APPLICATION_INTRO = 11] = "APPLICATION_INTRO", u[u.MEMBER_APPLICATION = 12] = "MEMBER_APPLICATION";
    let C = "700136079562375258",
        g = "762434991303950386",
        L = ["Unrated", "Spike Rush", "Death Match", "Swift", "TDM", "Server: NA", "Server: EU", "Server: LATAM", "Server: KR", "Server: AP", "Voice ON", "Voice OFF"],
        D = ["20+", "30+", "40+", "All Ages"],
        v = ["LGBTQIA-Friendly", "All genders"],
        M = ["NA", "LATAM", "EU West", "SEA", "OCE", "Global"],
        y = new Set([...L, ...D, ...v, ...M]),
        P = new Set(E.default.getAvailableLocales().map(e => e.value));
    (d = a || (a = {}))[d.PIXEL_RUSH = 0] = "PIXEL_RUSH", d[d.SCANLINES = 1] = "SCANLINES", d[d.TEXTURED = 2] = "TEXTURED", d[d.MAGIC = 3] = "MAGIC", d[d.CUSTOM = 4] = "CUSTOM";
    let U = [{
            name: "Boulder",
            primary: "#8c8d8d",
            secondary: "#d0d0d1"
        }, {
            name: "Cascade",
            primary: "#43abe9",
            secondary: "#8ad3e8"
        }, {
            name: "Thunder",
            primary: "#e8c02f",
            secondary: "#e8d387"
        }, {
            name: "Soul",
            primary: "#e72282",
            secondary: "#e875ad"
        }, {
            name: "Marsh",
            primary: "#e86e1d",
            secondary: "#e89055"
        }, {
            name: "Volcano",
            primary: "#e81d1e",
            secondary: "#e86868"
        }, {
            name: "Earth",
            primary: "#406601",
            secondary: "#d3e65e"
        }, {
            name: "Zephyr",
            primary: "#4892d5",
            secondary: "#78b6f0"
        }],
        b = "United States",
        G = "English";

    function w(e) {
        return null == e ? null : "identityGuildId" in e ? e : {
            identityGuildId: e.identity_guild_id,
            identityEnabled: e.identity_enabled,
            tag: e.tag
        }
    }

    function k(e) {
        return {
            tag: e.tag
        }
    }
}