function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144"),
        r = n("982108"),
        a = n("18494"),
        o = n("389153");
    let l = {};

    function u() {
        return l = {}, !0
    }

    function d(e) {
        return !(e in l) && (l[e] = {
            activeCommand: null,
            activeCommandSection: null,
            activeOptionName: null,
            preferredCommandId: null,
            optionStates: {},
            initialValues: {}
        }), l[e]
    }

    function c(e) {
        var t;
        let {
            channelId: n,
            command: i,
            section: s,
            initialValues: r,
            location: a,
            triggerSection: l,
            queryLength: u
        } = e, c = d(n);
        if ((null == i ? void 0 : i.id) === (null === (t = c.activeCommand) || void 0 === t ? void 0 : t.id)) return !1;
        c.activeCommand = i, c.activeCommandSection = s, c.activeOptionName = null, c.preferredCommandId = null, c.initialValues = null != r ? r : {};
        let f = {};
        return (null == i ? void 0 : i.options) != null && i.options.forEach(e => {
            f[e.name] = {
                isActive: !1,
                hasValue: !1,
                lastValidationResult: null,
                optionValue: null
            }
        }), c.optionStates = f, null != i && (0, o.trackCommandSelected)({
            command: i,
            location: a,
            triggerSection: l,
            queryLength: u
        }), !0
    }

    function f(e) {
        var t, n;
        let {
            channelId: i,
            commandId: s
        } = e, r = d(i);
        return s !== r.preferredCommandId && (null !== r.preferredCommandId || s !== (null !== (n = null === (t = r.activeCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null)) && (r.activeCommand = null, r.activeOptionName = null, r.preferredCommandId = s, r.optionStates = {}, !0)
    }

    function _(e) {
        let {
            channelId: t,
            changedOptionStates: n
        } = e, i = d(t), s = {
            ...i.optionStates
        };
        for (let [e, t] of Object.entries(n)) {
            var r, a, o;
            if (!(e in i.optionStates)) continue;
            let n = void 0 !== t.hasValue ? t.hasValue : s[e].hasValue;
            if (!n) {
                s[e] = {
                    hasValue: !1,
                    isActive: !1,
                    lastValidationResult: null,
                    optionValue: null,
                    location: void 0,
                    length: void 0
                }, i.activeOptionName === e && (i.activeOptionName = null);
                continue
            }
            let l = s[e];
            s[e] = {
                hasValue: !0,
                isActive: void 0 !== t.isActive ? t.isActive : l.isActive,
                lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : l.lastValidationResult,
                optionValue: null !== (r = t.optionValue) && void 0 !== r ? r : l.optionValue,
                location: null !== (a = t.location) && void 0 !== a ? a : l.location,
                length: null !== (o = t.length) && void 0 !== o ? o : l.length
            }, void 0 !== t.isActive && (t.isActive ? (null != i.activeOptionName && i.activeOptionName !== e && (s[i.activeOptionName] = {
                ...s[i.activeOptionName]
            }, s[i.activeOptionName].isActive = !1), i.activeOptionName = e) : e === i.activeOptionName && (i.activeOptionName = null))
        }
        return i.optionStates = s, !0
    }
    class h extends i.default.Store {
        initialize() {
            r.default.addChangeListener(() => {
                let e = a.default.getChannelId();
                if (null == e) return l = {}, !0;
                let t = r.default.getCurrentSidebarChannelId(e);
                if (null != t && t in l) return !1;
                l = e in l ? {
                    [e]: l[e]
                } : {}
            })
        }
        getActiveCommand(e) {
            let t = d(e);
            return t.activeCommand
        }
        getActiveCommandSection(e) {
            let t = d(e);
            return t.activeCommandSection
        }
        getActiveOptionName(e) {
            let t = d(e);
            return t.activeOptionName
        }
        getActiveOption(e) {
            var t, n, i;
            let s = d(e);
            return null !== (i = null === (n = s.activeCommand) || void 0 === n ? void 0 : null === (t = n.options) || void 0 === t ? void 0 : t.find(e => e.name === s.activeOptionName)) && void 0 !== i ? i : null
        }
        getPreferredCommandId(e) {
            let t = d(e);
            return t.preferredCommandId
        }
        getOptionStates(e) {
            let t = d(e);
            return t.optionStates
        }
        getOptionState(e, t) {
            let n = d(e);
            return n.optionStates[t]
        }
        getOption(e, t) {
            var n, i;
            let s = d(e);
            return null === (i = s.activeCommand) || void 0 === i ? void 0 : null === (n = i.options) || void 0 === n ? void 0 : n.find(e => e.name === t)
        }
        getState(e) {
            return {
                ...d(e)
            }
        }
    }
    h.displayName = "ApplicationCommandStore";
    let E = new h(s.default, {
        CONNECTION_OPEN: u,
        CHANNEL_SELECT: u,
        LOGOUT: u,
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: c,
        APPLICATION_COMMAND_SET_PREFERRED_COMMAND: f,
        APPLICATION_COMMAND_UPDATE_OPTIONS: _,
        APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
            let {
                channelId: t,
                preferredCommandId: n,
                command: i,
                section: s,
                location: r,
                changedOptionStates: a
            } = e, o = c({
                type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                channelId: t,
                command: i,
                section: s,
                location: r
            }), l = f({
                type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
                channelId: t,
                commandId: n
            }), u = _({
                type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
                channelId: t,
                changedOptionStates: a
            });
            return o || l || u
        }
    });
    var g = E
}