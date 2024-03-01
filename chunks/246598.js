function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var i = n("446674"),
        a = n("913144"),
        l = n("383018");
    let s = new Map,
        r = new Map;

    function u(e) {
        if (!r.has(e)) {
            var t;
            r.set(e, {
                commandId: null === (t = l.default.getActiveCommand(e)) || void 0 === t ? void 0 : t.id,
                optionName: l.default.getActiveOptionName(e),
                optionNameToAutocompleteQueries: new Map,
                optionNameToLastResults: new Map,
                optionNameToNonce: new Map,
                optionNameToLastQuery: new Map,
                lastErrored: !1,
                lastResponseNonce: void 0
            })
        }
        return r.get(e)
    }

    function d() {
        return s.clear(), r.clear(), !0
    }

    function o(e) {
        let {
            channelId: t,
            command: n
        } = e;
        c(t, null == n ? void 0 : n.id)
    }

    function c(e, t) {
        let n = l.default.getActiveOptionName(e),
            i = r.get(e);
        return null != i && (t !== i.commandId || n !== i.optionName) && (null != t && t !== i.commandId && (i.optionNameToLastResults.clear(), i.optionNameToNonce.clear(), i.optionNameToLastQuery.clear(), i.optionNameToAutocompleteQueries.clear()), i.lastErrored = !1, i.commandId = t, i.optionName = n, !0)
    }
    class _ extends i.default.Store {
        initialize() {
            this.waitFor(l.default)
        }
        getLastErrored(e) {
            return u(e).lastErrored
        }
        getAutocompleteChoices(e, t, n) {
            var i;
            let a = u(e);
            return null === (i = a.optionNameToAutocompleteQueries.get(t)) || void 0 === i ? void 0 : i.get(n)
        }
        getAutocompleteLastChoices(e, t) {
            let n = u(e);
            return n.optionNameToLastResults.get(t)
        }
        getLastResponseNonce(e) {
            return u(e).lastResponseNonce
        }
    }
    _.displayName = "ApplicationCommandAutocompleteStore";
    var f = new _(a.default, {
        CONNECTION_OPEN: d,
        LOGOUT: d,
        CHANNEL_SELECT: d,
        APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function(e) {
            var t;
            let {
                nonce: n,
                channelId: i,
                query: a,
                name: l
            } = e, r = u(i);
            if (r.optionNameToLastQuery.get(l) === a) return !1;
            r.optionNameToLastQuery.set(l, a);
            let d = null === (t = r.optionNameToAutocompleteQueries.get(l)) || void 0 === t ? void 0 : t.get(a);
            if (null != d) return r.lastErrored = !1, r.optionNameToLastResults.set(l, d), !0;
            let o = r.optionNameToNonce.get(l);
            if (null != o && s.delete(o), s.set(n, {
                    channelId: i,
                    query: a,
                    name: l
                }), r.optionNameToNonce.set(l, n), r.lastErrored) return r.lastErrored = !1, !0
        },
        APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function(e) {
            var t, n;
            let {
                choices: i,
                nonce: a
            } = e, l = s.get(a);
            if (null == l) return !1;
            s.delete(a);
            let r = null !== (n = null == i ? void 0 : i.map(e => {
                    var t;
                    return {
                        ...e,
                        displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                    }
                })) && void 0 !== n ? n : [],
                d = u(l.channelId);
            return null == d.optionNameToAutocompleteQueries.get(l.name) && d.optionNameToAutocompleteQueries.set(l.name, new Map), null === (t = d.optionNameToAutocompleteQueries.get(l.name)) || void 0 === t || t.set(l.query, r), d.optionNameToLastQuery.get(l.name) === l.query && (d.lastErrored = !1, d.optionNameToLastResults.set(l.name, r)), d.lastResponseNonce = a, !0
        },
        INTERACTION_FAILURE: function(e) {
            let {
                nonce: t
            } = e;
            if (null == t) return !1;
            let n = s.get(t);
            if (null == n) return !1;
            s.delete(t);
            let i = u(n.channelId);
            return i.lastErrored = !0, !0
        },
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: o,
        APP_LAUNCHER_SET_ACTIVE_COMMAND: o,
        APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
            let {
                channelId: t,
                command: n
            } = e;
            c(t, null == n ? void 0 : n.id)
        }
    })
}