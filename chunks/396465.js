function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("798609"),
        s = n("200294"),
        r = n("851745"),
        o = n("501536"),
        u = n("124299"),
        d = n("240249"),
        c = n("972620"),
        f = n("524768"),
        p = n("529190"),
        m = n("41884"),
        h = n("406291"),
        x = n("782340"),
        E = n("847948");

    function y(e) {
        let {
            query: t,
            onHover: n,
            onClick: y,
            channel: g,
            selectedIndex: S
        } = e, C = l.useRef(null), {
            commands: I,
            sections: T,
            scrollDown: _
        } = d.useQuery(g, {
            commandType: a.ApplicationCommandType.CHAT,
            text: t
        }, {
            limit: r.MAX_COMMAND_AUTOCOMPLETE_RESULTS_LEGACY,
            placeholderCount: r.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
            scoreMethod: c.ScoreMethod.COMMAND_OR_APPLICATION
        }), v = l.useCallback(e => {
            var t;
            if (null == I) return null;
            let l = I[e],
                a = null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : e;
            if (null == l || l.inputType === f.ApplicationCommandInputType.PLACEHOLDER) return (0, i.jsx)(m.default, {}, a);
            let s = T.find(e => e.id === l.applicationId);
            return (0, i.jsx)(o.default.NewCommand, {
                index: e,
                command: l,
                channel: g,
                className: E.itemWrapper,
                selected: S === e,
                showImage: !0,
                section: s,
                onClick: y,
                onHover: n
            }, a)
        }, [g, I, T, y, n, S]);
        return null == I || 0 === I.length ? null : (0, i.jsxs)(i.Fragment, {
            children: [(0, s.renderHeader)({
                titleWithQuery: x.default.Messages.COMMANDS_MATCHING,
                titleWithoutQuery: x.default.Messages.COMMANDS,
                query: t,
                getQuery: e => "".concat(h.COMMAND_SENTINEL).concat(e)
            }), (0, i.jsx)(u.default, {
                ref: C,
                role: "listbox",
                className: E.list,
                listPadding: [0, 8, 0, 8],
                onScroll: e => {
                    if (null == I) return;
                    let t = I.length * p.ITEM_HEIGHT,
                        n = C.current.getListDimensions().height;
                    t - e - n < 9 * p.ITEM_HEIGHT && _()
                },
                renderRow: v,
                rowCount: I.length,
                rowHeight: p.ITEM_HEIGHT
            })]
        })
    }
}