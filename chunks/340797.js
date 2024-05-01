function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("490504"),
        s = n("946273"),
        o = n("441110"),
        l = n("689938"),
        u = n("377865");

    function d(e) {
        let {
            guild: t,
            message: n
        } = e;
        return (0, s.useNewMemberBadge)(t.id, n.author.id) ? (0, i.jsx)(r.Popout, {
            animation: r.Popout.Animation.TRANSLATE,
            align: "center",
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            renderPopout: e => {
                let {
                    closePopout: r
                } = e;
                return (0, i.jsx)(o.default, {
                    guild: t,
                    message: n,
                    onClose: r
                })
            },
            children: e => {
                let {
                    onClick: t
                } = e;
                return (0, i.jsx)(r.Clickable, {
                    onClick: t,
                    tag: "span",
                    children: (0, i.jsx)(r.Tooltip, {
                        text: l.default.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT,
                        children: e => (0, i.jsx)("div", {
                            className: u.newMemberBadge,
                            ...e,
                            children: (0, i.jsx)(a.default, {
                                width: 20,
                                height: 20
                            })
                        })
                    })
                })
            }
        }) : null
    }
}