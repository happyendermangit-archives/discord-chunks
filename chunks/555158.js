function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HelpMessageTypes: function() {
            return a
        },
        default: function() {
            return _
        }
    });
    var s, a, l = n("37983");
    n("884691");
    var r = n("414456"),
        i = n.n(r),
        u = n("77078"),
        o = n("36694"),
        d = n("381546"),
        c = n("68238"),
        f = n("423487"),
        E = n("950038");
    (s = a || (a = {}))[s.WARNING = 0] = "WARNING", s[s.INFO = 1] = "INFO", s[s.ERROR = 2] = "ERROR", s[s.POSITIVE = 3] = "POSITIVE";
    var _ = function(e) {
        let {
            children: t,
            messageType: n,
            className: s,
            textColor: a = "text-normal",
            textVariant: r = "text-sm/medium"
        } = e, _ = function(e) {
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
        }(n), I = function(e) {
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
            className: i(E.container, I, s),
            children: [(0, l.jsx)("div", {
                className: E.iconDiv,
                children: (0, l.jsx)(_, {
                    className: E.icon
                })
            }), (0, l.jsx)(u.Text, {
                className: E.text,
                color: a,
                variant: r,
                children: t
            })]
        })
    }
}