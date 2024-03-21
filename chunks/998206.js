function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("151426"),
        u = n("77078"),
        d = n("244201"),
        c = n("206230"),
        f = n("427953"),
        p = n("550766"),
        m = n("292655"),
        h = n("478272"),
        x = n("685665"),
        E = n("384997"),
        y = n("128295"),
        g = n("414868"),
        S = n("49111"),
        C = n("994428"),
        T = n("13030"),
        _ = n("782340"),
        I = n("868387");

    function v(e) {
        let {
            disabled: t,
            channel: n,
            markAsDismissed: a,
            visibleContent: E,
            innerRef: v
        } = e, N = (0, d.useAppContext)(), {
            analyticsLocations: A
        } = (0, x.default)(), O = N === S.AppContext.POPOUT, R = (0, r.useStateFromStores)([c.default], () => c.default.useReducedMotion), M = (0, f.useIsActivitiesInTextEnabled)(n.id, "ChannelActivityPickerButton"), k = l.useCallback(() => {
            a(C.ContentDismissActionType.UNKNOWN), (0, h.default)({
                channel: M ? n : void 0,
                guildId: n.guild_id,
                locationObject: {
                    page: S.AnalyticsPages.GUILD_CHANNEL,
                    section: S.AnalyticsSections.CHANNEL_TEXT_AREA,
                    object: S.AnalyticsObjects.BUTTON_ICON,
                    objectType: S.AnalyticsObjectTypes.ACTIVITY
                },
                openInPopout: O,
                enableSelectedTextChannelInvite: !0,
                analyticsLocations: A
            }), (0, p.fetchShelf)({
                guildId: n.guild_id
            })
        }, [A, n, M, a, O]), L = () => {
            if (E === o.DismissibleContent.ACTIVITIES_TEXT_INPUT_BUTTON_SPARKLES) return (0, i.jsxs)("div", {
                className: I.sparkleContainer,
                children: [(0, i.jsx)(g.default, {
                    className: s(I.sparkleStar, {
                        [I.noAnimation]: R
                    })
                }), (0, i.jsx)(y.default, {
                    className: s(I.sparklePlus, {
                        [I.noAnimation]: R
                    })
                })]
            });
            return null
        };
        return t ? null : (0, i.jsx)(u.Tooltip, {
            text: _.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY,
            children: e => (0, i.jsxs)("div", {
                ...e,
                className: s(T.CHAT_INPUT_BUTTON_CLASSNAME, I.buttonContainer),
                ref: v,
                children: [(0, i.jsx)(m.default, {
                    onClick: k,
                    tabIndex: 0,
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4,
                            left: -4,
                            right: -4
                        }
                    }
                }), L()]
            })
        })
    }
    let N = [o.DismissibleContent.ACTIVITIES_TEXT_INPUT_BUTTON_SPARKLES];
    var A = l.memo(l.forwardRef(function(e, t) {
        return (0, i.jsx)(E.default, {
            contentTypes: N,
            children: n => {
                let {
                    visibleContent: l,
                    markAsDismissed: a
                } = n;
                return (0, i.jsx)(v, {
                    ...e,
                    innerRef: t,
                    visibleContent: l,
                    markAsDismissed: () => a(C.ContentDismissActionType.UNKNOWN)
                })
            }
        })
    }))
}