function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        renderAutocompleteGroup: function() {
            return o
        },
        renderHeader: function() {
            return a
        }
    });
    var i = n("735250"),
        r = n("470079");
    n("419922");
    var s = n("156361");

    function a(e) {
        let {
            titleWithQuery: t,
            titleWithoutQuery: n,
            query: r,
            getQuery: a,
            headerClassName: o,
            headerTrailingContent: l
        } = e, u = r.length > 0 ? t.format({
            prefix: a(r)
        }) : n;
        return (0, i.jsx)(s.default.Title, {
            className: o,
            title: u,
            children: l
        }, "autocomplete-title-".concat(u))
    }

    function o(e) {
        let {
            query: t,
            selectedIndex: n,
            autocompletes: s,
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
            footer: A,
            subHeader: h
        } = e;
        if (null == A && (null == s || 0 === s.length)) return null;
        let m = null == s ? void 0 : s.map((e, t) => {
            let i = t + T,
                s = c(e, i);
            return (0, r.createElement)(_, {
                onClick: l,
                onHover: o,
                selected: n === i,
                index: i,
                ...s,
                key: s.key
            })
        });
        return (0, i.jsxs)(r.Fragment, {
            children: [null != u && null != d ? a({
                titleWithQuery: u,
                titleWithoutQuery: d,
                query: t,
                getQuery: E,
                headerClassName: f,
                headerTrailingContent: S
            }) : null, h, m, A]
        }, I)
    }
}