function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HelpMessageTypes: function() {
            return a
        }
    });
    var s, a, i = n("735250");
    n("470079");
    var l = n("803997"),
        r = n.n(l),
        u = n("481060"),
        o = n("263704"),
        d = n("696202"),
        c = n("41542"),
        f = n("759231"),
        E = n("710944");
    (s = a || (a = {}))[s.WARNING = 0] = "WARNING", s[s.INFO = 1] = "INFO", s[s.ERROR = 2] = "ERROR", s[s.POSITIVE = 3] = "POSITIVE";
    t.default = function(e) {
        let {
            children: t,
            messageType: n,
            className: s,
            textColor: a = "text-normal",
            textVariant: l = "text-sm/medium"
        } = e, I = function(e) {
            switch (e) {
                case 0:
                    return f.default;
                case 1:
                    return c.default;
                case 2:
                    return d.default;
                case 3:
                    return o.default
            }
        }(n), h = function(e) {
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
        return (0, i.jsxs)("div", {
            className: r()(E.container, h, s),
            children: [(0, i.jsx)("div", {
                className: E.iconDiv,
                children: (0, i.jsx)(I, {
                    className: E.icon
                })
            }), (0, i.jsx)(u.Text, {
                className: E.text,
                color: a,
                variant: l,
                children: t
            })]
        })
    }
}