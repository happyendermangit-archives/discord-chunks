function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
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
                className: i,
                renderLinkComponent: f,
                inactive: m,
                messageId: p,
                channelId: h
            } = e;
            return (0, l.jsx)(r.MessagesInteractionContext.Consumer, {
                children: e => (0, l.jsxs)("div", {
                    className: a(i, c.wrapper, {
                        [c.disableInteractions]: e.disableInteractions
                    }),
                    children: [m && null == t ? (0, l.jsx)("div", {
                        className: c.iconWrapper,
                        children: (0, l.jsx)(u.default, {
                            className: c.iconPlay
                        })
                    }) : null, null != t ? (0, l.jsx)(s.Clickable, {
                        onClick: t,
                        className: a(c.iconWrapperActive),
                        tabIndex: m ? -1 : 0,
                        "aria-label": d.default.Messages.PLAY,
                        children: (0, l.jsx)(u.default, {
                            className: c.iconPlay
                        })
                    }) : null, null != n ? f({
                        href: n,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: c.iconWrapperActive,
                        children: (0, l.jsx)(o.default, {
                            "aria-label": d.default.Messages.OPEN_LINK,
                            className: null != t ? c.iconExternalMargins : c.iconExternal
                        }),
                        messageId: p,
                        channelId: h
                    }) : null]
                })
            })
        }
}