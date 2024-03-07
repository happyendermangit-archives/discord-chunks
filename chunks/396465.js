function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("798609"),
        s = n("200294"),
        r = n("851745"),
        o = n("501536"),
        u = n("124299"),
        d = n("240249"),
        c = n("972620"),
        f = n("524768"),
        m = n("529190"),
        p = n("41884"),
        h = n("406291"),
        E = n("782340"),
        g = n("847948");

    function S(e) {
        let {
            query: t,
            onHover: n,
            onClick: S,
            channel: C,
            selectedIndex: T
        } = e, v = i.useRef(null), {
            commands: I,
            sections: _,
            scrollDown: N
        } = d.useQuery(C, {
            commandType: a.ApplicationCommandType.CHAT,
            text: t
        }, {
            limit: r.MAX_COMMAND_AUTOCOMPLETE_RESULTS_LEGACY,
            placeholderCount: r.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
            scoreMethod: c.ScoreMethod.COMMAND_OR_APPLICATION
        }), A = i.useCallback(e => {
            var t;
            if (null == I) return null;
            let i = I[e],
                a = null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : e;
            if (null == i || i.inputType === f.ApplicationCommandInputType.PLACEHOLDER) return (0, l.jsx)(p.default, {}, a);
            let s = _.find(e => e.id === i.applicationId);
            return (0, l.jsx)(o.default.NewCommand, {
                index: e,
                command: i,
                channel: C,
                className: g.itemWrapper,
                selected: T === e,
                showImage: !0,
                section: s,
                onClick: S,
                onHover: n
            }, a)
        }, [C, I, _, S, n, T]);
        return null == I || 0 === I.length ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, s.renderHeader)({
                titleWithQuery: E.default.Messages.COMMANDS_MATCHING,
                titleWithoutQuery: E.default.Messages.COMMANDS,
                query: t,
                getQuery: e => "".concat(h.COMMAND_SENTINEL).concat(e)
            }), (0, l.jsx)(u.default, {
                ref: v,
                role: "listbox",
                className: g.list,
                listPadding: [0, 8, 0, 8],
                onScroll: e => {
                    if (null == I) return;
                    let t = I.length * m.ITEM_HEIGHT,
                        n = v.current.getListDimensions().height;
                    t - e - n < 9 * m.ITEM_HEIGHT && N()
                },
                renderRow: A,
                rowCount: I.length,
                rowHeight: m.ITEM_HEIGHT
            })]
        })
    }
}