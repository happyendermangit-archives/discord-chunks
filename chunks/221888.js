function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return D
        }
    }), n("411104"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("846519"),
        _ = n("481060"),
        c = n("239091"),
        E = n("410575"),
        I = n("199902"),
        T = n("594174"),
        f = n("321148"),
        S = n("794358"),
        h = n("823379"),
        A = n("5192"),
        m = n("354459"),
        N = n("981631"),
        O = n("689938"),
        p = n("910385");

    function R(e, t) {
        switch (e) {
            case m.ParticipantTypes.ACTIVITY:
                return O.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
                    numUsers: t
                });
            case m.ParticipantTypes.STREAM:
                return O.default.Messages.SPECTATORS.format({
                    numViewers: t
                });
            default:
                throw Error("Unknown participant type.")
        }
    }

    function C(e) {
        let {
            users: t,
            disableInteraction: n,
            guildId: r,
            participantType: s,
            channelId: o,
            handleUserContextMenu: l
        } = e, u = R(s, t.length);
        return (0, i.jsx)(_.Dialog, {
            "aria-label": u,
            className: p.popoutWrapper,
            children: (0, i.jsxs)(_.Scroller, {
                className: p.scroller,
                children: [(0, i.jsx)(_.Heading, {
                    variant: "heading-deprecated-12/semibold",
                    className: p.memberListHeader,
                    children: u
                }), (0, i.jsx)("div", {
                    children: t.map(e => (0, i.jsx)(f.default, {
                        guildId: null != r ? r : void 0,
                        className: a()(p.memberListItem, {
                            [p.popoutDisabled]: n
                        }),
                        textClassName: p.memberListItemText,
                        user: e,
                        disablePopout: n,
                        nick: A.default.getNickname(r, o, e),
                        onContextMenu: t => n ? null : l(t, e)
                    }, e.id))
                })]
            })
        })
    }

    function g(e) {
        let {
            users: t,
            guildId: n,
            channelId: r,
            maxVisibleUsers: s = 3,
            className: o,
            participantType: l
        } = e, u = R(l, t.length), d = t.length < s ? t.map(e => (0, i.jsx)("div", {
            className: p.viewersTooltipItem,
            children: A.default.getName(n, r, e)
        }, e.id)) : u;
        return (0, i.jsx)(_.TooltipContainer, {
            text: d,
            "aria-label": u,
            children: (0, i.jsxs)("div", {
                className: a()(p.viewers, o),
                children: [(0, i.jsx)(S.default, {
                    className: p.viewersIcon
                }), (0, i.jsx)("span", {
                    "aria-hidden": "true",
                    children: t.length
                })]
            })
        })
    }
    let L = [];

    function D(e) {
        let {
            channelId: t,
            guildId: s,
            participant: o,
            className: f,
            compact: S = !1,
            disableInteraction: A = !1,
            maxVisibleUsers: O = 3
        } = e, [R, D] = r.useState(!1), v = r.useRef(new d.DelayedCall(150, () => D(!1))), M = (0, u.useStateFromStoresArray)([I.default, T.default], () => {
            if (o.type === m.ParticipantTypes.STREAM) {
                let e = I.default.getViewerIds(o.id);
                return e.length > 0 ? e.map(e => T.default.getUser(e)).filter(h.isNotNullish) : L
            }
            return o.type === m.ParticipantTypes.ACTIVITY ? o.participants.size > 0 ? Array.from(o.participants).map(e => T.default.getUser(e)).filter(h.isNotNullish) : L : L
        }, [o]), y = r.useCallback(() => {
            v.current.cancel(), D(!0)
        }, []), P = r.useCallback(() => {
            v.current.delay()
        }, []), U = r.useCallback((e, t) => {
            y(), (0, c.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("15421")]).then(n.bind(n, "881351"));
                return n => (0, i.jsx)(e, {
                    ...n,
                    user: t
                })
            }, {
                onClose: P
            })
        }, [P, y]);
        if (0 === M.length) return null;
        if (S) return (0, i.jsx)(g, {
            maxVisibleUsers: O,
            users: M,
            guildId: s,
            channelId: t,
            className: f,
            participantType: o.type
        });
        let b = l()(M).take(O).map(e => (0, i.jsx)(_.Avatar, {
            src: e.getAvatarURL(s, 24),
            "aria-label": e.username,
            size: _.AvatarSizes.SIZE_24,
            className: p.viewer
        }, e.id)).value();
        return M.length > O && (b[b.length - 1] = (0, i.jsxs)("div", {
            className: p.overflow,
            children: ["+", M.length - O + 1]
        }, "overflow")), (0, i.jsx)(E.default, {
            section: N.AnalyticsSections.STREAM_VIEWER_POPOUT,
            children: (0, i.jsx)("div", {
                onMouseEnter: y,
                onMouseLeave: P,
                children: (0, i.jsx)(_.Popout, {
                    renderPopout: () => (0, i.jsx)(C, {
                        participantType: o.type,
                        handleUserContextMenu: U,
                        guildId: s,
                        channelId: t,
                        users: M,
                        disableInteraction: A
                    }),
                    shouldShow: R,
                    position: "top",
                    children: () => (0, i.jsx)("div", {
                        className: a()(p.viewers, f),
                        children: b
                    })
                })
            })
        })
    }
}