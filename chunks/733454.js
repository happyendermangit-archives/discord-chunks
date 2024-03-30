function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildMemberSafetySearch: function() {
            return p
        },
        getDefaultSearchState: function() {
            return d
        }
    });
    var r = n("498607"),
        o = n.n(r),
        i = n("761531"),
        a = n("690954"),
        u = n("523018"),
        s = n("282172");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
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
    var _ = Object.freeze(d());

    function E(e, t) {
        return null != e && (!!e.toLowerCase().includes(t.toLowerCase()) || !1)
    }
    var p = function() {
        var e, t, n;

        function r(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), f(this, "guildId", void 0), f(this, "_searchState", void 0), f(this, "hasDefaultQuery", void 0), this.guildId = e, this._searchState = d(), this.hasDefaultQuery = !0
        }
        return e = r, t = [{
            key: "requiresUsernameMatch",
            get: function() {
                return this._searchState.query.trim().length > 0
            }
        }, {
            key: "reset",
            value: function() {
                this._searchState = d(), this.hasDefaultQuery = !0
            }
        }, {
            key: "updateSearchState",
            value: function(e) {
                return this._searchState = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            f(e, t, n[t])
                        })
                    }
                    return e
                }({}, this._searchState, e), this.hasDefaultQuery = o()(this._searchState, _), !0
            }
        }, {
            key: "resetSearchState",
            value: function() {
                return !this.hasDefaultQuery && (this._searchState = d(), this.hasDefaultQuery = !0, !0)
            }
        }, {
            key: "getSearchState",
            value: function() {
                return this._searchState
            }
        }, {
            key: "isMemberIncludedInSearchResults",
            value: function(e) {
                var t, n, r = this._searchState,
                    o = r.query,
                    c = r.requireUnusualDmActivity,
                    f = r.requireCommunicationDisabled,
                    d = r.requireUnusualAccountActivity,
                    _ = r.requireUsernameQuarantined,
                    p = r.selectedRoleIds,
                    m = r.selectedJoinDateOption,
                    y = r.selectedAccountAgeOption,
                    I = r.selectedSourceInviteCode,
                    h = r.selectedJoinSourceType;
                if (o.length > 0 && ! function(e, t) {
                        if ("" === t.trim()) return !1;
                        var n = (c = (0, s.splitQuery)(t), f = 2, function(e) {
                                if (Array.isArray(e)) return e
                            }(c) || function(e, t) {
                                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != o) {
                                    var i = [],
                                        a = !0,
                                        u = !1;
                                    try {
                                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                    } catch (e) {
                                        u = !0, r = e
                                    } finally {
                                        try {
                                            !a && null != o.return && o.return()
                                        } finally {
                                            if (u) throw r
                                        }
                                    }
                                    return i
                                }
                            }(c, f) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return l(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                                }
                            }(c, f) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()),
                            r = n[0],
                            o = n[1],
                            i = !0,
                            a = !1,
                            u = void 0;
                        try {
                            for (var c, f, d, _ = o[Symbol.iterator](); !(i = (d = _.next()).done); i = !0) {
                                var p = d.value;
                                if (e.userId === p) return !0
                            }
                        } catch (e) {
                            a = !0, u = e
                        } finally {
                            try {
                                !i && null != _.return && _.return()
                            } finally {
                                if (a) throw u
                            }
                        }
                        var m = !0,
                            y = !1,
                            I = void 0;
                        try {
                            for (var h, O = r[Symbol.iterator](); !(m = (h = O.next()).done); m = !0) {
                                var T = h.value;
                                if (E(e.nick, T)) return !0
                            }
                        } catch (e) {
                            y = !0, I = e
                        } finally {
                            try {
                                !m && null != O.return && O.return()
                            } finally {
                                if (y) throw I
                            }
                        }
                        if (null == e.user) return !1;
                        var S = e.user,
                            v = S.globalName,
                            g = S.username,
                            A = !0,
                            b = !1,
                            N = void 0;
                        try {
                            for (var R, C = r[Symbol.iterator](); !(A = (R = C.next()).done); A = !0) {
                                var P = R.value;
                                if (E(g, P)) return !0
                            }
                        } catch (e) {
                            b = !0, N = e
                        } finally {
                            try {
                                !A && null != C.return && C.return()
                            } finally {
                                if (b) throw N
                            }
                        }
                        var D = !0,
                            L = !1,
                            M = void 0;
                        try {
                            for (var U, w = r[Symbol.iterator](); !(D = (U = w.next()).done); D = !0) {
                                var k = U.value;
                                if (E(v, k)) return !0
                            }
                        } catch (e) {
                            L = !0, M = e
                        } finally {
                            try {
                                !D && null != w.return && w.return()
                            } finally {
                                if (L) throw M
                            }
                        }
                        return !1
                    }(e, o)) return !1;
                if (p.size > 0) {
                    ;
                    if (t = e, !(0 !== (n = p).size && Array.from(n).every(function(e) {
                            return t.roles.includes(e)
                        }))) return !1
                }
                if (null != m.afterDate && e.joinedAtTimestamp < m.afterDate || null != m.beforeDate && e.joinedAtTimestamp > m.beforeDate || null != y.afterDate && u.default.extractTimestamp(e.userId) < y.afterDate || null != y.beforeDate && u.default.extractTimestamp(e.userId) > y.beforeDate || null != I && e.sourceInviteCode !== I || null != h && e.joinSourceType !== h) return !1;
                if (c || f || d || _) return !!(c && e.hasUnusualDmActivity || f && (0, a.isMemberCommunicationDisabled)(e) || d && e.hasUnusualAccountActivity || _ && (0, i.hasAutomodQuarantinedProfile)(e)) || !1;
                return !0
            }
        }], c(e.prototype, t), n && c(e, n), r
    }()
}