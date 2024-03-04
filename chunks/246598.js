function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144"),
        r = n("383018");
    let a = new Map,
        o = new Map;

    function l(e) {
        if (!o.has(e)) {
            var t;
            o.set(e, {
                commandId: null === (t = r.default.getActiveCommand(e)) || void 0 === t ? void 0 : t.id,
                optionName: r.default.getActiveOptionName(e),
                optionNameToAutocompleteQueries: new Map,
                optionNameToLastResults: new Map,
                optionNameToNonce: new Map,
                optionNameToLastQuery: new Map,
                lastErrored: !1,
                lastResponseNonce: void 0
            })
        }
        return o.get(e)
    }

    function u() {
        return a.clear(), o.clear(), !0
    }

    function d(e) {
        let {
            channelId: t,
            command: n
        } = e;
        c(t, null == n ? void 0 : n.id)
    }

    function c(e, t) {
        let n = r.default.getActiveOptionName(e),
            i = o.get(e);
        return null != i && (t !== i.commandId || n !== i.optionName) && (null != t && t !== i.commandId && (i.optionNameToLastResults.clear(), i.optionNameToNonce.clear(), i.optionNameToLastQuery.clear(), i.optionNameToAutocompleteQueries.clear()), i.lastErrored = !1, i.commandId = t, i.optionName = n, !0)
    }
    class f extends i.default.Store {
        initialize() {
            this.waitFor(r.default)
        }
        getLastErrored(e) {
            return l(e).lastErrored
        }
        getAutocompleteChoices(e, t, n) {
            var i;
            let s = l(e);
            return null === (i = s.optionNameToAutocompleteQueries.get(t)) || void 0 === i ? void 0 : i.get(n)
        }
        getAutocompleteLastChoices(e, t) {
            let n = l(e);
            return n.optionNameToLastResults.get(t)
        }
        getLastResponseNonce(e) {
            return l(e).lastResponseNonce
        }
    }
    f.displayName = "ApplicationCommandAutocompleteStore";
    var _ = new f(s.default, {
        CONNECTION_OPEN: u,
        LOGOUT: u,
        CHANNEL_SELECT: u,
        APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function(e) {
            var t;
            let {
                nonce: n,
                channelId: i,
                query: s,
                name: r
            } = e, o = l(i);
            if (o.optionNameToLastQuery.get(r) === s) return !1;
            o.optionNameToLastQuery.set(r, s);
            let u = null === (t = o.optionNameToAutocompleteQueries.get(r)) || void 0 === t ? void 0 : t.get(s);
            if (null != u) return o.lastErrored = !1, o.optionNameToLastResults.set(r, u), !0;
            let d = o.optionNameToNonce.get(r);
            if (null != d && a.delete(d), a.set(n, {
                    channelId: i,
                    query: s,
                    name: r
                }), o.optionNameToNonce.set(r, n), o.lastErrored) return o.lastErrored = !1, !0
        },
        APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function(e) {
            var t, n;
            let {
                choices: i,
                nonce: s
            } = e, r = a.get(s);
            if (null == r) return !1;
            a.delete(s);
            let o = null !== (n = null == i ? void 0 : i.map(e => {
                    var t;
                    return {
                        ...e,
                        displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                    }
                })) && void 0 !== n ? n : [],
                u = l(r.channelId);
            return null == u.optionNameToAutocompleteQueries.get(r.name) && u.optionNameToAutocompleteQueries.set(r.name, new Map), null === (t = u.optionNameToAutocompleteQueries.get(r.name)) || void 0 === t || t.set(r.query, o), u.optionNameToLastQuery.get(r.name) === r.query && (u.lastErrored = !1, u.optionNameToLastResults.set(r.name, o)), u.lastResponseNonce = s, !0
        },
        INTERACTION_FAILURE: function(e) {
            let {
                nonce: t
            } = e;
            if (null == t) return !1;
            let n = a.get(t);
            if (null == n) return !1;
            a.delete(t);
            let i = l(n.channelId);
            return i.lastErrored = !0, !0
        },
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: d,
        APP_LAUNCHER_SET_ACTIVE_COMMAND: d,
        APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
            let {
                channelId: t,
                command: n
            } = e;
            c(t, null == n ? void 0 : n.id)
        }
    })
}