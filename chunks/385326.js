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
        R = n("963614"),
        C = n("917107"),
        g = n("208156"),
        L = n("748492"),
        D = n("350064"),
        v = n("701488"),
        M = n("918559"),
        y = n("981631"),
        P = n("354459"),
        U = n("323926"),
        b = n("376838"),
        G = n("661781");

    function w(e) {
        var t, n;
        let {
            channel: s,
            isLoading: D
        } = e, [w, B] = r.useState(!1), k = (0, o.useStateFromStores)([O.default], () => O.default.getSelfEmbeddedActivityForChannel(s.id)), V = (0, o.useStateFromStores)([O.default], () => O.default.getActivityPanelMode()), x = (0, E.useGetOrFetchApplication)(null == k ? void 0 : k.applicationId), F = null == k ? void 0 : k.launchId, H = (0, o.useStateFromStores)([m.default], () => m.default.getChannelId() === s.id), {
            dockedRect: Y,
            isHidden: j
        } = (0, o.useStateFromStoresObject)([A.default], () => {
            let e = A.default.pipWindow;
            return {
                dockedRect: null != e ? A.default.getDockedRect(e.id) : null,
                isHidden: A.default.isEmbeddedActivityHidden()
            }
        }), W = (0, o.useStateFromStores)([T.default], () => T.default.getWindow(y.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), {
            activityParticipant: K,
            selectedParticipant: z,
            participantsOpen: X
        } = (0, o.useStateFromStoresObject)([I.default], () => ({
            activityParticipant: null != k ? I.default.getParticipant(s.id, k.applicationId) : null,
            selectedParticipant: I.default.getSelectedParticipant(s.id),
            participantsOpen: I.default.getParticipantsOpen(s.id)
        })), Q = H || null != W, q = (0, C.default)(s.id), Z = q && (null == z ? void 0 : z.type) !== P.ParticipantTypes.ACTIVITY, J = !q && V === M.ActivityPanelModes.PIP, $ = (!Q || Q && (Z || J) && null == Y) && !j, ee = $ && null != A.default.pipVideoWindow && null != A.default.pipActivityWindow;

        function et() {
            var e;
            if (null != k && d.default.selectParticipant(s.id, k.applicationId), null != W) return;
            (0, c.popAllLayers)();
            let t = null !== (e = s.getGuildId()) && void 0 !== e ? e : y.ME;
            _.default.channelListScrollTo(t, s.id), (0, f.transitionToGuild)(t, s.id)
        }

        function en() {
            B(!w)
        }
        r.useEffect(() => {
            if ((null == k ? void 0 : k.applicationId) != null) {
                let e = $ ? v.ActivityLayoutMode.PIP : v.ActivityLayoutMode.FOCUSED;
                u.default.dispatch({
                    type: "ACTIVITY_LAYOUT_MODE_UPDATE",
                    layoutMode: e,
                    applicationId: k.applicationId
                })
            }
        }, [null == k ? void 0 : k.applicationId, $]);
        if (null == k || null == F || null == K && (0, C.default)(s.id) || null == x) return null;
        let ei = Array.from(k.userIds).map(e => N.default.getUser(e)).filter(e => null != e),
            er = {
                instance_id: null !== (n = null !== (t = k.compositeInstanceId) && void 0 !== t ? t : k.launchId) && void 0 !== n ? n : "",
                channel_id: s.id
            };
        return null != s.guild_id && "" !== s.guild_id && (er.guild_id = s.guild_id), (0, i.jsx)(h.default, {
            timeout: 2e3,
            children: e => {
                var t, n, r, o, u, d, _, c;
                let {
                    idle: E,
                    onActive: I,
                    onForceIdle: T
                } = e;
                return (0, i.jsxs)(S.default, {
                    className: a()(U.root, {
                        [U.pipMode]: $,
                        [G.elevationHigh]: $,
                        [b.idle]: E && !(null === (t = k.config) || void 0 === t ? void 0 : t.useInteractivePIP),
                        [U.pipModeShort]: $ && !w,
                        [U.pipModeTall]: $ && w,
                        [U.hidden]: j,
                        [U.multiPIPMode]: ee
                    }),
                    noBorder: !$,
                    children: [(r = I, o = T, u = E, d = J, _ = ei, $ && null != k && ((null == K ? void 0 : K.type) === P.ParticipantTypes.ACTIVITY || d) ? (null === (c = k.config) || void 0 === c ? void 0 : c.useInteractivePIP) ? (0, i.jsx)(L.InteractivePIPHeader, {
                        onJumpToChannel: et,
                        applicationId: k.applicationId,
                        channel: s,
                        showControls: !u,
                        onMouseDown: r,
                        onMouseMove: r,
                        onMouseLeave: o,
                        onToggleHeight: en,
                        isExpanded: w,
                        hideExpandedButton: d
                    }) : d ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(L.TextActivityPIPOverlay, {
                            idle: u,
                            onMouseMove: r,
                            onMouseDown: r,
                            onMouseLeave: o,
                            onJumpToChannel: () => {
                                et(), (0, p.updateActivityPanelMode)(M.ActivityPanelModes.PANEL)
                            },
                            channel: s,
                            applicationId: k.applicationId,
                            users: _
                        })
                    }) : null == K ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            onMouseMove: r,
                            onMouseDown: r,
                            onMouseLeave: o,
                            className: U.clickShield,
                            onDoubleClick: et
                        }), (0, i.jsx)(L.PIPOverlay, {
                            idle: u,
                            onMouseMove: r,
                            onMouseDown: r,
                            onMouseLeave: o,
                            onJumpToChannel: et,
                            channel: s,
                            applicationId: k.applicationId,
                            selectedParticipant: K
                        })]
                    }) : null), D ? (0, i.jsx)(l.Spinner, {
                        className: a()(U.iframe, {
                            [U.pipModeShort]: $ && !w,
                            [U.pipModeTall]: $ && w
                        })
                    }) : (0, i.jsx)(g.EmbedIFrameWithLoadingBackground, {
                        allowPopups: (0, R.allowPopups)(x),
                        referrerPolicy: v.APPLICATIONS_WITH_NO_REFFERER.has(k.applicationId) ? "no-referrer" : "origin",
                        url: k.url,
                        queryParams: er,
                        className: a()(U.iframe, {
                            [U.pipModeShort]: $ && !w,
                            [U.pipModeTall]: $ && w,
                            [U.pipNonInteractive]: $ && !(null === (n = k.config) || void 0 === n ? void 0 : n.useInteractivePIP)
                        }),
                        shouldRefocus: !$ && H
                    }), !$ && (0, i.jsx)(L.TileOverlay, {
                        participantsOpen: X,
                        showToggleParticipants: !1,
                        channelId: s.id
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