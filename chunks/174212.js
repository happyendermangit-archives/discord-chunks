function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("367907"),
        d = n("998698"),
        _ = n("981631");
    let c = new Map,
        E = new Map,
        I = new Map;

    function T(e) {
        if (!E.has(e)) {
            var t;
            E.set(e, {
                commandId: null === (t = d.default.getActiveCommand(e)) || void 0 === t ? void 0 : t.id,
                optionName: d.default.getActiveOptionName(e),
                optionNameToAutocompleteQueries: new Map,
                optionNameToLastResults: new Map,
                optionNameToNonce: new Map,
                optionNameToLastQuery: new Map,
                lastErrored: !1,
                lastResponseNonce: void 0
            })
        }
        return E.get(e)
    }

    function f() {
        return c.clear(), E.clear(), !0
    }

    function S(e) {
        let {
            channelId: t,
            command: n
        } = e;
        A(t, null == n ? void 0 : n.id)
    }

    function A(e, t) {
        let n = d.default.getActiveOptionName(e),
            i = E.get(e);
        return null != i && (t !== i.commandId || n !== i.optionName) && (null != t && t !== i.commandId && (i.optionNameToLastResults.clear(), i.optionNameToNonce.clear(), i.optionNameToLastQuery.clear(), i.optionNameToAutocompleteQueries.clear()), i.lastErrored = !1, i.commandId = t, i.optionName = n, !0)
    }
    class h extends(i = o.default.Store) {
        initialize() {
            this.waitFor(d.default)
        }
        getLastErrored(e) {
            return T(e).lastErrored
        }
        getAutocompleteChoices(e, t, n) {
            var i;
            return null === (i = T(e).optionNameToAutocompleteQueries.get(t)) || void 0 === i ? void 0 : i.get(n)
        }
        getAutocompleteLastChoices(e, t) {
            return T(e).optionNameToLastResults.get(t)
        }
        getLastResponseNonce(e) {
            return T(e).lastResponseNonce
        }
    }
    a = "ApplicationCommandAutocompleteStore", (s = "displayName") in(r = h) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new h(l.default, {
        CONNECTION_OPEN: f,
        LOGOUT: f,
        CHANNEL_SELECT: f,
        APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function(e) {
            var t;
            let {
                nonce: n,
                channelId: i,
                query: r,
                name: s
            } = e, a = T(i);
            if (a.optionNameToLastQuery.get(s) === r) return !1;
            a.optionNameToLastQuery.set(s, r);
            let o = null === (t = a.optionNameToAutocompleteQueries.get(s)) || void 0 === t ? void 0 : t.get(r);
            if (null != o) return a.lastErrored = !1, a.optionNameToLastResults.set(s, o), !0;
            let l = a.optionNameToNonce.get(s);
            if (null != l && c.delete(l), c.set(n, {
                    channelId: i,
                    query: r,
                    name: s
                }), I.set(n, new Date), a.optionNameToNonce.set(s, n), a.lastErrored) return a.lastErrored = !1, !0
        },
        APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function(e) {
            var t, n;
            let {
                choices: i,
                nonce: r
            } = e, s = c.get(r);
            if (null == s) return !1;
            c.delete(r);
            let a = null !== (n = null == i ? void 0 : i.map(e => {
                    var t;
                    return {
                        ...e,
                        displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                    }
                })) && void 0 !== n ? n : [],
                o = I.get(r),
                l = null != o ? new Date().getTime() - o.getTime() : 0;
            (0, u.trackWithMetadata)(_.AnalyticEvents.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
                duration_ms: l,
                error: !1,
                num_options: a.length
            }), I.delete(r);
            let d = T(s.channelId);
            return null == d.optionNameToAutocompleteQueries.get(s.name) && d.optionNameToAutocompleteQueries.set(s.name, new Map), null === (t = d.optionNameToAutocompleteQueries.get(s.name)) || void 0 === t || t.set(s.query, a), d.optionNameToLastQuery.get(s.name) === s.query && (d.lastErrored = !1, d.optionNameToLastResults.set(s.name, a)), d.lastResponseNonce = r, !0
        },
        INTERACTION_FAILURE: function(e) {
            let {
                nonce: t
            } = e;
            if (null == t) return !1;
            let n = c.get(t);
            if (null == n) return !1;
            c.delete(t);
            let i = I.get(t),
                r = null != i ? new Date().getTime() - i.getTime() : 0;
            return (0, u.trackWithMetadata)(_.AnalyticEvents.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
                duration_ms: r,
                error: !0
            }), I.delete(t), T(n.channelId).lastErrored = !0, !0
        },
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: S,
        APP_LAUNCHER_SET_ACTIVE_COMMAND: S,
        APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
            let {
                channelId: t,
                command: n
            } = e;
            A(t, null == n ? void 0 : n.id)
        }
    })
}