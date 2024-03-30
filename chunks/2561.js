function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildMemberSafetyMembers: function() {
            return T
        },
        MemberSafetySecondaryIndex: function() {
            return o
        }
    });
    var r, o, i = n("498607"),
        a = n.n(i),
        u = n("727309"),
        s = n("902854"),
        l = n("208454"),
        c = n("276046"),
        f = n("180490"),
        d = n("983410"),
        _ = n("807371");

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                p(e, t, n[t])
            })
        }
        return e
    }
    var y = Date.now();

    function I(e) {
        var t = [e.isCurrentGuildMemberByTimestamp ? "CURRENT_GUILD_MEMBER" : "NEW_GUILD_MEMBER"];
        return e.isIncludedInSearchResults && t.push("INCLUDED_IN_SEARCH_RESULTS"), t
    }

    function h(e) {
        return e.sort
    }

    function O() {
        return new u.SecondaryIndexMap(I, h)
    }(r = o || (o = {})).NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER", r.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER", r.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS";
    var T = function() {
        var e, t, n;

        function r(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), p(this, "guildId", void 0), p(this, "_membersMap", void 0), p(this, "newMemberTimestamp", Date.now()), this.guildId = e, this._membersMap = O()
        }
        return e = r, t = [{
            key: "reset",
            value: function() {
                this._membersMap.clear(), this._membersMap = O(), this.resetNewMemberTimestamp()
            }
        }, {
            key: "resetNewMemberTimestamp",
            value: function() {
                this.newMemberTimestamp = Date.now()
            }
        }, {
            key: "enhanceNewMember",
            value: function(e, t) {
                var n, r, o, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = (0, c.getJoinedAtTimestamp)(e.joinedAt),
                    u = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
                    s = u.hasUnusualDmActivity,
                    d = u.hasUnusualAccountActivity,
                    E = u.sourceInviteCode,
                    p = u.joinSourceType,
                    y = u.inviterId,
                    I = u.integrationType,
                    h = l.default.getUser(e.userId);
                return m((n = m({
                    hasUnusualDmActivity: s,
                    hasUnusualAccountActivity: d,
                    sourceInviteCode: E,
                    joinSourceType: p,
                    inviterId: y,
                    integrationType: I
                }, e), r = (r = {
                    isCurrentGuildMemberByTimestamp: a <= this.newMemberTimestamp,
                    isIncludedInSearchResults: !1,
                    user: h,
                    sort: (0, _.getSortValueForMember)(e, null !== (o = t.selectedSort) && void 0 !== o ? o : f.OrderBy.ORDER_BY_UNSPECIFIED),
                    joinedAtTimestamp: a
                }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }), n), i)
            }
        }, {
            key: "_computeMemberSupplementals",
            value: function(e, t) {
                var n, r, o = null !== (n = (0, d.getMemberSupplementalByGuildId)(this.guildId)[e]) && void 0 !== n ? n : {},
                    i = o.sourceInviteCode,
                    a = o.joinSourceType,
                    u = o.inviterId,
                    l = o.integrationType;
                return {
                    sourceInviteCode: null != i ? i : null,
                    joinSourceType: null != a ? a : null,
                    inviterId: null != u ? u : null,
                    integrationType: null != l ? l : null,
                    hasUnusualDmActivity: null != (r = t) && new Date(r).getTime() >= y - f.UNUSUAL_DM_COMPARISON_DELTA,
                    hasUnusualAccountActivity: (0, s.isSpammer)(e)
                }
            }
        }, {
            key: "createMember",
            value: function(e) {
                return this._membersMap.set(e.userId, e)
            }
        }, {
            key: "updateMember",
            value: function(e, t) {
                if (null == t) return this._membersMap.set(e.userId, e);
                var n, r = m({}, e),
                    o = m({}, t),
                    i = !1,
                    u = this._computeMemberSupplementals(r.userId, null !== (n = o.unusualDMActivityUntil) && void 0 !== n ? n : r.unusualDMActivityUntil),
                    s = u.sourceInviteCode,
                    l = u.hasUnusualDmActivity,
                    c = u.hasUnusualAccountActivity,
                    f = u.joinSourceType,
                    d = u.inviterId,
                    _ = u.integrationType;
                for (var E in r.sourceInviteCode !== s && (o.sourceInviteCode = s), r.hasUnusualDmActivity !== l && (o.hasUnusualDmActivity = l), r.hasUnusualAccountActivity !== c && (o.hasUnusualAccountActivity = c), r.joinSourceType !== f && (o.joinSourceType = f), r.inviterId !== d && (o.inviterId = d), r.integrationType !== _ && (o.integrationType = _), o) {
                    var p = o[E],
                        y = r[E];
                    !a()(p, y) && (r[E] = p, i = !0)
                }
                return this._membersMap.set(r.userId, r) || i
            }
        }, {
            key: "removeMember",
            value: function(e) {
                return this._membersMap.delete(e)
            }
        }, {
            key: "getMemberByUserId",
            value: function(e) {
                return this._membersMap.get(e)
            }
        }, {
            key: "values",
            value: function(e) {
                return this._membersMap.values(e, !0)
            }
        }, {
            key: "count",
            value: function(e) {
                return this._membersMap.size(e)
            }
        }, {
            key: "version",
            get: function() {
                return this._membersMap.version
            }
        }], E(e.prototype, t), n && E(e, n), r
    }()
}