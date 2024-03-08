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
    var i = n("37983"),
        l = n("884691");
    n("41170");
    var a = n("501536");

    function s(e) {
        let {
            titleWithQuery: t,
            titleWithoutQuery: n,
            query: l,
            getQuery: s,
            headerClassName: r,
            headerTrailingContent: o
        } = e, u = l.length > 0 ? t.format({
            prefix: s(l)
        }) : n;
        return (0, i.jsx)(a.default.Title, {
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
            getQuery: p,
            key: m,
            indexOffset: h = 0,
            headerClassName: x,
            headerTrailingContent: E,
            footer: y,
            subHeader: g
        } = e;
        if (null == y && (null == a || 0 === a.length)) return null;
        let S = null == a ? void 0 : a.map((e, t) => {
            let i = t + h,
                a = f(e, i);
            return (0, l.createElement)(c, {
                onClick: o,
                onHover: r,
                selected: n === i,
                index: i,
                ...a,
                key: a.key
            })
        });
        return (0, i.jsxs)(l.Fragment, {
            children: [null != u && null != d ? s({
                titleWithQuery: u,
                titleWithoutQuery: d,
                query: t,
                getQuery: p,
                headerClassName: x,
                headerTrailingContent: E
            }) : null, g, S, y]
        }, m)
    }
}