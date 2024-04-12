function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return V
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("481060"),
        o = n("278323"),
        l = n("224706"),
        u = n("287734"),
        d = n("2052"),
        _ = n("906732"),
        c = n("835473"),
        E = n("592745"),
        I = n("592125"),
        T = n("757266"),
        f = n("650774"),
        S = n("430824"),
        A = n("283595"),
        h = n("496675"),
        m = n("699516"),
        N = n("944486"),
        O = n("594174"),
        p = n("979651"),
        R = n("181106"),
        C = n("417363"),
        g = n("358085"),
        L = n("804739"),
        D = n("317381"),
        v = n("638880"),
        M = n("255621"),
        y = n("452634"),
        P = n("620662"),
        U = n("275920"),
        b = n("513202"),
        G = n("915863"),
        w = n("701488"),
        k = n("981631"),
        B = n("689938");

    function V(e) {
        let {
            activity: t,
            currentEmbeddedApplication: n,
            isCurrentUser: V,
            color: F,
            look: x,
            hover: H,
            user: Y,
            isEmbedded: j = !1
        } = e, {
            analyticsLocations: W
        } = (0, _.default)(), [K, z] = r.useState(!1), X = (0, s.useStateFromStores)([O.default], () => O.default.getCurrentUser()), Q = null == t ? void 0 : t.application_id, q = (0, s.useStateFromStores)([D.default], () => j ? D.default.getEmbeddedActivityForUserId(Y.id, Q) : null, [Y.id, j, Q]), Z = (0, y.default)({
            channelId: null == q ? void 0 : q.channelId,
            userId: Y.id,
            activity: t
        }), J = (0, s.useStateFromStores)([A.default, E.default, C.default, T.default], () => j || (null == t ? void 0 : t.application_id) != null && (0, L.isLaunchable)({
            LibraryApplicationStore: A.default,
            LaunchableGameStore: E.default,
            DispatchApplicationStore: C.default,
            ConnectedAppsStore: T.default,
            applicationId: t.application_id
        })), $ = (0, s.useStateFromStores)([D.default], () => Array.from(D.default.getSelfEmbeddedActivities().values()).some(e => {
            let {
                applicationId: n,
                channelId: i
            } = e;
            return n === (null == t ? void 0 : t.application_id) && i === Z
        })), ee = (0, s.useStateFromStores)([R.default], () => null != t && null != t.application_id && R.default.getState(t.application_id, k.ActivityActionTypes.JOIN) === k.ActivityActionStates.LOADING), [et] = (0, c.default)((null == t ? void 0 : t.application_id) != null ? [null == t ? void 0 : t.application_id] : []), en = (0, s.useStateFromStores)([I.default, S.default, f.default, m.default, N.default, p.default, h.default], () => (0, M.default)({
            user: Y,
            activity: t,
            application: et,
            channelId: Z,
            currentUser: X,
            isEmbedded: j,
            ChannelStore: I.default,
            GuildStore: S.default,
            GuildMemberCountStore: f.default,
            RelationshipStore: m.default,
            SelectedChannelStore: N.default,
            VoiceStateStore: p.default,
            PermissionStore: h.default
        })), ei = (0, s.useStateFromStores)([D.default], () => Array.from(D.default.getSelfEmbeddedActivities().values()).some(e => e.applicationId === (null == q ? void 0 : q.applicationId) && e.channelId === (null == q ? void 0 : q.channelId))), er = (0, d.useAnalyticsContext)(), es = !g.isPlatformEmbedded, ea = (0, P.default)(t, k.ActivityFlags.JOIN) || j;
        if (null == t || !ea || null == t.application_id) return null;
        let eo = !V && (es || J) && !K && !$ && (!j || en),
            el = null;
        V ? el = B.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : !es && !J && (el = B.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
            name: t.name
        }));
        let eu = async (e, t) => {
            var n;
            null != t.session_id && null != t.application_id && (await l.default.join({
                userId: e.id,
                sessionId: t.session_id,
                applicationId: t.application_id,
                channelId: N.default.getVoiceChannelId(),
                messageId: null,
                intent: w.ActivityIntent.PLAY,
                embedded: (0, P.default)(t, k.ActivityFlags.EMBEDDED)
            }), (0, U.default)({
                type: k.AnalyticsGameOpenTypes.JOIN,
                userId: e.id,
                applicationId: t.application_id,
                partyId: null === (n = t.party) || void 0 === n ? void 0 : n.id,
                locationObject: er.location,
                analyticsLocations: W
            }))
        }, ed = async () => {
            let e = !1;
            if (j) {
                if (!en || null == Z || null == t.application_id) return;
                e = await (0, v.default)({
                    applicationId: t.application_id,
                    currentEmbeddedApplication: n,
                    activityChannelId: Z,
                    locationObject: er.location,
                    embeddedActivitiesManager: b.default,
                    analyticsLocations: W
                })
            }
            if (!e) {
                en && eu(Y, t), z(!0);
                let e = await o.default.sendActivityInviteUser({
                    type: k.ActivityActionTypes.JOIN_REQUEST,
                    userId: Y.id,
                    activity: t,
                    location: k.AnalyticsLocations.PROFILE_POPOUT
                });
                null != e && u.default.selectPrivateChannel(e.id)
            }
        }, e_ = en ? B.default.Messages.JOIN : B.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
        return j && (e_ = B.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY), ei && (e_ = B.default.Messages.EMBEDDED_ACTIVITIES_JOINED), (0, i.jsx)(a.Tooltip, {
            text: el,
            children: e => {
                let {
                    onMouseEnter: t,
                    onMouseLeave: n
                } = e;
                return (0, i.jsx)(G.default, {
                    onClick: ed,
                    onMouseEnter: t,
                    onMouseLeave: n,
                    color: F,
                    look: x,
                    hover: H,
                    disabled: !eo,
                    submitting: ee,
                    fullWidth: !0,
                    children: e_
                })
            }
        }, "join")
    }
}