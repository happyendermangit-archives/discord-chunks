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
        E = n("358221"),
        I = n("928518"),
        T = n("703656"),
        f = n("607187"),
        S = n("937995"),
        A = n("366050"),
        h = n("944486"),
        m = n("594174"),
        N = n("566620"),
        O = n("317381"),
        p = n("917107"),
        R = n("208156"),
        C = n("748492"),
        g = n("350064"),
        L = n("701488"),
        D = n("918559"),
        v = n("981631"),
        M = n("354459"),
        y = n("622167"),
        P = n("438249"),
        U = n("344534");

    function b(e) {
        let {
            channel: t,
            isLoading: n
        } = e, [s, g] = r.useState(!1), b = (0, o.useStateFromStores)([O.default], () => O.default.getSelfEmbeddedActivityForChannel(t.id)), G = (0, o.useStateFromStores)([O.default], () => O.default.getActivityPanelMode()), w = null == b ? void 0 : b.instanceId, k = (0, o.useStateFromStores)([h.default], () => h.default.getChannelId() === t.id), {
            dockedRect: B,
            isHidden: V
        } = (0, o.useStateFromStoresObject)([A.default], () => {
            let e = A.default.pipWindow;
            return {
                dockedRect: null != e ? A.default.getDockedRect(e.id) : null,
                isHidden: A.default.isEmbeddedActivityHidden()
            }
        }), F = (0, o.useStateFromStores)([I.default], () => I.default.getWindow(v.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), {
            activityParticipant: x,
            selectedParticipant: H,
            participantsOpen: Y
        } = (0, o.useStateFromStoresObject)([E.default], () => ({
            activityParticipant: null != b ? E.default.getParticipant(t.id, b.applicationId) : null,
            selectedParticipant: E.default.getSelectedParticipant(t.id),
            participantsOpen: E.default.getParticipantsOpen(t.id)
        })), j = k || null != F, W = (0, p.default)(t.id), K = W && (null == H ? void 0 : H.type) !== M.ParticipantTypes.ACTIVITY, z = !W && G === D.ActivityPanelModes.PIP, X = (!j || j && (K || z) && null == B) && !V, Q = X && null != A.default.pipVideoWindow && null != A.default.pipActivityWindow;

        function q() {
            var e;
            if (null != b && d.default.selectParticipant(t.id, b.applicationId), null != F) return;
            (0, c.popAllLayers)();
            let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : v.ME;
            _.default.channelListScrollTo(n, t.id), (0, T.transitionToGuild)(n, t.id)
        }

        function J() {
            g(!s)
        }
        r.useEffect(() => {
            if ((null == b ? void 0 : b.applicationId) != null) {
                let e = X ? L.ActivityLayoutMode.PIP : L.ActivityLayoutMode.FOCUSED;
                u.default.dispatch({
                    type: "ACTIVITY_LAYOUT_MODE_UPDATE",
                    layoutMode: e,
                    applicationId: b.applicationId
                })
            }
        }, [null == b ? void 0 : b.applicationId, X]);
        if (null == b || null == w || null == x && (0, p.default)(t.id)) return null;
        let Z = Array.from(b.userIds).map(e => m.default.getUser(e)).filter(e => null != e),
            $ = {
                instance_id: w,
                channel_id: t.id
            };
        return null != t.guild_id && "" !== t.guild_id && ($.guild_id = t.guild_id), (0, i.jsx)(S.default, {
            timeout: 2e3,
            children: e => {
                var r, o, u, d, _, c, E, I;
                let {
                    idle: T,
                    onActive: S,
                    onForceIdle: A
                } = e;
                return (0, i.jsxs)(f.default, {
                    className: a()(y.root, {
                        [y.pipMode]: X,
                        [U.elevationHigh]: X,
                        [P.idle]: T && !(null === (r = b.config) || void 0 === r ? void 0 : r.useInteractivePIP),
                        [y.pipModeShort]: X && !s,
                        [y.pipModeTall]: X && s,
                        [y.hidden]: V,
                        [y.multiPIPMode]: Q
                    }),
                    noBorder: !X,
                    children: [(u = S, d = A, _ = T, c = z, E = Z, X && null != b && ((null == x ? void 0 : x.type) === M.ParticipantTypes.ACTIVITY || c) ? (null === (I = b.config) || void 0 === I ? void 0 : I.useInteractivePIP) ? (0, i.jsx)(C.InteractivePIPHeader, {
                        onJumpToChannel: q,
                        applicationId: b.applicationId,
                        channel: t,
                        showControls: !_,
                        onMouseDown: u,
                        onMouseMove: u,
                        onMouseLeave: d,
                        onToggleHeight: J,
                        isExpanded: s,
                        hideExpandedButton: c
                    }) : c ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(C.TextActivityPIPOverlay, {
                            idle: _,
                            onMouseMove: u,
                            onMouseDown: u,
                            onMouseLeave: d,
                            onJumpToChannel: () => {
                                q(), (0, N.updateActivityPanelMode)(D.ActivityPanelModes.PANEL)
                            },
                            channel: t,
                            applicationId: b.applicationId,
                            users: E
                        })
                    }) : null == x ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            onMouseMove: u,
                            onMouseDown: u,
                            onMouseLeave: d,
                            className: y.clickShield,
                            onDoubleClick: q
                        }), (0, i.jsx)(C.PIPOverlay, {
                            idle: _,
                            onMouseMove: u,
                            onMouseDown: u,
                            onMouseLeave: d,
                            onJumpToChannel: q,
                            channel: t,
                            applicationId: b.applicationId,
                            selectedParticipant: x
                        })]
                    }) : null), n ? (0, i.jsx)(l.Spinner, {
                        className: a()(y.iframe, {
                            [y.pipModeShort]: X && !s,
                            [y.pipModeTall]: X && s
                        })
                    }) : (0, i.jsx)(R.EmbedIFrameWithLoadingBackground, {
                        allowPopups: L.APPLICATIONS_WITH_ALLOWED_POPUPS.has(b.applicationId),
                        referrerPolicy: L.APPLICATIONS_WITH_NO_REFFERER.has(b.applicationId) ? "no-referrer" : "origin",
                        url: b.url,
                        queryParams: $,
                        className: a()(y.iframe, {
                            [y.pipModeShort]: X && !s,
                            [y.pipModeTall]: X && s,
                            [y.pipNonInteractive]: X && !(null === (o = b.config) || void 0 === o ? void 0 : o.useInteractivePIP)
                        }),
                        shouldRefocus: !X && k
                    }), !X && (0, i.jsx)(C.TileOverlay, {
                        participantsOpen: Y,
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
        } = (0, g.useEmbeddedActivityLifecycle)(t);
        return (0, i.jsx)(b, {
            channel: t,
            isLoading: r,
            ...n
        })
    }
}