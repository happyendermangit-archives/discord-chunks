function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("433355"),
        d = n("944486"),
        _ = n("581364");
    let c = {};

    function E() {
        return c = {}, !0
    }

    function I(e) {
        return !(e in c) && (c[e] = {
            activeCommand: null,
            activeCommandSection: null,
            activeOptionName: null,
            preferredCommandId: null,
            optionStates: {},
            initialValues: {}
        }), c[e]
    }

    function T(e) {
        var t;
        let {
            channelId: n,
            command: i,
            section: r,
            initialValues: s,
            location: a,
            triggerSection: o,
            queryLength: l
        } = e, u = I(n);
        if ((null == i ? void 0 : i.id) === (null === (t = u.activeCommand) || void 0 === t ? void 0 : t.id)) return !1;
        u.activeCommand = i, u.activeCommandSection = r, u.activeOptionName = null, u.preferredCommandId = null, u.initialValues = null != s ? s : {};
        let d = {};
        return (null == i ? void 0 : i.options) != null && i.options.forEach(e => {
            d[e.name] = {
                isActive: !1,
                hasValue: !1,
                lastValidationResult: null,
                optionValue: null
            }
        }), u.optionStates = d, null != i && (0, _.trackCommandSelected)({
            command: i,
            location: a,
            triggerSection: o,
            queryLength: l
        }), !0
    }

    function f(e) {
        var t, n;
        let {
            channelId: i,
            commandId: r
        } = e, s = I(i);
        return r !== s.preferredCommandId && (null !== s.preferredCommandId || r !== (null !== (n = null === (t = s.activeCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null)) && (s.activeCommand = null, s.activeOptionName = null, s.preferredCommandId = r, s.optionStates = {}, !0)
    }

    function S(e) {
        let {
            channelId: t,
            changedOptionStates: n
        } = e, i = I(t), r = {
            ...i.optionStates
        };
        for (let [e, t] of Object.entries(n)) {
            var s, a, o;
            if (!(e in i.optionStates)) continue;
            if (!(void 0 !== t.hasValue ? t.hasValue : r[e].hasValue)) {
                r[e] = {
                    hasValue: !1,
                    isActive: !1,
                    lastValidationResult: null,
                    optionValue: null,
                    location: void 0,
                    length: void 0
                }, i.activeOptionName === e && (i.activeOptionName = null);
                continue
            }
            let n = r[e];
            r[e] = {
                hasValue: !0,
                isActive: void 0 !== t.isActive ? t.isActive : n.isActive,
                lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : n.lastValidationResult,
                optionValue: null !== (s = t.optionValue) && void 0 !== s ? s : n.optionValue,
                location: null !== (a = t.location) && void 0 !== a ? a : n.location,
                length: null !== (o = t.length) && void 0 !== o ? o : n.length
            }, void 0 !== t.isActive && (t.isActive ? (null != i.activeOptionName && i.activeOptionName !== e && (r[i.activeOptionName] = {
                ...r[i.activeOptionName]
            }, r[i.activeOptionName].isActive = !1), i.activeOptionName = e) : e === i.activeOptionName && (i.activeOptionName = null))
        }
        return i.optionStates = r, !0
    }
    class A extends(i = o.default.Store) {
        initialize() {
            u.default.addChangeListener(() => {
                let e = d.default.getChannelId();
                if (null == e) return c = {}, !0;
                let t = u.default.getCurrentSidebarChannelId(e);
                if (null != t && t in c) return !1;
                c = e in c ? {
                    [e]: c[e]
                } : {}
            })
        }
        getActiveCommand(e) {
            return I(e).activeCommand
        }
        getActiveCommandSection(e) {
            return I(e).activeCommandSection
        }
        getActiveOptionName(e) {
            return I(e).activeOptionName
        }
        getActiveOption(e) {
            var t, n, i;
            let r = I(e);
            return null !== (i = null === (n = r.activeCommand) || void 0 === n ? void 0 : null === (t = n.options) || void 0 === t ? void 0 : t.find(e => e.name === r.activeOptionName)) && void 0 !== i ? i : null
        }
        getPreferredCommandId(e) {
            return I(e).preferredCommandId
        }
        getOptionStates(e) {
            return I(e).optionStates
        }
        getOptionState(e, t) {
            return I(e).optionStates[t]
        }
        getOption(e, t) {
            var n, i;
            return null === (i = I(e).activeCommand) || void 0 === i ? void 0 : null === (n = i.options) || void 0 === n ? void 0 : n.find(e => e.name === t)
        }
        getState(e) {
            return {
                ...I(e)
            }
        }
    }
    a = "ApplicationCommandStore", (s = "displayName") in(r = A) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a;
    let h = new A(l.default, {
        CONNECTION_OPEN: E,
        CHANNEL_SELECT: E,
        LOGOUT: E,
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: T,
        APPLICATION_COMMAND_SET_PREFERRED_COMMAND: f,
        APPLICATION_COMMAND_UPDATE_OPTIONS: S,
        APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
            let {
                channelId: t,
                preferredCommandId: n,
                command: i,
                section: r,
                location: s,
                changedOptionStates: a
            } = e, o = T({
                type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                channelId: t,
                command: i,
                section: r,
                location: s
            }), l = f({
                type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
                channelId: t,
                commandId: n
            }), u = S({
                type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
                channelId: t,
                changedOptionStates: a
            });
            return o || l || u
        }
    });
    t.default = h
}