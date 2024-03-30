function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("416801"),
        s = n("964449"),
        l = n("328545"),
        c = n("941504"),
        f = n("606352");
    t.default = function(e) {
        var t = e.onPlay,
            n = e.externalURL,
            o = e.className,
            d = e.renderLinkComponent,
            _ = e.inactive,
            E = e.messageId,
            p = e.channelId;
        return r.createElement(u.MessagesInteractionContext.Consumer, null, function(e) {
            var u, m, y;
            return r.createElement("div", {
                className: i()(o, f.wrapper, (u = {}, m = f.disableInteractions, y = e.disableInteractions, m in u ? Object.defineProperty(u, m, {
                    value: y,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : u[m] = y, u))
            }, _ && null == t ? r.createElement("div", {
                className: f.iconWrapper
            }, r.createElement(l.default, {
                className: f.iconPlay
            })) : null, null != t ? r.createElement(a.Clickable, {
                onClick: t,
                className: i()(f.iconWrapperActive),
                tabIndex: _ ? -1 : 0,
                "aria-label": c.default.Messages.PLAY
            }, r.createElement(l.default, {
                className: f.iconPlay
            })) : null, null != n ? d({
                href: n,
                target: "_blank",
                rel: "noreferrer noopener",
                className: f.iconWrapperActive,
                children: r.createElement(s.default, {
                    "aria-label": c.default.Messages.OPEN_LINK,
                    className: null != t ? f.iconExternalMargins : f.iconExternal
                }),
                messageId: E,
                channelId: p
            }) : null)
        })
    }
}