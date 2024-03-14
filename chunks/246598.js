function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144"),
        r = n("716241"),
        a = n("383018"),
        o = n("49111");
    let l = new Map,
        u = new Map,
        d = new Map;

    function c(e) {
        if (!u.has(e)) {
            var t;
            u.set(e, {
                commandId: null === (t = a.default.getActiveCommand(e)) || void 0 === t ? void 0 : t.id,
                optionName: a.default.getActiveOptionName(e),
                optionNameToAutocompleteQueries: new Map,
                optionNameToLastResults: new Map,
                optionNameToNonce: new Map,
                optionNameToLastQuery: new Map,
                lastErrored: !1,
                lastResponseNonce: void 0
            })
        }
        return u.get(e)
    }

    function f() {
        return l.clear(), u.clear(), !0
    }

    function _(e) {
        let {
            channelId: t,
            command: n
        } = e;
        E(t, null == n ? void 0 : n.id)
    }

    function E(e, t) {
        let n = a.default.getActiveOptionName(e),
            i = u.get(e);
        return null != i && (t !== i.commandId || n !== i.optionName) && (null != t && t !== i.commandId && (i.optionNameToLastResults.clear(), i.optionNameToNonce.clear(), i.optionNameToLastQuery.clear(), i.optionNameToAutocompleteQueries.clear()), i.lastErrored = !1, i.commandId = t, i.optionName = n, !0)
    }
    class h extends i.default.Store {
        initialize() {
            this.waitFor(a.default)
        }
        getLastErrored(e) {
            return c(e).lastErrored
        }
        getAutocompleteChoices(e, t, n) {
            var i;
            let s = c(e);
            return null === (i = s.optionNameToAutocompleteQueries.get(t)) || void 0 === i ? void 0 : i.get(n)
        }
        getAutocompleteLastChoices(e, t) {
            let n = c(e);
            return n.optionNameToLastResults.get(t)
        }
        getLastResponseNonce(e) {
            return c(e).lastResponseNonce
        }
    }
    h.displayName = "ApplicationCommandAutocompleteStore";
    var g = new h(s.default, {
        CONNECTION_OPEN: f,
        LOGOUT: f,
        CHANNEL_SELECT: f,
        APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function(e) {
            var t;
            let {
                nonce: n,
                channelId: i,
                query: s,
                name: r
            } = e, a = c(i);
            if (a.optionNameToLastQuery.get(r) === s) return !1;
            a.optionNameToLastQuery.set(r, s);
            let o = null === (t = a.optionNameToAutocompleteQueries.get(r)) || void 0 === t ? void 0 : t.get(s);
            if (null != o) return a.lastErrored = !1, a.optionNameToLastResults.set(r, o), !0;
            let u = a.optionNameToNonce.get(r);
            if (null != u && l.delete(u), l.set(n, {
                    channelId: i,
                    query: s,
                    name: r
                }), d.set(n, new Date), a.optionNameToNonce.set(r, n), a.lastErrored) return a.lastErrored = !1, !0
        },
        APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function(e) {
            var t, n;
            let {
                choices: i,
                nonce: s
            } = e, a = l.get(s);
            if (null == a) return !1;
            l.delete(s);
            let u = null !== (n = null == i ? void 0 : i.map(e => {
                    var t;
                    return {
                        ...e,
                        displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                    }
                })) && void 0 !== n ? n : [],
                f = d.get(s),
                _ = null != f ? new Date().getTime() - f.getTime() : 0;
            (0, r.trackWithMetadata)(o.AnalyticEvents.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
                duration_ms: _,
                error: !1,
                num_options: u.length
            }), d.delete(s);
            let E = c(a.channelId);
            return null == E.optionNameToAutocompleteQueries.get(a.name) && E.optionNameToAutocompleteQueries.set(a.name, new Map), null === (t = E.optionNameToAutocompleteQueries.get(a.name)) || void 0 === t || t.set(a.query, u), E.optionNameToLastQuery.get(a.name) === a.query && (E.lastErrored = !1, E.optionNameToLastResults.set(a.name, u)), E.lastResponseNonce = s, !0
        },
        INTERACTION_FAILURE: function(e) {
            let {
                nonce: t
            } = e;
            if (null == t) return !1;
            let n = l.get(t);
            if (null == n) return !1;
            l.delete(t);
            let i = d.get(t),
                s = null != i ? new Date().getTime() - i.getTime() : 0;
            (0, r.trackWithMetadata)(o.AnalyticEvents.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
                duration_ms: s,
                error: !0
            }), d.delete(t);
            let a = c(n.channelId);
            return a.lastErrored = !0, !0
        },
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: _,
        APP_LAUNCHER_SET_ACTIVE_COMMAND: _,
        APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
            let {
                channelId: t,
                command: n
            } = e;
            E(t, null == n ? void 0 : n.id)
        }
    })
}