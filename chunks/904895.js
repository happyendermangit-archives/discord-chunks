function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ALLOWED_SOCIAL_LINKS_DOMAINS: function() {
            return A
        },
        CategoryIcons: function() {
            return l
        },
        DEFAULT_DISCOVERY_CATEGORY_ID: function() {
            return d
        },
        DEFAULT_EMOJI_DISCOVERABILITY_SETTING: function() {
            return E
        },
        DISCORD_HUB_ID: function() {
            return m
        },
        DISCOVERY_ALL_CATEGORIES_ID: function() {
            return p
        },
        DISCOVERY_COMMUNICATOR_REQUIREMENT: function() {
            return g
        },
        DISCOVERY_PARTICIPATOR_REQUIREMENT: function() {
            return v
        },
        DISCOVERY_SIDEBAR_CATEGORIES: function() {
            return I
        },
        LANGUAGE_OPTIONS: function() {
            return S
        },
        MAX_ALGOLIA_PAGINATOR_RESULTS: function() {
            return y
        },
        OTHER_DISCOVERY_CATEGORY_ID: function() {
            return _
        },
        SUGGESTED_TAGS_FOR_CATEGORIES: function() {
            return h
        },
        calculateLocaleOptions: function() {
            return T
        }
    });
    var r, o, i, a, u, s, l, c = n("941504");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var d = 0,
        _ = 13,
        E = !0,
        p = -1,
        m = -2,
        y = 1e3,
        I = [{
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
    (r = a || (a = {}))[r.GENERAL_CHATTING = 14] = "GENERAL_CHATTING", r[r.GAMING = 1] = "GAMING", r[r.MUSIC = 2] = "MUSIC", r[r.ENTERTAINMENT = 3] = "ENTERTAINMENT", r[r.CREATIVE_ARTS = 4] = "CREATIVE_ARTS", r[r.SCIENCE_AND_TECH = 5] = "SCIENCE_AND_TECH", r[r.EDUCATION = 6] = "EDUCATION", r[r.SPORTS = 7] = "SPORTS", r[r.FASHION_AND_BEAUTY = 8] = "FASHION_AND_BEAUTY", r[r.RELATIONSHIPS_AND_IDENTITY = 9] = "RELATIONSHIPS_AND_IDENTITY", r[r.TRAVEL_AND_FOOD = 10] = "TRAVEL_AND_FOOD", r[r.FITNESS_AND_HEALTH = 11] = "FITNESS_AND_HEALTH", r[r.FINANCE = 12] = "FINANCE", r[r.OTHER = 13] = "OTHER", r[r.EMOJI = 43] = "EMOJI", r[r.BOTS = 49] = "BOTS";
    var h = (f(u = {}, 14, [function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROBLOX
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MINECRAFT
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREAMER
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORTNITE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROLEPLAY
        }]), f(u, 1, [function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MINECRAFT
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROBLOX
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORTNITE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ESPORTS
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROLEPLAY
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_VALORANT
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LEAGUEOFLEGENDS
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FIVEM
        }]), f(u, 2, [function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EDM
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_RAP
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_KPOP
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MUSIC_PRODUCTION
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HIPHOP
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SINGING
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BTS
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_METAL
        }]), f(u, 3, [function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MANGA
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREAMER
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT
        }]), f(u, 4, [function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ART
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DESIGN
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIMATION
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_3D
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NFT
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MANGA
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DRAWING
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PHOTOGRAPHY
        }]), f(u, 5, [function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PROGRAMMING
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TECH
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CODING
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GITHUB
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_OPENSOURCE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_JAVASCRIPT
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CRYPTOCURRENCY
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HARDWARE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOFTWARE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LINUX
        }]), f(u, 6, [function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STUDY
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LANGUAGE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SCHOOL
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ENGLISH
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LEARNING
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HOMEWORK
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PROGRAMMING
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COLLEGE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STOCKS
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE
        }]), f(u, 7, [function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOOTBALL
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NBA
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NFL
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCCER
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BASKETBALL
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORMULA1
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PREMIER_LEAGUE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_RACING
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FANTASY_FOOTBALL
        }]), f(u, 8, [function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FASHION
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREETWEAR
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SNEAKERS
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CLOTHING
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YEEZY
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SUPREME
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HYPEBEAST
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STYLE
        }]), f(u, 9, [function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LGBTQ
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FRIENDS
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY
        }]), f(u, 10, [function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOOD
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISNEY
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BEVERAGE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SNACKS
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TRAVEL
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISNEYWORLD
        }]), f(u, 11, [function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GYM
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BODYBUILDING
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EXERCISE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CALISTHENICS
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MENTAL_HEALTH
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SELF_IMPROVEMENT
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EDUCATION
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CROSSFIT
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NUTRITION
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SPORTS
        }]), f(u, 12, [function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STOCKS
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TRADING
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_INVESTING
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BITCOIN
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CRYPTOCURRENCY
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ETHEREUM
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_OPTIONS
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DEFI
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOREX
        }]), f(u, 13, [function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EVENTS
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES
        }]), f(u, 43, [function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EMOJI
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EMOTES
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NITRO
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CUTE
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GIVEAWAYS
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_AESTHETIC
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ART
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES
        }]), f(u, 49, [function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_APPS
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BOTS
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISCORD_BOT
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GIVEAWAYS
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SUPPORT
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FUN
        }, function() {
            return c.default.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES
        }]), u),
        O = ["en-GB"];

    function T() {
        return c.default.getAvailableLocales().map(function(e) {
            var t, r = e.value,
                o = e.name;
            try {
                t = n("180893")("@discordapp/common/images/flags/".concat(e.value, ".png").replace("@discordapp/common/images/flags/", "./"))
            } catch (e) {
                t = n("1474")
            }
            return "en-US" === r ? {
                value: r,
                label: c.default.Messages.ENGLISH_LANGUAGE,
                image: t
            } : {
                value: r,
                label: o,
                image: t
            }
        }).filter(function(e) {
            return !O.includes(e.value)
        })
    }
    T();
    var S = c.default.getLanguages().filter(function(e) {
            return !O.includes(e.code)
        }).map(function(e) {
            if ("en-US" === e.code) {
                var t, n;
                return t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            f(e, t, n[t])
                        })
                    }
                    return e
                }({}, e), n = (n = {
                    name: c.default.Messages.en
                }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t
            }
            return e
        }),
        v = 40,
        g = 20;
    (o = s || (s = {})).GAME_RECOMMENDATIONS = "Game Recommendations", o.SERVER_RECOMMENDATIONS = "Server Recommendations", (i = l || (l = {}))[i.Activity = 0] = "Activity", i[i.Discover = 1] = "Discover", i[i.Education = 2] = "Education", i[i.Music = 3] = "Music", i[i.Science = 4] = "Science", i[i.Stage = 5] = "Stage", i[i.Television = 6] = "Television";
    var A = {
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