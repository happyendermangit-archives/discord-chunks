function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("512722"),
        u = n.n(a),
        s = n("392711"),
        l = n.n(s),
        c = n("898511"),
        f = n("784184"),
        d = n("661961"),
        _ = n("136445"),
        E = n("78928"),
        p = n("140817"),
        m = n("354368"),
        y = n("61279"),
        I = n("390579"),
        h = n("603095"),
        O = n("79672"),
        T = n("534965"),
        S = n("736381"),
        v = n("746029"),
        g = n("574005"),
        A = n("739213"),
        b = n("276255"),
        N = n("163291"),
        R = n("416204"),
        C = n("51897"),
        P = n("333002"),
        D = n("491090"),
        L = n("152235"),
        M = n("506940"),
        U = n("992778"),
        w = n("73013"),
        k = n("217014"),
        G = n("335911"),
        B = n("776982"),
        j = n("208454"),
        F = n("730588"),
        V = n("712465"),
        H = n("290976"),
        x = n("45013"),
        Y = n("870331"),
        W = n("62957"),
        K = n("830567"),
        z = n("281607"),
        X = n("601942"),
        q = n("531303"),
        Q = n("619397"),
        J = n("586627"),
        Z = n("504038"),
        $ = n("80167"),
        ee = n("785584"),
        et = n("281767"),
        en = n("656462"),
        er = n("635993"),
        eo = n("344534");

    function ei(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function ea(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function eu(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function es(e) {
        return (es = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function el(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                eu(e, t, n[t])
            })
        }
        return e
    }

    function ec(e, t) {
        return (ec = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var ef = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && ec(e, t)
        }(c, e);
        var t, n, o, a, s, l = (t = c, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = es(t);
            if (n) {
                var a = es(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : ei(e)
        });

        function c() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), e = l.apply(this, arguments), eu(ei(e), "state", {
                screensharePopoutOpen: !1
            }), eu(ei(e), "_ref", r.createRef()), eu(ei(e), "handleVideo", function(e) {
                d.default.setVideoEnabled(e)
            }), eu(ei(e), "handleEnableVideoWhenUnavailable", function() {
                e.props.isVideoAvailable ? e.handleVideo(!0) : (0, Z.default)()
            }), eu(ei(e), "handleJumpToChannel", function() {
                var t, n = e.props.channel;
                (0, E.popAllLayers)();
                var r = null !== (t = n.getGuildId()) && void 0 !== t ? t : et.ME;
                _.default.channelListScrollTo(r, n.id), (0, N.transitionToGuild)(r, n.id)
            }), eu(ei(e), "handleStartStream", function() {
                var t = e.props,
                    n = t.canGoLive,
                    r = t.channel,
                    o = r.getGuildId();
                if (u()(null != o, "Cannot go live in non guild channel"), !n) return (0, $.default)();
                (0, ee.default)(o, r.id, et.AnalyticsPages.GUILD_CHANNEL)
            }), eu(ei(e), "handleStopStream", function() {
                var t = e.props,
                    n = t.participantOnScreen,
                    r = t.isSelfBroadcasting;
                u()((0, en.isStreamParticipant)(n), "cannot stop stream for non streamer"), r ? (0, y.openStopBroadcastConfirmModal)(function() {
                    return (0, A.default)(n.stream)
                }) : (0, A.default)(n.stream)
            }), eu(ei(e), "handleOpenPopout", function() {
                var t = e.props.channel;
                b.openChannelCallPopout(t)
            }), eu(ei(e), "renderBottomLeftControls", function() {
                var t = e.viewProperties.canSeeParticipantName;
                return r.createElement(r.Fragment, null, t ? e.renderParticipantName() : null)
            }), eu(ei(e), "renderBottomRightControls", function() {
                var t = e.viewProperties,
                    n = t.canSettings,
                    o = t.canPopout,
                    i = t.canDisconnect,
                    a = t.canStopStream,
                    u = t.canSeeViewers;
                return r.createElement(r.Fragment, null, u ? e.renderViewersIcon() : null, n ? e.renderSettingsIcon() : null, o ? e.renderPopoutIcon() : null, a ? e.renderStopStreamButton() : null, i ? e.renderDisconnectButton() : null)
            }), eu(ei(e), "renderDisconnectButton", function() {
                var t = e.props.channel;
                return r.createElement(D.default, {
                    className: er.rightTrayIcon,
                    channel: t
                })
            }), eu(ei(e), "renderStopStreamButton", function() {
                var t = e.viewProperties.isSelf;
                return r.createElement(M.default, {
                    isSelfStream: t,
                    className: er.rightTrayIcon,
                    onClick: e.handleStopStream
                })
            }), eu(ei(e), "renderViewersIcon", function() {
                var t = e.props,
                    n = t.participantOnScreen,
                    o = t.channel;
                return u()((0, en.isStreamParticipant)(n) || (null == n ? void 0 : n.type) === en.ParticipantTypes.ACTIVITY, "Cannot render participants for participant type ".concat(null == n ? void 0 : n.type)), r.createElement(C.default, null, r.createElement(O.default, {
                    channelId: o.id,
                    guildId: o.getGuildId(),
                    className: er.rightTrayIcon,
                    participant: n,
                    compact: !0
                }))
            }), eu(ei(e), "renderPopoutIcon", function() {
                return r.createElement(L.default, {
                    className: er.rightTrayIcon,
                    popoutOpen: !1,
                    onOpenPopout: e.handleOpenPopout,
                    onClosePopout: et.NOOP_NULL
                })
            }), eu(ei(e), "renderSettingsIcon", function() {
                var t = e.props,
                    n = t.participantOnScreen,
                    o = t.activeStreams;
                u()((0, en.isStreamParticipant)(n), "Cannot render settings for non stream participant");
                var i = o.find(function(e) {
                    return (0, S.encodeStreamKey)(e) === n.id
                });
                return null == i || i.state === et.ApplicationStreamStates.ENDED ? null : r.createElement(U.default, {
                    stream: i,
                    className: er.rightTrayIcon,
                    appContext: et.AppContext.APP
                })
            }), e
        }
        return o = c, a = [{
            key: "viewProperties",
            get: function() {
                var e = this.props,
                    t = e.participantOnScreen,
                    n = e.currentUserId,
                    r = e.channel,
                    o = (0, en.isStreamParticipant)(t),
                    i = null != t && t.type !== en.ParticipantTypes.ACTIVITY && t.user.id === n;
                return {
                    canPopout: o && !i,
                    canSettings: o && i,
                    canStopStream: o,
                    canSeeViewers: o,
                    canSeeParticipantName: ((null == t ? void 0 : t.type) === en.ParticipantTypes.STREAM || (null == t ? void 0 : t.type) === en.ParticipantTypes.USER) && r.type !== et.ChannelTypes.DM,
                    canDisconnect: !o,
                    isSelf: i
                }
            }
        }, {
            key: "streamerPaused",
            get: function() {
                var e = this.props,
                    t = e.isMainWindowFocused,
                    n = e.activeSelfStream,
                    r = e.participantOnScreen;
                return null != n && (null == r ? void 0 : r.id) === (0, S.encodeStreamKey)(n) && !t
            }
        }, {
            key: "activeStreamForSelectedParticipant",
            get: function() {
                var e = this.props,
                    t = e.participantOnScreen,
                    n = e.activeStreams;
                return (0, en.isStreamParticipant)(t) ? n.find(function(e) {
                    return (0, S.encodeStreamKey)(e) === t.id
                }) : null
            }
        }, {
            key: "getScreenMessage",
            value: function() {
                var e = this.props,
                    t = e.participantOnScreen,
                    n = e.currentUserId;
                if (!(0, en.isStreamParticipant)(t)) return null;
                var r = this.activeStreamForSelectedParticipant;
                return null == r ? null : (0, g.default)(r, t.user, t.user.id === n, this.streamerPaused)
            }
        }, {
            key: "isEmptyBroadcast",
            value: function() {
                var e, t = this.props,
                    n = t.isSelfBroadcasting,
                    r = t.channel;
                return n && (null === (e = r.recipients) || void 0 === e ? void 0 : e.length) === 0
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var e = this.props.channel;
                Y.default.track(et.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, el({
                    video_layout: "pip"
                }, (0, p.collectVoiceAnalyticsMetadata)(e.id)))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                var e = this.props.channel;
                Y.default.track(et.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, el({
                    video_layout: I.default.getLayout(e.id)
                }, (0, p.collectVoiceAnalyticsMetadata)(e.id)))
            }
        }, {
            key: "renderStreamState",
            value: function() {
                var e = this.activeStreamForSelectedParticipant,
                    t = this.props.participantOnScreen;
                if ((null == e ? void 0 : e.state) === et.ApplicationStreamStates.ENDED) return r.createElement(q.default, {
                    stream: e,
                    width: en.PIP_WIDTH
                });
                if ((null == e ? void 0 : e.state) === et.ApplicationStreamStates.FAILED) return r.createElement(Q.default, {
                    stream: e,
                    width: en.PIP_WIDTH
                });
                if (this.isEmptyBroadcast()) return r.createElement(z.default, null);
                else if ((null == t ? void 0 : t.type) === en.ParticipantTypes.HIDDEN_STREAM) return r.createElement(J.default, {
                    participant: t,
                    width: en.PIP_WIDTH
                });
                return null
            }
        }, {
            key: "renderParticipantName",
            value: function() {
                var e = this.props,
                    t = e.channel,
                    n = e.participantOnScreen;
                if ((null == n ? void 0 : n.type) === en.ParticipantTypes.STREAM || (null == n ? void 0 : n.type) === en.ParticipantTypes.USER) {
                    var o, i = null !== (o = W.default.getNickname(t.getGuildId(), t.id, n.user)) && void 0 !== o ? o : K.default.getName(n.user);
                    return r.createElement(f.Text, {
                        variant: "text-md/normal",
                        color: "always-white",
                        className: er.participantName,
                        lineClamp: 1
                    }, i)
                }
                return null
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props,
                    n = t.channel,
                    o = t.streamId,
                    a = t.participantOnScreen,
                    u = t.isVideoEnabled,
                    s = (0, T.computeChannelName)(n, j.default, B.default),
                    l = this.isEmptyBroadcast(),
                    c = (null == a ? void 0 : a.id) === k.default.getId() && u,
                    d = this.renderStreamState(),
                    _ = null;
                return (null == a ? void 0 : a.type) !== en.ParticipantTypes.ACTIVITY && (null != d ? _ = d : ((null == a ? void 0 : a.type) === en.ParticipantTypes.USER || (null == a ? void 0 : a.type) === en.ParticipantTypes.STREAM) && (_ = r.createElement(X.default, {
                    paused: this.streamerPaused,
                    streamId: o,
                    component: G.default.getVideoComponent(),
                    mirror: c
                }, r.createElement(x.default, {
                    size: f.AvatarSizes.SIZE_80,
                    src: null == a ? void 0 : a.user.getAvatarURL(n.guild_id, 80),
                    "aria-label": null == a ? void 0 : a.user.username
                })))), r.createElement(R.default, {
                    timeout: 1800
                }, function(t) {
                    var n;
                    return r.createElement(P.default, el({
                        title: s,
                        backgroundKey: null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : "",
                        screenMessage: null == d ? e.getScreenMessage() : null,
                        onJumpToChannel: e.handleJumpToChannel,
                        renderBottomLeftControls: e.renderBottomLeftControls,
                        renderBottomRightControls: e.renderBottomRightControls,
                        preventIdleComponent: C.default,
                        width: en.PIP_WIDTH,
                        hideControls: l,
                        className: i()(l ? er.emptyBroadcast : void 0, eo.elevationHigh),
                        innerClassName: l ? er.innerEmptyBroadcast : void 0
                    }, t), _)
                })
            }
        }], ea(o.prototype, a), s && ea(o, s), c
    }(r.PureComponent);
    t.default = c.default.connectStores([G.default, I.default, k.default, F.default, V.default, w.default, H.default], function(e) {
        var t = e.channel,
            n = F.default.getSpeaker(t.id),
            r = I.default.getParticipant(t.id, n),
            o = l()(G.default.getVideoDevices()).values().first(),
            i = null == o || o.disabled,
            a = null != r && r.type !== en.ParticipantTypes.ACTIVITY && r.type !== en.ParticipantTypes.HIDDEN_STREAM ? V.default.getStreamId(r.user.id, t.getGuildId(), (0, h.default)(r.type)) : null,
            u = !i && G.default.isVideoEnabled(),
            s = (0, v.default)(G.default),
            c = k.default.getId(),
            f = w.default.getCurrentUserActiveStream(),
            d = (0, m.isBroadcastingInChannel)(t.id);
        return {
            channel: t,
            streamId: a,
            participantOnScreen: r,
            isVideoAvailable: !1 === i,
            isVideoEnabled: u,
            isSelfBroadcasting: d,
            canGoLive: s,
            currentUserId: c,
            activeStreams: w.default.getAllActiveStreams(),
            activeSelfStream: f,
            isMainWindowFocused: H.default.isFocused()
        }
    })(ef)
}