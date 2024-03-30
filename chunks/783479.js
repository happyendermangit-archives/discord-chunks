function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Types: function() {
            return o
        }
    });
    var r, o, i, a, u = n("470079"),
        s = n("803997"),
        l = n.n(s),
        c = n("512722"),
        f = n.n(c),
        d = n("751848"),
        _ = n("784184"),
        E = n("92909"),
        p = n("523263"),
        m = n("386823"),
        y = n("327256"),
        I = n("889083"),
        h = n("312071"),
        O = n("157941"),
        T = n("99406"),
        S = n("896154"),
        v = n("974901"),
        g = n("663882"),
        A = n("376220"),
        b = n("909080"),
        N = n("705064"),
        R = n("299529"),
        C = n("947248"),
        P = n("573525"),
        D = n("496151"),
        L = n("143953"),
        M = n("433073"),
        U = n("288509"),
        w = n("243962"),
        k = n("707677"),
        G = n("845265"),
        B = n("281767"),
        j = n("997133"),
        F = n("941504"),
        V = n("333745");

    function H(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function x(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function Y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function W(e, t, n) {
        return t && Y(e.prototype, t), n && Y(e, n), e
    }

    function K(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function z(e) {
        return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function X(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && q(e, t)
    }

    function q(e, t) {
        return (q = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Q(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = z(e);
            if (t) {
                var a = z(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : H(n)
        }
    }(r = o || (o = {})).USER_POPOUT = "UserPopout", r.USER_POPOUT_V2 = "UserPopoutV2", r.ACTIVITY_FEED = "ActivityFeed", r.PROFILE = "Profile", r.PROFILE_V2 = "ProfileV2", r.STREAM_PREVIEW = "StreamPreview", r.VOICE_CHANNEL = "VoiceChannel";
    var J = (K(i = {}, "StreamPreview", [108, 60]), K(i, "UserPopout", [108, 60]), K(i, "UserPopoutV2", [108, 60]), K(i, "VoiceChannel", [108, 60]), K(i, "Profile", [162, 90]), K(i, "ProfileV2", [162, 90]), K(i, "ActivityFeed", [900, 500]), i),
        Z = n("23088").getAssetImage,
        $ = (0, E.default)(function(e) {
            X(n, e);
            var t = Q(n);

            function n() {
                return x(this, n), t.apply(this, arguments)
            }
            return W(n, [{
                key: "render",
                value: function() {
                    return u.createElement("div", {
                        className: V.timestamp
                    }, this.props.message)
                }
            }]), n
        }(u.PureComponent));

    function ee(e) {
        var t, n = e.activity,
            r = (0, p.default)();
        if ((0, O.default)(n) && (t = B.PlatformTypes.SPOTIFY), null != n.platform && [B.ActivityGamePlatforms.PS4, B.ActivityGamePlatforms.PS5].includes(n.platform) && (t = B.PlatformTypes.PLAYSTATION), null == t) return null;
        var o = m.default.get(t);
        return u.createElement("img", {
            alt: "",
            src: (0, d.isThemeLight)(r) ? o.icon.lightSVG : o.icon.darkSVG,
            className: V.platformIcon
        })
    }
    var et = function(e) {
        X(n, e);
        var t = Q(n);

        function n() {
            var e;
            return x(this, n), e = t.apply(this, arguments), K(H(e), "handleOpenSpotifyTrack", function() {
                var t = e.props,
                    n = t.activity,
                    r = t.onOpenSpotifyTrack;
                f()(null != n, "Spotify activity was null"), null == r || r(n)
            }), K(H(e), "handleOpenSpotifyArtist", function(t) {
                var n = e.props,
                    r = n.activity,
                    o = n.onOpenSpotifyArtist,
                    i = n.user;
                f()(null != r, "Spotify activity was null"), null == o || o(r, i.id, t)
            }), K(H(e), "handleOpenSpotifyAlbum", function() {
                var t = e.props,
                    n = t.activity,
                    r = t.onOpenSpotifyAlbum,
                    o = t.user;
                f()(null != n, "Spotify activity was null"), null == r || r(n, o.id)
            }), e
        }
        return W(n, [{
            key: "activity",
            get: function() {
                var e = this.props,
                    t = e.activity;
                return null != e.activityGuild && (null == t ? void 0 : t.type) !== B.ActivityTypes.PLAYING && (null == t ? void 0 : t.type) !== B.ActivityTypes.WATCHING && (null == t ? void 0 : t.type) !== B.ActivityTypes.HANG_STATUS ? {
                    type: B.ActivityTypes.PLAYING,
                    name: F.default.Messages.SHARING_SCREEN
                } : t
            }
        }, {
            key: "getTypeClass",
            value: function(e, t) {
                return (0, P.getClass)(V, e, this.props.type, t)
            }
        }, {
            key: "isStreamerOnTypeProfile",
            value: function() {
                return (0, S.default)(this.activity) && ("Profile" === this.props.type || "ProfileV2" === this.props.type)
            }
        }, {
            key: "isStreamerOnTypeActivityFeed",
            value: function() {
                return (0, S.default)(this.activity) && "ActivityFeed" === this.props.type
            }
        }, {
            key: "renderHeader",
            value: function(e) {
                var t, n, r = this.props,
                    o = r.hideHeader,
                    i = r.activityGuild,
                    a = r.channel,
                    s = r.renderHeaderAccessory,
                    c = r.type,
                    f = this.activity;
                if (o || null == f) return null;
                var d = f.name;
                switch (f.type) {
                    case B.ActivityTypes.STREAMING:
                        t = F.default.Messages.USER_ACTIVITY_HEADER_LIVE_ON_PLATFORM.format({
                            platform: [B.PlatformTypes.TWITCH, B.PlatformTypes.YOUTUBE].includes(d.toLowerCase()) ? d : m.default.get(B.PlatformTypes.TWITCH).name
                        });
                        break;
                    case B.ActivityTypes.LISTENING:
                        t = F.default.Messages.USER_ACTIVITY_HEADER_LISTENING.format({
                            name: d
                        });
                        break;
                    case B.ActivityTypes.WATCHING:
                        t = F.default.Messages.USER_ACTIVITY_HEADER_WATCHING.format({
                            name: d
                        });
                        break;
                    case B.ActivityTypes.PLAYING:
                        t = (0, y.default)(f);
                        break;
                    case B.ActivityTypes.COMPETING:
                        t = F.default.Messages.USER_ACTIVITY_HEADER_COMPETING.format({
                            name: d
                        })
                }
                null != i && (t = (0, C.hasFlag)(null !== (n = null == f ? void 0 : f.flags) && void 0 !== n ? n : 0, B.ActivityFlags.EMBEDDED) ? f.type === B.ActivityTypes.WATCHING ? F.default.Messages.EMBEDDED_ACTIVITIES_WATCHING_IN_GUILD.format({
                    guildName: i.name
                }) : F.default.Messages.EMBEDDED_ACTIVITIES_PLAYING_IN_GUILD.format({
                    guildName: i.name
                }) : F.default.Messages.USER_ACTIVITY_HEADER_STREAMING_TO_GUILD.format({
                    server: i.name
                })), (null == f ? void 0 : f.type) === B.ActivityTypes.HANG_STATUS && (t = F.default.Messages.STATUS_LEAD_IN_JUST);
                var E = (0, v.getChannelIconComponent)(a, i);
                return null != a && (t = a.name), u.createElement("div", {
                    className: V.headerContainer
                }, null != a && null !== E ? u.createElement(E, {
                    className: l()(V.icon)
                }) : null, u.createElement(_.Heading, {
                    className: (0, P.getClass)(V, "headerText", e ? "EmptyBody" : "Normal"),
                    variant: "heading-deprecated-12/semibold",
                    color: "ProfileV2" === c ? "header-primary" : void 0
                }, u.createElement(U.default, null, t)), null == s ? void 0 : s())
            }
        }, {
            key: "renderXboxImage",
            value: function() {
                return u.createElement("div", {
                    className: V.assets
                }, u.createElement("img", {
                    alt: "",
                    src: m.default.get(B.PlatformTypes.XBOX).icon.customPNG,
                    className: l()(this.getTypeClass("assetsLargeImage", "Xbox"))
                }))
            }
        }, {
            key: "renderImage",
            value: function(e) {
                var t, n = this;
                if (e.type === B.ActivityTypes.HANG_STATUS) return u.createElement("div", {
                    className: V.assets
                }, u.createElement(A.default, {
                    hangStatusActivity: e,
                    className: l()(V.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
                }));
                var r = this.props.type,
                    o = e.assets,
                    i = e.application_id;
                if (null == o || null == o.large_image && null == o.small_image) return null;
                (0, S.default)(e) && (c = J[r]);
                var a = (0, O.default)(e),
                    s = null != o.large_image ? u.createElement("img", {
                        alt: null !== (f = o.large_text) && void 0 !== f ? f : "",
                        src: Z(i, o.large_image, null != c ? c : [j.ImageSizes.LARGE, j.ImageSizes.LARGE]),
                        className: l()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeProfile() || this.isStreamerOnTypeActivityFeed() ? B.PlatformTypes.TWITCH : ""), K({}, null !== (d = this.getTypeClass("assetsLargeMask")) && void 0 !== d ? d : "", null != o.small_image), K({}, V.assetsLargeImageSpotify, a))
                    }) : null;
                if (a) s = u.createElement(_.Anchor, {
                    onClick: this.handleOpenSpotifyAlbum
                }, s);
                else if ((0, N.isStageActivity)(e)) {
                    var c, f, d, E, p = (0, N.unpackStageChannelParty)(e);
                    if (null == p) return null;
                    s = u.createElement(G.default, {
                        mask: G.default.Masks.SQUIRCLE,
                        width: j.ImageSizes.SMALL,
                        height: j.ImageSizes.SMALL
                    }, u.createElement("img", {
                        src: null !== (E = R.default.getGuildIconURL({
                            id: p.guildId,
                            icon: o.small_image,
                            size: j.ImageSizes.SMALL
                        })) && void 0 !== E ? E : void 0,
                        className: V.assetsLargeImageVoiceChannel,
                        alt: ""
                    }))
                }
                return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (s = u.createElement("div", {
                    className: V.twitchImageContainer
                }, u.createElement("div", {
                    className: V.twitchImageOverlay
                }, u.createElement(_.H, {
                    className: V.streamName
                }, e.name), u.createElement("div", {
                    className: V.streamGame
                }, F.default.Messages.STREAMER_PLAYING.format({
                    game: e.details
                }))), u.createElement(_.Anchor, {
                    className: V.twitchBackgroundImage,
                    href: e.url
                }, s))), !(0, N.isStageActivity)(e) && null != o.small_image && (t = u.createElement(_.Tooltip, {
                    text: "" !== o.small_text ? o.small_text : null,
                    position: "top"
                }, function(e) {
                    var t;
                    return u.createElement("img", function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                K(e, t, n[t])
                            })
                        }
                        return e
                    }({
                        alt: null !== (t = o.small_text) && void 0 !== t ? t : "",
                        src: Z(i, o.small_image, [j.ImageSizes.SMALL, j.ImageSizes.SMALL]),
                        className: n.getTypeClass("assetsSmallImage", null == s ? "WithoutLargeImage" : void 0)
                    }, e))
                })), null == s) ? u.createElement("div", {
                    className: V.assets
                }, t) : u.createElement("div", {
                    className: V.assets
                }, u.createElement(_.Tooltip, {
                    text: null != o.large_text ? o.large_text : null,
                    position: "top"
                }, function(e) {
                    var t = e.onMouseEnter,
                        n = e.onMouseLeave;
                    return null != s ? u.cloneElement(s, {
                        onMouseEnter: t,
                        onMouseLeave: n
                    }) : null
                }), t)
            }
        }, {
            key: "renderGameImage",
            value: function(e) {
                var t = this.props,
                    n = t.user,
                    r = t.type,
                    o = t.application,
                    i = t.activityGuild;
                return null != e.assets || (0, I.default)(e) || e.type !== B.ActivityTypes.PLAYING || "ActivityFeed" === r || n.bot ? null : null == o && null != i ? u.createElement("div", {
                    className: l()(V.gameIcon, V.screenshareIcon)
                }) : u.createElement(M.default, {
                    className: V.gameIcon,
                    game: o
                })
            }
        }, {
            key: "renderName",
            value: function(e) {
                var t = this.props,
                    n = t.user,
                    r = t.application;
                if (t.hideName) return null;
                var o = e.details,
                    i = e.type;
                if (i === B.ActivityTypes.CUSTOM_STATUS) return null;
                var a = (0, h.default)(e),
                    s = e.name,
                    l = s;
                return (i === B.ActivityTypes.HANG_STATUS ? l = (0, g.getHangStatusText)(e) : a && null != r ? l = u.createElement("span", {
                    className: V.activityName
                }, l) : !a && (s = o, l = o, (0, O.default)(e) && null != e.sync_id && null != o ? l = u.createElement(_.Anchor, {
                    className: V.bodyLink,
                    onClick: this.handleOpenSpotifyTrack
                }, o) : (0, N.isStageActivity)(e) && (l = e.name)), null == l) ? null : u.createElement(_.Text, {
                    title: s,
                    variant: "text-sm/semibold",
                    className: (0, P.getClass)(V, "name", n.bot || this.isStreamerOnTypeProfile() ? "wrap" : "normal")
                }, l)
            }
        }, {
            key: "renderDetails",
            value: function(e) {
                var t, n, r = this,
                    o = e.details,
                    i = e.state,
                    a = this.props.activityGuild,
                    s = o,
                    l = o;
                if (e.type === B.ActivityTypes.CUSTOM_STATUS) s = i;
                else if (e.type === B.ActivityTypes.HANG_STATUS) s = null != a ? F.default.Messages.HANG_STATUS_LOCATION.format({
                    guildName: a.name
                }) : null, t = null != a ? function() {
                    (0, b.transitionToGuild)(a.id)
                } : void 0;
                else if (!(0, h.default)(e)) {
                    if (l = s = i, (0, O.default)(e) && null != i) {
                        ;
                        s = F.default.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
                            artists: l,
                            artistsHook: function(t, n) {
                                return u.createElement(k.default, {
                                    artists: i,
                                    key: n,
                                    linkClassName: V.bodyLink,
                                    canOpen: null != e.sync_id,
                                    onOpenSpotifyArtist: r.handleOpenSpotifyArtist
                                })
                            }
                        })
                    } else(0, N.isStageActivity)(e) && (s = null === (n = e.assets) || void 0 === n ? void 0 : n.small_text)
                }
                return null == s || 0 === s.length ? null : ((0, S.default)(e) && (s = F.default.Messages.STREAMER_PLAYING.format({
                    game: s
                })), null != t) ? u.createElement(_.Clickable, {
                    onClick: t,
                    title: null != l ? l : void 0,
                    className: V.clickableDetails
                }, s) : u.createElement("div", {
                    title: null != l ? l : void 0,
                    className: (0, S.default)(e) || (0, O.default)(e) ? V.detailsWrap : V.details
                }, s)
            }
        }, {
            key: "renderTimePlayed",
            value: function(e) {
                var t = this.props.activityGuild;
                if (!(0, h.default)(e) || (0, O.default)(e)) return null;
                var n = e.timestamps;
                return null == n ? null : (0, I.default)(e) ? u.createElement($, {
                    timestamps: n
                }) : u.createElement(w.default, {
                    start: n.start,
                    location: w.default.Locations.USER_ACTIVITY,
                    className: V.playTime,
                    isApplicationStreaming: null != t
                })
            }
        }, {
            key: "renderTimeBar",
            value: function(e) {
                if (!(0, O.default)(e)) return null;
                var t = e.timestamps;
                if (null == t) return null;
                var n = t.start,
                    r = t.end;
                return null == n || null == r ? null : u.createElement(D.default, {
                    start: n,
                    end: r,
                    className: this.getTypeClass("timeBar"),
                    themed: "VoiceChannel" === this.props.type || "UserPopout" === this.props.type || "UserPopoutV2" === this.props.type || "ProfileV2" === this.props.type
                })
            }
        }, {
            key: "renderState",
            value: function(e, t) {
                var n, r, o, i = this,
                    a = e.state,
                    s = e.party,
                    l = e.assets,
                    c = a,
                    f = c;
                return (!(0, h.default)(e) && (f = c = null == l ? void 0 : l.large_text, (0, O.default)(e) && null != c && (c = F.default.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
                    album: f,
                    albumHook: function(t, n) {
                        return null != e.sync_id && null != f ? u.createElement(_.Anchor, {
                            key: n,
                            className: V.bodyLink,
                            onClick: i.handleOpenSpotifyAlbum
                        }, f) : f
                    }
                }))), null != c && 0 !== c.length && e.type !== B.ActivityTypes.CUSTOM_STATUS || (0, N.isStageActivity)(e)) ? ((null == s ? void 0 : s.size) == null && [(0, j.POKER_NIGHT_APPLICATION_ID)].includes(null !== (r = e.application_id) && void 0 !== r ? r : "") ? n = F.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
                    count: "0",
                    max: null !== (o = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== o ? o : 0
                }) : (0, N.isStageActivity)(e) && (null == s ? void 0 : s.size) != null ? n = F.default.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
                    numSpeakers: s.size[0],
                    numListeners: s.size[1] - s.size[0]
                }) : (null == s ? void 0 : s.size) != null && s.size.length >= 2 && (n = F.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
                    count: s.size[0],
                    max: s.size[1]
                })), u.createElement("div", {
                    className: V.state
                }, u.createElement("span", {
                    title: f
                }, c), null != n ? u.createElement("span", null, " ", n) : null)) : null
            }
        }, {
            key: "render",
            value: function() {
                var e, t = this.props,
                    n = t.type,
                    r = t.renderActions,
                    o = t.className,
                    i = t.application,
                    a = t.showReactions,
                    s = this.activity;
                if (null == s || s.type === B.ActivityTypes.CUSTOM_STATUS) return null;
                var c = "UserPopout" === n || "UserPopoutV2" === n,
                    f = "Profile" === n || "ProfileV2" === n,
                    d = "ActivityFeed" === n,
                    _ = "StreamPreview" === n,
                    E = !1;
                (0, T.default)(s) ? (e = this.renderXboxImage(), E = !0) : null == (e = this.renderImage(s)) && (E = null != (e = this.renderGameImage(s)));
                var p = this.renderName(s),
                    m = this.renderDetails(s),
                    y = this.renderState(s, i),
                    I = this.renderTimePlayed(s),
                    h = null != r ? r() : null,
                    O = this.renderTimeBar(s),
                    S = ![e, p, m, y, I, O, h].some(function(e) {
                        return null != e
                    });
                return u.createElement("div", {
                    className: l()(this.getTypeClass("activity"), o)
                }, this.renderHeader(S), u.createElement("div", {
                    className: l()(E ? V.bodyAlignCenter : V.bodyNormal, a && !c && !_ && V.wrap)
                }, u.createElement("div", {
                    className: V.activityDetails
                }, e, this.isStreamerOnTypeActivityFeed() ? null : u.createElement(L.default.Child, {
                    className: l()((0, P.getClass)(V, "content", E ? "GameImage" : null != e ? "Images" : "NoImages", n))
                }, p, m, y, I, c || _ ? null : O, d ? h : null)), f ? h : null), c ? O : null, c || _ ? h : null, u.createElement(ee, {
                    activity: s
                }))
            }
        }]), n
    }(u.PureComponent);
    K(et, "Types", o), t.default = et
}