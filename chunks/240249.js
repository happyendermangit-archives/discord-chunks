function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getCachedCommand: function() {
            return m
        },
        getCachedApplicationSection: function() {
            return _
        },
        getCachedResults: function() {
            return I
        },
        getChangeKeys: function() {
            return T
        },
        useDiscovery: function() {
            return A
        },
        executeQuery: function() {
            return E
        },
        useCommand: function() {
            return C
        },
        useCommandsForApplication: function() {
            return N
        }
    }), n("222007"), n("424973"), n("808653");
    var i = n("884691"),
        l = n("446674"),
        a = n("305961"),
        o = n("449008"),
        s = n("589777"),
        r = n("988721"),
        u = n("972620"),
        d = n("524768"),
        c = n("389153"),
        p = n("317041"),
        f = n("49111");

    function m(e, t) {
        var n, i, l, a;
        if (null == t) return {
            application: void 0,
            command: void 0
        };
        let o = r.default.getUserState(),
            s = r.default.getContextState(e),
            u = Object.values(null !== (l = null === (n = o.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {}).concat(Object.values(null !== (a = null === (i = s.result) || void 0 === i ? void 0 : i.sections) && void 0 !== a ? a : {}));
        for (let e of u) {
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

    function _(e, t, n) {
        var i, l, a, o, s;
        let u = r.default.getUserState(),
            d = r.default.getContextState(e),
            c = null !== (s = null === (l = u.result) || void 0 === l ? void 0 : null === (i = l.sections) || void 0 === i ? void 0 : i[n]) && void 0 !== s ? s : null === (o = d.result) || void 0 === o ? void 0 : null === (a = o.sections) || void 0 === a ? void 0 : a[n];
        return null == c ? void 0 : c.descriptor
    }

    function I(e, t, n) {
        let i = r.default.query(e, {
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

    function T(e) {
        let t = r.default.getUserState(),
            n = r.default.getContextState(e);
        return [null == t ? void 0 : t.result, null == n ? void 0 : n.result]
    }

    function A(e, t, n) {
        let o = (0, l.useStateFromStores)([a.default], () => a.default.getGuild(null == e ? void 0 : e.guild_id), [e.guild_id]),
            {
                descriptors: u,
                commands: d,
                sectionedCommands: c,
                loading: m
            } = (0, r.useDiscoveryState)(e, o, t, {
                ...n,
                allowFetch: !0
            }),
            [_, I] = i.useState(null),
            T = i.useRef(!1);
        T.current = m;
        let A = i.useMemo(() => {
            let e = [];
            if (null != n.placeholderCount)
                for (let i = 0; i < n.placeholderCount; i++) e.push(M(i, t.commandType));
            return e
        }, [t.commandType, n.placeholderCount]);
        return i.useMemo(() => {
            let e = {
                loading: T,
                commands: d,
                activeSections: u,
                commandsByActiveSection: c,
                filteredSectionId: _,
                hasMoreAfter: !1,
                placeholders: m ? A : [],
                sectionDescriptors: u,
                filterSection: e => {
                    I(e)
                },
                scrollDown: f.NOOP
            };
            if (null != _) {
                let t = c.find(e => e.section.id === _);
                e.activeSections = null != t ? [t.section] : [], e.commandsByActiveSection = null != t ? [t] : []
            }
            if (m) {
                let t = c[0];
                if (null != t) e.commandsByActiveSection = [{
                    section: t.section,
                    data: [...t.data, ...A]
                }, ...c.slice(1)];
                else {
                    let t = s.BUILT_IN_SECTIONS[p.BuiltInSectionId.BUILT_IN];
                    e.activeSections = [t], e.commandsByActiveSection = [{
                        section: t,
                        data: A
                    }]
                }
                e.commands = [...d, ...A]
            }
            return e
        }, [d, u, _, c, m, A])
    }

    function E(e, t, n) {
        let {
            descriptors: i,
            commands: l,
            loading: a
        } = r.default.query(e, t, n), o = [];
        if (null != n.placeholderCount && a)
            for (let e = 0; e < n.placeholderCount; e++) o.push(M(e, t.commandType));
        return {
            commands: a ? [...l, ...o] : l,
            sections: a && 0 === i.length ? [s.BUILT_IN_SECTIONS[p.BuiltInSectionId.BUILT_IN]] : i
        }
    }

    function C(e, t) {
        let n = (0, r.useUserIndexState)(!0, !0),
            l = (0, r.useContextIndexState)(e, !0, !0);
        return i.useMemo(() => {
            if (null != t) {
                var e, i, a, o;
                let s = Object.values(null !== (a = null === (e = n.result) || void 0 === e ? void 0 : e.sections) && void 0 !== a ? a : {}).concat(Object.values(null !== (o = null === (i = l.result) || void 0 === i ? void 0 : i.sections) && void 0 !== o ? o : {}));
                for (let e of s) {
                    let n = e.commands[t];
                    if (null != n) return {
                        command: n,
                        application: e.descriptor.application
                    }
                }
            }
            return {
                command: void 0,
                application: void 0
            }
        }, [l.result, n.result, t])
    }

    function N(e, t, n) {
        let l = (0, r.useUserIndexState)(!0, !0),
            a = (0, r.useContextIndexState)(e, !0, !0);
        return i.useMemo(() => {
            var e, i, s, r, u, d;
            let p = null !== (u = null === (i = l.result) || void 0 === i ? void 0 : null === (e = i.sections) || void 0 === e ? void 0 : e[t]) && void 0 !== u ? u : null === (s = a.result) || void 0 === s ? void 0 : s.sections[t],
                f = Object.values(null !== (d = null == p ? void 0 : p.commands) && void 0 !== d ? d : {}).map(e => null == e.rootCommand ? e : (0, c.buildCommand)({
                    rootCommand: e.rootCommand,
                    command: e.rootCommand,
                    applicationId: e.applicationId
                })).reduce((e, t) => (e[t.id] = t, e), {});
            return {
                application: null == p ? void 0 : null === (r = p.descriptor) || void 0 === r ? void 0 : r.application,
                commands: n.map(e => f[e]).filter(o.isNotNullish)
            }
        }, [null == l ? void 0 : l.result, null == a ? void 0 : a.result, t, n])
    }
    let g = {
        id: "placeholder-section",
        type: d.ApplicationCommandSectionType.APPLICATION,
        name: ""
    };

    function M(e, t) {
        return {
            type: t,
            inputType: d.ApplicationCommandInputType.PLACEHOLDER,
            id: "placeholder-".concat(e),
            name: "",
            displayName: "",
            description: "",
            displayDescription: "",
            applicationId: "",
            section: g
        }
    }
}