function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildMemberSafetyMembers: function() {
            return A
        },
        MemberSafetySecondaryIndex: function() {
            return i
        }
    }), n("653041"), n("47120");
    var i, r, s = n("498607"),
        a = n.n(s),
        o = n("759174"),
        l = n("493892"),
        u = n("594174"),
        d = n("815790"),
        _ = n("588215"),
        c = n("44715"),
        E = n("331551");

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let T = Date.now();

    function f(e) {
        let t = [e.isCurrentGuildMemberByTimestamp ? "CURRENT_GUILD_MEMBER" : "NEW_GUILD_MEMBER"];
        return e.isIncludedInSearchResults && t.push("INCLUDED_IN_SEARCH_RESULTS"), t
    }

    function S(e) {
        return e.sort
    }

    function h() {
        return new o.SecondaryIndexMap(f, S)
    }(r = i || (i = {})).NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER", r.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER", r.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS";
    class A {
        reset() {
            this._membersMap.clear(), this._membersMap = h(), this.resetNewMemberTimestamp()
        }
        resetNewMemberTimestamp() {
            this.newMemberTimestamp = Date.now()
        }
        enhanceNewMember(e, t) {
            var n;
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = (0, d.getJoinedAtTimestamp)(e.joinedAt),
                {
                    hasUnusualDmActivity: s,
                    hasUnusualAccountActivity: a,
                    sourceInviteCode: o,
                    joinSourceType: l,
                    inviterId: c,
                    integrationType: I
                } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
                T = u.default.getUser(e.userId);
            return {
                hasUnusualDmActivity: s,
                hasUnusualAccountActivity: a,
                sourceInviteCode: o,
                joinSourceType: l,
                inviterId: c,
                integrationType: I,
                ...e,
                isCurrentGuildMemberByTimestamp: r <= this.newMemberTimestamp,
                isIncludedInSearchResults: !1,
                user: T,
                sort: (0, E.getSortValueForMember)(e, null !== (n = t.selectedSort) && void 0 !== n ? n : _.OrderBy.ORDER_BY_UNSPECIFIED),
                joinedAtTimestamp: r,
                ...i
            }
        }
        _computeMemberSupplementals(e, t) {
            var n, i;
            let {
                sourceInviteCode: r,
                joinSourceType: s,
                inviterId: a,
                integrationType: o
            } = null !== (n = (0, c.getMemberSupplementalByGuildId)(this.guildId)[e]) && void 0 !== n ? n : {};
            return {
                sourceInviteCode: null != r ? r : null,
                joinSourceType: null != s ? s : null,
                inviterId: null != a ? a : null,
                integrationType: null != o ? o : null,
                hasUnusualDmActivity: null != (i = t) && new Date(i).getTime() >= T - _.UNUSUAL_DM_COMPARISON_DELTA,
                hasUnusualAccountActivity: (0, l.isSpammer)(e)
            }
        }
        createMember(e) {
            return this._membersMap.set(e.userId, e)
        }
        updateMember(e, t) {
            var n;
            if (null == t) return this._membersMap.set(e.userId, e);
            let i = {
                    ...e
                },
                r = {
                    ...t
                },
                s = !1,
                {
                    sourceInviteCode: o,
                    hasUnusualDmActivity: l,
                    hasUnusualAccountActivity: u,
                    joinSourceType: d,
                    inviterId: _,
                    integrationType: c
                } = this._computeMemberSupplementals(i.userId, null !== (n = r.unusualDMActivityUntil) && void 0 !== n ? n : i.unusualDMActivityUntil);
            for (let e in i.sourceInviteCode !== o && (r.sourceInviteCode = o), i.hasUnusualDmActivity !== l && (r.hasUnusualDmActivity = l), i.hasUnusualAccountActivity !== u && (r.hasUnusualAccountActivity = u), i.joinSourceType !== d && (r.joinSourceType = d), i.inviterId !== _ && (r.inviterId = _), i.integrationType !== c && (r.integrationType = c), r) {
                let t = r[e],
                    n = i[e];
                !a()(t, n) && (i[e] = t, s = !0)
            }
            return this._membersMap.set(i.userId, i) || s
        }
        removeMember(e) {
            return this._membersMap.delete(e)
        }
        getMemberByUserId(e) {
            return this._membersMap.get(e)
        }
        values(e) {
            return this._membersMap.values(e, !0)
        }
        count(e) {
            return this._membersMap.size(e)
        }
        get version() {
            return this._membersMap.version
        }
        constructor(e) {
            I(this, "guildId", void 0), I(this, "_membersMap", void 0), I(this, "newMemberTimestamp", Date.now()), this.guildId = e, this._membersMap = h()
        }
    }
}