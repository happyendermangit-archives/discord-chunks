function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("475179"),
        l = n("605403"),
        u = n("158010"),
        d = n("871499"),
        _ = n("689938"),
        c = n("297430");

    function E(e) {
        let {
            className: t,
            isVertical: n
        } = e;
        return (0, i.jsxs)("div", {
            className: c.iconContainer,
            children: [(0, i.jsx)(l.default, {
                className: a()(n ? c.upCaret : c.leftCaret, t)
            }), (0, i.jsx)(u.default, {
                className: a()(c.members, t)
            })]
        })
    }

    function I(e) {
        let {
            className: t,
            isVertical: n
        } = e;
        return (0, i.jsxs)("div", {
            className: c.iconContainer,
            children: [(0, i.jsx)(l.default, {
                className: a()(n ? c.downCaret : c.rightCaret, t)
            }), n && (0, i.jsx)(u.default, {
                className: a()(c.members, t)
            })]
        })
    }

    function T(e) {
        let {
            channelId: t,
            className: n,
            isParticipantsOpen: s,
            isVertical: l = !1,
            hideTooltip: u = !1
        } = e, T = r.useCallback(e => {
            let {
                className: t
            } = e;
            return s ? (0, i.jsx)(I, {
                className: t,
                isVertical: l
            }) : (0, i.jsx)(E, {
                className: t,
                isVertical: l
            })
        }, [s, l]);
        return (0, i.jsx)(d.default, {
            label: s ? _.default.Messages.VIDEO_CALL_HIDE_MEMBERS : _.default.Messages.VIDEO_CALL_SHOW_MEMBERS,
            className: a()(c.participantsButton, n),
            onClick: function() {
                o.default.toggleParticipants(t, !s)
            },
            iconComponent: T,
            shouldShowTooltip: !u
        })
    }
}