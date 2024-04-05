function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ALLOWED_SOCIAL_LINKS_DOMAINS: function() {
            return C
        },
        CategoryIcons: function() {
            return d
        },
        CategoryId: function() {
            return o
        },
        DEFAULT_DISCOVERY_CATEGORY_ID: function() {
            return c
        },
        DEFAULT_EMOJI_DISCOVERABILITY_SETTING: function() {
            return I
        },
        DISCORD_HUB_ID: function() {
            return f
        },
        DISCOVERY_ALL_CATEGORIES_ID: function() {
            return T
        },
        DISCOVERY_COMMUNICATOR_REQUIREMENT: function() {
            return R
        },
        DISCOVERY_PARTICIPATOR_REQUIREMENT: function() {
            return p
        },
        DISCOVERY_SIDEBAR_CATEGORIES: function() {
            return h
        },
        LANGUAGE_OPTIONS: function() {
            return O
        },
        MAX_ALGOLIA_PAGINATOR_RESULTS: function() {
            return S
        },
        OTHER_DISCOVERY_CATEGORY_ID: function() {
            return E
        },
        SUGGESTED_TAGS_FOR_CATEGORIES: function() {
            return A
        },
        calculateLocaleOptions: function() {
            return N
        }
    });
    var i, r, s, a, o, l, u, d, _ = n("689938");
    let c = 0,
        E = 13,
        I = !0,
        T = -1,
        f = -2;
    (i = o || (o = {}))[i.Clans = -3] = "Clans", i[i.Hub = f] = "Hub", i[i.Communities = T] = "Communities", i[i.Activity = 1] = "Activity", i[i.Music = 2] = "Music", i[i.Television = 3] = "Television", i[i.Science = 5] = "Science", i[i.Education = 6] = "Education";
    let S = 1e3,
        h = [1, 2, 3, 5, 6];
    (r = l || (l = {}))[r.GENERAL_CHATTING = 14] = "GENERAL_CHATTING", r[r.GAMING = 1] = "GAMING", r[r.MUSIC = 2] = "MUSIC", r[r.ENTERTAINMENT = 3] = "ENTERTAINMENT", r[r.CREATIVE_ARTS = 4] = "CREATIVE_ARTS", r[r.SCIENCE_AND_TECH = 5] = "SCIENCE_AND_TECH", r[r.EDUCATION = 6] = "EDUCATION", r[r.SPORTS = 7] = "SPORTS", r[r.FASHION_AND_BEAUTY = 8] = "FASHION_AND_BEAUTY", r[r.RELATIONSHIPS_AND_IDENTITY = 9] = "RELATIONSHIPS_AND_IDENTITY", r[r.TRAVEL_AND_FOOD = 10] = "TRAVEL_AND_FOOD", r[r.FITNESS_AND_HEALTH = 11] = "FITNESS_AND_HEALTH", r[r.FINANCE = 12] = "FINANCE", r[r.OTHER = 13] = "OTHER", r[r.EMOJI = 43] = "EMOJI", r[r.BOTS = 49] = "BOTS";
    let A = {
            14: [() => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROBLOX, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MINECRAFT, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREAMER, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORTNITE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROLEPLAY],
            1: [() => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MINECRAFT, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROBLOX, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORTNITE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ESPORTS, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROLEPLAY, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_VALORANT, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LEAGUEOFLEGENDS, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FIVEM],
            2: [() => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EDM, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_RAP, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_KPOP, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MUSIC_PRODUCTION, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HIPHOP, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SINGING, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BTS, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_METAL],
            3: [() => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MANGA, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREAMER, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT],
            4: [() => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ART, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DESIGN, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIMATION, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_3D, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NFT, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MANGA, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DRAWING, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PHOTOGRAPHY],
            5: [() => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PROGRAMMING, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TECH, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CODING, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GITHUB, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_OPENSOURCE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_JAVASCRIPT, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CRYPTOCURRENCY, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HARDWARE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOFTWARE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LINUX],
            6: [() => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STUDY, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LANGUAGE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SCHOOL, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ENGLISH, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LEARNING, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HOMEWORK, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PROGRAMMING, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COLLEGE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STOCKS, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE],
            7: [() => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOOTBALL, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NBA, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NFL, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCCER, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BASKETBALL, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORMULA1, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PREMIER_LEAGUE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_RACING, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FANTASY_FOOTBALL],
            8: [() => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FASHION, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREETWEAR, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SNEAKERS, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CLOTHING, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YEEZY, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SUPREME, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HYPEBEAST, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STYLE],
            9: [() => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LGBTQ, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FRIENDS, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY],
            10: [() => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOOD, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISNEY, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BEVERAGE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SNACKS, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TRAVEL, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISNEYWORLD],
            11: [() => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GYM, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BODYBUILDING, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EXERCISE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CALISTHENICS, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MENTAL_HEALTH, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SELF_IMPROVEMENT, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EDUCATION, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CROSSFIT, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NUTRITION, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SPORTS],
            12: [() => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STOCKS, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TRADING, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_INVESTING, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BITCOIN, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CRYPTOCURRENCY, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ETHEREUM, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_OPTIONS, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DEFI, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOREX],
            13: [() => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EVENTS, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES],
            43: [() => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EMOJI, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EMOTES, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NITRO, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CUTE, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GIVEAWAYS, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_AESTHETIC, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ART, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES],
            49: [() => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_APPS, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BOTS, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISCORD_BOT, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GIVEAWAYS, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SUPPORT, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FUN, () => _.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES]
        },
        m = ["en-GB"];

    function N() {
        return _.default.getAvailableLocales().map(e => {
            let t;
            let {
                value: i,
                name: r
            } = e;
            try {
                t = n("687332")("@discordapp/common/images/flags/".concat(e.value, ".png").replace("@discordapp/common/images/flags/", "./"))
            } catch (e) {
                t = n("1474")
            }
            return "en-US" === i ? {
                value: i,
                label: _.default.Messages.ENGLISH_LANGUAGE,
                image: t
            } : {
                value: i,
                label: r,
                image: t
            }
        }).filter(e => !m.includes(e.value))
    }
    N();
    let O = _.default.getLanguages().filter(e => !m.includes(e.code)).map(e => "en-US" === e.code ? {
            ...e,
            name: _.default.Messages.en
        } : e),
        p = 40,
        R = 20;
    (s = u || (u = {})).GAME_RECOMMENDATIONS = "Game Recommendations", s.SERVER_RECOMMENDATIONS = "Server Recommendations", (a = d || (d = {}))[a.Activity = 0] = "Activity", a[a.Discover = 1] = "Discover", a[a.Education = 2] = "Education", a[a.Music = 3] = "Music", a[a.Science = 4] = "Science", a[a.Stage = 5] = "Stage", a[a.Television = 6] = "Television", a[a.Server = 7] = "Server";
    let C = {
        facebook: {
            presentation: "Facebook",
            baseUrl: "https://facebook.com"
        },
        instagram: {
            presentation: "Instagram",
            baseUrl: "https://instagram.com"
        },
        twitter: {
            presentation: "Twitter",
            baseUrl: "https://twitter.com"
        },
        tiktok: {
            presentation: "TikTok",
            baseUrl: "https://tiktok.com"
        },
        twitch: {
            presentation: "Twitch",
            baseUrl: "https://twitch.tv"
        },
        patreon: {
            presentation: "Patreon",
            baseUrl: "https://patreon.com"
        },
        reddit: {
            presentation: "Reddit",
            baseUrl: "https://reddit.com/r/"
        },
        youtube: {
            presentation: "YouTube",
            baseUrl: "https://youtube.com"
        },
        steamcommunity: {
            presentation: "Steam",
            baseUrl: "https://steamcommunity.com"
        },
        soundcloud: {
            presentation: "SoundCloud",
            baseUrl: "https://soundcloud.com"
        },
        bandcamp: {
            presentation: "Bandcamp",
            baseUrl: "https://bandcamp.com"
        },
        github: {
            presentation: "GitHub",
            baseUrl: "https://github.com"
        },
        etsy: {
            presentation: "Etsy",
            baseUrl: "https://etsy.com"
        }
    }
}