function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Toast: function() {
            return _
        },
        createToast: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("153832"),
        i = n("135983"),
        a = n("784184"),
        u = n("296157"),
        s = n("407086"),
        l = n("831743"),
        c = n("649763"),
        f = n("339586");

    function d(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.TOAST_DEFAULT_OPTIONS,
            r = n.position,
            i = void 0 === r ? c.TOAST_DEFAULT_OPTIONS.position : r,
            a = n.component,
            u = void 0 === a ? c.TOAST_DEFAULT_OPTIONS.component : a,
            s = n.duration,
            l = void 0 === s ? c.TOAST_DEFAULT_OPTIONS.duration : s;
        return {
            message: e,
            id: (0, o.v4)(),
            type: t,
            options: {
                position: i,
                component: u,
                duration: l
            }
        }
    }
    var _ = r.memo(function(e) {
        var t = e.message,
            n = e.type,
            o = e.id,
            d = e.options,
            _ = (void 0 === d ? c.TOAST_DEFAULT_OPTIONS : d).component,
            E = void 0 === _ ? c.TOAST_DEFAULT_OPTIONS.component : _;
        return null != E ? r.createElement(r.Fragment, null, E) : r.createElement("div", {
            id: o,
            className: f.toast
        }, function(e) {
            switch (e) {
                case c.ToastType.SUCCESS:
                    return r.createElement(l.default, {
                        className: f.icon,
                        color: a.tokens.colors.STATUS_POSITIVE.css
                    });
                case c.ToastType.FAILURE:
                    return r.createElement(s.default, {
                        className: f.icon,
                        color: a.tokens.colors.STATUS_DANGER.css
                    });
                case c.ToastType.CLIP:
                    return r.createElement(u.default, {
                        className: f.clipIcon,
                        color: a.tokens.colors.HEADER_PRIMARY.css
                    });
                default:
                    return null
            }
        }(n), r.createElement(i.Text, {
            className: f.__invalid_content,
            color: "header-primary",
            variant: "text-md/normal"
        }, t))
    })
}