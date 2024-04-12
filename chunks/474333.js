function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        HelpMessageTypes: function() {
            return a
        }
    });
    var n, a, l = s("735250");
    s("470079");
    var i = s("803997"),
        r = s.n(i),
        u = s("481060"),
        o = s("263704"),
        d = s("696202"),
        c = s("41542"),
        f = s("759231"),
        E = s("710944");
    (n = a || (a = {}))[n.WARNING = 0] = "WARNING", n[n.INFO = 1] = "INFO", n[n.ERROR = 2] = "ERROR", n[n.POSITIVE = 3] = "POSITIVE";
    t.default = function(e) {
        let {
            children: t,
            messageType: s,
            className: n,
            textColor: a = "text-normal",
            textVariant: i = "text-sm/medium"
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
        }(s), _ = function(e) {
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
        }(s);
        return (0, l.jsxs)("div", {
            className: r()(E.container, _, n),
            children: [(0, l.jsx)("div", {
                className: E.iconDiv,
                children: (0, l.jsx)(I, {
                    className: E.icon
                })
            }), (0, l.jsx)(u.Text, {
                className: E.text,
                color: a,
                variant: i,
                children: t
            })]
        })
    }
}