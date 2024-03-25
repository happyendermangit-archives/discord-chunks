function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return D
        }
    }), n("222007");
    var a = n("37983"),
        l = n("884691"),
        i = n("414456"),
        o = n.n(i),
        r = n("446674"),
        s = n("77078"),
        d = n("913144"),
        u = n("255397"),
        c = n("406189"),
        p = n("54239"),
        f = n("191145"),
        m = n("292687"),
        h = n("393414"),
        v = n("784981"),
        I = n("908583"),
        P = n("449501"),
        C = n("18494"),
        S = n("697218"),
        g = n("550766"),
        y = n("191225"),
        E = n("420444"),
        T = n("817477"),
        A = n("386568"),
        x = n("965135"),
        N = n("954016"),
        M = n("272505"),
        j = n("49111"),
        _ = n("99795"),
        L = n("327772"),
        w = n("735276"),
        b = n("678016");

    function O(e) {
        let {
            channel: t,
            isLoading: n
        } = e, [i, x] = l.useState(!1), O = (0, r.useStateFromStores)([y.default], () => y.default.getSelfEmbeddedActivityForChannel(t.id)), D = (0, r.useStateFromStores)([y.default], () => y.default.getActivityPanelMode()), R = null == O ? void 0 : O.instanceId, F = (0, r.useStateFromStores)([C.default], () => C.default.getChannelId() === t.id), {
            dockedRect: W,
            isHidden: U
        } = (0, r.useStateFromStoresObject)([P.default], () => {
            let e = P.default.pipWindow;
            return {
                dockedRect: null != e ? P.default.getDockedRect(e.id) : null,
                isHidden: P.default.isEmbeddedActivityHidden()
            }
        }), k = (0, r.useStateFromStores)([m.default], () => m.default.getWindow(j.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), {
            activityParticipant: V,
            selectedParticipant: B,
            participantsOpen: H
        } = (0, r.useStateFromStoresObject)([f.default], () => ({
            activityParticipant: null != O ? f.default.getParticipant(t.id, O.applicationId) : null,
            selectedParticipant: f.default.getSelectedParticipant(t.id),
            participantsOpen: f.default.getParticipantsOpen(t.id)
        })), G = F || null != k, Y = (0, E.default)(t.id), J = Y && (null == B ? void 0 : B.type) !== _.ParticipantTypes.ACTIVITY, z = !Y && D === M.ActivityPanelModes.PIP, K = (!G || G && (J || z) && null == W) && !U, X = K && null != P.default.pipVideoWindow && null != P.default.pipActivityWindow;

        function Z() {
            var e;
            if (null != O && u.default.selectParticipant(t.id, O.applicationId), null != k) return;
            (0, p.popAllLayers)();
            let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : j.ME;
            c.default.channelListScrollTo(n, t.id), (0, h.transitionToGuild)(n, t.id)
        }

        function q() {
            x(!i)
        }
        l.useEffect(() => {
            if ((null == O ? void 0 : O.applicationId) != null) {
                let e = K ? N.ActivityLayoutMode.PIP : N.ActivityLayoutMode.FOCUSED;
                d.default.dispatch({
                    type: "ACTIVITY_LAYOUT_MODE_UPDATE",
                    layoutMode: e,
                    applicationId: O.applicationId
                })
            }
        }, [null == O ? void 0 : O.applicationId, K]);
        if (null == O || null == R || null == V && (0, E.default)(t.id)) return null;
        let Q = Array.from(O.userIds).map(e => S.default.getUser(e)).filter(e => null != e),
            $ = {
                instance_id: R,
                channel_id: t.id
            };
        return null != t.guild_id && "" !== t.guild_id && ($.guild_id = t.guild_id), (0, a.jsx)(I.default, {
            timeout: 2e3,
            children: e => {
                var l, r, d, u, c, p, f, m;
                let {
                    idle: h,
                    onActive: I,
                    onForceIdle: P
                } = e;
                return (0, a.jsxs)(v.default, {
                    className: o(L.root, {
                        [L.pipMode]: K,
                        [b.elevationHigh]: K,
                        [w.idle]: h && !(null === (l = O.config) || void 0 === l ? void 0 : l.useInteractivePIP),
                        [L.pipModeShort]: K && !i,
                        [L.pipModeTall]: K && i,
                        [L.hidden]: U,
                        [L.multiPIPMode]: X
                    }),
                    noBorder: !K,
                    children: [(d = I, u = P, c = h, p = z, f = Q, K && null != O && ((null == V ? void 0 : V.type) === _.ParticipantTypes.ACTIVITY || p) ? (null === (m = O.config) || void 0 === m ? void 0 : m.useInteractivePIP) ? (0, a.jsx)(A.InteractivePIPHeader, {
                        onJumpToChannel: Z,
                        applicationId: O.applicationId,
                        channel: t,
                        showControls: !c,
                        onMouseDown: d,
                        onMouseMove: d,
                        onMouseLeave: u,
                        onToggleHeight: q,
                        isExpanded: i,
                        hideExpandedButton: p
                    }) : p ? (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(A.TextActivityPIPOverlay, {
                            idle: c,
                            onMouseMove: d,
                            onMouseDown: d,
                            onMouseLeave: u,
                            onJumpToChannel: () => {
                                Z(), (0, g.updateActivityPanelMode)(M.ActivityPanelModes.PANEL)
                            },
                            channel: t,
                            applicationId: O.applicationId,
                            users: f
                        })
                    }) : null == V ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            onMouseMove: d,
                            onMouseDown: d,
                            onMouseLeave: u,
                            className: L.clickShield,
                            onDoubleClick: Z
                        }), (0, a.jsx)(A.PIPOverlay, {
                            idle: c,
                            onMouseMove: d,
                            onMouseDown: d,
                            onMouseLeave: u,
                            onJumpToChannel: Z,
                            channel: t,
                            applicationId: O.applicationId,
                            selectedParticipant: V
                        })]
                    }) : null), n ? (0, a.jsx)(s.Spinner, {
                        className: o(L.iframe, {
                            [L.pipModeShort]: K && !i,
                            [L.pipModeTall]: K && i
                        })
                    }) : (0, a.jsx)(T.EmbedIFrameWithLoadingBackground, {
                        allowPopups: N.APPLICATIONS_WITH_ALLOWED_POPUPS.has(O.applicationId),
                        referrerPolicy: N.APPLICATIONS_WITH_NO_REFFERER.has(O.applicationId) ? "no-referrer" : "origin",
                        url: O.url,
                        queryParams: $,
                        className: o(L.iframe, {
                            [L.pipModeShort]: K && !i,
                            [L.pipModeTall]: K && i,
                            [L.pipNonInteractive]: K && !(null === (r = O.config) || void 0 === r ? void 0 : r.useInteractivePIP)
                        }),
                        shouldRefocus: !K && F
                    }), !K && (0, a.jsx)(A.TileOverlay, {
                        participantsOpen: H,
                        showToggleParticipants: !1,
                        channelId: t.id
                    })]
                })
            }
        })
    }
    var D = e => {
        let {
            channel: t,
            ...n
        } = e, {
            isLoading: l
        } = (0, x.useEmbeddedActivityLifecycle)(t);
        return (0, a.jsx)(O, {
            channel: t,
            isLoading: l,
            ...n
        })
    }
}