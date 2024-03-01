function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        renderHeader: function() {
            return s
        },
        renderAutocompleteGroup: function() {
            return r
        }
    });
    var l = n("37983"),
        i = n("884691");
    n("41170");
    var a = n("501536");

    function s(e) {
        let {
            titleWithQuery: t,
            titleWithoutQuery: n,
            query: i,
            getQuery: s,
            headerClassName: r,
            headerTrailingContent: o
        } = e, u = i.length > 0 ? t.format({
            prefix: s(i)
        }) : n;
        return (0, l.jsx)(a.default.Title, {
            className: r,
            title: u,
            children: o
        }, "autocomplete-title-".concat(u))
    }

    function r(e) {
        let {
            query: t,
            selectedIndex: n,
            autocompletes: a,
            onHover: r,
            onClick: o,
            titleWithQuery: u,
            titleWithoutQuery: d,
            Component: c,
            getProps: f,
            getQuery: m,
            key: p,
            indexOffset: h = 0,
            headerClassName: E,
            headerTrailingContent: g,
            footer: C
        } = e;
        if (null == C && (null == a || 0 === a.length)) return null;
        let S = null == a ? void 0 : a.map((e, t) => {
            let l = t + h,
                a = f(e, l);
            return (0, i.createElement)(c, {
                onClick: o,
                onHover: r,
                selected: n === l,
                index: l,
                ...a,
                key: a.key
            })
        });
        return (0, l.jsxs)(i.Fragment, {
            children: [null != u && null != d ? s({
                titleWithQuery: u,
                titleWithoutQuery: d,
                query: t,
                getQuery: m,
                headerClassName: E,
                headerTrailingContent: g
            }) : null, S, C]
        }, p)
    }
}