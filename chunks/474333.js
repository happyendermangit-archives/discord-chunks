function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HelpMessageTypes: function() {
            return r
        }
    });
    var i, r, a = n("735250");
    n("470079");
    var s = n("120356"),
        o = n.n(s),
        l = n("481060"),
        u = n("263704"),
        d = n("696202"),
        _ = n("41542"),
        c = n("759231"),
        E = n("288828");
    (i = r || (r = {}))[i.WARNING = 0] = "WARNING", i[i.INFO = 1] = "INFO", i[i.ERROR = 2] = "ERROR", i[i.POSITIVE = 3] = "POSITIVE";
    t.default = function(e) {
        let {
            children: t,
            messageType: n,
            className: i,
            textColor: r = "text-normal",
            textVariant: s = "text-sm/medium"
        } = e, I = function(e) {
            switch (e) {
                case 0:
                    return c.default;
                case 1:
                    return _.default;
                case 2:
                    return d.default;
                case 3:
                    return u.default
            }
        }(n), T = function(e) {
            switch (e) {
                case 0:
                    return E.warning;
                case 1:
                    return E.info;
                case 2:
                    return E.error;
                case 3:
                    return E.positive
            }
        }(n);
        return (0, a.jsxs)("div", {
            className: o()(E.container, T, i),
            children: [(0, a.jsx)("div", {
                className: E.iconDiv,
                children: (0, a.jsx)(I, {
                    className: E.icon
                })
            }), (0, a.jsx)(l.Text, {
                className: E.text,
                color: r,
                variant: s,
                children: t
            })]
        })
    }
}