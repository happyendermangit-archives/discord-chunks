function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HelpMessageTypes: function() {
            return a
        },
        default: function() {
            return I
        }
    });
    var s, a, l = n("37983");
    n("884691");
    var i = n("414456"),
        r = n.n(i),
        u = n("77078"),
        o = n("36694"),
        d = n("381546"),
        c = n("68238"),
        f = n("423487"),
        E = n("950038");
    (s = a || (a = {}))[s.WARNING = 0] = "WARNING", s[s.INFO = 1] = "INFO", s[s.ERROR = 2] = "ERROR", s[s.POSITIVE = 3] = "POSITIVE";
    var I = function(e) {
        let {
            children: t,
            messageType: n,
            className: s,
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
        }(n), _ = function(e) {
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
        return (0, l.jsxs)("div", {
            className: r(E.container, _, s),
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