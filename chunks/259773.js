function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("278297"),
        l = n("138599"),
        u = n("897353"),
        d = n("689938"),
        _ = n("875170");
    t.default = e => {
        let {
            onPlay: t,
            externalURL: n,
            className: r,
            renderLinkComponent: c,
            inactive: E,
            messageId: I,
            channelId: T
        } = e;
        return (0, i.jsx)(o.MessagesInteractionContext.Consumer, {
            children: e => (0, i.jsxs)("div", {
                className: s()(r, _.wrapper, {
                    [_.disableInteractions]: e.disableInteractions
                }),
                children: [E && null == t ? (0, i.jsx)("div", {
                    className: _.iconWrapper,
                    children: (0, i.jsx)(u.default, {
                        className: _.iconPlay
                    })
                }) : null, null != t ? (0, i.jsx)(a.Clickable, {
                    onClick: t,
                    className: s()(_.iconWrapperActive),
                    tabIndex: E ? -1 : 0,
                    "aria-label": d.default.Messages.PLAY,
                    children: (0, i.jsx)(u.default, {
                        className: _.iconPlay
                    })
                }) : null, null != n ? c({
                    href: n,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    className: _.iconWrapperActive,
                    children: (0, i.jsx)(l.default, {
                        "aria-label": d.default.Messages.OPEN_LINK,
                        className: null != t ? _.iconExternalMargins : _.iconExternal
                    }),
                    messageId: I,
                    channelId: T
                }) : null]
            })
        })
    }
}