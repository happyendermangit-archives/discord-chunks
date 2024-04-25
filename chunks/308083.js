function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AGE_TRAITS: function() {
            return y
        },
        ALL_TRAITS_SET: function() {
            return U
        },
        CLAN_BRAND_PALETTE_PRESETS: function() {
            return w
        },
        CLAN_BRAND_PALETTE_PRESETS_BY_NAME: function() {
            return B
        },
        CLAN_SETTINGS_MODAL_LAYER_KEY: function() {
            return h
        },
        CLAN_SETUP_MODAL_LAYER_KEY: function() {
            return S
        },
        ClanBannerKind: function() {
            return a
        },
        ClanBrandPresets: function() {
            return o
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
        EMPTY_WILDCARD: function() {
            return R
        },
        GENSHIN_ID: function() {
            return v
        },
        HOISTED_SEARCH_APPLICATION_IDS_BY_PRIORITY: function() {
            return F
        },
        IDENTITY_TRAITS: function() {
            return P
        },
        LANGUAGES_SET: function() {
            return b
        },
        MAX_GAMES_TO_DISPLAY: function() {
            return p
        },
        MAX_INTEREST_LENGTH: function() {
            return N
        },
        MAX_NUM_INTERESTS: function() {
            return m
        },
        MAX_NUM_SELECTED_GAMES: function() {
            return A
        },
        MAX_TAG_LENGTH: function() {
            return f
        },
        MAX_TRAITS_TO_DISPLAY: function() {
            return O
        },
        PLAYSTYLE_GROUPS: function() {
            return C
        },
        SUGGESTED_TRAITS_SET: function() {
            return G
        },
        VALORANT_ID: function() {
            return D
        },
        VALORANT_TRAITS: function() {
            return M
        },
        ensureUserClanData: function() {
            return V
        },
        getPlaystyleOptions: function() {
            return L
        },
        getPlaystyleTitle: function() {
            return g
        },
        getRandomClanBrandPreset: function() {
            return k
        },
        getSortedTraits: function() {
            return function e(t, n) {
                let i = null != n ? e(t.filter(e => null == n ? void 0 : n.includes(e))) : [];
                for (let e of M) !i.includes(e) && t.includes(e) && i.push(e);
                for (let e of y) !i.includes(e) && t.includes(e) && i.push(e);
                for (let e of P) !i.includes(e) && t.includes(e) && i.push(e);
                for (let e of t) !i.includes(e) && i.push(e);
                return i
            }
        },
        toServerClanData: function() {
            return x
        }
    }), n("47120"), n("653041");
    var i, r, s, a, o, l, u, d, _, c, E = n("913527"),
        I = n.n(E),
        T = n("689938");
    let f = 4,
        S = "ClanSetupModal",
        h = "ClanSettingsModal",
        A = 20,
        m = 50,
        N = 50,
        p = 3,
        O = 5;
    I()("2024-01-01T00:00:00");
    let R = "";
    (l = i || (i = {}))[l.NONE = 0] = "NONE", l[l.SOCIAL = 1] = "SOCIAL", l[l.CASUAL = 2] = "CASUAL", l[l.COMPETITIVE = 3] = "COMPETITIVE", l[l.CREATIVE = 4] = "CREATIVE", l[l.VERY_HARDCORE = 5] = "VERY_HARDCORE";
    let C = {
        0: "NONE",
        4: "NONE",
        1: "CASUAL",
        2: "CASUAL",
        3: "COMPETITIVE",
        5: "COMPETITIVE"
    };

    function g(e) {
        switch (e) {
            case 1:
                return T.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE;
            case 2:
                return T.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE;
            case 3:
                return T.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE;
            case 5:
                return T.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE;
            default:
                return null
        }
    }

    function L() {
        return {
            1: {
                type: 1,
                emoji: "\uD83D\uDC4B",
                title: T.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE,
                subtitle: T.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_SUBTITLE
            },
            2: {
                type: 2,
                emoji: "\uD83C\uDFAE",
                title: T.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE,
                subtitle: T.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_SUBTITLE
            },
            3: {
                type: 3,
                emoji: "⚔️",
                title: T.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE,
                subtitle: T.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_SUBTITLE
            },
            5: {
                type: 5,
                emoji: "\uD83D\uDC80",
                title: T.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE,
                subtitle: T.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_SUBTITLE
            }
        }
    }(u = r || (r = {}))[u.INTRO_ANIMATION = 0] = "INTRO_ANIMATION", u[u.SETUP = 1] = "SETUP", u[u.SIGN = 2] = "SIGN", (d = s || (s = {}))[d.FOUNDATIONAL_INTRO = 0] = "FOUNDATIONAL_INTRO", d[d.GAMES = 1] = "GAMES", d[d.PLAYSTYLE = 2] = "PLAYSTYLE", d[d.PERSONALITY_INTRO = 3] = "PERSONALITY_INTRO", d[d.UTILITY_TRAITS = 4] = "UTILITY_TRAITS", d[d.INTERESTS = 5] = "INTERESTS", d[d.DESCRIPTION = 6] = "DESCRIPTION", d[d.IDENTITY_INTRO = 7] = "IDENTITY_INTRO", d[d.CUSTOMIZE_TAG_BADGE = 8] = "CUSTOMIZE_TAG_BADGE", d[d.CUSTOMIZE_BANNER = 9] = "CUSTOMIZE_BANNER", d[d.APPLICATION_INTRO = 10] = "APPLICATION_INTRO", d[d.MEMBER_APPLICATION = 11] = "MEMBER_APPLICATION";
    let D = "700136079562375258",
        v = "762434991303950386",
        M = ["Unrated", "Spike Rush", "Death Match", "Swift", "TDM", "Server: NA", "Server: EU", "Server: LATAM", "Server: KR", "Server: AP", "Voice ON", "Voice OFF"],
        y = ["20+", "30+", "40+", "All Ages"],
        P = ["LGBTQIA-Friendly", "All genders"],
        U = new Set([...M, ...y, ...P]),
        b = new Set(T.default.getAvailableLocales().map(e => e.value)),
        G = new Set(["Anime", "Art and Craft", "Architecture", "Baseball", "Basketball", "Beauty", "Beer", "Board Games", "Books", "Cars", "Celebrities", "Coffee", "Coding", "Craft", "Design", "F1", "Fashion", "Fitness", "Food", "Football", "Healthcare", "Home Decor", "Houseplants", "K-Pop", "Knitting", "LEGO", "MARVEL", "Motorcycles", "Movies", "Music", "Nail Art", "Pets", "Photography", "Pok\xe9mon", "Programming", "Roman History", "Science", "Skiing", "Soccer", "Star Wars", "TCG", "TEA", "Tech", "Travel", "TV Shows", "Wine"]);
    (_ = a || (a = {}))[_.PIXEL_RUSH = 0] = "PIXEL_RUSH", _[_.SCANLINES = 1] = "SCANLINES", _[_.TEXTURED = 2] = "TEXTURED", _[_.MAGIC = 3] = "MAGIC", _[_.CUSTOM = 4] = "CUSTOM", (c = o || (o = {})).BOULDER = "boulder", c.CASCADE = "cascade", c.THUNDER = "thunder", c.SOUL = "soul", c.MARSH = "marsh", c.VOLCANO = "volcano", c.EARTH = "earth", c.ZEPHYR = "zephyr";
    let w = [{
            name: "boulder",
            primary: "#8c8d8d",
            secondary: "#d0d0d1"
        }, {
            name: "cascade",
            primary: "#43abe9",
            secondary: "#8ad3e8"
        }, {
            name: "thunder",
            primary: "#e8c02f",
            secondary: "#e8d387"
        }, {
            name: "soul",
            primary: "#e72282",
            secondary: "#e875ad"
        }, {
            name: "marsh",
            primary: "#e86e1d",
            secondary: "#e89055"
        }, {
            name: "volcano",
            primary: "#e81d1e",
            secondary: "#e86868"
        }, {
            name: "earth",
            primary: "#406601",
            secondary: "#d3e65e"
        }, {
            name: "zephyr",
            primary: "#4892d5",
            secondary: "#78b6f0"
        }],
        B = Object.fromEntries(w.map(e => [e.name, {
            primary: e.primary,
            secondary: e.secondary
        }]));

    function k() {
        return w[Math.floor(Math.random() * w.length)]
    }

    function V(e) {
        return null == e ? null : "identityGuildId" in e ? e : {
            identityGuildId: e.identity_guild_id,
            identityEnabled: e.identity_enabled,
            tag: e.tag
        }
    }

    function x(e) {
        return {
            tag: e.tag
        }
    }
    let F = new Map(["432980957394370572", "363445589247131668", "356869127241072640", "700136079562375258", "356875570916753438", "1158877933042143272", "1197827812623650866", "356876176465199104", "1167674267748540516", "542075586886107149", "356875221078245376", "1149118246826561609", "356877880938070016", "356875988589740042", "762434991303950386", "356873622985506820", "356876590342340608", "1205090671527071784", "1182713227491147776", "631914894446297148", "1137125502985961543", "357607478105604096", "359509007423242240", "1121201675240210523", "643897785271189524", "742897755160313986", "356888738724446208", "1199745463918788740", "1116835216464543946", "406637848297472017", "356888961353908224", "905961880789590076", "367827983903490050", "356944273133928458", "356942674672091136", "946609449680908348", "356875762940379136", "615752773690064908", "357607133254254632", "356943499456937984", "477175586805252107", "787443973538971748", "359508713658253318", "356877880938070016", "422772752647323649", "356954277803065354", "359509387670192128", "428055627030331402", "363447565905166336", "372438022647578634", "614380482620293151", "506950362461110273", "356879032584896512", "1161772875901051042", "535371564850479134", "363413743335374859", "385538724592746496", "426526722322726912", "1174041358995042375", "1124351876033425529", "477152881196269569", "1113966530531704943", "425778010222886912", "356875890958925834", "1124358970618953818", "356888577310851072", "398632010442211348", "1124349969906815007", "770314100885422095", "1080277149623271444", "428054228511227914", "358420454764969994", "358421669603311616", "363430548028522496", "1129504162200166401", "1200228630245159032", "356889262362329098", "356887282982191114", "363409643973771264", "1164697075582238730", "940810636273795162", "982316905262120990", "359510095811444736", "363411421553360896", "359509332490059776", "1162076274622222346", "1162085521816813721", "359507724196773888", "359801269008859136", "569253958967885828", "457301824110723113", "1140238527980916757", "1124353632758939688", "542075586886107149", "512699108809637890", "653432003798106122"].map((e, t, n) => [e, n.length - t]))
}