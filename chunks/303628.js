function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("924826"),
        l = n("536895"),
        u = n("442837"),
        d = n("570140"),
        _ = n("166459"),
        c = n("911969"),
        E = n("607070"),
        I = n("209613"),
        T = n("998698"),
        f = n("703558"),
        S = n("117530"),
        h = n("132338"),
        A = n("459273"),
        m = n("444282"),
        N = n("898463"),
        O = n("981631"),
        p = n("683600"),
        R = n("633353");
    let C = [];

    function g(e) {
        let {
            channelId: t,
            type: n
        } = e, s = (0, u.useStateFromStores)([E.default], () => E.default.keyboardModeEnabled), g = (0, I.default)("attachments", l.Orientations.HORIZONTAL), L = (0, u.useStateFromStores)([S.default], () => S.default.getUploads(t, n.drafts.type)), {
            isApplicationCommand: D,
            commandOptions: v,
            commandOptionStates: M
        } = (0, u.useStateFromStoresObject)([T.default], () => {
            let e = T.default.getActiveCommand(t);
            if (null == e) return {
                isApplicationCommand: !1,
                commandOptions: C,
                commandOptionStates: null
            };
            let n = T.default.getOptionStates(t);
            return {
                isApplicationCommand: !0,
                commandOptions: e.options,
                commandOptionStates: n
            }
        }), y = r.useMemo(() => {
            var e;
            return null !== (e = null == v ? void 0 : v.filter(e => {
                var t;
                return e.type === c.ApplicationCommandOptionType.ATTACHMENT && (null == M ? void 0 : null === (t = M[e.name]) || void 0 === t ? void 0 : t.hasValue)
            })) && void 0 !== e ? e : []
        }, [v, M]), [P, U] = r.useState([]);
        r.useEffect(() => {
            let e = () => {
                _.default.clearAll(t, n.drafts.type)
            };
            return d.default.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e), () => d.default.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        }, [t, n]);
        let b = r.useCallback(() => {
            g.focusFirstVisibleItem()
        }, [g]);
        return ((0, A.useComponentAction)({
            event: O.ComponentActions.FOCUS_ATTACHMENT_AREA,
            handler: b
        }), r.useEffect(() => {
            if (D) {
                let e = [];
                P.forEach(t => {
                    !y.some(e => t.name === e.name) && e.push(t)
                }), e.forEach(e => {
                    _.default.remove(t, e.name, n.drafts.type)
                }), U(y)
            }
        }, [t, y.length, n]), !D && 0 === L.length || D && 0 === y.length) ? null : (0, i.jsxs)(r.Fragment, {
            children: [(0, i.jsx)(o.ListNavigatorProvider, {
                navigator: g,
                children: (0, i.jsx)(o.ListNavigatorContainer, {
                    children: e => {
                        let {
                            ref: r,
                            ...o
                        } = e;
                        return (0, i.jsx)("ul", {
                            ref: r,
                            ...o,
                            className: a()(p.channelAttachmentArea, R.scrollbarGhost),
                            children: D ? y.map(e => (0, i.jsx)(m.default, {
                                channelId: t,
                                keyboardModeEnabled: s,
                                option: e
                            }, e.name)) : L.map(e => (0, i.jsx)(N.default, {
                                channelId: t,
                                draftType: n.drafts.type,
                                upload: e,
                                keyboardModeEnabled: s,
                                clip: e.clip
                            }, e.id))
                        })
                    }
                })
            }), n.drafts.type === f.DraftType.FirstThreadMessage ? null : (0, i.jsx)(h.default, {})]
        })
    }
    t.default = r.memo(function(e) {
        let {
            channelId: t,
            type: n,
            canAttachFiles: r
        } = e;
        return r ? (0, i.jsx)(g, {
            channelId: t,
            type: n
        }) : null
    })
}