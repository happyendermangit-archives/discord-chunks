function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return er
        }
    }), n("222007");
    var a = n("37983"),
        l = n("884691"),
        i = n("414456"),
        o = n.n(i),
        r = n("627445"),
        s = n.n(r),
        d = n("917351"),
        u = n.n(d),
        c = n("446674"),
        p = n("77078"),
        f = n("629109"),
        m = n("406189"),
        h = n("54239"),
        v = n("716241"),
        I = n("754493"),
        P = n("858944"),
        C = n("191145"),
        S = n("161306"),
        g = n("836087"),
        y = n("679653"),
        E = n("374014"),
        T = n("479788"),
        A = n("430951"),
        x = n("16916"),
        N = n("383294"),
        M = n("393414"),
        j = n("908583"),
        _ = n("550410"),
        L = n("598873"),
        w = n("54727"),
        b = n("336971"),
        O = n("954519"),
        D = n("857398"),
        R = n("373469"),
        F = n("271938"),
        W = n("42887"),
        U = n("27618"),
        k = n("697218"),
        V = n("476640"),
        B = n("555035"),
        H = n("471671"),
        G = n("754775"),
        Y = n("599110"),
        J = n("387111"),
        z = n("158998"),
        K = n("788448"),
        X = n("540814"),
        Z = n("683245"),
        q = n("772442"),
        Q = n("211019"),
        $ = n("19065"),
        ee = n("977347"),
        et = n("799808"),
        en = n("49111"),
        ea = n("99795"),
        el = n("671479"),
        ei = n("678016");
    class eo extends l.PureComponent {
        get viewProperties() {
            let {
                participantOnScreen: e,
                currentUserId: t,
                channel: n
            } = this.props, a = (0, ea.isStreamParticipant)(e), l = null != e && e.type !== ea.ParticipantTypes.ACTIVITY && e.user.id === t, i = (null == e ? void 0 : e.type) === ea.ParticipantTypes.STREAM || (null == e ? void 0 : e.type) === ea.ParticipantTypes.USER;
            return {
                canPopout: a && !l,
                canSettings: a && l,
                canStopStream: a,
                canSeeViewers: a,
                canSeeParticipantName: i && n.type !== en.ChannelTypes.DM,
                canDisconnect: !a,
                isSelf: l
            }
        }
        get streamerPaused() {
            let {
                isMainWindowFocused: e,
                activeSelfStream: t,
                participantOnScreen: n
            } = this.props, a = null != t && (null == n ? void 0 : n.id) === (0, E.encodeStreamKey)(t) && !e;
            return a
        }
        get activeStreamForSelectedParticipant() {
            let {
                participantOnScreen: e,
                activeStreams: t
            } = this.props;
            return (0, ea.isStreamParticipant)(e) ? t.find(t => (0, E.encodeStreamKey)(t) === e.id) : null
        }
        getScreenMessage() {
            let {
                participantOnScreen: e,
                currentUserId: t
            } = this.props;
            if (!(0, ea.isStreamParticipant)(e)) return null;
            let n = this.activeStreamForSelectedParticipant;
            return null == n ? null : (0, A.default)(n, e.user, e.user.id === t, this.streamerPaused)
        }
        isEmptyBroadcast() {
            var e;
            let {
                isSelfBroadcasting: t,
                channel: n
            } = this.props;
            return t && (null === (e = n.recipients) || void 0 === e ? void 0 : e.length) === 0
        }
        componentDidMount() {
            let {
                channel: e
            } = this.props;
            Y.default.track(en.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
                video_layout: "pip",
                ...(0, v.collectVoiceAnalyticsMetadata)(e.id)
            })
        }
        componentWillUnmount() {
            let {
                channel: e
            } = this.props;
            Y.default.track(en.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
                video_layout: C.default.getLayout(e.id),
                ...(0, v.collectVoiceAnalyticsMetadata)(e.id)
            })
        }
        renderStreamState() {
            let e = this.activeStreamForSelectedParticipant,
                {
                    participantOnScreen: t
                } = this.props;
            if ((null == e ? void 0 : e.state) === en.ApplicationStreamStates.ENDED) return (0, a.jsx)(Z.default, {
                stream: e,
                width: ea.PIP_WIDTH
            });
            if ((null == e ? void 0 : e.state) === en.ApplicationStreamStates.FAILED) return (0, a.jsx)(q.default, {
                stream: e,
                width: ea.PIP_WIDTH
            });
            if (this.isEmptyBroadcast()) return (0, a.jsx)(K.default, {});
            else if ((null == t ? void 0 : t.type) === ea.ParticipantTypes.HIDDEN_STREAM) return (0, a.jsx)(Q.default, {
                participant: t,
                width: ea.PIP_WIDTH
            });
            return null
        }
        renderParticipantName() {
            let {
                channel: e,
                participantOnScreen: t
            } = this.props;
            if ((null == t ? void 0 : t.type) === ea.ParticipantTypes.STREAM || (null == t ? void 0 : t.type) === ea.ParticipantTypes.USER) {
                var n;
                let l = null !== (n = J.default.getNickname(e.getGuildId(), e.id, t.user)) && void 0 !== n ? n : z.default.getName(t.user);
                return (0, a.jsx)(p.Text, {
                    variant: "text-md/normal",
                    color: "always-white",
                    className: el.participantName,
                    lineClamp: 1,
                    children: l
                })
            }
            return null
        }
        render() {
            let {
                channel: e,
                streamId: t,
                participantOnScreen: n,
                isVideoEnabled: l
            } = this.props, i = (0, y.computeChannelName)(e, k.default, U.default), r = this.isEmptyBroadcast(), s = (null == n ? void 0 : n.id) === F.default.getId() && l, d = this.renderStreamState(), u = null;
            return (null == n ? void 0 : n.type) !== ea.ParticipantTypes.ACTIVITY && (null != d ? u = d : ((null == n ? void 0 : n.type) === ea.ParticipantTypes.USER || (null == n ? void 0 : n.type) === ea.ParticipantTypes.STREAM) && (u = (0, a.jsx)(X.default, {
                paused: this.streamerPaused,
                streamId: t,
                component: W.default.getVideoComponent(),
                mirror: s,
                children: (0, a.jsx)(G.default, {
                    size: p.AvatarSizes.SIZE_80,
                    src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
                    "aria-label": null == n ? void 0 : n.user.username
                })
            }))), (0, a.jsx)(j.default, {
                timeout: 1800,
                children: e => {
                    var t;
                    return (0, a.jsx)(L.default, {
                        title: i,
                        backgroundKey: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "",
                        screenMessage: null == d ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: _.default,
                        width: ea.PIP_WIDTH,
                        hideControls: r,
                        className: o(r ? el.emptyBroadcast : void 0, ei.elevationHigh),
                        innerClassName: r ? el.innerEmptyBroadcast : void 0,
                        ...e,
                        children: u
                    })
                }
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                screensharePopoutOpen: !1
            }, this._ref = l.createRef(), this.handleVideo = e => {
                f.default.setVideoEnabled(e)
            }, this.handleEnableVideoWhenUnavailable = () => {
                let {
                    isVideoAvailable: e
                } = this.props;
                e ? this.handleVideo(!0) : (0, $.default)()
            }, this.handleJumpToChannel = () => {
                var e;
                let {
                    channel: t
                } = this.props;
                (0, h.popAllLayers)();
                let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : en.ME;
                m.default.channelListScrollTo(n, t.id), (0, M.transitionToGuild)(n, t.id)
            }, this.handleStartStream = () => {
                let {
                    canGoLive: e,
                    channel: t
                } = this.props, n = t.getGuildId();
                if (s(null != n, "Cannot go live in non guild channel"), !e) return (0, ee.default)();
                (0, et.default)(n, t.id, en.AnalyticsPages.GUILD_CHANNEL)
            }, this.handleStopStream = () => {
                let {
                    participantOnScreen: e,
                    isSelfBroadcasting: t
                } = this.props;
                s((0, ea.isStreamParticipant)(e), "cannot stop stream for non streamer"), t ? (0, P.openStopBroadcastConfirmModal)(() => (0, x.default)(e.stream)) : (0, x.default)(e.stream)
            }, this.handleOpenPopout = () => {
                let {
                    channel: e
                } = this.props;
                N.openChannelCallPopout(e)
            }, this.renderBottomLeftControls = () => {
                let {
                    canSeeParticipantName: e
                } = this.viewProperties;
                return (0, a.jsx)(a.Fragment, {
                    children: e ? this.renderParticipantName() : null
                })
            }, this.renderBottomRightControls = () => {
                let {
                    canSettings: e,
                    canPopout: t,
                    canDisconnect: n,
                    canStopStream: l,
                    canSeeViewers: i
                } = this.viewProperties;
                return (0, a.jsxs)(a.Fragment, {
                    children: [i ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, l ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
                })
            }, this.renderDisconnectButton = () => {
                let {
                    channel: e
                } = this.props;
                return (0, a.jsx)(w.default, {
                    className: el.rightTrayIcon,
                    channel: e
                })
            }, this.renderStopStreamButton = () => {
                let {
                    isSelf: e
                } = this.viewProperties;
                return (0, a.jsx)(O.default, {
                    isSelfStream: e,
                    className: el.rightTrayIcon,
                    onClick: this.handleStopStream
                })
            }, this.renderViewersIcon = () => {
                let {
                    participantOnScreen: e,
                    channel: t
                } = this.props;
                return s((0, ea.isStreamParticipant)(e) || (null == e ? void 0 : e.type) === ea.ParticipantTypes.ACTIVITY, "Cannot render participants for participant type ".concat(null == e ? void 0 : e.type)), (0, a.jsx)(_.default, {
                    children: (0, a.jsx)(g.default, {
                        channelId: t.id,
                        guildId: t.getGuildId(),
                        className: el.rightTrayIcon,
                        participant: e,
                        compact: !0
                    })
                })
            }, this.renderPopoutIcon = () => (0, a.jsx)(b.default, {
                className: el.rightTrayIcon,
                popoutOpen: !1,
                onOpenPopout: this.handleOpenPopout,
                onClosePopout: en.NOOP_NULL
            }), this.renderSettingsIcon = () => {
                let {
                    participantOnScreen: e,
                    activeStreams: t
                } = this.props;
                s((0, ea.isStreamParticipant)(e), "Cannot render settings for non stream participant");
                let n = t.find(t => (0, E.encodeStreamKey)(t) === e.id);
                return null == n || n.state === en.ApplicationStreamStates.ENDED ? null : (0, a.jsx)(D.default, {
                    stream: n,
                    className: el.rightTrayIcon,
                    appContext: en.AppContext.APP
                })
            }
        }
    }
    var er = c.default.connectStores([W.default, C.default, F.default, V.default, B.default, R.default, H.default], e => {
        let {
            channel: t
        } = e, n = V.default.getSpeaker(t.id), a = C.default.getParticipant(t.id, n), l = u(W.default.getVideoDevices()).values().first(), i = null == l || l.disabled, o = null != a && a.type !== ea.ParticipantTypes.ACTIVITY && a.type !== ea.ParticipantTypes.HIDDEN_STREAM ? B.default.getStreamId(a.user.id, t.getGuildId(), (0, S.default)(a.type)) : null, r = !i && W.default.isVideoEnabled(), s = (0, T.default)(W.default), d = F.default.getId(), c = R.default.getCurrentUserActiveStream(), p = (0, I.isBroadcastingInChannel)(t.id);
        return {
            channel: t,
            streamId: o,
            participantOnScreen: a,
            isVideoAvailable: !1 === i,
            isVideoEnabled: r,
            isSelfBroadcasting: p,
            canGoLive: s,
            currentUserId: d,
            activeStreams: R.default.getAllActiveStreams(),
            activeSelfStream: c,
            isMainWindowFocused: H.default.isFocused()
        }
    })(eo)
}