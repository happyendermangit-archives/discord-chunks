function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Types: function() {
            return l
        },
        default: function() {
            return Y
        }
    }), n("702976"), n("222007");
    var l, i, a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("627445"),
        d = n.n(u),
        c = n("819855"),
        f = n("77078"),
        m = n("832627"),
        p = n("841098"),
        h = n("376556"),
        E = n("609030"),
        g = n("309570"),
        C = n("985677"),
        S = n("429928"),
        T = n("36539"),
        v = n("502651"),
        I = n("419830"),
        _ = n("808742"),
        N = n("342845"),
        A = n("239380"),
        x = n("118033"),
        y = n("315102"),
        O = n("568734"),
        R = n("474293"),
        M = n("339521"),
        L = n("145131"),
        P = n("953109"),
        b = n("98292"),
        j = n("280174"),
        U = n("963422"),
        D = n("587974"),
        k = n("49111"),
        w = n("954016"),
        F = n("782340"),
        G = n("542371");
    (i = l || (l = {})).USER_POPOUT = "UserPopout", i.USER_POPOUT_V2 = "UserPopoutV2", i.ACTIVITY_FEED = "ActivityFeed", i.PROFILE = "Profile", i.PROFILE_V2 = "ProfileV2", i.STREAM_PREVIEW = "StreamPreview", i.VOICE_CHANNEL = "VoiceChannel";
    let B = {
            StreamPreview: [108, 60],
            UserPopout: [108, 60],
            UserPopoutV2: [108, 60],
            VoiceChannel: [108, 60],
            Profile: [162, 90],
            ProfileV2: [162, 90],
            ActivityFeed: [900, 500]
        },
        {
            getAssetImage: H
        } = n("550368"),
        V = (0, m.default)(class extends s.PureComponent {
            render() {
                return (0, a.jsx)("div", {
                    className: G.timestamp,
                    children: this.props.message
                })
            }
        });

    function K(e) {
        let t, {
                activity: n
            } = e,
            l = (0, p.default)();
        if ((0, S.default)(n) && (t = k.PlatformTypes.SPOTIFY), null != n.platform && [k.ActivityGamePlatforms.PS4, k.ActivityGamePlatforms.PS5].includes(n.platform) && (t = k.PlatformTypes.PLAYSTATION), null == t) return null;
        let i = h.default.get(t);
        return (0, a.jsx)("img", {
            alt: "",
            src: (0, c.isThemeLight)(l) ? i.icon.lightSVG : i.icon.darkSVG,
            className: G.platformIcon
        })
    }
    class W extends s.PureComponent {
        get activity() {
            let {
                activity: e,
                activityGuild: t
            } = this.props;
            return null != t && (null == e ? void 0 : e.type) !== k.ActivityTypes.PLAYING && (null == e ? void 0 : e.type) !== k.ActivityTypes.WATCHING && (null == e ? void 0 : e.type) !== k.ActivityTypes.HANG_STATUS ? {
                type: k.ActivityTypes.PLAYING,
                name: F.default.Messages.SHARING_SCREEN
            } : e
        }
        getTypeClass(e, t) {
            return (0, R.getClass)(G, e, this.props.type, t)
        }
        isStreamerOnTypeProfile() {
            return (0, v.default)(this.activity) && ("Profile" === this.props.type || "ProfileV2" === this.props.type)
        }
        isStreamerOnTypeActivityFeed() {
            return (0, v.default)(this.activity) && "ActivityFeed" === this.props.type
        }
        renderHeader(e) {
            let t;
            let {
                hideHeader: n,
                activityGuild: l,
                channel: i,
                renderHeaderAccessory: s,
                type: r
            } = this.props, u = this.activity;
            if (n || null == u) return null;
            let {
                name: d
            } = u;
            switch (u.type) {
                case k.ActivityTypes.STREAMING:
                    t = F.default.Messages.USER_ACTIVITY_HEADER_LIVE_ON_PLATFORM.format({
                        platform: [k.PlatformTypes.TWITCH, k.PlatformTypes.YOUTUBE].includes(d.toLowerCase()) ? d : h.default.get(k.PlatformTypes.TWITCH).name
                    });
                    break;
                case k.ActivityTypes.LISTENING:
                    t = F.default.Messages.USER_ACTIVITY_HEADER_LISTENING.format({
                        name: d
                    });
                    break;
                case k.ActivityTypes.WATCHING:
                    t = F.default.Messages.USER_ACTIVITY_HEADER_WATCHING.format({
                        name: d
                    });
                    break;
                case k.ActivityTypes.PLAYING:
                    t = (0, E.default)(u);
                    break;
                case k.ActivityTypes.COMPETING:
                    t = F.default.Messages.USER_ACTIVITY_HEADER_COMPETING.format({
                        name: d
                    })
            }
            if (null != l) {
                var c;
                t = (0, O.hasFlag)(null !== (c = null == u ? void 0 : u.flags) && void 0 !== c ? c : 0, k.ActivityFlags.EMBEDDED) ? u.type === k.ActivityTypes.WATCHING ? F.default.Messages.EMBEDDED_ACTIVITIES_WATCHING_IN_GUILD.format({
                    guildName: l.name
                }) : F.default.Messages.EMBEDDED_ACTIVITIES_PLAYING_IN_GUILD.format({
                    guildName: l.name
                }) : F.default.Messages.USER_ACTIVITY_HEADER_STREAMING_TO_GUILD.format({
                    server: l.name
                })
            }(null == u ? void 0 : u.type) === k.ActivityTypes.HANG_STATUS && (t = F.default.Messages.STATUS_LEAD_IN_JUST);
            let m = (0, I.getChannelIconComponent)(i, l);
            return null != i && (t = i.name), (0, a.jsxs)("div", {
                className: G.headerContainer,
                children: [null != i && null !== m ? (0, a.jsx)(m, {
                    className: o(G.icon)
                }) : null, (0, a.jsx)(f.Heading, {
                    className: (0, R.getClass)(G, "headerText", e ? "EmptyBody" : "Normal"),
                    variant: "heading-deprecated-12/semibold",
                    color: "ProfileV2" === r ? "header-primary" : void 0,
                    children: (0, a.jsx)(b.default, {
                        children: t
                    })
                }), null == s ? void 0 : s()]
            })
        }
        renderXboxImage() {
            return (0, a.jsx)("div", {
                className: G.assets,
                children: (0, a.jsx)("img", {
                    alt: "",
                    src: h.default.get(k.PlatformTypes.XBOX).icon.customPNG,
                    className: o(this.getTypeClass("assetsLargeImage", "Xbox"))
                })
            })
        }
        renderImage(e) {
            var t, n, l;
            let i, r;
            if (e.type === k.ActivityTypes.HANG_STATUS) return (0, a.jsx)("div", {
                className: G.assets,
                children: (0, a.jsx)(N.default, {
                    hangStatusActivity: e,
                    className: o(G.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
                })
            });
            let {
                type: u
            } = this.props, {
                assets: d,
                application_id: c
            } = e;
            if (null == d || null == d.large_image && null == d.small_image) return null;
            (0, v.default)(e) && (i = B[u]);
            let m = (0, S.default)(e),
                p = null != d.large_image ? (0, a.jsx)("img", {
                    alt: null !== (t = d.large_text) && void 0 !== t ? t : "",
                    src: H(c, d.large_image, null != i ? i : [w.ImageSizes.LARGE, w.ImageSizes.LARGE]),
                    className: o(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeProfile() || this.isStreamerOnTypeActivityFeed() ? k.PlatformTypes.TWITCH : ""), {
                        [null !== (n = this.getTypeClass("assetsLargeMask")) && void 0 !== n ? n : ""]: null != d.small_image
                    }, {
                        [G.assetsLargeImageSpotify]: m
                    })
                }) : null;
            if (m) p = (0, a.jsx)(f.Anchor, {
                onClick: this.handleOpenSpotifyAlbum,
                children: p
            });
            else if ((0, x.isStageActivity)(e)) {
                let t = (0, x.unpackStageChannelParty)(e);
                if (null == t) return null;
                p = (0, a.jsx)(D.default, {
                    mask: D.default.Masks.SQUIRCLE,
                    width: w.ImageSizes.SMALL,
                    height: w.ImageSizes.SMALL,
                    children: (0, a.jsx)("img", {
                        src: null !== (l = y.default.getGuildIconURL({
                            id: t.guildId,
                            icon: d.small_image,
                            size: w.ImageSizes.SMALL
                        })) && void 0 !== l ? l : void 0,
                        className: G.assetsLargeImageVoiceChannel,
                        alt: ""
                    })
                })
            }
            return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (p = (0, a.jsxs)("div", {
                className: G.twitchImageContainer,
                children: [(0, a.jsxs)("div", {
                    className: G.twitchImageOverlay,
                    children: [(0, a.jsx)(f.H, {
                        className: G.streamName,
                        children: e.name
                    }), (0, a.jsx)("div", {
                        className: G.streamGame,
                        children: F.default.Messages.STREAMER_PLAYING.format({
                            game: e.details
                        })
                    })]
                }), (0, a.jsx)(f.Anchor, {
                    className: G.twitchBackgroundImage,
                    href: e.url,
                    children: p
                })]
            })), !(0, x.isStageActivity)(e) && null != d.small_image && (r = (0, a.jsx)(f.Tooltip, {
                text: "" !== d.small_text ? d.small_text : null,
                position: "top",
                children: e => {
                    var t;
                    return (0, a.jsx)("img", {
                        alt: null !== (t = d.small_text) && void 0 !== t ? t : "",
                        src: H(c, d.small_image, [w.ImageSizes.SMALL, w.ImageSizes.SMALL]),
                        className: this.getTypeClass("assetsSmallImage", null == p ? "WithoutLargeImage" : void 0),
                        ...e
                    })
                }
            })), null == p) ? (0, a.jsx)("div", {
                className: G.assets,
                children: r
            }) : (0, a.jsxs)("div", {
                className: G.assets,
                children: [(0, a.jsx)(f.Tooltip, {
                    text: null != d.large_text ? d.large_text : null,
                    position: "top",
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: n
                        } = e;
                        return null != p ? s.cloneElement(p, {
                            onMouseEnter: t,
                            onMouseLeave: n
                        }) : null
                    }
                }), r]
            })
        }
        renderGameImage(e) {
            let {
                user: t,
                type: n,
                application: l,
                activityGuild: i
            } = this.props;
            return null != e.assets || (0, g.default)(e) || e.type !== k.ActivityTypes.PLAYING || "ActivityFeed" === n || t.bot ? null : null == l && null != i ? (0, a.jsx)("div", {
                className: o(G.gameIcon, G.screenshareIcon)
            }) : (0, a.jsx)(P.default, {
                className: G.gameIcon,
                game: l
            })
        }
        renderName(e) {
            let {
                user: t,
                application: n,
                hideName: l
            } = this.props;
            if (l) return null;
            let {
                details: i,
                type: s
            } = e;
            if (s === k.ActivityTypes.CUSTOM_STATUS) return null;
            let r = (0, C.default)(e),
                o = e.name,
                u = o;
            return (s === k.ActivityTypes.HANG_STATUS ? u = (0, _.getHangStatusText)(e) : r && null != n ? u = (0, a.jsx)("span", {
                className: G.activityName,
                children: u
            }) : !r && (o = i, u = i, (0, S.default)(e) && null != e.sync_id && null != i ? u = (0, a.jsx)(f.Anchor, {
                className: G.bodyLink,
                onClick: this.handleOpenSpotifyTrack,
                children: i
            }) : (0, x.isStageActivity)(e) && (u = e.name)), null == u) ? null : (0, a.jsx)(f.Text, {
                title: o,
                variant: "text-sm/semibold",
                className: (0, R.getClass)(G, "name", t.bot || this.isStreamerOnTypeProfile() ? "wrap" : "normal"),
                children: u
            })
        }
        renderDetails(e) {
            let t;
            let {
                details: n,
                state: l
            } = e, {
                activityGuild: i
            } = this.props, s = n, r = n;
            if (e.type === k.ActivityTypes.CUSTOM_STATUS) s = l;
            else if (e.type === k.ActivityTypes.HANG_STATUS) s = null != i ? F.default.Messages.HANG_STATUS_LOCATION.format({
                guildName: i.name
            }) : null, t = null != i ? () => {
                (0, A.transitionToGuild)(i.id)
            } : void 0;
            else if (!(0, C.default)(e)) {
                if (r = s = l, (0, S.default)(e) && null != l) s = F.default.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
                    artists: r,
                    artistsHook: (t, n) => (0, a.jsx)(U.default, {
                        artists: l,
                        linkClassName: G.bodyLink,
                        canOpen: null != e.sync_id,
                        onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                    }, n)
                });
                else if ((0, x.isStageActivity)(e)) {
                    var o;
                    s = null === (o = e.assets) || void 0 === o ? void 0 : o.small_text
                }
            }
            return null == s || 0 === s.length ? null : ((0, v.default)(e) && (s = F.default.Messages.STREAMER_PLAYING.format({
                game: s
            })), null != t) ? (0, a.jsx)(f.Clickable, {
                onClick: t,
                title: null != r ? r : void 0,
                className: G.clickableDetails,
                children: s
            }) : (0, a.jsx)("div", {
                title: null != r ? r : void 0,
                className: (0, v.default)(e) || (0, S.default)(e) ? G.detailsWrap : G.details,
                children: s
            })
        }
        renderTimePlayed(e) {
            let {
                activityGuild: t
            } = this.props;
            if (!(0, C.default)(e) || (0, S.default)(e)) return null;
            let {
                timestamps: n
            } = e;
            return null == n ? null : (0, g.default)(e) ? (0, a.jsx)(V, {
                timestamps: n
            }) : (0, a.jsx)(j.default, {
                start: n.start,
                location: j.default.Locations.USER_ACTIVITY,
                className: G.playTime,
                isApplicationStreaming: null != t
            })
        }
        renderTimeBar(e) {
            if (!(0, S.default)(e)) return null;
            let {
                timestamps: t
            } = e;
            if (null == t) return null;
            let {
                start: n,
                end: l
            } = t;
            return null == n || null == l ? null : (0, a.jsx)(M.default, {
                start: n,
                end: l,
                className: this.getTypeClass("timeBar"),
                themed: "VoiceChannel" === this.props.type || "UserPopout" === this.props.type || "UserPopoutV2" === this.props.type || "ProfileV2" === this.props.type
            })
        }
        renderState(e, t) {
            var n, l;
            let i;
            let {
                state: s,
                party: r,
                assets: o
            } = e, u = s, d = u;
            return (!(0, C.default)(e) && (d = u = null == o ? void 0 : o.large_text, (0, S.default)(e) && null != u && (u = F.default.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
                album: d,
                albumHook: (t, n) => null != e.sync_id && null != d ? (0, a.jsx)(f.Anchor, {
                    className: G.bodyLink,
                    onClick: this.handleOpenSpotifyAlbum,
                    children: d
                }, n) : d
            }))), null != u && 0 !== u.length && e.type !== k.ActivityTypes.CUSTOM_STATUS || (0, x.isStageActivity)(e)) ? ((null == r ? void 0 : r.size) == null && [(0, w.POKER_NIGHT_APPLICATION_ID)].includes(null !== (n = e.application_id) && void 0 !== n ? n : "") ? i = F.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
                count: "0",
                max: null !== (l = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== l ? l : 0
            }) : (0, x.isStageActivity)(e) && (null == r ? void 0 : r.size) != null ? i = F.default.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
                numSpeakers: r.size[0],
                numListeners: r.size[1] - r.size[0]
            }) : (null == r ? void 0 : r.size) != null && r.size.length >= 2 && (i = F.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
                count: r.size[0],
                max: r.size[1]
            })), (0, a.jsxs)("div", {
                className: G.state,
                children: [(0, a.jsx)("span", {
                    title: d,
                    children: u
                }), null != i ? (0, a.jsxs)("span", {
                    children: [" ", i]
                }) : null]
            })) : null
        }
        render() {
            let e;
            let {
                type: t,
                renderActions: n,
                className: l,
                application: i,
                showReactions: s
            } = this.props, r = this.activity;
            if (null == r || r.type === k.ActivityTypes.CUSTOM_STATUS) return null;
            let u = "UserPopout" === t || "UserPopoutV2" === t,
                d = "Profile" === t || "ProfileV2" === t,
                c = "ActivityFeed" === t,
                f = "StreamPreview" === t,
                m = !1;
            (0, T.default)(r) ? (e = this.renderXboxImage(), m = !0) : null == (e = this.renderImage(r)) && (m = null != (e = this.renderGameImage(r)));
            let p = this.renderName(r),
                h = this.renderDetails(r),
                E = this.renderState(r, i),
                g = this.renderTimePlayed(r),
                C = null != n ? n() : null,
                S = this.renderTimeBar(r),
                v = ![e, p, h, E, g, S, C].some(e => null != e);
            return (0, a.jsxs)("div", {
                className: o(this.getTypeClass("activity"), l),
                children: [this.renderHeader(v), (0, a.jsxs)("div", {
                    className: o(m ? G.bodyAlignCenter : G.bodyNormal, s && !u && !f && G.wrap),
                    children: [(0, a.jsxs)("div", {
                        className: G.activityDetails,
                        children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, a.jsxs)(L.default.Child, {
                            className: o((0, R.getClass)(G, "content", m ? "GameImage" : null != e ? "Images" : "NoImages", t)),
                            children: [p, h, E, g, u || f ? null : S, c ? C : null]
                        })]
                    }), d ? C : null]
                }), u ? S : null, u || f ? C : null, (0, a.jsx)(K, {
                    activity: r
                })]
            })
        }
        constructor(...e) {
            super(...e), this.handleOpenSpotifyTrack = () => {
                let {
                    activity: e,
                    onOpenSpotifyTrack: t
                } = this.props;
                d(null != e, "Spotify activity was null"), null == t || t(e)
            }, this.handleOpenSpotifyArtist = e => {
                let {
                    activity: t,
                    onOpenSpotifyArtist: n,
                    user: l
                } = this.props;
                d(null != t, "Spotify activity was null"), null == n || n(t, l.id, e)
            }, this.handleOpenSpotifyAlbum = () => {
                let {
                    activity: e,
                    onOpenSpotifyAlbum: t,
                    user: n
                } = this.props;
                d(null != e, "Spotify activity was null"), null == t || t(e, n.id)
            }
        }
    }
    W.Types = l;
    var Y = W
}