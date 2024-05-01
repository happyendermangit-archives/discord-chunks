function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildMemberSafetySearch: function() {
            return E
        },
        getDefaultSearchState: function() {
            return d
        }
    }), n("47120");
    var i = n("498607"),
        r = n.n(i),
        a = n("715903"),
        s = n("69882"),
        o = n("709054"),
        l = n("733026");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d() {
        return {
            query: "",
            requireUnusualDmActivity: !1,
            requireCommunicationDisabled: !1,
            requireUnusualAccountActivity: !1,
            requireUsernameQuarantined: !1,
            selectedRoleIds: new Set,
            selectedJoinDateOption: {
                optionId: 0,
                afterDate: null,
                beforeDate: null
            },
            selectedAccountAgeOption: {
                optionId: 0,
                afterDate: null,
                beforeDate: null
            },
            selectedJoinSourceType: void 0,
            selectedSourceInviteCode: void 0,
            selectedSort: void 0
        }
    }
    let _ = Object.freeze(d());

    function c(e, t) {
        return null != e && (!!e.toLowerCase().includes(t.toLowerCase()) || !1)
    }
    class E {
        get requiresUsernameMatch() {
            return this._searchState.query.trim().length > 0
        }
        reset() {
            this._searchState = d(), this.hasDefaultQuery = !0
        }
        updateSearchState(e) {
            return this._searchState = {
                ...this._searchState,
                ...e
            }, this.hasDefaultQuery = r()(this._searchState, _), !0
        }
        resetSearchState() {
            return !this.hasDefaultQuery && (this._searchState = d(), this.hasDefaultQuery = !0, !0)
        }
        getSearchState() {
            return this._searchState
        }
        isMemberIncludedInSearchResults(e) {
            let {
                query: t,
                requireUnusualDmActivity: n,
                requireCommunicationDisabled: i,
                requireUnusualAccountActivity: r,
                requireUsernameQuarantined: u,
                selectedRoleIds: d,
                selectedJoinDateOption: _,
                selectedAccountAgeOption: E,
                selectedSourceInviteCode: I,
                selectedJoinSourceType: T
            } = this._searchState;
            if (t.length > 0 && ! function(e, t) {
                    if ("" === t.trim()) return !1;
                    let [n, i] = (0, l.splitQuery)(t);
                    for (let t of i)
                        if (e.userId === t) return !0;
                    for (let t of n)
                        if (c(e.nick, t)) return !0;
                    if (null == e.user) return !1;
                    let {
                        globalName: r,
                        username: a
                    } = e.user;
                    for (let e of n)
                        if (c(a, e)) return !0;
                    for (let e of n)
                        if (c(r, e)) return !0;
                    return !1
                }(e, t)) return !1;
            if (d.size > 0) {
                var f, S;
                if (f = e, !(0 !== (S = d).size && Array.from(S).every(e => f.roles.includes(e)))) return !1
            }
            if (null != _.afterDate && e.joinedAtTimestamp < _.afterDate || null != _.beforeDate && e.joinedAtTimestamp > _.beforeDate || null != E.afterDate && o.default.extractTimestamp(e.userId) < E.afterDate || null != E.beforeDate && o.default.extractTimestamp(e.userId) > E.beforeDate || null != I && e.sourceInviteCode !== I || null != T && e.joinSourceType !== T) return !1;
            if (n || i || r || u) return !!(n && e.hasUnusualDmActivity || i && (0, s.isMemberCommunicationDisabled)(e) || r && e.hasUnusualAccountActivity || u && (0, a.hasAutomodQuarantinedProfile)(e)) || !1;
            return !0
        }
        constructor(e) {
            u(this, "guildId", void 0), u(this, "_searchState", void 0), u(this, "hasDefaultQuery", void 0), this.guildId = e, this._searchState = d(), this.hasDefaultQuery = !0
        }
    }
}