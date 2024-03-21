function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createToast: function() {
            return f
        },
        Toast: function() {
            return E
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("748820"),
        a = n("577776"),
        o = n("77078"),
        l = n("522049"),
        u = n("984678"),
        d = n("830031"),
        c = n("159350"),
        _ = n("882746");

    function f(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.TOAST_DEFAULT_OPTIONS,
            {
                position: i = c.TOAST_DEFAULT_OPTIONS.position,
                component: s = c.TOAST_DEFAULT_OPTIONS.component,
                duration: a = c.TOAST_DEFAULT_OPTIONS.duration
            } = n;
        return {
            message: e,
            id: (0, r.v4)(),
            type: t,
            options: {
                position: i,
                component: s,
                duration: a
            }
        }
    }
    let E = s.memo(function(e) {
        let {
            message: t,
            type: n,
            id: s,
            options: {
                component: r = c.TOAST_DEFAULT_OPTIONS.component
            } = c.TOAST_DEFAULT_OPTIONS
        } = e;
        return null != r ? (0, i.jsx)(i.Fragment, {
            children: r
        }) : (0, i.jsxs)("div", {
            id: s,
            className: _.toast,
            children: [function(e) {
                switch (e) {
                    case c.ToastType.SUCCESS:
                        return (0, i.jsx)(d.default, {
                            className: _.icon,
                            color: o.tokens.colors.STATUS_POSITIVE.css
                        });
                    case c.ToastType.FAILURE:
                        return (0, i.jsx)(u.default, {
                            className: _.icon,
                            color: o.tokens.colors.STATUS_DANGER.css
                        });
                    case c.ToastType.CLIP:
                        return (0, i.jsx)(l.default, {
                            className: _.clipIcon,
                            color: o.tokens.colors.HEADER_PRIMARY.css
                        });
                    default:
                        return null
                }
            }(n), (0, i.jsx)(a.Text, {
                className: _.content,
                color: "header-primary",
                variant: "text-md/normal",
                children: t
            })]
        })
    })
}