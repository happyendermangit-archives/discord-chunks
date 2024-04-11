function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        executeQuery: function() {
            return A
        },
        getCachedApplicationSection: function() {
            return T
        },
        getCachedCommand: function() {
            return I
        },
        getCachedResults: function() {
            return f
        },
        getChangeKeys: function() {
            return S
        },
        useCommand: function() {
            return m
        },
        useCommandsForApplication: function() {
            return N
        },
        useDiscovery: function() {
            return h
        }
    }), n("47120"), n("653041"), n("724458");
    var i = n("470079"),
        r = n("442837"),
        s = n("430824"),
        a = n("823379"),
        o = n("254711"),
        l = n("213459"),
        u = n("367790"),
        d = n("895924"),
        _ = n("581364"),
        c = n("689079"),
        E = n("981631");

    function I(e, t) {
        var n, i, r, s;
        if (null == t) return {
            application: void 0,
            command: void 0
        };
        let a = l.default.getUserState(),
            o = l.default.getContextState(e);
        for (let e of Object.values(null !== (r = null === (n = a.result) || void 0 === n ? void 0 : n.sections) && void 0 !== r ? r : {}).concat(Object.values(null !== (s = null === (i = o.result) || void 0 === i ? void 0 : i.sections) && void 0 !== s ? s : {}))) {
            let n = e.commands[t];
            if (null != n) return {
                application: e.descriptor.application,
                command: n
            }
        }
        return {
            application: void 0,
            command: void 0
        }
    }

    function T(e, t, n) {
        var i, r, s, a, o, u, d, _;
        let c = l.default.getUserState(),
            E = l.default.getContextState(e),
            I = l.default.getApplicationState(n),
            T = null !== (_ = null !== (d = null === (r = c.result) || void 0 === r ? void 0 : null === (i = r.sections) || void 0 === i ? void 0 : i[n]) && void 0 !== d ? d : null === (a = E.result) || void 0 === a ? void 0 : null === (s = a.sections) || void 0 === s ? void 0 : s[n]) && void 0 !== _ ? _ : null === (u = I.result) || void 0 === u ? void 0 : null === (o = u.sections) || void 0 === o ? void 0 : o[n];
        return null == T ? void 0 : T.descriptor
    }

    function f(e, t, n) {
        let i = l.default.query(e, {
            commandType: t,
            text: n
        }, {
            scoreMethod: u.ScoreMethod.COMMAND_OR_APPLICATION,
            allowFetch: !1
        });
        return {
            commands: i.commands,
            sections: i.descriptors
        }
    }

    function S(e) {
        let t = l.default.getUserState(),
            n = l.default.getContextState(e);
        return [null == t ? void 0 : t.result, null == n ? void 0 : n.result]
    }

    function h(e, t, n) {
        let a = (0, r.useStateFromStores)([s.default], () => s.default.getGuild(null == e ? void 0 : e.guild_id), [e.guild_id]),
            {
                descriptors: u,
                commands: d,
                sectionedCommands: _,
                loading: I
            } = (0, l.useDiscoveryState)(e, a, t, {
                ...n,
                allowFetch: !0
            }),
            [T, f] = i.useState(null),
            S = i.useRef(!1);
        S.current = I;
        let h = i.useMemo(() => {
            let e = [];
            if (null != n.placeholderCount)
                for (let i = 0; i < n.placeholderCount; i++) e.push(p(i, t.commandType));
            return e
        }, [t.commandType, n.placeholderCount]);
        return i.useMemo(() => {
            let e = {
                loading: S,
                commands: d,
                activeSections: u,
                commandsByActiveSection: _,
                filteredSectionId: T,
                hasMoreAfter: !1,
                placeholders: I ? h : [],
                sectionDescriptors: u,
                filterSection: e => {
                    f(e)
                },
                scrollDown: E.NOOP
            };
            if (null != T) {
                let t = _.find(e => e.section.id === T);
                e.activeSections = null != t ? [t.section] : [], e.commandsByActiveSection = null != t ? [t] : []
            }
            if (I) {
                let t = _[0];
                if (null != t) e.commandsByActiveSection = [{
                    section: t.section,
                    data: [...t.data, ...h]
                }, ..._.slice(1)];
                else {
                    let t = o.BUILT_IN_SECTIONS[c.BuiltInSectionId.BUILT_IN];
                    e.activeSections = [t], e.commandsByActiveSection = [{
                        section: t,
                        data: h
                    }]
                }
                e.commands = [...d, ...h]
            }
            return e
        }, [d, u, T, _, I, h])
    }

    function A(e, t, n) {
        let {
            descriptors: i,
            commands: r,
            loading: s
        } = l.default.query(e, t, n), a = [];
        if (null != n.placeholderCount && s)
            for (let e = 0; e < n.placeholderCount; e++) a.push(p(e, t.commandType));
        return {
            commands: s ? [...r, ...a] : r,
            sections: s && 0 === i.length ? [o.BUILT_IN_SECTIONS[c.BuiltInSectionId.BUILT_IN]] : i
        }
    }

    function m(e, t) {
        let n = (0, l.useUserIndexState)(!0, !0),
            r = (0, l.useContextIndexState)(e, !0, !0);
        return i.useMemo(() => {
            if (null != t) {
                var e, i, s, a;
                for (let o of Object.values(null !== (s = null === (e = n.result) || void 0 === e ? void 0 : e.sections) && void 0 !== s ? s : {}).concat(Object.values(null !== (a = null === (i = r.result) || void 0 === i ? void 0 : i.sections) && void 0 !== a ? a : {}))) {
                    let e = o.commands[t];
                    if (null != e) return {
                        command: e,
                        application: o.descriptor.application
                    }
                }
            }
            return {
                command: void 0,
                application: void 0
            }
        }, [r.result, n.result, t])
    }

    function N(e, t, n) {
        let r = (0, l.useUserIndexState)(!0, !0),
            s = (0, l.useContextIndexState)(e, !0, !0);
        return i.useMemo(() => {
            var e, i, o, l, u, d;
            let c = null !== (u = null === (i = r.result) || void 0 === i ? void 0 : null === (e = i.sections) || void 0 === e ? void 0 : e[t]) && void 0 !== u ? u : null === (o = s.result) || void 0 === o ? void 0 : o.sections[t],
                E = Object.values(null !== (d = null == c ? void 0 : c.commands) && void 0 !== d ? d : {}).map(e => null == e.rootCommand ? e : (0, _.buildCommand)({
                    rootCommand: e.rootCommand,
                    command: e.rootCommand,
                    applicationId: e.applicationId
                })).reduce((e, t) => (e[t.id] = t, e), {});
            return {
                application: null == c ? void 0 : null === (l = c.descriptor) || void 0 === l ? void 0 : l.application,
                commands: n.map(e => E[e]).filter(a.isNotNullish)
            }
        }, [null == r ? void 0 : r.result, null == s ? void 0 : s.result, t, n])
    }
    let O = {
        id: "placeholder-section",
        type: d.ApplicationCommandSectionType.APPLICATION,
        name: ""
    };

    function p(e, t) {
        return {
            type: t,
            inputType: d.ApplicationCommandInputType.PLACEHOLDER,
            id: "placeholder-".concat(e),
            name: "",
            displayName: "",
            description: "",
            displayDescription: "",
            applicationId: "",
            section: O
        }
    }
}