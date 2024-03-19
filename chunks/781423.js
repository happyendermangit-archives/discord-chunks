function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CommandClickable: function() {
            return v
        },
        default: function() {
            return N
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("446674"),
        s = n("77078"),
        r = n("507217"),
        o = n("240249"),
        u = n("524768"),
        d = n("300322"),
        c = n("845579"),
        f = n("42203"),
        p = n("474643"),
        m = n("957255"),
        h = n("18494"),
        x = n("666897"),
        E = n("659500"),
        y = n("49111"),
        g = n("317041"),
        S = n("406291"),
        C = n("782340"),
        I = n("816411");

    function _(e, t, n, l) {
        if (null == e) return;
        let a = () => {
            let i = f.default.getChannel(e);
            if (null == i) return;
            let {
                command: a,
                application: s
            } = o.getCachedCommand(i, n);
            if (null != a && a.name === t) {
                var d, c;
                E.ComponentDispatch.dispatch(y.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                    channelId: e
                });
                let t = null != s ? {
                    type: u.ApplicationCommandSectionType.APPLICATION,
                    id: s.id,
                    icon: null !== (c = null == s ? void 0 : null === (d = s.bot) || void 0 === d ? void 0 : d.username) && void 0 !== c ? c : s.icon,
                    name: s.name,
                    application: s
                } : null;
                r.setActiveCommand({
                    channelId: e,
                    command: null,
                    section: null
                }), r.setActiveCommand({
                    channelId: e,
                    command: a,
                    section: t,
                    location: l
                })
            }
        };
        "" !== p.default.getDraft(e, p.DraftType.ChannelMessage) ? (0, s.openModal)(t => (0, i.jsx)(s.ConfirmModal, {
            header: C.default.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_HEADER,
            confirmText: C.default.Messages.CLEAR,
            cancelText: C.default.Messages.CANCEL,
            onConfirm: () => a(),
            confirmButtonColor: s.Button.Colors.BRAND,
            onCloseCallback: () => {
                E.ComponentDispatch.dispatch(y.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                    channelId: e
                })
            },
            ...t,
            children: (0, i.jsx)(s.Text, {
                variant: "text-md/normal",
                children: C.default.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_BODY
            })
        })) : a()
    }

    function T(e) {
        var t;
        let {
            node: n,
            output: r,
            state: p
        } = e, E = (0, a.useStateFromStores)([f.default, h.default], () => {
            var e;
            return f.default.getChannel(null !== (e = n.channelId) && void 0 !== e ? e : h.default.getChannelId())
        }, [n.channelId]), {
            hasSendMessagePerm: C,
            hasUseAppCommandsPerm: I
        } = (0, a.useStateFromStoresObject)([m.default], () => {
            let e = m.default.can(y.Permissions.SEND_MESSAGES, E),
                t = m.default.can(y.Permissions.USE_APPLICATION_COMMANDS, E);
            return {
                hasSendMessagePerm: e,
                hasUseAppCommandsPerm: t
            }
        }), {
            command: T
        } = o.useCommand(E, null !== (t = n.commandKey) && void 0 !== t ? t : ""), v = c.UseLegacyChatInput.useSetting(), N = l.useMemo(() => {
            if (null == T || null == E || T.name !== n.commandName || v) return !1;
            let e = E.isPrivate(),
                t = (0, d.computeIsReadOnlyThread)(E);
            if (t || !e && !C) return !1;
            let i = (null == T ? void 0 : T.applicationId) === g.BuiltInSectionId.BUILT_IN;
            return !!e || !!i || !!I || !1
        }, [E, T, C, I, n.commandName, v]), A = l.useCallback(e => {
            null == e || e.stopPropagation(), null != E && null != n.commandName && null != n.commandKey && _(E.id, n.commandName, n.commandKey, u.ApplicationCommandTriggerLocations.MENTION)
        }, [E, n.commandKey, n.commandName]);
        return N ? (0, i.jsx)(s.Tooltip, {
            text: n.output,
            position: "top",
            children: e => {
                let {
                    onMouseEnter: t,
                    onMouseLeave: l
                } = e;
                return (0, i.jsxs)(x.default, {
                    role: "link",
                    onClick: A,
                    onMouseEnter: t,
                    onMouseLeave: l,
                    children: [S.COMMAND_SENTINEL, r(n.content, p)]
                }, p.key)
            }
        }, p.key) : (0, i.jsxs)("span", {
            children: [S.COMMAND_SENTINEL, r(n.content, p)]
        })
    }

    function v(e) {
        let {
            commandId: t,
            commandName: n,
            commandDescription: l,
            onClick: r
        } = e, o = (0, a.useStateFromStores)([h.default], () => h.default.getChannelId()), d = e => {
            null == e || e.stopPropagation(), _(o, n, t, u.ApplicationCommandTriggerLocations.POPULAR_COMMANDS), null == r || r(t)
        };
        return (0, i.jsx)(s.Tooltip, {
            text: l,
            position: "top",
            tooltipContentClassName: I.tooltip,
            children: e => {
                let {
                    onMouseEnter: t,
                    onMouseLeave: l
                } = e;
                return (0, i.jsxs)(s.Button, {
                    color: s.ButtonColors.PRIMARY,
                    size: s.ButtonSizes.ICON,
                    onClick: d,
                    onMouseEnter: t,
                    onMouseLeave: l,
                    children: ["/", n]
                })
            }
        })
    }

    function N(e) {
        return {
            react: (e, t, n) => (0, i.jsx)(T, {
                node: e,
                output: t,
                state: n
            })
        }
    }
}