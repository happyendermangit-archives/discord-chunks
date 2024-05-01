function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CommandClickable: function() {
            return C
        },
        default: function() {
            return g
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("442837"),
        s = n("481060"),
        o = n("555573"),
        l = n("10718"),
        u = n("895924"),
        d = n("665906"),
        _ = n("695346"),
        c = n("592125"),
        E = n("703558"),
        I = n("496675"),
        T = n("944486"),
        f = n("797053"),
        S = n("585483"),
        h = n("981631"),
        A = n("689079"),
        m = n("665692"),
        N = n("689938"),
        p = n("204104");

    function O(e, t, n, r) {
        if (null == e) return;
        let a = () => {
            let i = c.default.getChannel(e);
            if (null == i) return;
            let {
                command: a,
                application: s
            } = l.getCachedCommand(i, n);
            if (null != a && a.name === t) {
                var d, _;
                S.ComponentDispatch.dispatch(h.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                    channelId: e
                });
                let t = null != s ? {
                    type: u.ApplicationCommandSectionType.APPLICATION,
                    id: s.id,
                    icon: null !== (_ = null == s ? void 0 : null === (d = s.bot) || void 0 === d ? void 0 : d.username) && void 0 !== _ ? _ : s.icon,
                    name: s.name,
                    application: s
                } : null;
                o.setActiveCommand({
                    channelId: e,
                    command: null,
                    section: null
                }), o.setActiveCommand({
                    channelId: e,
                    command: a,
                    section: t,
                    location: r
                })
            }
        };
        "" !== E.default.getDraft(e, E.DraftType.ChannelMessage) ? (0, s.openModal)(t => (0, i.jsx)(s.ConfirmModal, {
            header: N.default.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_HEADER,
            confirmText: N.default.Messages.CLEAR,
            cancelText: N.default.Messages.CANCEL,
            onConfirm: () => a(),
            confirmButtonColor: s.Button.Colors.BRAND,
            onCloseCallback: () => {
                S.ComponentDispatch.dispatch(h.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                    channelId: e
                })
            },
            ...t,
            children: (0, i.jsx)(s.Text, {
                variant: "text-md/normal",
                children: N.default.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_BODY
            })
        })) : a()
    }

    function R(e) {
        var t;
        let {
            node: n,
            output: o,
            state: E
        } = e, S = (0, a.useStateFromStores)([c.default, T.default], () => {
            var e;
            return c.default.getChannel(null !== (e = n.channelId) && void 0 !== e ? e : T.default.getChannelId())
        }, [n.channelId]), {
            hasSendMessagePerm: N,
            hasUseAppCommandsPerm: p
        } = (0, a.useStateFromStoresObject)([I.default], () => {
            let e = I.default.can(h.Permissions.SEND_MESSAGES, S);
            return {
                hasSendMessagePerm: e,
                hasUseAppCommandsPerm: I.default.can(h.Permissions.USE_APPLICATION_COMMANDS, S)
            }
        }), {
            command: R
        } = l.useCommand(S, null !== (t = n.commandKey) && void 0 !== t ? t : ""), C = _.UseLegacyChatInput.useSetting(), g = r.useMemo(() => {
            if (null == R || null == S || R.name !== n.commandName || C) return !1;
            let e = S.isPrivate();
            if ((0, d.computeIsReadOnlyThread)(S) || !e && !N) return !1;
            let t = (null == R ? void 0 : R.applicationId) === A.BuiltInSectionId.BUILT_IN;
            return !!e || !!t || !!p || !1
        }, [S, R, N, p, n.commandName, C]), L = r.useCallback(e => {
            null == e || e.stopPropagation(), null != S && null != n.commandName && null != n.commandKey && O(S.id, n.commandName, n.commandKey, u.ApplicationCommandTriggerLocations.MENTION)
        }, [S, n.commandKey, n.commandName]);
        return g ? (0, i.jsx)(s.Tooltip, {
            text: n.output,
            position: "top",
            children: e => {
                let {
                    onMouseEnter: t,
                    onMouseLeave: r
                } = e;
                return (0, i.jsxs)(f.default, {
                    role: "link",
                    onClick: L,
                    onMouseEnter: t,
                    onMouseLeave: r,
                    children: [m.COMMAND_SENTINEL, o(n.content, E)]
                }, E.key)
            }
        }, E.key) : (0, i.jsxs)("span", {
            children: [m.COMMAND_SENTINEL, o(n.content, E)]
        })
    }

    function C(e) {
        let {
            commandId: t,
            commandName: n,
            commandDescription: r,
            onClick: o
        } = e, l = (0, a.useStateFromStores)([T.default], () => T.default.getChannelId()), d = e => {
            null == e || e.stopPropagation(), O(l, n, t, u.ApplicationCommandTriggerLocations.POPULAR_COMMANDS), null == o || o(t)
        };
        return (0, i.jsx)(s.Tooltip, {
            text: r,
            position: "top",
            tooltipContentClassName: p.tooltip,
            children: e => {
                let {
                    onMouseEnter: t,
                    onMouseLeave: r
                } = e;
                return (0, i.jsxs)(s.Button, {
                    color: s.ButtonColors.PRIMARY,
                    size: s.ButtonSizes.ICON,
                    onClick: d,
                    onMouseEnter: t,
                    onMouseLeave: r,
                    children: ["/", n]
                })
            }
        })
    }

    function g(e) {
        return {
            react: (e, t, n) => (0, i.jsx)(R, {
                node: e,
                output: t,
                state: n
            })
        }
    }
}