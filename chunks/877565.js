function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        renderAutocompleteGroup: function() {
            return o
        },
        renderHeader: function() {
            return s
        }
    });
    var i = n("735250"),
        r = n("470079");
    n("419922");
    var a = n("156361");

    function s(e) {
        let {
            titleWithQuery: t,
            titleWithoutQuery: n,
            query: r,
            getQuery: s,
            headerClassName: o,
            headerTrailingContent: l
        } = e, u = r.length > 0 ? t.format({
            prefix: s(r)
        }) : n;
        return (0, i.jsx)(a.default.Title, {
            className: o,
            title: u,
            children: l
        }, "autocomplete-title-".concat(u))
    }

    function o(e) {
        let {
            query: t,
            selectedIndex: n,
            autocompletes: a,
            onHover: o,
            onClick: l,
            titleWithQuery: u,
            titleWithoutQuery: d,
            Component: _,
            getProps: c,
            getQuery: E,
            key: I,
            indexOffset: T = 0,
            headerClassName: f,
            headerTrailingContent: S,
            footer: h
        } = e;
        if (null == h && (null == a || 0 === a.length)) return null;
        let A = null == a ? void 0 : a.map((e, t) => {
            let i = t + T,
                a = c(e, i);
            return (0, r.createElement)(_, {
                onClick: l,
                onHover: o,
                selected: n === i,
                index: i,
                ...a,
                key: a.key
            })
        });
        return (0, i.jsxs)(r.Fragment, {
            children: [null != u && null != d ? s({
                titleWithQuery: u,
                titleWithoutQuery: d,
                query: t,
                getQuery: E,
                headerClassName: f,
                headerTrailingContent: S
            }) : null, A, h]
        }, I)
    }
}