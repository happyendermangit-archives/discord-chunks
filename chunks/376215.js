function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("222007"), n("424973");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("974667"),
        o = n("942367"),
        u = n("446674"),
        d = n("913144"),
        c = n("81594"),
        f = n("798609"),
        p = n("206230"),
        m = n("302437"),
        h = n("383018"),
        x = n("474643"),
        E = n("585722"),
        y = n("898260"),
        g = n("378765"),
        S = n("393377"),
        C = n("761354"),
        _ = n("49111"),
        T = n("986548"),
        I = n("356410");
    let v = [];

    function A(e) {
        let {
            channelId: t,
            type: n
        } = e, a = (0, u.useStateFromStores)([p.default], () => p.default.keyboardModeEnabled), A = (0, m.default)("attachments", o.Orientations.HORIZONTAL), N = (0, u.useStateFromStores)([E.default], () => E.default.getUploads(t, n.drafts.type)), {
            isApplicationCommand: R,
            commandOptions: O,
            commandOptionStates: M
        } = (0, u.useStateFromStoresObject)([h.default], () => {
            let e = h.default.getActiveCommand(t);
            if (null == e) return {
                isApplicationCommand: !1,
                commandOptions: v,
                commandOptionStates: null
            };
            let n = h.default.getOptionStates(t);
            return {
                isApplicationCommand: !0,
                commandOptions: e.options,
                commandOptionStates: n
            }
        }), k = l.useMemo(() => {
            var e;
            return null !== (e = null == O ? void 0 : O.filter(e => {
                var t;
                return e.type === f.ApplicationCommandOptionType.ATTACHMENT && (null == M ? void 0 : null === (t = M[e.name]) || void 0 === t ? void 0 : t.hasValue)
            })) && void 0 !== e ? e : []
        }, [O, M]), [L, P] = l.useState([]);
        l.useEffect(() => {
            let e = () => {
                c.default.clearAll(t, n.drafts.type)
            };
            return d.default.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e), () => d.default.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        }, [t, n]);
        let b = l.useCallback(() => {
            A.focusFirstVisibleItem()
        }, [A]);
        return ((0, g.useComponentAction)({
            event: _.ComponentActions.FOCUS_ATTACHMENT_AREA,
            handler: b
        }), l.useEffect(() => {
            if (R) {
                let e = [];
                L.forEach(t => {
                    !k.some(e => t.name === e.name) && e.push(t)
                }), e.forEach(e => {
                    c.default.remove(t, e.name, n.drafts.type)
                }), P(k)
            }
        }, [t, k.length, n]), !R && 0 === N.length || R && 0 === k.length) ? null : (0, i.jsxs)(l.Fragment, {
            children: [(0, i.jsx)(r.ListNavigatorProvider, {
                navigator: A,
                children: (0, i.jsx)(r.ListNavigatorContainer, {
                    children: e => {
                        let {
                            ref: l,
                            ...r
                        } = e;
                        return (0, i.jsx)("ul", {
                            ref: l,
                            ...r,
                            className: s(T.channelAttachmentArea, I.scrollbarGhost),
                            children: R ? k.map(e => (0, i.jsx)(S.default, {
                                channelId: t,
                                keyboardModeEnabled: a,
                                option: e
                            }, e.name)) : N.map(e => (0, i.jsx)(C.default, {
                                channelId: t,
                                draftType: n.drafts.type,
                                upload: e,
                                keyboardModeEnabled: a,
                                clip: e.clip
                            }, e.id))
                        })
                    }
                })
            }), n.drafts.type === x.DraftType.FirstThreadMessage ? null : (0, i.jsx)(y.default, {})]
        })
    }
    var N = l.memo(function(e) {
        let {
            channelId: t,
            type: n,
            canAttachFiles: l
        } = e;
        return l ? (0, i.jsx)(A, {
            channelId: t,
            type: n
        }) : null
    })
}