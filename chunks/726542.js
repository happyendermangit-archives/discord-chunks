function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("392711"),
        r = n.n(i),
        s = n("692547"),
        a = n("591759"),
        o = n("981631");
    let l = [{
            type: o.PlatformTypes.TWITCH,
            name: "Twitch",
            color: s.default.unsafe_rawColors.TWITCH.css,
            icon: {
                lightPNG: n("635643"),
                darkPNG: n("635643"),
                whitePNG: n("800346"),
                lightSVG: n("160050"),
                darkSVG: n("160050"),
                whiteSVG: n("235779")
            },
            enabled: !0,
            getPlatformUserUrl: e => {
                let {
                    name: t
                } = e;
                return "https://www.twitch.tv/".concat(encodeURIComponent(t))
            },
            domains: ["twitch.tv", "twitch.com"]
        }, {
            type: o.PlatformTypes.YOUTUBE,
            name: "YouTube",
            color: s.default.unsafe_rawColors.YOUTUBE.css,
            icon: {
                lightPNG: n("459862"),
                darkPNG: n("459862"),
                whitePNG: n("934689"),
                lightSVG: n("529923"),
                darkSVG: n("529923"),
                whiteSVG: n("141989")
            },
            enabled: !0,
            getPlatformUserUrl: e => {
                let {
                    id: t
                } = e;
                return "https://www.youtube.com/channel/".concat(encodeURIComponent(t))
            },
            domains: ["youtube.com", "youtu.be"]
        }, {
            type: o.PlatformTypes.BATTLENET,
            name: "Battle.net",
            color: s.default.unsafe_rawColors.BATTLENET.css,
            icon: {
                lightPNG: n("414680"),
                darkPNG: n("414680"),
                whitePNG: n("573103"),
                lightSVG: n("424160"),
                darkSVG: n("424160"),
                whiteSVG: n("929858")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.BUNGIE,
            name: "Bungie.net",
            color: s.default.unsafe_rawColors.BUNGIE.css,
            icon: {
                lightPNG: n("953522"),
                darkPNG: n("706264"),
                whitePNG: n("610891"),
                lightSVG: n("459293"),
                darkSVG: n("970714"),
                whiteSVG: n("891049")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.SKYPE,
            name: "Skype",
            color: s.default.unsafe_rawColors.SKYPE.css,
            icon: {
                lightPNG: n("575439"),
                darkPNG: n("575439"),
                whitePNG: n("27163"),
                lightSVG: n("721782"),
                darkSVG: n("721782"),
                whiteSVG: n("144578")
            },
            enabled: !1,
            getPlatformUserUrl: e => {
                let {
                    id: t
                } = e;
                return "skype:".concat(encodeURIComponent(t), "?userinfo")
            }
        }, {
            type: o.PlatformTypes.LEAGUE_OF_LEGENDS,
            name: "League of Legends",
            color: s.default.unsafe_rawColors.LOL.css,
            icon: {
                lightPNG: n("275556"),
                darkPNG: n("275556"),
                whitePNG: n("26963"),
                lightSVG: n("153711"),
                darkSVG: n("153711"),
                whiteSVG: n("327574")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.STEAM,
            name: "Steam",
            color: s.default.unsafe_rawColors.STEAM.css,
            icon: {
                lightPNG: n("929234"),
                darkPNG: n("170131"),
                whitePNG: n("170131"),
                lightSVG: n("227304"),
                darkSVG: n("763613"),
                whiteSVG: n("763613")
            },
            enabled: !0,
            getPlatformUserUrl: e => {
                let {
                    id: t
                } = e;
                return "https://steamcommunity.com/profiles/".concat(encodeURIComponent(t))
            },
            hasMetadata: !0
        }, {
            type: o.PlatformTypes.REDDIT,
            name: "Reddit",
            color: s.default.unsafe_rawColors.REDDIT.css,
            icon: {
                lightPNG: n("211434"),
                darkPNG: n("211434"),
                whitePNG: n("682170"),
                lightSVG: n("592358"),
                darkSVG: n("592358"),
                whiteSVG: n("972428")
            },
            enabled: !0,
            getPlatformUserUrl: e => {
                let {
                    name: t
                } = e;
                return "https://www.reddit.com/u/".concat(encodeURIComponent(t))
            },
            hasMetadata: !0
        }, {
            type: o.PlatformTypes.FACEBOOK,
            name: "Facebook",
            color: s.default.unsafe_rawColors.FACEBOOK.css,
            icon: {
                lightPNG: n("762019"),
                darkPNG: n("762019"),
                whitePNG: n("620530"),
                lightSVG: n("589232"),
                darkSVG: n("589232"),
                whiteSVG: n("318049")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.TWITTER_LEGACY,
            name: "Twitter",
            color: s.default.unsafe_rawColors.TWITTER.css,
            icon: {
                lightPNG: n("954549"),
                darkPNG: n("954549"),
                whitePNG: n("550886"),
                lightSVG: n("90961"),
                darkSVG: n("90961"),
                whiteSVG: n("819273")
            },
            enabled: !1,
            getPlatformUserUrl: e => {
                let {
                    name: t
                } = e;
                return "https://twitter.com/".concat(encodeURIComponent(t))
            },
            domains: ["twitter.com"],
            hasMetadata: !0
        }, {
            type: o.PlatformTypes.TWITTER,
            name: "X",
            color: s.default.unsafe_rawColors.TWITTER.css,
            icon: {
                lightPNG: n("327555"),
                darkPNG: n("126776"),
                whitePNG: n("778385"),
                lightSVG: n("257325"),
                darkSVG: n("451168"),
                whiteSVG: n("580927")
            },
            enabled: !0,
            getPlatformUserUrl: e => {
                let {
                    name: t
                } = e;
                return "https://x.com/".concat(encodeURIComponent(t))
            },
            domains: ["x.com"],
            hasMetadata: !0
        }, {
            type: o.PlatformTypes.SPOTIFY,
            name: "Spotify",
            color: s.default.unsafe_rawColors.SPOTIFY.css,
            icon: {
                lightPNG: n("182553"),
                darkPNG: n("182553"),
                whitePNG: n("955852"),
                lightSVG: n("545734"),
                darkSVG: n("545734"),
                whiteSVG: n("136142")
            },
            enabled: !0,
            getPlatformUserUrl: e => {
                let {
                    id: t
                } = e;
                return "https://open.spotify.com/user/".concat(encodeURIComponent(t))
            }
        }, {
            type: o.PlatformTypes.XBOX,
            name: "Xbox",
            color: s.default.unsafe_rawColors.XBOX.css,
            icon: {
                lightPNG: n("979660"),
                darkPNG: n("157981"),
                whitePNG: n("157981"),
                lightSVG: n("66992"),
                darkSVG: n("158173"),
                whiteSVG: n("158173"),
                customPNG: n("606115")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.SAMSUNG,
            name: "Samsung Galaxy",
            color: s.default.unsafe_rawColors.SAMSUNG.css,
            icon: {
                lightPNG: n("664982"),
                darkPNG: n("664982"),
                whitePNG: n("442123"),
                lightSVG: n("601568"),
                darkSVG: n("601568"),
                whiteSVG: n("7007")
            },
            enabled: !1
        }, {
            type: o.PlatformTypes.GITHUB,
            name: "GitHub",
            color: s.default.unsafe_rawColors.GITHUB.css,
            icon: {
                lightPNG: n("843605"),
                darkPNG: n("789822"),
                whitePNG: n("789822"),
                lightSVG: n("247519"),
                darkSVG: n("184887"),
                whiteSVG: n("184887")
            },
            enabled: !0,
            getPlatformUserUrl: e => {
                let {
                    name: t
                } = e;
                return "https://github.com/".concat(encodeURIComponent(t))
            },
            domains: ["github.com"]
        }, {
            type: o.PlatformTypes.PLAYSTATION,
            name: "PlayStation Network",
            color: s.default.unsafe_rawColors.PLAYSTATION.css,
            icon: {
                lightPNG: n("385751"),
                darkPNG: n("399592"),
                whitePNG: n("399592"),
                lightSVG: n("223434"),
                darkSVG: n("350379"),
                whiteSVG: n("350379")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.PLAYSTATION_STAGING,
            name: "PlayStation Network (Staging)",
            color: s.default.unsafe_rawColors.PLAYSTATION.css,
            icon: {
                lightPNG: n("399592"),
                darkPNG: n("385751"),
                whitePNG: n("385751"),
                lightSVG: n("350379"),
                darkSVG: n("223434"),
                whiteSVG: n("223434")
            },
            enabled: !1
        }, {
            type: o.PlatformTypes.EPIC_GAMES,
            name: "Epic Games",
            icon: {
                lightPNG: n("707873"),
                darkPNG: n("549727"),
                whitePNG: n("549727"),
                lightSVG: n("769582"),
                darkSVG: n("532293"),
                whiteSVG: n("532293")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.RIOT_GAMES,
            name: "Riot Games",
            icon: {
                lightPNG: n("406818"),
                darkPNG: n("406818"),
                whitePNG: n("451192"),
                lightSVG: n("596001"),
                darkSVG: n("596001"),
                whiteSVG: n("641169")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.ROBLOX,
            name: "Roblox",
            icon: {
                lightPNG: n("670423"),
                darkPNG: n("414773"),
                whitePNG: n("731596"),
                lightSVG: n("553715"),
                darkSVG: n("678922"),
                whiteSVG: n("752561")
            },
            enabled: !1
        }, {
            type: o.PlatformTypes.PAYPAL,
            name: "PayPal",
            icon: {
                lightPNG: n("501001"),
                darkPNG: n("501001"),
                whitePNG: n("219389"),
                lightSVG: n("698946"),
                darkSVG: n("698946"),
                whiteSVG: n("737531")
            },
            enabled: !0,
            hasMetadata: !0
        }, {
            type: o.PlatformTypes.EBAY,
            name: "eBay",
            icon: {
                lightPNG: n("215741"),
                darkPNG: n("215741"),
                whitePNG: n("463728"),
                lightSVG: n("519515"),
                darkSVG: n("519515"),
                whiteSVG: n("98668")
            },
            enabled: !0,
            hasMetadata: !0,
            getPlatformUserUrl: e => {
                let {
                    name: t
                } = e;
                return "https://www.ebay.com/usr/".concat(encodeURIComponent(t))
            }
        }, {
            type: o.PlatformTypes.TIKTOK,
            name: "TikTok",
            icon: {
                lightPNG: n("699308"),
                darkPNG: n("137181"),
                whitePNG: n("137181"),
                lightSVG: n("890849"),
                darkSVG: n("155885"),
                whiteSVG: n("155885")
            },
            enabled: !0,
            hasMetadata: !0,
            getPlatformUserUrl: e => {
                let {
                    name: t
                } = e;
                return "https://www.tiktok.com/@".concat(encodeURIComponent(t))
            }
        }, {
            type: o.PlatformTypes.INSTAGRAM,
            name: "Instagram",
            icon: {
                lightPNG: n("232720"),
                darkPNG: n("232720"),
                whitePNG: n("71996"),
                lightSVG: n("526659"),
                darkSVG: n("526659"),
                whiteSVG: n("326720")
            },
            enabled: !1,
            getPlatformUserUrl: e => {
                let {
                    name: t
                } = e;
                return "https://www.instagram.com/".concat(encodeURIComponent(t))
            }
        }, {
            type: o.PlatformTypes.CRUNCHYROLL,
            name: "Crunchyroll",
            color: s.default.unsafe_rawColors.CRUNCHYROLL.css,
            icon: {
                lightPNG: n("469024"),
                darkPNG: n("469024"),
                whitePNG: n("469024"),
                lightSVG: n("654009"),
                darkSVG: n("654009"),
                whiteSVG: n("670618")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.DOMAIN,
            name: "Domain",
            icon: {
                lightPNG: n("476735"),
                darkPNG: n("561036"),
                whitePNG: n("561036"),
                lightSVG: n("329074"),
                darkSVG: n("664935"),
                whiteSVG: n("664935")
            },
            getPlatformUserUrl: e => {
                let {
                    id: t
                } = e;
                return "https://".concat(t, "/")
            },
            enabled: !0
        }],
        u = r().keyBy(l, "type"),
        d = {};
    l.forEach(e => {
        var t;
        null === (t = e.domains) || void 0 === t || t.forEach(t => {
            d[t] = e
        })
    }), t.default = {
        get(e) {
            var t;
            return null !== (t = u[e]) && void 0 !== t ? t : null
        },
        getByUrl(e) {
            let t = a.default.toURLSafe(e);
            if (null == t) return;
            let n = t.hostname;
            return d[n.startsWith("www.") ? n.slice(4) : n]
        },
        isSupported: e => Object.prototype.hasOwnProperty.call(u, e),
        map: e => l.map(e),
        filter(e) {
            let t = l.filter(e);
            return t.sort((e, t) => {
                let {
                    name: n
                } = e, {
                    name: i
                } = t;
                return n.localeCompare(i)
            }), t
        },
        find: e => l.find(e)
    }
}