function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("512722"),
        l = n.n(o),
        u = n("392711"),
        d = n.n(u),
        _ = n("442837"),
        c = n("481060"),
        E = n("846027"),
        I = n("925549"),
        T = n("37234"),
        f = n("367907"),
        S = n("158631"),
        h = n("552740"),
        A = n("358221"),
        m = n("414910"),
        N = n("221888"),
        p = n("933557"),
        O = n("569545"),
        R = n("74299"),
        C = n("863908"),
        g = n("803647"),
        L = n("788983"),
        D = n("703656"),
        v = n("937995"),
        M = n("618158"),
        y = n("922745"),
        P = n("197016"),
        U = n("800965"),
        b = n("445062"),
        G = n("7188"),
        w = n("199902"),
        B = n("314897"),
        k = n("131951"),
        V = n("699516"),
        x = n("594174"),
        F = n("248402"),
        H = n("33039"),
        Y = n("451478"),
        j = n("783259"),
        W = n("626135"),
        K = n("5192"),
        z = n("51144"),
        X = n("534388"),
        Q = n("484286"),
        q = n("822296"),
        Z = n("916771"),
        J = n("792517"),
        $ = n("560688"),
        ee = n("127608"),
        et = n("76021"),
        en = n("981631"),
        ei = n("354459"),
        er = n("928878"),
        es = n("976587");

    function ea(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class eo extends r.PureComponent {
        get viewProperties() {
            let {
                participantOnScreen: e,
                currentUserId: t,
                channel: n
            } = this.props, i = (0, ei.isStreamParticipant)(e), r = null != e && e.type !== ei.ParticipantTypes.ACTIVITY && e.user.id === t;
            return {
                canPopout: i && !r,
                canSettings: i && r,
                canStopStream: i,
                canSeeViewers: i,
                canSeeParticipantName: ((null == e ? void 0 : e.type) === ei.ParticipantTypes.STREAM || (null == e ? void 0 : e.type) === ei.ParticipantTypes.USER) && n.type !== en.ChannelTypes.DM,
                canDisconnect: !i,
                isSelf: r
            }
        }
        get streamerPaused() {
            let {
                isMainWindowFocused: e,
                activeSelfStream: t,
                participantOnScreen: n
            } = this.props;
            return null != t && (null == n ? void 0 : n.id) === (0, O.encodeStreamKey)(t) && !e
        }
        get activeStreamForSelectedParticipant() {
            let {
                participantOnScreen: e,
                activeStreams: t
            } = this.props;
            return (0, ei.isStreamParticipant)(e) ? t.find(t => (0, O.encodeStreamKey)(t) === e.id) : null
        }
        getScreenMessage() {
            let {
                participantOnScreen: e,
                currentUserId: t
            } = this.props;
            if (!(0, ei.isStreamParticipant)(e)) return null;
            let n = this.activeStreamForSelectedParticipant;
            return null == n ? null : (0, C.default)(n, e.user, e.user.id === t, this.streamerPaused)
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
            W.default.track(en.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
                video_layout: "pip",
                ...(0, f.collectVoiceAnalyticsMetadata)(e.id)
            })
        }
        componentWillUnmount() {
            let {
                channel: e
            } = this.props;
            W.default.track(en.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
                video_layout: A.default.getLayout(e.id),
                ...(0, f.collectVoiceAnalyticsMetadata)(e.id)
            })
        }
        renderStreamState() {
            let e = this.activeStreamForSelectedParticipant,
                {
                    participantOnScreen: t
                } = this.props;
            if ((null == e ? void 0 : e.state) === en.ApplicationStreamStates.ENDED) return (0, i.jsx)(q.default, {
                stream: e,
                width: ei.PIP_WIDTH
            });
            if ((null == e ? void 0 : e.state) === en.ApplicationStreamStates.FAILED) return (0, i.jsx)(Z.default, {
                stream: e,
                width: ei.PIP_WIDTH
            });
            if (this.isEmptyBroadcast()) return (0, i.jsx)(X.default, {});
            else if ((null == t ? void 0 : t.type) === ei.ParticipantTypes.HIDDEN_STREAM) return (0, i.jsx)(J.default, {
                participant: t,
                width: ei.PIP_WIDTH
            });
            return null
        }
        renderParticipantName() {
            let {
                channel: e,
                participantOnScreen: t
            } = this.props;
            if ((null == t ? void 0 : t.type) === ei.ParticipantTypes.STREAM || (null == t ? void 0 : t.type) === ei.ParticipantTypes.USER) {
                var n;
                let r = null !== (n = K.default.getNickname(e.getGuildId(), e.id, t.user)) && void 0 !== n ? n : z.default.getName(t.user);
                return (0, i.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "always-white",
                    className: er.participantName,
                    lineClamp: 1,
                    children: r
                })
            }
            return null
        }
        render() {
            let {
                channel: e,
                streamId: t,
                participantOnScreen: n,
                isVideoEnabled: r
            } = this.props, s = (0, p.computeChannelName)(e, x.default, V.default), o = this.isEmptyBroadcast(), l = (null == n ? void 0 : n.id) === B.default.getId() && r, u = this.renderStreamState(), d = null;
            return (null == n ? void 0 : n.type) !== ei.ParticipantTypes.ACTIVITY && (null != u ? d = u : ((null == n ? void 0 : n.type) === ei.ParticipantTypes.USER || (null == n ? void 0 : n.type) === ei.ParticipantTypes.STREAM) && (d = (0, i.jsx)(Q.default, {
                paused: this.streamerPaused,
                streamId: t,
                component: k.default.getVideoComponent(),
                mirror: l,
                children: (0, i.jsx)(j.default, {
                    size: c.AvatarSizes.SIZE_80,
                    src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
                    "aria-label": null == n ? void 0 : n.user.username
                })
            }))), (0, i.jsx)(v.default, {
                timeout: 1800,
                children: e => {
                    var t;
                    return (0, i.jsx)(y.default, {
                        title: s,
                        backgroundKey: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "",
                        screenMessage: null == u ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: M.default,
                        width: ei.PIP_WIDTH,
                        hideControls: o,
                        className: a()(o ? er.emptyBroadcast : void 0, es.elevationHigh),
                        innerClassName: o ? er.innerEmptyBroadcast : void 0,
                        ...e,
                        children: d
                    })
                }
            })
        }
        constructor(...e) {
            super(...e), ea(this, "state", {
                screensharePopoutOpen: !1
            }), ea(this, "_ref", r.createRef()), ea(this, "handleVideo", e => {
                E.default.setVideoEnabled(e)
            }), ea(this, "handleEnableVideoWhenUnavailable", () => {
                let {
                    isVideoAvailable: e
                } = this.props;
                e ? this.handleVideo(!0) : (0, $.default)()
            }), ea(this, "handleJumpToChannel", () => {
                var e;
                let {
                    channel: t
                } = this.props;
                (0, T.popAllLayers)();
                let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : en.ME;
                I.default.channelListScrollTo(n, t.id), (0, D.transitionToGuild)(n, t.id)
            }), ea(this, "handleStartStream", () => {
                let {
                    canGoLive: e,
                    channel: t
                } = this.props, n = t.getGuildId();
                if (l()(null != n, "Cannot go live in non guild channel"), !e) return (0, ee.default)();
                (0, et.default)(n, t.id, en.AnalyticsPages.GUILD_CHANNEL)
            }), ea(this, "handleStopStream", () => {
                let {
                    participantOnScreen: e,
                    isSelfBroadcasting: t
                } = this.props;
                l()((0, ei.isStreamParticipant)(e), "cannot stop stream for non streamer"), t ? (0, h.openStopBroadcastConfirmModal)(() => (0, g.default)(e.stream)) : (0, g.default)(e.stream)
            }), ea(this, "handleOpenPopout", () => {
                let {
                    channel: e
                } = this.props;
                L.openChannelCallPopout(e)
            }), ea(this, "renderBottomLeftControls", () => {
                let {
                    canSeeParticipantName: e
                } = this.viewProperties;
                return (0, i.jsx)(i.Fragment, {
                    children: e ? this.renderParticipantName() : null
                })
            }), ea(this, "renderBottomRightControls", () => {
                let {
                    canSettings: e,
                    canPopout: t,
                    canDisconnect: n,
                    canStopStream: r,
                    canSeeViewers: s
                } = this.viewProperties;
                return (0, i.jsxs)(i.Fragment, {
                    children: [s ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, r ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
                })
            }), ea(this, "renderDisconnectButton", () => {
                let {
                    channel: e
                } = this.props;
                return (0, i.jsx)(P.default, {
                    className: er.rightTrayIcon,
                    channel: e
                })
            }), ea(this, "renderStopStreamButton", () => {
                let {
                    isSelf: e
                } = this.viewProperties;
                return (0, i.jsx)(b.default, {
                    isSelfStream: e,
                    className: er.rightTrayIcon,
                    onClick: this.handleStopStream
                })
            }), ea(this, "renderViewersIcon", () => {
                let {
                    participantOnScreen: e,
                    channel: t
                } = this.props;
                return l()((0, ei.isStreamParticipant)(e) || (null == e ? void 0 : e.type) === ei.ParticipantTypes.ACTIVITY, "Cannot render participants for participant type ".concat(null == e ? void 0 : e.type)), (0, i.jsx)(M.default, {
                    children: (0, i.jsx)(N.default, {
                        channelId: t.id,
                        guildId: t.getGuildId(),
                        className: er.rightTrayIcon,
                        participant: e,
                        compact: !0
                    })
                })
            }), ea(this, "renderPopoutIcon", () => (0, i.jsx)(U.default, {
                className: er.rightTrayIcon,
                popoutOpen: !1,
                onOpenPopout: this.handleOpenPopout,
                onClosePopout: en.NOOP_NULL
            })), ea(this, "renderSettingsIcon", () => {
                let {
                    participantOnScreen: e,
                    activeStreams: t
                } = this.props;
                l()((0, ei.isStreamParticipant)(e), "Cannot render settings for non stream participant");
                let n = t.find(t => (0, O.encodeStreamKey)(t) === e.id);
                return null == n || n.state === en.ApplicationStreamStates.ENDED ? null : (0, i.jsx)(G.default, {
                    stream: n,
                    className: er.rightTrayIcon,
                    appContext: en.AppContext.APP
                })
            })
        }
    }
    t.default = _.default.connectStores([k.default, A.default, B.default, F.default, H.default, w.default, Y.default], e => {
        let {
            channel: t
        } = e, n = F.default.getSpeaker(t.id), i = A.default.getParticipant(t.id, n), r = d()(k.default.getVideoDevices()).values().first(), s = null == r || r.disabled, a = null != i && i.type !== ei.ParticipantTypes.ACTIVITY && i.type !== ei.ParticipantTypes.HIDDEN_STREAM ? H.default.getStreamId(i.user.id, t.getGuildId(), (0, m.default)(i.type)) : null, o = !s && k.default.isVideoEnabled(), l = (0, R.default)(k.default), u = B.default.getId(), _ = w.default.getCurrentUserActiveStream(), c = (0, S.isBroadcastingInChannel)(t.id);
        return {
            channel: t,
            streamId: a,
            participantOnScreen: i,
            isVideoAvailable: !1 === s,
            isVideoEnabled: o,
            isSelfBroadcasting: c,
            canGoLive: l,
            currentUserId: u,
            activeStreams: w.default.getAllActiveStreams(),
            activeSelfStream: _,
            isMainWindowFocused: Y.default.isFocused()
        }
    })(eo)
}