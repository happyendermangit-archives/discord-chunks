function(e, t, n) {
    "use strict";
    let i;
    n.r(t);
    var r, a, s, o, l = n("569048"),
        u = n.n(l),
        d = n("167006"),
        _ = n.n(d),
        c = n("989872"),
        E = n.n(c),
        I = n("442837"),
        T = n("570140"),
        f = n("758449"),
        S = n("245335");
    let h = {},
        A = {},
        m = {},
        N = {},
        p = !1,
        O = !1,
        R = !1;
    class C extends(o = I.default.Store) {
        getInvite(e) {
            var t, n;
            let {
                targetType: i,
                targetUserId: r,
                targetApplicationId: a
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return i === S.InviteTargetTypes.STREAM && null != r ? null === (t = A[e]) || void 0 === t ? void 0 : t[r] : i === S.InviteTargetTypes.EMBEDDED_APPLICATION && null != a ? null === (n = m[e]) || void 0 === n ? void 0 : n[a] : h[e]
        }
        getFriendInvite() {
            return i
        }
        getFriendInvitesFetching() {
            return p
        }
        canRevokeFriendInvite() {
            return null != i && !O && !R
        }
    }
    s = "InstantInviteStore", (a = "displayName") in(r = C) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new C(T.default, {
        CONNECTION_OPEN: function() {
            h = {}, A = {}, m = {}, N = {}, i = null, O = !1, R = !1, p = !1
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            delete h[t.id], delete A[t.id], delete m[t.id]
        },
        FRIEND_INVITE_CREATE_SUCCESS: function(e) {
            var t;
            N[e.invite.code] = f.default.createFromServer(e.invite), i = null !== (t = u()(_()(E()(Object.values(N), "createdAt")))) && void 0 !== t ? t : null, R = !1
        },
        FRIEND_INVITE_CREATE_FAILURE: function() {
            R = !1
        },
        FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
            var t;
            null != e.invites && e.invites.forEach(e => {
                null != N[e.code] && delete N[e.code]
            }), i = null !== (t = u()(_()(E()(Object.values(N), "createdAt")))) && void 0 !== t ? t : null, O = !1
        },
        INSTANT_INVITE_CREATE_SUCCESS: function(e) {
            let {
                channelId: t,
                invite: n
            } = e, i = f.default.createFromServer(n);
            i.targetType === S.InviteTargetTypes.STREAM && null != i.targetUser ? (null == A[t] && (A[t] = {}), A[t][String(i.targetUser.id)] = i) : i.targetType === S.InviteTargetTypes.EMBEDDED_APPLICATION && null != i.targetApplication ? (null == m[t] && (m[t] = {}), m[t][i.targetApplication.id] = i) : h[t] = i
        },
        INSTANT_INVITE_CREATE_FAILURE: function(e) {
            let {
                channelId: t
            } = e;
            h[t] = null
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
            let {
                channelId: t
            } = e;
            h[t] = null
        },
        FRIEND_INVITE_REVOKE_REQUEST: function() {
            O = !0
        },
        FRIEND_INVITE_CREATE_REQUEST: function() {
            R = !0
        },
        FRIEND_INVITES_FETCH_REQUEST: function() {
            p = !0
        },
        FRIEND_INVITES_FETCH_RESPONSE: function(e) {
            var t;
            N = {}, e.invites.forEach(e => {
                N[e.code] = f.default.createFromServer(e)
            }), i = null !== (t = u()(_()(E()(Object.values(N), "createdAt")))) && void 0 !== t ? t : null, p = !1
        },
        INSTANT_INVITE_CLEAR: function(e) {
            delete h[e.channelId]
        }
    })
}