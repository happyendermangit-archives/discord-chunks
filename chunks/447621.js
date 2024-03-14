function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_DISCOVERY_CATEGORY_ID: function() {
            return d
        },
        OTHER_DISCOVERY_CATEGORY_ID: function() {
            return c
        },
        DEFAULT_EMOJI_DISCOVERABILITY_SETTING: function() {
            return f
        },
        DISCOVERY_ALL_CATEGORIES_ID: function() {
            return _
        },
        DISCORD_HUB_ID: function() {
            return h
        },
        MAX_ALGOLIA_PAGINATOR_RESULTS: function() {
            return E
        },
        DISCOVERY_SIDEBAR_CATEGORIES: function() {
            return g
        },
        SUGGESTED_TAGS_FOR_CATEGORIES: function() {
            return m
        },
        calculateLocaleOptions: function() {
            return S
        },
        LANGUAGE_OPTIONS: function() {
            return v
        },
        DISCOVERY_PARTICIPATOR_REQUIREMENT: function() {
            return T
        },
        DISCOVERY_COMMUNICATOR_REQUIREMENT: function() {
            return I
        },
        CategoryIcons: function() {
            return l
        },
        ALLOWED_SOCIAL_LINKS_DOMAINS: function() {
            return C
        }
    });
    var i, s, r, a, o, l, u = n("782340");
    let d = 0,
        c = 13,
        f = !0,
        _ = -1,
        h = -2,
        E = 1e3,
        g = [{
            categoryId: -1,
            icon: "Discover"
        }, {
            categoryId: 1,
            icon: "Activity"
        }, {
            categoryId: 2,
            icon: "Music"
        }, {
            categoryId: 6,
            icon: "Education"
        }, {
            categoryId: 5,
            icon: "Science"
        }, {
            categoryId: 3,
            icon: "Television"
        }];
    (i = a || (a = {}))[i.GENERAL_CHATTING = 14] = "GENERAL_CHATTING", i[i.GAMING = 1] = "GAMING", i[i.MUSIC = 2] = "MUSIC", i[i.ENTERTAINMENT = 3] = "ENTERTAINMENT", i[i.CREATIVE_ARTS = 4] = "CREATIVE_ARTS", i[i.SCIENCE_AND_TECH = 5] = "SCIENCE_AND_TECH", i[i.EDUCATION = 6] = "EDUCATION", i[i.SPORTS = 7] = "SPORTS", i[i.FASHION_AND_BEAUTY = 8] = "FASHION_AND_BEAUTY", i[i.RELATIONSHIPS_AND_IDENTITY = 9] = "RELATIONSHIPS_AND_IDENTITY", i[i.TRAVEL_AND_FOOD = 10] = "TRAVEL_AND_FOOD", i[i.FITNESS_AND_HEALTH = 11] = "FITNESS_AND_HEALTH", i[i.FINANCE = 12] = "FINANCE", i[i.OTHER = 13] = "OTHER", i[i.EMOJI = 43] = "EMOJI", i[i.BOTS = 49] = "BOTS";
    let m = {
            14: [() => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROBLOX, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MINECRAFT, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREAMER, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORTNITE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROLEPLAY],
            1: [() => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MINECRAFT, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROBLOX, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORTNITE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ESPORTS, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROLEPLAY, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_VALORANT, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LEAGUEOFLEGENDS, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FIVEM],
            2: [() => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EDM, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_RAP, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_KPOP, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MUSIC_PRODUCTION, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HIPHOP, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SINGING, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BTS, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_METAL],
            3: [() => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MANGA, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREAMER, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT],
            4: [() => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ART, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DESIGN, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIMATION, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_3D, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NFT, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MANGA, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DRAWING, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PHOTOGRAPHY],
            5: [() => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PROGRAMMING, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TECH, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CODING, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GITHUB, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_OPENSOURCE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_JAVASCRIPT, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CRYPTOCURRENCY, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HARDWARE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOFTWARE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LINUX],
            6: [() => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STUDY, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LANGUAGE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SCHOOL, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ENGLISH, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LEARNING, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HOMEWORK, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PROGRAMMING, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COLLEGE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STOCKS, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE],
            7: [() => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOOTBALL, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NBA, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NFL, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCCER, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BASKETBALL, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORMULA1, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PREMIER_LEAGUE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_RACING, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FANTASY_FOOTBALL],
            8: [() => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FASHION, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREETWEAR, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SNEAKERS, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CLOTHING, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YEEZY, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SUPREME, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HYPEBEAST, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STYLE],
            9: [() => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LGBTQ, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FRIENDS, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY],
            10: [() => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOOD, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISNEY, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BEVERAGE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SNACKS, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TRAVEL, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISNEYWORLD],
            11: [() => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GYM, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BODYBUILDING, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EXERCISE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CALISTHENICS, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MENTAL_HEALTH, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SELF_IMPROVEMENT, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EDUCATION, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CROSSFIT, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NUTRITION, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SPORTS],
            12: [() => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STOCKS, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TRADING, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_INVESTING, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BITCOIN, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CRYPTOCURRENCY, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ETHEREUM, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_OPTIONS, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DEFI, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOREX],
            13: [() => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EVENTS, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES],
            43: [() => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EMOJI, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EMOTES, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NITRO, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CUTE, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GIVEAWAYS, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_AESTHETIC, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ART, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES],
            49: [() => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_APPS, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BOTS, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISCORD_BOT, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GIVEAWAYS, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SUPPORT, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FUN, () => u.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES]
        },
        p = ["en-GB"];

    function S() {
        return u.default.getAvailableLocales().map(e => {
            let t;
            let {
                value: i,
                name: s
            } = e;
            try {
                t = n("20860")("@discordapp/common/images/flags/".concat(e.value, ".png").replace("@discordapp/common/images/flags/", "./"))
            } catch (e) {
                t = n("799987")
            }
            return "en-US" === i ? {
                value: i,
                label: u.default.Messages.ENGLISH_LANGUAGE,
                image: t
            } : {
                value: i,
                label: s,
                image: t
            }
        }).filter(e => !p.includes(e.value))
    }
    S();
    let v = u.default.getLanguages().filter(e => !p.includes(e.code)).map(e => "en-US" === e.code ? {
            ...e,
            name: u.default.Messages.en
        } : e),
        T = 40,
        I = 20;
    (s = o || (o = {})).GAME_RECOMMENDATIONS = "Game Recommendations", s.SERVER_RECOMMENDATIONS = "Server Recommendations", (r = l || (l = {}))[r.Activity = 0] = "Activity", r[r.Discover = 1] = "Discover", r[r.Education = 2] = "Education", r[r.Music = 3] = "Music", r[r.Science = 4] = "Science", r[r.Stage = 5] = "Stage", r[r.Television = 6] = "Television";
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