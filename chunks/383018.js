function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("222007");
    var i = n("446674"),
        a = n("913144"),
        l = n("982108"),
        s = n("18494"),
        r = n("389153");
    let u = {};

    function d() {
        return u = {}, !0
    }

    function o(e) {
        return !(e in u) && (u[e] = {
            activeCommand: null,
            activeCommandSection: null,
            activeOptionName: null,
            preferredCommandId: null,
            optionStates: {},
            initialValues: {}
        }), u[e]
    }

    function c(e) {
        var t;
        let {
            channelId: n,
            command: i,
            section: a,
            initialValues: l,
            location: s,
            triggerSection: u,
            queryLength: d
        } = e, c = o(n);
        if ((null == i ? void 0 : i.id) === (null === (t = c.activeCommand) || void 0 === t ? void 0 : t.id)) return !1;
        c.activeCommand = i, c.activeCommandSection = a, c.activeOptionName = null, c.preferredCommandId = null, c.initialValues = null != l ? l : {};
        let _ = {};
        return (null == i ? void 0 : i.options) != null && i.options.forEach(e => {
            _[e.name] = {
                isActive: !1,
                hasValue: !1,
                lastValidationResult: null,
                optionValue: null
            }
        }), c.optionStates = _, null != i && (0, r.trackCommandSelected)({
            command: i,
            location: s,
            triggerSection: u,
            queryLength: d
        }), !0
    }

    function _(e) {
        var t, n;
        let {
            channelId: i,
            commandId: a
        } = e, l = o(i);
        return a !== l.preferredCommandId && (null !== l.preferredCommandId || a !== (null !== (n = null === (t = l.activeCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null)) && (l.activeCommand = null, l.activeOptionName = null, l.preferredCommandId = a, l.optionStates = {}, !0)
    }

    function f(e) {
        let {
            channelId: t,
            changedOptionStates: n
        } = e, i = o(t), a = {
            ...i.optionStates
        };
        for (let [e, t] of Object.entries(n)) {
            var l, s, r;
            if (!(e in i.optionStates)) continue;
            let n = void 0 !== t.hasValue ? t.hasValue : a[e].hasValue;
            if (!n) {
                a[e] = {
                    hasValue: !1,
                    isActive: !1,
                    lastValidationResult: null,
                    optionValue: null,
                    location: void 0,
                    length: void 0
                }, i.activeOptionName === e && (i.activeOptionName = null);
                continue
            }
            let u = a[e];
            a[e] = {
                hasValue: !0,
                isActive: void 0 !== t.isActive ? t.isActive : u.isActive,
                lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : u.lastValidationResult,
                optionValue: null !== (l = t.optionValue) && void 0 !== l ? l : u.optionValue,
                location: null !== (s = t.location) && void 0 !== s ? s : u.location,
                length: null !== (r = t.length) && void 0 !== r ? r : u.length
            }, void 0 !== t.isActive && (t.isActive ? (null != i.activeOptionName && i.activeOptionName !== e && (a[i.activeOptionName] = {
                ...a[i.activeOptionName]
            }, a[i.activeOptionName].isActive = !1), i.activeOptionName = e) : e === i.activeOptionName && (i.activeOptionName = null))
        }
        return i.optionStates = a, !0
    }
    class h extends i.default.Store {
        initialize() {
            l.default.addChangeListener(() => {
                let e = s.default.getChannelId();
                if (null == e) return u = {}, !0;
                let t = l.default.getCurrentSidebarChannelId(e);
                if (null != t && t in u) return !1;
                u = e in u ? {
                    [e]: u[e]
                } : {}
            })
        }
        getActiveCommand(e) {
            let t = o(e);
            return t.activeCommand
        }
        getActiveCommandSection(e) {
            let t = o(e);
            return t.activeCommandSection
        }
        getActiveOptionName(e) {
            let t = o(e);
            return t.activeOptionName
        }
        getActiveOption(e) {
            var t, n, i;
            let a = o(e);
            return null !== (i = null === (n = a.activeCommand) || void 0 === n ? void 0 : null === (t = n.options) || void 0 === t ? void 0 : t.find(e => e.name === a.activeOptionName)) && void 0 !== i ? i : null
        }
        getPreferredCommandId(e) {
            let t = o(e);
            return t.preferredCommandId
        }
        getOptionStates(e) {
            let t = o(e);
            return t.optionStates
        }
        getOptionState(e, t) {
            let n = o(e);
            return n.optionStates[t]
        }
        getOption(e, t) {
            var n, i;
            let a = o(e);
            return null === (i = a.activeCommand) || void 0 === i ? void 0 : null === (n = i.options) || void 0 === n ? void 0 : n.find(e => e.name === t)
        }
        getState(e) {
            return {
                ...o(e)
            }
        }
    }
    h.displayName = "ApplicationCommandStore";
    let E = new h(a.default, {
        CONNECTION_OPEN: d,
        CHANNEL_SELECT: d,
        LOGOUT: d,
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: c,
        APPLICATION_COMMAND_SET_PREFERRED_COMMAND: _,
        APPLICATION_COMMAND_UPDATE_OPTIONS: f,
        APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
            let {
                channelId: t,
                preferredCommandId: n,
                command: i,
                section: a,
                changedOptionStates: l
            } = e, s = c({
                type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                channelId: t,
                command: i,
                section: a
            }), r = _({
                type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
                channelId: t,
                commandId: n
            }), u = f({
                type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
                channelId: t,
                changedOptionStates: l
            });
            return s || r || u
        }
    });
    var g = E
}