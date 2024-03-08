function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        r = n("62843"),
        o = n("648739"),
        u = n("132755"),
        d = n("782340"),
        c = n("703967"),
        f = e => {
            let {
                onPlay: t,
                externalURL: n,
                className: l,
                renderLinkComponent: f,
                inactive: p,
                messageId: m,
                channelId: h
            } = e;
            return (0, i.jsx)(r.MessagesInteractionContext.Consumer, {
                children: e => (0, i.jsxs)("div", {
                    className: a(l, c.wrapper, {
                        [c.disableInteractions]: e.disableInteractions
                    }),
                    children: [p && null == t ? (0, i.jsx)("div", {
                        className: c.iconWrapper,
                        children: (0, i.jsx)(u.default, {
                            className: c.iconPlay
                        })
                    }) : null, null != t ? (0, i.jsx)(s.Clickable, {
                        onClick: t,
                        className: a(c.iconWrapperActive),
                        tabIndex: p ? -1 : 0,
                        "aria-label": d.default.Messages.PLAY,
                        children: (0, i.jsx)(u.default, {
                            className: c.iconPlay
                        })
                    }) : null, null != n ? f({
                        href: n,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: c.iconWrapperActive,
                        children: (0, i.jsx)(o.default, {
                            "aria-label": d.default.Messages.OPEN_LINK,
                            className: null != t ? c.iconExternalMargins : c.iconExternal
                        }),
                        messageId: m,
                        channelId: h
                    }) : null]
                })
            })
        }
}