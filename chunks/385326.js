function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("570140"),
        d = n("475179"),
        _ = n("925549"),
        c = n("37234"),
        E = n("835473"),
        I = n("358221"),
        T = n("928518"),
        f = n("703656"),
        S = n("607187"),
        h = n("937995"),
        A = n("366050"),
        m = n("944486"),
        N = n("594174"),
        p = n("566620"),
        O = n("317381"),
        R = n("452291"),
        C = n("963614"),
        g = n("917107"),
        L = n("208156"),
        D = n("748492"),
        v = n("350064"),
        M = n("701488"),
        y = n("918559"),
        P = n("981631"),
        U = n("354459"),
        b = n("622167"),
        G = n("438249"),
        w = n("344534");

    function B(e) {
        let {
            channel: t,
            isLoading: n
        } = e, [s, v] = r.useState(!1), B = (0, o.useStateFromStores)([O.default], () => O.default.getSelfEmbeddedActivityForChannel(t.id)), k = (0, o.useStateFromStores)([O.default], () => O.default.getActivityPanelMode()), V = (0, E.useGetOrFetchApplication)(null == B ? void 0 : B.applicationId), x = null == B ? void 0 : B.instanceId, F = (0, o.useStateFromStores)([m.default], () => m.default.getChannelId() === t.id), {
            dockedRect: H,
            isHidden: Y
        } = (0, o.useStateFromStoresObject)([A.default], () => {
            let e = A.default.pipWindow;
            return {
                dockedRect: null != e ? A.default.getDockedRect(e.id) : null,
                isHidden: A.default.isEmbeddedActivityHidden()
            }
        }), j = (0, o.useStateFromStores)([T.default], () => T.default.getWindow(P.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), {
            activityParticipant: W,
            selectedParticipant: K,
            participantsOpen: z
        } = (0, o.useStateFromStoresObject)([I.default], () => ({
            activityParticipant: null != B ? I.default.getParticipant(t.id, B.applicationId) : null,
            selectedParticipant: I.default.getSelectedParticipant(t.id),
            participantsOpen: I.default.getParticipantsOpen(t.id)
        })), X = F || null != j, Q = (0, g.default)(t.id), q = Q && (null == K ? void 0 : K.type) !== U.ParticipantTypes.ACTIVITY, Z = !Q && k === y.ActivityPanelModes.PIP, J = (!X || X && (q || Z) && null == H) && !Y, $ = J && null != A.default.pipVideoWindow && null != A.default.pipActivityWindow;

        function ee() {
            var e;
            if (null != B && d.default.selectParticipant(t.id, B.applicationId), null != j) return;
            (0, c.popAllLayers)();
            let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : P.ME;
            _.default.channelListScrollTo(n, t.id), (0, f.transitionToGuild)(n, t.id)
        }

        function et() {
            v(!s)
        }
        r.useEffect(() => {
            if ((null == B ? void 0 : B.applicationId) != null) {
                let e = J ? M.ActivityLayoutMode.PIP : M.ActivityLayoutMode.FOCUSED;
                u.default.dispatch({
                    type: "ACTIVITY_LAYOUT_MODE_UPDATE",
                    layoutMode: e,
                    applicationId: B.applicationId
                })
            }
        }, [null == B ? void 0 : B.applicationId, J]);
        if (null == B || null == x || null == W && (0, g.default)(t.id) || null == V) return null;
        let en = Array.from(B.userIds).map(e => N.default.getUser(e)).filter(e => null != e),
            ei = {
                instance_id: (0, R.getIframeInstanceId)(B),
                channel_id: t.id
            };
        return null != t.guild_id && "" !== t.guild_id && (ei.guild_id = t.guild_id), (0, i.jsx)(h.default, {
            timeout: 2e3,
            children: e => {
                var r, o, u, d, _, c, E, I;
                let {
                    idle: T,
                    onActive: f,
                    onForceIdle: h
                } = e;
                return (0, i.jsxs)(S.default, {
                    className: a()(b.root, {
                        [b.pipMode]: J,
                        [w.elevationHigh]: J,
                        [G.idle]: T && !(null === (r = B.config) || void 0 === r ? void 0 : r.useInteractivePIP),
                        [b.pipModeShort]: J && !s,
                        [b.pipModeTall]: J && s,
                        [b.hidden]: Y,
                        [b.multiPIPMode]: $
                    }),
                    noBorder: !J,
                    children: [(u = f, d = h, _ = T, c = Z, E = en, J && null != B && ((null == W ? void 0 : W.type) === U.ParticipantTypes.ACTIVITY || c) ? (null === (I = B.config) || void 0 === I ? void 0 : I.useInteractivePIP) ? (0, i.jsx)(D.InteractivePIPHeader, {
                        onJumpToChannel: ee,
                        applicationId: B.applicationId,
                        channel: t,
                        showControls: !_,
                        onMouseDown: u,
                        onMouseMove: u,
                        onMouseLeave: d,
                        onToggleHeight: et,
                        isExpanded: s,
                        hideExpandedButton: c
                    }) : c ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(D.TextActivityPIPOverlay, {
                            idle: _,
                            onMouseMove: u,
                            onMouseDown: u,
                            onMouseLeave: d,
                            onJumpToChannel: () => {
                                ee(), (0, p.updateActivityPanelMode)(y.ActivityPanelModes.PANEL)
                            },
                            channel: t,
                            applicationId: B.applicationId,
                            users: E
                        })
                    }) : null == W ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            onMouseMove: u,
                            onMouseDown: u,
                            onMouseLeave: d,
                            className: b.clickShield,
                            onDoubleClick: ee
                        }), (0, i.jsx)(D.PIPOverlay, {
                            idle: _,
                            onMouseMove: u,
                            onMouseDown: u,
                            onMouseLeave: d,
                            onJumpToChannel: ee,
                            channel: t,
                            applicationId: B.applicationId,
                            selectedParticipant: W
                        })]
                    }) : null), n ? (0, i.jsx)(l.Spinner, {
                        className: a()(b.iframe, {
                            [b.pipModeShort]: J && !s,
                            [b.pipModeTall]: J && s
                        })
                    }) : (0, i.jsx)(L.EmbedIFrameWithLoadingBackground, {
                        allowPopups: (0, C.allowPopups)(V),
                        referrerPolicy: M.APPLICATIONS_WITH_NO_REFFERER.has(B.applicationId) ? "no-referrer" : "origin",
                        url: B.url,
                        queryParams: ei,
                        className: a()(b.iframe, {
                            [b.pipModeShort]: J && !s,
                            [b.pipModeTall]: J && s,
                            [b.pipNonInteractive]: J && !(null === (o = B.config) || void 0 === o ? void 0 : o.useInteractivePIP)
                        }),
                        shouldRefocus: !J && F
                    }), !J && (0, i.jsx)(D.TileOverlay, {
                        participantsOpen: z,
                        showToggleParticipants: !1,
                        channelId: t.id
                    })]
                })
            }
        })
    }
    t.default = e => {
        let {
            channel: t,
            ...n
        } = e, {
            isLoading: r
        } = (0, v.useEmbeddedActivityLifecycle)(t);
        return (0, i.jsx)(B, {
            channel: t,
            isLoading: r,
            ...n
        })
    }
}