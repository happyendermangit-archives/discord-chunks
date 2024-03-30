function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CommandClickable: function() {
            return g
        },
        default: function() {
            return A
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("503113"),
        u = n("292206"),
        s = n("861272"),
        l = n("838726"),
        c = n("53867"),
        f = n("935741"),
        d = n("309944"),
        _ = n("29884"),
        E = n("894288"),
        p = n("266140"),
        m = n("120447"),
        y = n("281767"),
        I = n("118891"),
        h = n("407048"),
        O = n("941504"),
        T = n("98834");

    function S(e, t, n, o) {
        if (null != e) {
            var l = function() {
                var r = f.default.getChannel(e);
                if (null != r) {
                    var i = u.getCachedCommand(r, n),
                        l = i.command,
                        c = i.application;
                    if (null != l && l.name === t) {
                        m.ComponentDispatch.dispatch(y.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: e
                        });
                        var d, _, E = null != c ? {
                            type: s.ApplicationCommandSectionType.APPLICATION,
                            id: c.id,
                            icon: null !== (_ = null == c ? void 0 : null === (d = c.bot) || void 0 === d ? void 0 : d.username) && void 0 !== _ ? _ : c.icon,
                            name: c.name,
                            application: c
                        } : null;
                        a.setActiveCommand({
                            channelId: e,
                            command: null,
                            section: null
                        }), a.setActiveCommand({
                            channelId: e,
                            command: l,
                            section: E,
                            location: o
                        })
                    }
                }
            };
            "" !== d.default.getDraft(e, d.DraftType.ChannelMessage) ? (0, i.openModal)(function(t) {
                return r.createElement(i.ConfirmModal, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r, o, i;
                            r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[o] = i
                        })
                    }
                    return e
                }({
                    header: O.default.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_HEADER,
                    confirmText: O.default.Messages.CLEAR,
                    cancelText: O.default.Messages.CANCEL,
                    onConfirm: function() {
                        return l()
                    },
                    confirmButtonColor: i.Button.Colors.BRAND,
                    onCloseCallback: function() {
                        m.ComponentDispatch.dispatch(y.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: e
                        })
                    }
                }, t), r.createElement(i.Text, {
                    variant: "text-md/normal"
                }, O.default.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_BODY))
            }) : l()
        }
    }

    function v(e) {
        var t, n = e.node,
            a = e.output,
            d = e.state,
            m = (0, o.useStateFromStores)([f.default, E.default], function() {
                var e;
                return f.default.getChannel(null !== (e = n.channelId) && void 0 !== e ? e : E.default.getChannelId())
            }, [n.channelId]),
            O = (0, o.useStateFromStoresObject)([_.default], function() {
                return {
                    hasSendMessagePerm: _.default.can(y.Permissions.SEND_MESSAGES, m),
                    hasUseAppCommandsPerm: _.default.can(y.Permissions.USE_APPLICATION_COMMANDS, m)
                }
            }),
            T = O.hasSendMessagePerm,
            v = O.hasUseAppCommandsPerm,
            g = u.useCommand(m, null !== (t = n.commandKey) && void 0 !== t ? t : "").command,
            A = c.UseLegacyChatInput.useSetting(),
            b = r.useMemo(function() {
                if (null == g || null == m || g.name !== n.commandName || A) return !1;
                var e = m.isPrivate();
                if ((0, l.computeIsReadOnlyThread)(m) || !e && !T) return !1;
                var t = (null == g ? void 0 : g.applicationId) === I.BuiltInSectionId.BUILT_IN;
                return !!e || !!t || !!v || !1
            }, [m, g, T, v, n.commandName, A]),
            N = r.useCallback(function(e) {
                null == e || e.stopPropagation(), null != m && null != n.commandName && null != n.commandKey && S(m.id, n.commandName, n.commandKey, s.ApplicationCommandTriggerLocations.MENTION)
            }, [m, n.commandKey, n.commandName]);
        return b ? r.createElement(i.Tooltip, {
            key: d.key,
            text: n.output,
            position: "top"
        }, function(e) {
            var t = e.onMouseEnter,
                o = e.onMouseLeave;
            return r.createElement(p.default, {
                role: "link",
                key: d.key,
                onClick: N,
                onMouseEnter: t,
                onMouseLeave: o
            }, h.COMMAND_SENTINEL, a(n.content, d))
        }) : r.createElement("span", null, h.COMMAND_SENTINEL, a(n.content, d))
    }

    function g(e) {
        var t = e.commandId,
            n = e.commandName,
            a = e.commandDescription,
            u = e.onClick,
            l = (0, o.useStateFromStores)([E.default], function() {
                return E.default.getChannelId()
            }),
            c = function(e) {
                null == e || e.stopPropagation(), S(l, n, t, s.ApplicationCommandTriggerLocations.POPULAR_COMMANDS), null == u || u(t)
            };
        return r.createElement(i.Tooltip, {
            text: a,
            position: "top",
            tooltipContentClassName: T.tooltip
        }, function(e) {
            var t = e.onMouseEnter,
                o = e.onMouseLeave;
            return r.createElement(i.Button, {
                color: i.ButtonColors.PRIMARY,
                size: i.ButtonSizes.ICON,
                onClick: c,
                onMouseEnter: t,
                onMouseLeave: o
            }, "/", n)
        })
    }

    function A(e) {
        return {
            react: function(e, t, n) {
                return r.createElement(v, {
                    node: e,
                    output: t,
                    state: n
                })
            }
        }
    }
}