function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
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
        A = n("937995"),
        h = n("366050"),
        m = n("944486"),
        N = n("594174"),
        O = n("566620"),
        p = n("317381"),
        R = n("963614"),
        C = n("917107"),
        g = n("208156"),
        L = n("748492"),
        D = n("350064"),
        v = n("701488"),
        M = n("918559"),
        y = n("981631"),
        P = n("354459"),
        U = n("622167"),
        b = n("438249"),
        G = n("344534");

    function w(e) {
        let {
            channel: t,
            isLoading: n
        } = e, [s, D] = r.useState(!1), w = (0, o.useStateFromStores)([p.default], () => p.default.getSelfEmbeddedActivityForChannel(t.id)), k = (0, o.useStateFromStores)([p.default], () => p.default.getActivityPanelMode()), B = (0, E.useGetOrFetchApplication)(null == w ? void 0 : w.applicationId), V = null == w ? void 0 : w.instanceId, F = (0, o.useStateFromStores)([m.default], () => m.default.getChannelId() === t.id), {
            dockedRect: x,
            isHidden: H
        } = (0, o.useStateFromStoresObject)([h.default], () => {
            let e = h.default.pipWindow;
            return {
                dockedRect: null != e ? h.default.getDockedRect(e.id) : null,
                isHidden: h.default.isEmbeddedActivityHidden()
            }
        }), Y = (0, o.useStateFromStores)([T.default], () => T.default.getWindow(y.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), {
            activityParticipant: j,
            selectedParticipant: W,
            participantsOpen: K
        } = (0, o.useStateFromStoresObject)([I.default], () => ({
            activityParticipant: null != w ? I.default.getParticipant(t.id, w.applicationId) : null,
            selectedParticipant: I.default.getSelectedParticipant(t.id),
            participantsOpen: I.default.getParticipantsOpen(t.id)
        })), z = F || null != Y, X = (0, C.default)(t.id), Q = X && (null == W ? void 0 : W.type) !== P.ParticipantTypes.ACTIVITY, q = !X && k === M.ActivityPanelModes.PIP, J = (!z || z && (Q || q) && null == x) && !H, Z = J && null != h.default.pipVideoWindow && null != h.default.pipActivityWindow;

        function $() {
            var e;
            if (null != w && d.default.selectParticipant(t.id, w.applicationId), null != Y) return;
            (0, c.popAllLayers)();
            let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : y.ME;
            _.default.channelListScrollTo(n, t.id), (0, f.transitionToGuild)(n, t.id)
        }

        function ee() {
            D(!s)
        }
        r.useEffect(() => {
            if ((null == w ? void 0 : w.applicationId) != null) {
                let e = J ? v.ActivityLayoutMode.PIP : v.ActivityLayoutMode.FOCUSED;
                u.default.dispatch({
                    type: "ACTIVITY_LAYOUT_MODE_UPDATE",
                    layoutMode: e,
                    applicationId: w.applicationId
                })
            }
        }, [null == w ? void 0 : w.applicationId, J]);
        if (null == w || null == V || null == j && (0, C.default)(t.id) || null == B) return null;
        let et = Array.from(w.userIds).map(e => N.default.getUser(e)).filter(e => null != e),
            en = {
                instance_id: V,
                channel_id: t.id
            };
        return null != t.guild_id && "" !== t.guild_id && (en.guild_id = t.guild_id), (0, i.jsx)(A.default, {
            timeout: 2e3,
            children: e => {
                var r, o, u, d, _, c, E, I;
                let {
                    idle: T,
                    onActive: f,
                    onForceIdle: A
                } = e;
                return (0, i.jsxs)(S.default, {
                    className: a()(U.root, {
                        [U.pipMode]: J,
                        [G.elevationHigh]: J,
                        [b.idle]: T && !(null === (r = w.config) || void 0 === r ? void 0 : r.useInteractivePIP),
                        [U.pipModeShort]: J && !s,
                        [U.pipModeTall]: J && s,
                        [U.hidden]: H,
                        [U.multiPIPMode]: Z
                    }),
                    noBorder: !J,
                    children: [(u = f, d = A, _ = T, c = q, E = et, J && null != w && ((null == j ? void 0 : j.type) === P.ParticipantTypes.ACTIVITY || c) ? (null === (I = w.config) || void 0 === I ? void 0 : I.useInteractivePIP) ? (0, i.jsx)(L.InteractivePIPHeader, {
                        onJumpToChannel: $,
                        applicationId: w.applicationId,
                        channel: t,
                        showControls: !_,
                        onMouseDown: u,
                        onMouseMove: u,
                        onMouseLeave: d,
                        onToggleHeight: ee,
                        isExpanded: s,
                        hideExpandedButton: c
                    }) : c ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(L.TextActivityPIPOverlay, {
                            idle: _,
                            onMouseMove: u,
                            onMouseDown: u,
                            onMouseLeave: d,
                            onJumpToChannel: () => {
                                $(), (0, O.updateActivityPanelMode)(M.ActivityPanelModes.PANEL)
                            },
                            channel: t,
                            applicationId: w.applicationId,
                            users: E
                        })
                    }) : null == j ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            onMouseMove: u,
                            onMouseDown: u,
                            onMouseLeave: d,
                            className: U.clickShield,
                            onDoubleClick: $
                        }), (0, i.jsx)(L.PIPOverlay, {
                            idle: _,
                            onMouseMove: u,
                            onMouseDown: u,
                            onMouseLeave: d,
                            onJumpToChannel: $,
                            channel: t,
                            applicationId: w.applicationId,
                            selectedParticipant: j
                        })]
                    }) : null), n ? (0, i.jsx)(l.Spinner, {
                        className: a()(U.iframe, {
                            [U.pipModeShort]: J && !s,
                            [U.pipModeTall]: J && s
                        })
                    }) : (0, i.jsx)(g.EmbedIFrameWithLoadingBackground, {
                        allowPopups: (0, R.allowPopups)(B),
                        referrerPolicy: v.APPLICATIONS_WITH_NO_REFFERER.has(w.applicationId) ? "no-referrer" : "origin",
                        url: w.url,
                        queryParams: en,
                        className: a()(U.iframe, {
                            [U.pipModeShort]: J && !s,
                            [U.pipModeTall]: J && s,
                            [U.pipNonInteractive]: J && !(null === (o = w.config) || void 0 === o ? void 0 : o.useInteractivePIP)
                        }),
                        shouldRefocus: !J && F
                    }), !J && (0, i.jsx)(L.TileOverlay, {
                        participantsOpen: K,
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
        } = (0, D.useEmbeddedActivityLifecycle)(t);
        return (0, i.jsx)(w, {
            channel: t,
            isLoading: r,
            ...n
        })
    }
}