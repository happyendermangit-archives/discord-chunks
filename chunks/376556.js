function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("917351"),
        r = n.n(i),
        s = n("669491"),
        a = n("253981"),
        o = n("49111");
    let l = [{
            type: o.PlatformTypes.TWITCH,
            name: "Twitch",
            color: s.default.unsafe_rawColors.TWITCH.css,
            icon: {
                lightPNG: n("115658"),
                darkPNG: n("115658"),
                whitePNG: n("288589"),
                lightSVG: n("729332"),
                darkSVG: n("729332"),
                whiteSVG: n("31439")
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
                lightPNG: n("299893"),
                darkPNG: n("299893"),
                whitePNG: n("255284"),
                lightSVG: n("997771"),
                darkSVG: n("997771"),
                whiteSVG: n("223406")
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
                lightPNG: n("194175"),
                darkPNG: n("194175"),
                whitePNG: n("159142"),
                lightSVG: n("35024"),
                darkSVG: n("35024"),
                whiteSVG: n("671223")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.SKYPE,
            name: "Skype",
            color: s.default.unsafe_rawColors.SKYPE.css,
            icon: {
                lightPNG: n("992221"),
                darkPNG: n("992221"),
                whitePNG: n("731368"),
                lightSVG: n("894025"),
                darkSVG: n("894025"),
                whiteSVG: n("645496")
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
                lightPNG: n("530354"),
                darkPNG: n("530354"),
                whitePNG: n("925382"),
                lightSVG: n("667083"),
                darkSVG: n("667083"),
                whiteSVG: n("509949")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.STEAM,
            name: "Steam",
            color: s.default.unsafe_rawColors.STEAM.css,
            icon: {
                lightPNG: n("777626"),
                darkPNG: n("877414"),
                whitePNG: n("877414"),
                lightSVG: n("566035"),
                darkSVG: n("309663"),
                whiteSVG: n("309663")
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
                lightPNG: n("373338"),
                darkPNG: n("373338"),
                whitePNG: n("479111"),
                lightSVG: n("977001"),
                darkSVG: n("977001"),
                whiteSVG: n("592466")
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
                lightPNG: n("879157"),
                darkPNG: n("879157"),
                whitePNG: n("259168"),
                lightSVG: n("870064"),
                darkSVG: n("870064"),
                whiteSVG: n("735638")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.TWITTER_LEGACY,
            name: "Twitter",
            color: s.default.unsafe_rawColors.TWITTER.css,
            icon: {
                lightPNG: n("122630"),
                darkPNG: n("122630"),
                whitePNG: n("961232"),
                lightSVG: n("372786"),
                darkSVG: n("372786"),
                whiteSVG: n("387628")
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
                lightPNG: n("483819"),
                darkPNG: n("980576"),
                whitePNG: n("192473"),
                lightSVG: n("955307"),
                darkSVG: n("552995"),
                whiteSVG: n("312139")
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
                lightPNG: n("561050"),
                darkPNG: n("561050"),
                whitePNG: n("618077"),
                lightSVG: n("630528"),
                darkSVG: n("630528"),
                whiteSVG: n("662418")
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
                lightPNG: n("599004"),
                darkPNG: n("956204"),
                whitePNG: n("956204"),
                lightSVG: n("713106"),
                darkSVG: n("946662"),
                whiteSVG: n("946662"),
                customPNG: n("272378")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.SAMSUNG,
            name: "Samsung Galaxy",
            color: s.default.unsafe_rawColors.SAMSUNG.css,
            icon: {
                lightPNG: n("768935"),
                darkPNG: n("768935"),
                whitePNG: n("629132"),
                lightSVG: n("869872"),
                darkSVG: n("869872"),
                whiteSVG: n("301098")
            },
            enabled: !1
        }, {
            type: o.PlatformTypes.GITHUB,
            name: "GitHub",
            color: s.default.unsafe_rawColors.GITHUB.css,
            icon: {
                lightPNG: n("321223"),
                darkPNG: n("646994"),
                whitePNG: n("646994"),
                lightSVG: n("94470"),
                darkSVG: n("375518"),
                whiteSVG: n("375518")
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
                lightPNG: n("322246"),
                darkPNG: n("964854"),
                whitePNG: n("964854"),
                lightSVG: n("154849"),
                darkSVG: n("895661"),
                whiteSVG: n("895661")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.PLAYSTATION_STAGING,
            name: "PlayStation Network (Staging)",
            color: s.default.unsafe_rawColors.PLAYSTATION.css,
            icon: {
                lightPNG: n("964854"),
                darkPNG: n("322246"),
                whitePNG: n("322246"),
                lightSVG: n("895661"),
                darkSVG: n("154849"),
                whiteSVG: n("154849")
            },
            enabled: !1
        }, {
            type: o.PlatformTypes.EPIC_GAMES,
            name: "Epic Games",
            icon: {
                lightPNG: n("1308"),
                darkPNG: n("396128"),
                whitePNG: n("396128"),
                lightSVG: n("746621"),
                darkSVG: n("497894"),
                whiteSVG: n("497894")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.RIOT_GAMES,
            name: "Riot Games",
            icon: {
                lightPNG: n("300525"),
                darkPNG: n("300525"),
                whitePNG: n("501653"),
                lightSVG: n("704777"),
                darkSVG: n("704777"),
                whiteSVG: n("940593")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.PAYPAL,
            name: "PayPal",
            icon: {
                lightPNG: n("347775"),
                darkPNG: n("347775"),
                whitePNG: n("770624"),
                lightSVG: n("524855"),
                darkSVG: n("524855"),
                whiteSVG: n("209560")
            },
            enabled: !0,
            hasMetadata: !0
        }, {
            type: o.PlatformTypes.EBAY,
            name: "eBay",
            icon: {
                lightPNG: n("14366"),
                darkPNG: n("14366"),
                whitePNG: n("994873"),
                lightSVG: n("286611"),
                darkSVG: n("286611"),
                whiteSVG: n("376998")
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
                lightPNG: n("482311"),
                darkPNG: n("196135"),
                whitePNG: n("196135"),
                lightSVG: n("204844"),
                darkSVG: n("793866"),
                whiteSVG: n("793866")
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
                lightPNG: n("299059"),
                darkPNG: n("299059"),
                whitePNG: n("612315"),
                lightSVG: n("496955"),
                darkSVG: n("496955"),
                whiteSVG: n("152071")
            },
            enabled: !0,
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
                lightPNG: n("211689"),
                darkPNG: n("211689"),
                whitePNG: n("211689"),
                lightSVG: n("350043"),
                darkSVG: n("350043"),
                whiteSVG: n("698833")
            },
            enabled: !0
        }, {
            type: o.PlatformTypes.DOMAIN,
            name: "Domain",
            icon: {
                lightPNG: n("145159"),
                darkPNG: n("523403"),
                whitePNG: n("523403"),
                lightSVG: n("994912"),
                darkSVG: n("153846"),
                whiteSVG: n("153846")
            },
            getPlatformUserUrl: e => {
                let {
                    id: t
                } = e;
                return "https://".concat(t, "/")
            },
            enabled: !0
        }],
        u = r.keyBy(l, "type"),
        c = {};
    l.forEach(e => {
        var t;
        null === (t = e.domains) || void 0 === t || t.forEach(t => {
            c[t] = e
        })
    });
    var d = {
        get(e) {
            var t;
            return null !== (t = u[e]) && void 0 !== t ? t : null
        },
        getByUrl(e) {
            let t = a.default.toURLSafe(e);
            if (null == t) return;
            let n = t.hostname,
                i = n.startsWith("www.") ? n.slice(4) : n;
            return c[i]
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