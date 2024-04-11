function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Types: function() {
            return i
        }
    }), n("789020"), n("47120");
    var i, r, s, a = n("735250"),
        o = n("470079"),
        l = n("803997"),
        u = n.n(l),
        d = n("512722"),
        _ = n.n(d),
        c = n("780384"),
        E = n("481060"),
        I = n("438139"),
        T = n("410030"),
        f = n("726542"),
        S = n("740265"),
        h = n("122810"),
        A = n("833664"),
        m = n("503438"),
        N = n("802856"),
        O = n("420660"),
        p = n("471445"),
        R = n("833858"),
        C = n("223135"),
        g = n("920440"),
        L = n("750154"),
        D = n("768581"),
        v = n("630388"),
        M = n("153066"),
        y = n("672938"),
        P = n("285952"),
        U = n("366695"),
        b = n("514342"),
        G = n("366966"),
        w = n("936195"),
        k = n("806519"),
        B = n("981631"),
        V = n("701488"),
        F = n("689938"),
        x = n("333745");

    function H(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(s = i || (i = {})).USER_POPOUT = "UserPopout", s.USER_POPOUT_V2 = "UserPopoutV2", s.ACTIVITY_FEED = "ActivityFeed", s.PROFILE = "Profile", s.PROFILE_V2 = "ProfileV2", s.STREAM_PREVIEW = "StreamPreview", s.VOICE_CHANNEL = "VoiceChannel";
    let Y = {
            StreamPreview: [108, 60],
            UserPopout: [108, 60],
            UserPopoutV2: [108, 60],
            VoiceChannel: [108, 60],
            Profile: [162, 90],
            ProfileV2: [162, 90],
            ActivityFeed: [900, 500]
        },
        {
            getAssetImage: j
        } = n("81063"),
        W = (0, I.default)(class extends o.PureComponent {
            render() {
                return (0, a.jsx)("div", {
                    className: x.timestamp,
                    children: this.props.message
                })
            }
        });

    function K(e) {
        let t, {
                activity: n
            } = e,
            i = (0, T.default)();
        if ((0, m.default)(n) && (t = B.PlatformTypes.SPOTIFY), null != n.platform && [B.ActivityGamePlatforms.PS4, B.ActivityGamePlatforms.PS5].includes(n.platform) && (t = B.PlatformTypes.PLAYSTATION), null == t) return null;
        let r = f.default.get(t);
        return (0, a.jsx)("img", {
            alt: "",
            src: (0, c.isThemeLight)(i) ? r.icon.lightSVG : r.icon.darkSVG,
            className: x.platformIcon
        })
    }
    class z extends(r = o.PureComponent) {
        get activity() {
            let {
                activity: e,
                activityGuild: t
            } = this.props;
            return null != t && (null == e ? void 0 : e.type) !== B.ActivityTypes.PLAYING && (null == e ? void 0 : e.type) !== B.ActivityTypes.WATCHING && (null == e ? void 0 : e.type) !== B.ActivityTypes.HANG_STATUS ? {
                type: B.ActivityTypes.PLAYING,
                name: F.default.Messages.SHARING_SCREEN
            } : e
        }
        getTypeClass(e, t) {
            return (0, M.getClass)(x, e, this.props.type, t)
        }
        isStreamerOnTypeProfile() {
            return (0, O.default)(this.activity) && ("Profile" === this.props.type || "ProfileV2" === this.props.type)
        }
        isStreamerOnTypeActivityFeed() {
            return (0, O.default)(this.activity) && "ActivityFeed" === this.props.type
        }
        renderHeader(e) {
            let t;
            let {
                hideHeader: n,
                activityGuild: i,
                channel: r,
                renderHeaderAccessory: s,
                type: o
            } = this.props, l = this.activity;
            if (n || null == l) return null;
            let {
                name: d
            } = l;
            switch (l.type) {
                case B.ActivityTypes.STREAMING:
                    t = F.default.Messages.USER_ACTIVITY_HEADER_LIVE_ON_PLATFORM.format({
                        platform: [B.PlatformTypes.TWITCH, B.PlatformTypes.YOUTUBE].includes(d.toLowerCase()) ? d : f.default.get(B.PlatformTypes.TWITCH).name
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
                    t = (0, S.default)(l);
                    break;
                case B.ActivityTypes.COMPETING:
                    t = F.default.Messages.USER_ACTIVITY_HEADER_COMPETING.format({
                        name: d
                    })
            }
            if (null != i) {
                var _;
                t = (0, v.hasFlag)(null !== (_ = null == l ? void 0 : l.flags) && void 0 !== _ ? _ : 0, B.ActivityFlags.EMBEDDED) ? l.type === B.ActivityTypes.WATCHING ? F.default.Messages.EMBEDDED_ACTIVITIES_WATCHING_IN_GUILD.format({
                    guildName: i.name
                }) : F.default.Messages.EMBEDDED_ACTIVITIES_PLAYING_IN_GUILD.format({
                    guildName: i.name
                }) : F.default.Messages.USER_ACTIVITY_HEADER_STREAMING_TO_GUILD.format({
                    server: i.name
                })
            }(null == l ? void 0 : l.type) === B.ActivityTypes.HANG_STATUS && (t = F.default.Messages.STATUS_LEAD_IN_JUST);
            let c = (0, p.getChannelIconComponent)(r, i);
            return null != r && (t = r.name), (0, a.jsxs)("div", {
                className: x.headerContainer,
                children: [null != r && null !== c ? (0, a.jsx)(c, {
                    className: u()(x.icon)
                }) : null, (0, a.jsx)(E.Heading, {
                    className: (0, M.getClass)(x, "headerText", e ? "EmptyBody" : "Normal"),
                    variant: "eyebrow",
                    color: "ProfileV2" === o ? "header-primary" : void 0,
                    children: (0, a.jsx)(b.default, {
                        children: t
                    })
                }), null == s ? void 0 : s()]
            })
        }
        renderXboxImage() {
            return (0, a.jsx)("div", {
                className: x.assets,
                children: (0, a.jsx)("img", {
                    alt: "",
                    src: f.default.get(B.PlatformTypes.XBOX).icon.customPNG,
                    className: u()(this.getTypeClass("assetsLargeImage", "Xbox"))
                })
            })
        }
        renderImage(e) {
            var t, n, i;
            let r, s;
            if (e.type === B.ActivityTypes.HANG_STATUS) return (0, a.jsx)("div", {
                className: x.assets,
                children: (0, a.jsx)(C.default, {
                    hangStatusActivity: e,
                    className: u()(x.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
                })
            });
            let {
                type: l
            } = this.props, {
                assets: d,
                application_id: _
            } = e;
            if (null == d || null == d.large_image && null == d.small_image) return null;
            (0, O.default)(e) && (r = Y[l]);
            let c = (0, m.default)(e),
                I = null != d.large_image ? (0, a.jsx)("img", {
                    alt: null !== (t = d.large_text) && void 0 !== t ? t : "",
                    src: j(_, d.large_image, null != r ? r : [V.ImageSizes.LARGE, V.ImageSizes.LARGE]),
                    className: u()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeProfile() || this.isStreamerOnTypeActivityFeed() ? B.PlatformTypes.TWITCH : ""), {
                        [null !== (n = this.getTypeClass("assetsLargeMask")) && void 0 !== n ? n : ""]: null != d.small_image
                    }, {
                        [x.assetsLargeImageSpotify]: c
                    })
                }) : null;
            if (c) I = (0, a.jsx)(E.Anchor, {
                onClick: this.handleOpenSpotifyAlbum,
                children: I
            });
            else if ((0, L.isStageActivity)(e)) {
                let t = (0, L.unpackStageChannelParty)(e);
                if (null == t) return null;
                I = (0, a.jsx)(k.default, {
                    mask: k.default.Masks.SQUIRCLE,
                    width: V.ImageSizes.SMALL,
                    height: V.ImageSizes.SMALL,
                    children: (0, a.jsx)("img", {
                        src: null !== (i = D.default.getGuildIconURL({
                            id: t.guildId,
                            icon: d.small_image,
                            size: V.ImageSizes.SMALL
                        })) && void 0 !== i ? i : void 0,
                        className: x.assetsLargeImageVoiceChannel,
                        alt: ""
                    })
                })
            }
            return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (I = (0, a.jsxs)("div", {
                className: x.twitchImageContainer,
                children: [(0, a.jsxs)("div", {
                    className: x.twitchImageOverlay,
                    children: [(0, a.jsx)(E.H, {
                        className: x.streamName,
                        children: e.name
                    }), (0, a.jsx)("div", {
                        className: x.streamGame,
                        children: F.default.Messages.STREAMER_PLAYING.format({
                            game: e.details
                        })
                    })]
                }), (0, a.jsx)(E.Anchor, {
                    className: x.twitchBackgroundImage,
                    href: e.url,
                    children: I
                })]
            })), !(0, L.isStageActivity)(e) && null != d.small_image && (s = (0, a.jsx)(E.Tooltip, {
                text: "" !== d.small_text ? d.small_text : null,
                position: "top",
                children: e => {
                    var t;
                    return (0, a.jsx)("img", {
                        alt: null !== (t = d.small_text) && void 0 !== t ? t : "",
                        src: j(_, d.small_image, [V.ImageSizes.SMALL, V.ImageSizes.SMALL]),
                        className: this.getTypeClass("assetsSmallImage", null == I ? "WithoutLargeImage" : void 0),
                        ...e
                    })
                }
            })), null == I) ? (0, a.jsx)("div", {
                className: x.assets,
                children: s
            }) : (0, a.jsxs)("div", {
                className: x.assets,
                children: [(0, a.jsx)(E.Tooltip, {
                    text: null != d.large_text ? d.large_text : null,
                    position: "top",
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: n
                        } = e;
                        return null != I ? o.cloneElement(I, {
                            onMouseEnter: t,
                            onMouseLeave: n
                        }) : null
                    }
                }), s]
            })
        }
        renderGameImage(e) {
            let {
                user: t,
                type: n,
                application: i,
                activityGuild: r
            } = this.props;
            return null != e.assets || (0, h.default)(e) || e.type !== B.ActivityTypes.PLAYING || "ActivityFeed" === n || t.bot ? null : null == i && null != r ? (0, a.jsx)("div", {
                className: u()(x.gameIcon, x.screenshareIcon)
            }) : (0, a.jsx)(U.default, {
                className: x.gameIcon,
                game: i
            })
        }
        renderName(e) {
            let {
                user: t,
                application: n,
                hideName: i
            } = this.props;
            if (i) return null;
            let {
                details: r,
                type: s
            } = e;
            if (s === B.ActivityTypes.CUSTOM_STATUS) return null;
            let o = (0, A.default)(e),
                l = e.name,
                u = l;
            return (s === B.ActivityTypes.HANG_STATUS ? u = (0, R.getHangStatusText)(e) : o && null != n ? u = (0, a.jsx)("span", {
                className: x.activityName,
                children: u
            }) : !o && (l = r, u = r, (0, m.default)(e) && null != e.sync_id && null != r ? u = (0, a.jsx)(E.Anchor, {
                className: x.bodyLink,
                onClick: this.handleOpenSpotifyTrack,
                children: r
            }) : (0, L.isStageActivity)(e) && (u = e.name)), null == u) ? null : (0, a.jsx)(E.Text, {
                title: l,
                variant: "text-sm/semibold",
                className: (0, M.getClass)(x, "name", t.bot || this.isStreamerOnTypeProfile() ? "wrap" : "normal"),
                children: u
            })
        }
        renderDetails(e) {
            let t;
            let {
                details: n,
                state: i
            } = e, {
                activityGuild: r
            } = this.props, s = n, o = n;
            if (e.type === B.ActivityTypes.CUSTOM_STATUS) s = i;
            else if (e.type === B.ActivityTypes.HANG_STATUS) s = null != r ? F.default.Messages.HANG_STATUS_LOCATION.format({
                guildName: r.name
            }) : null, t = null != r ? () => {
                (0, g.transitionToGuild)(r.id)
            } : void 0;
            else if (!(0, A.default)(e)) {
                if (o = s = i, (0, m.default)(e) && null != i) s = F.default.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
                    artists: o,
                    artistsHook: (t, n) => (0, a.jsx)(w.default, {
                        artists: i,
                        linkClassName: x.bodyLink,
                        canOpen: null != e.sync_id,
                        onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                    }, n)
                });
                else if ((0, L.isStageActivity)(e)) {
                    var l;
                    s = null === (l = e.assets) || void 0 === l ? void 0 : l.small_text
                }
            }
            return null == s || 0 === s.length ? null : ((0, O.default)(e) && (s = F.default.Messages.STREAMER_PLAYING.format({
                game: s
            })), null != t) ? (0, a.jsx)(E.Clickable, {
                onClick: t,
                title: null != o ? o : void 0,
                className: x.clickableDetails,
                children: s
            }) : (0, a.jsx)("div", {
                title: null != o ? o : void 0,
                className: (0, O.default)(e) || (0, m.default)(e) ? x.detailsWrap : x.details,
                children: s
            })
        }
        renderTimePlayed(e) {
            let {
                activityGuild: t
            } = this.props;
            if (!(0, A.default)(e) || (0, m.default)(e)) return null;
            let {
                timestamps: n
            } = e;
            return null == n ? null : (0, h.default)(e) ? (0, a.jsx)(W, {
                timestamps: n
            }) : (0, a.jsx)(G.default, {
                start: n.start,
                location: G.default.Locations.USER_ACTIVITY,
                className: x.playTime,
                isApplicationStreaming: null != t
            })
        }
        renderTimeBar(e) {
            if (!(0, m.default)(e)) return null;
            let {
                timestamps: t
            } = e;
            if (null == t) return null;
            let {
                start: n,
                end: i
            } = t;
            return null == n || null == i ? null : (0, a.jsx)(y.default, {
                start: n,
                end: i,
                className: this.getTypeClass("timeBar"),
                themed: "VoiceChannel" === this.props.type || "UserPopout" === this.props.type || "UserPopoutV2" === this.props.type || "ProfileV2" === this.props.type
            })
        }
        renderState(e, t) {
            var n, i;
            let r;
            let {
                state: s,
                party: o,
                assets: l
            } = e, u = s, d = u;
            return (!(0, A.default)(e) && (d = u = null == l ? void 0 : l.large_text, (0, m.default)(e) && null != u && (u = F.default.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
                album: d,
                albumHook: (t, n) => null != e.sync_id && null != d ? (0, a.jsx)(E.Anchor, {
                    className: x.bodyLink,
                    onClick: this.handleOpenSpotifyAlbum,
                    children: d
                }, n) : d
            }))), null != u && 0 !== u.length && e.type !== B.ActivityTypes.CUSTOM_STATUS || (0, L.isStageActivity)(e)) ? ((null == o ? void 0 : o.size) == null && [(0, V.POKER_NIGHT_APPLICATION_ID)].includes(null !== (n = e.application_id) && void 0 !== n ? n : "") ? r = F.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
                count: "0",
                max: null !== (i = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== i ? i : 0
            }) : (0, L.isStageActivity)(e) && (null == o ? void 0 : o.size) != null ? r = F.default.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
                numSpeakers: o.size[0],
                numListeners: o.size[1] - o.size[0]
            }) : (null == o ? void 0 : o.size) != null && o.size.length >= 2 && (r = F.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
                count: o.size[0],
                max: o.size[1]
            })), (0, a.jsxs)("div", {
                className: x.state,
                children: [(0, a.jsx)("span", {
                    title: d,
                    children: u
                }), null != r ? (0, a.jsxs)("span", {
                    children: [" ", r]
                }) : null]
            })) : null
        }
        render() {
            let e;
            let {
                type: t,
                renderActions: n,
                className: i,
                application: r,
                showReactions: s
            } = this.props, o = this.activity;
            if (null == o || o.type === B.ActivityTypes.CUSTOM_STATUS) return null;
            let l = "UserPopout" === t || "UserPopoutV2" === t,
                d = "Profile" === t || "ProfileV2" === t,
                _ = "ActivityFeed" === t,
                c = "StreamPreview" === t,
                E = !1;
            (0, N.default)(o) ? (e = this.renderXboxImage(), E = !0) : null == (e = this.renderImage(o)) && (E = null != (e = this.renderGameImage(o)));
            let I = this.renderName(o),
                T = this.renderDetails(o),
                f = this.renderState(o, r),
                S = this.renderTimePlayed(o),
                h = null != n ? n() : null,
                A = this.renderTimeBar(o),
                m = ![e, I, T, f, S, A, h].some(e => null != e);
            return (0, a.jsxs)("div", {
                className: u()(this.getTypeClass("activity"), i),
                children: [this.renderHeader(m), (0, a.jsxs)("div", {
                    className: u()(E ? x.bodyAlignCenter : x.bodyNormal, s && !l && !c && x.wrap),
                    children: [(0, a.jsxs)("div", {
                        className: x.activityDetails,
                        children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, a.jsxs)(P.default.Child, {
                            className: u()((0, M.getClass)(x, "content", E ? "GameImage" : null != e ? "Images" : "NoImages", t)),
                            children: [I, T, f, S, l || c ? null : A, _ ? h : null]
                        })]
                    }), d ? h : null]
                }), l ? A : null, l || c ? h : null, (0, a.jsx)(K, {
                    activity: o
                })]
            })
        }
        constructor(...e) {
            super(...e), H(this, "handleOpenSpotifyTrack", () => {
                let {
                    activity: e,
                    onOpenSpotifyTrack: t
                } = this.props;
                _()(null != e, "Spotify activity was null"), null == t || t(e)
            }), H(this, "handleOpenSpotifyArtist", e => {
                let {
                    activity: t,
                    onOpenSpotifyArtist: n,
                    user: i
                } = this.props;
                _()(null != t, "Spotify activity was null"), null == n || n(t, i.id, e)
            }), H(this, "handleOpenSpotifyAlbum", () => {
                let {
                    activity: e,
                    onOpenSpotifyAlbum: t,
                    user: n
                } = this.props;
                _()(null != e, "Spotify activity was null"), null == t || t(e, n.id)
            })
        }
    }
    H(z, "Types", i), t.default = z
}