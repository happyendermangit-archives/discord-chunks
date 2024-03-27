function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Toast: function() {
            return I
        },
        createToast: function() {
            return E
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("153832"),
        a = n("993365"),
        o = n("481060"),
        l = n("529653"),
        u = n("502283"),
        d = n("525241"),
        _ = n("561466"),
        c = n("339586");

    function E(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.TOAST_DEFAULT_OPTIONS,
            {
                position: i = _.TOAST_DEFAULT_OPTIONS.position,
                component: r = _.TOAST_DEFAULT_OPTIONS.component,
                duration: a = _.TOAST_DEFAULT_OPTIONS.duration
            } = n;
        return {
            message: e,
            id: (0, s.v4)(),
            type: t,
            options: {
                position: i,
                component: r,
                duration: a
            }
        }
    }
    let I = r.memo(function(e) {
        let {
            message: t,
            type: n,
            id: r,
            options: {
                component: s = _.TOAST_DEFAULT_OPTIONS.component
            } = _.TOAST_DEFAULT_OPTIONS
        } = e;
        return null != s ? (0, i.jsx)(i.Fragment, {
            children: s
        }) : (0, i.jsxs)("div", {
            id: r,
            className: c.toast,
            children: [function(e) {
                switch (e) {
                    case _.ToastType.SUCCESS:
                        return (0, i.jsx)(d.default, {
                            className: c.icon,
                            color: o.tokens.colors.STATUS_POSITIVE.css
                        });
                    case _.ToastType.FAILURE:
                        return (0, i.jsx)(u.default, {
                            className: c.icon,
                            color: o.tokens.colors.STATUS_DANGER.css
                        });
                    case _.ToastType.CLIP:
                        return (0, i.jsx)(l.default, {
                            className: c.clipIcon,
                            color: o.tokens.colors.HEADER_PRIMARY.css
                        });
                    default:
                        return null
                }
            }(n), (0, i.jsx)(a.Text, {
                className: c.content,
                color: "header-primary",
                variant: "text-md/normal",
                children: t
            })]
        })
    })
}