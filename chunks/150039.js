function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getProfilePreviewField: function() {
            return m
        },
        setNewPendingAvatar: function() {
            return S
        },
        setNewPendingAvatarDecoration: function() {
            return h
        },
        setNewPendingProfileEffectId: function() {
            return A
        },
        setNewPendingUserBio: function() {
            return f
        },
        showRemoveAvatar: function() {
            return N
        },
        showRemoveBanner: function() {
            return p
        },
        useAvatarsWithGuilds: function() {
            return c
        },
        useGlobalOrGuildIdentityPendingProfileEffect: function() {
            return T
        },
        useGlobalOrGuildIdentityProfileEffect: function() {
            return I
        },
        useGuildMemberAndUserPendingAvatarDecoration: function() {
            return E
        }
    }), n("653041");
    var i = n("470079"),
        r = n("442837"),
        s = n("809206"),
        a = n("18438"),
        o = n("778825"),
        l = n("350327"),
        u = n("621853"),
        d = n("271383"),
        _ = n("25990");

    function c(e) {
        return i.useMemo(() => {
            let t = d.default.getMutableAllGuildsAndMembers(),
                n = {};
            for (let r in t) {
                var i;
                let s = null === (i = t[r][e]) || void 0 === i ? void 0 : i.avatar;
                null != s && (null == n[s] && (n[s] = []), n[s].push(r))
            }
            return null != n ? Object.entries(n).map(e => e[1][0]) : []
        }, [e])
    }

    function E(e, t) {
        let n = (0, r.useStateFromStores)([d.default], () => void 0 === t ? null : d.default.getMember(t.id, e.id)),
            {
                pendingUserAvatarDecoration: i,
                userErrors: s
            } = (0, r.useStateFromStoresObject)([_.default], () => ({
                pendingUserAvatarDecoration: _.default.getPendingAvatarDecoration(),
                userErrors: _.default.getErrors().avatarDecoration
            })),
            {
                pendingGuildAvatarDecoration: a,
                guildErrors: l
            } = (0, r.useStateFromStoresObject)([o.default], () => ({
                pendingGuildAvatarDecoration: o.default.getPendingAvatarDecoration(),
                guildErrors: o.default.getErrors().avatarDecoration
            }));
        return {
            userAvatarDecoration: e.avatarDecoration,
            guildAvatarDecoration: null == n ? void 0 : n.avatarDecoration,
            pendingAvatarDecoration: null != t ? a : i,
            pendingErrors: null != t ? l : s
        }
    }

    function I(e, t) {
        return (0, r.useStateFromStores)([u.default], () => {
            var n, i;
            return null == t ? null === (n = u.default.getUserProfile(e.id)) || void 0 === n ? void 0 : n.profileEffectId : null === (i = u.default.getGuildMemberProfile(e.id, t.id)) || void 0 === i ? void 0 : i.profileEffectId
        }, [e, t])
    }

    function T(e) {
        return (0, r.useStateFromStoresObject)([_.default, o.default], () => null == e ? {
            pendingProfileEffectId: _.default.getPendingProfileEffectId(),
            errors: _.default.getErrors().profileEffect
        } : {
            pendingProfileEffectId: o.default.getPendingProfileEffectId(),
            errors: o.default.getErrors().profileEffect
        }, [e])
    }

    function f(e, t) {
        (0, l.setPendingBio)(e === t ? void 0 : e)
    }

    function S(e, t) {
        (0, s.setPendingAvatar)(e === t ? void 0 : e)
    }

    function h(e, t) {
        (null != e ? a.setPendingAvatarDecoration : s.setPendingAvatarDecoration)(t)
    }

    function A(e, t, n) {
        if (e === t) {
            null == n ? (0, s.setPendingProfileEffectId)(void 0) : (0, a.setPendingProfileEffectId)(void 0);
            return
        }
        null == n ? (0, s.setPendingProfileEffectId)(e) : (0, a.setPendingProfileEffectId)(e)
    }

    function m(e, t, n) {
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

    function N(e, t) {
        return void 0 === e ? null != t : null != e
    }

    function p(e, t) {
        return void 0 === e ? null != t : null != e
    }
}