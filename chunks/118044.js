function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getProfilePreviewField: function() {
            return O
        },
        setNewPendingAvatar: function() {
            return y
        },
        setNewPendingAvatarDecoration: function() {
            return I
        },
        setNewPendingProfileEffectId: function() {
            return h
        },
        setNewPendingUserBio: function() {
            return m
        },
        showRemoveAvatar: function() {
            return T
        },
        showRemoveBanner: function() {
            return S
        },
        useAvatarsWithGuilds: function() {
            return d
        },
        useGlobalOrGuildIdentityPendingProfileEffect: function() {
            return p
        },
        useGlobalOrGuildIdentityProfileEffect: function() {
            return E
        },
        useGuildMemberAndUserPendingAvatarDecoration: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("86841"),
        a = n("748498"),
        u = n("332022"),
        s = n("187192"),
        l = n("903716"),
        c = n("957808"),
        f = n("937129");

    function d(e) {
        return r.useMemo(function() {
            var t = c.default.getMutableAllGuildsAndMembers(),
                n = {};
            for (var r in t) {
                var o, i = null === (o = t[r][e]) || void 0 === o ? void 0 : o.avatar;
                null != i && (null == n[i] && (n[i] = []), n[i].push(r))
            }
            return null != n ? Object.entries(n).map(function(e) {
                return e[1][0]
            }) : []
        }, [e])
    }

    function _(e, t) {
        var n = (0, o.useStateFromStores)([c.default], function() {
                return void 0 === t ? null : c.default.getMember(t.id, e.id)
            }),
            r = (0, o.useStateFromStoresObject)([f.default], function() {
                return {
                    pendingUserAvatarDecoration: f.default.getPendingAvatarDecoration(),
                    userErrors: f.default.getErrors().avatarDecoration
                }
            }),
            i = r.pendingUserAvatarDecoration,
            a = r.userErrors,
            s = (0, o.useStateFromStoresObject)([u.default], function() {
                return {
                    pendingGuildAvatarDecoration: u.default.getPendingAvatarDecoration(),
                    guildErrors: u.default.getErrors().avatarDecoration
                }
            }),
            l = s.pendingGuildAvatarDecoration,
            d = s.guildErrors;
        return {
            userAvatarDecoration: e.avatarDecoration,
            guildAvatarDecoration: null == n ? void 0 : n.avatarDecoration,
            pendingAvatarDecoration: null != t ? l : i,
            pendingErrors: null != t ? d : a
        }
    }

    function E(e, t) {
        return (0, o.useStateFromStores)([l.default], function() {
            var n, r;
            return null == t ? null === (n = l.default.getUserProfile(e.id)) || void 0 === n ? void 0 : n.profileEffectId : null === (r = l.default.getGuildMemberProfile(e.id, t.id)) || void 0 === r ? void 0 : r.profileEffectId
        }, [e, t])
    }

    function p(e) {
        return (0, o.useStateFromStoresObject)([f.default, u.default], function() {
            return null == e ? {
                pendingProfileEffectId: f.default.getPendingProfileEffectId(),
                errors: f.default.getErrors().profileEffect
            } : {
                pendingProfileEffectId: u.default.getPendingProfileEffectId(),
                errors: u.default.getErrors().profileEffect
            }
        }, [e])
    }

    function m(e, t) {
        (0, s.setPendingBio)(e === t ? void 0 : e)
    }

    function y(e, t) {
        (0, i.setPendingAvatar)(e === t ? void 0 : e)
    }

    function I(e, t) {
        (null != e ? a.setPendingAvatarDecoration : i.setPendingAvatarDecoration)(t)
    }

    function h(e, t, n) {
        if (e === t) {
            null == n ? (0, i.setPendingProfileEffectId)(void 0) : (0, a.setPendingProfileEffectId)(void 0);
            return
        }
        null == n ? (0, i.setPendingProfileEffectId)(e) : (0, a.setPendingProfileEffectId)(e)
    }

    function O(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null != e) return "" === e ? {
            value: r ? n : null,
            isUsingGuildValue: !1
        } : {
            value: e,
            isUsingGuildValue: r
        };
        return null != t && "" !== t ? {
            value: t,
            isUsingGuildValue: !0
        } : {
            value: n,
            isUsingGuildValue: !1
        }
    }

    function T(e, t) {
        return void 0 === e ? null != t : null != e
    }

    function S(e, t) {
        return void 0 === e ? null != t : null != e
    }
}