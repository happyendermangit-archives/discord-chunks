function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useAvatarsWithGuilds: function() {
            return a
        },
        useGuildMemberAndUserPendingAvatarDecoration: function() {
            return S
        },
        useGlobalOrGuildIdentityProfileEffect: function() {
            return c
        },
        useGlobalOrGuildIdentityPendingProfileEffect: function() {
            return I
        },
        setNewPendingUserBio: function() {
            return s
        },
        setNewPendingAvatar: function() {
            return f
        },
        setNewPendingAvatarDecoration: function() {
            return N
        },
        setNewPendingProfileEffectId: function() {
            return A
        },
        getProfilePreviewField: function() {
            return U
        },
        showRemoveAvatar: function() {
            return p
        },
        showRemoveBanner: function() {
            return R
        }
    }), n("424973");
    var i = n("884691"),
        r = n("446674"),
        u = n("152584"),
        o = n("929423"),
        _ = n("424562"),
        l = n("783142"),
        E = n("713135"),
        T = n("26989"),
        d = n("790618");

    function a(e) {
        return i.useMemo(() => {
            let t = T.default.getMutableAllGuildsAndMembers(),
                n = {};
            for (let r in t) {
                var i;
                let u = t[r],
                    o = null === (i = u[e]) || void 0 === i ? void 0 : i.avatar;
                null != o && (null == n[o] && (n[o] = []), n[o].push(r))
            }
            return null != n ? Object.entries(n).map(e => e[1][0]) : []
        }, [e])
    }

    function S(e, t) {
        let n = (0, r.useStateFromStores)([T.default], () => void 0 === t ? null : T.default.getMember(t.id, e.id)),
            {
                pendingUserAvatarDecoration: i,
                userErrors: u
            } = (0, r.useStateFromStoresObject)([d.default], () => ({
                pendingUserAvatarDecoration: d.default.getPendingAvatarDecoration(),
                userErrors: d.default.getErrors().avatarDecoration
            })),
            {
                pendingGuildAvatarDecoration: o,
                guildErrors: l
            } = (0, r.useStateFromStoresObject)([_.default], () => ({
                pendingGuildAvatarDecoration: _.default.getPendingAvatarDecoration(),
                guildErrors: _.default.getErrors().avatarDecoration
            }));
        return {
            userAvatarDecoration: e.avatarDecoration,
            guildAvatarDecoration: null == n ? void 0 : n.avatarDecoration,
            pendingAvatarDecoration: null != t ? o : i,
            pendingErrors: null != t ? l : u
        }
    }

    function c(e, t) {
        return (0, r.useStateFromStores)([E.default], () => {
            var n, i;
            return null == t ? null === (n = E.default.getUserProfile(e.id)) || void 0 === n ? void 0 : n.profileEffectId : null === (i = E.default.getGuildMemberProfile(e.id, t.id)) || void 0 === i ? void 0 : i.profileEffectId
        }, [e, t])
    }

    function I(e) {
        return (0, r.useStateFromStoresObject)([d.default, _.default], () => null == e ? {
            pendingProfileEffectId: d.default.getPendingProfileEffectId(),
            errors: d.default.getErrors().profileEffect
        } : {
            pendingProfileEffectId: _.default.getPendingProfileEffectId(),
            errors: _.default.getErrors().profileEffect
        }, [e])
    }

    function s(e, t) {
        (0, l.setPendingBio)(e === t ? void 0 : e)
    }

    function f(e, t) {
        (0, u.setPendingAvatar)(e === t ? void 0 : e)
    }

    function N(e, t) {
        (null != e ? o.setPendingAvatarDecoration : u.setPendingAvatarDecoration)(t)
    }

    function A(e, t, n) {
        if (e === t) {
            null == n ? (0, u.setPendingProfileEffectId)(void 0) : (0, o.setPendingProfileEffectId)(void 0);
            return
        }
        null == n ? (0, u.setPendingProfileEffectId)(e) : (0, o.setPendingProfileEffectId)(e)
    }

    function U(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null != e) return "" === e ? {
            value: i ? n : null,
            isUsingGuildValue: !1
        } : {
            value: e,
            isUsingGuildValue: i
        };
        return null != t && "" !== t ? {
            value: t,
            isUsingGuildValue: !0
        } : {
            value: n,
            isUsingGuildValue: !1
        }
    }

    function p(e, t) {
        return void 0 === e ? null != t : null != e
    }

    function R(e, t) {
        return void 0 === e ? null != t : null != e
    }
}