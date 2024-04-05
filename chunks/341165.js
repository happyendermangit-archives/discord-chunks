function(e, t, n) {
    "use strict";
    let i;
    n.r(t);
    var r, s, a, o, l = n("569048"),
        u = n.n(l),
        d = n("167006"),
        _ = n.n(d),
        c = n("989872"),
        E = n.n(c),
        I = n("442837"),
        T = n("570140"),
        f = n("758449"),
        S = n("245335");
    let A = {},
        h = {},
        m = {},
        N = {},
        O = !1,
        p = !1,
        R = !1;
    class C extends(o = I.default.Store) {
        getInvite(e) {
            var t, n;
            let {
                targetType: i,
                targetUserId: r,
                targetApplicationId: s
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return i === S.InviteTargetTypes.STREAM && null != r ? null === (t = h[e]) || void 0 === t ? void 0 : t[r] : i === S.InviteTargetTypes.EMBEDDED_APPLICATION && null != s ? null === (n = m[e]) || void 0 === n ? void 0 : n[s] : A[e]
        }
        getFriendInvite() {
            return i
        }
        getFriendInvitesFetching() {
            return O
        }
        canRevokeFriendInvite() {
            return null != i && !p && !R
        }
    }
    a = "InstantInviteStore", (s = "displayName") in(r = C) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new C(T.default, {
        CONNECTION_OPEN: function() {
            A = {}, h = {}, m = {}, N = {}, i = null, p = !1, R = !1, O = !1
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            delete A[t.id], delete h[t.id], delete m[t.id]
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
            }), i = null !== (t = u()(_()(E()(Object.values(N), "createdAt")))) && void 0 !== t ? t : null, p = !1
        },
        INSTANT_INVITE_CREATE_SUCCESS: function(e) {
            let {
                channelId: t,
                invite: n
            } = e, i = f.default.createFromServer(n);
            i.targetType === S.InviteTargetTypes.STREAM && null != i.targetUser ? (null == h[t] && (h[t] = {}), h[t][String(i.targetUser.id)] = i) : i.targetType === S.InviteTargetTypes.EMBEDDED_APPLICATION && null != i.targetApplication ? (null == m[t] && (m[t] = {}), m[t][i.targetApplication.id] = i) : A[t] = i
        },
        INSTANT_INVITE_CREATE_FAILURE: function(e) {
            let {
                channelId: t
            } = e;
            A[t] = null
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
            let {
                channelId: t
            } = e;
            A[t] = null
        },
        FRIEND_INVITE_REVOKE_REQUEST: function() {
            p = !0
        },
        FRIEND_INVITE_CREATE_REQUEST: function() {
            R = !0
        },
        FRIEND_INVITES_FETCH_REQUEST: function() {
            O = !0
        },
        FRIEND_INVITES_FETCH_RESPONSE: function(e) {
            var t;
            N = {}, e.invites.forEach(e => {
                N[e.code] = f.default.createFromServer(e)
            }), i = null !== (t = u()(_()(E()(Object.values(N), "createdAt")))) && void 0 !== t ? t : null, O = !1
        },
        INSTANT_INVITE_CLEAR: function(e) {
            delete A[e.channelId]
        }
    })
}