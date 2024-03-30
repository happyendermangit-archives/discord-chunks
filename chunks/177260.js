function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UPLOAD_ERROR_MODAL_KEY: function() {
            return E
        },
        default: function() {
            return _
        },
        openUploadError: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("67381"),
        u = n("147391"),
        s = n("633071"),
        l = n("719328"),
        c = n("921167"),
        f = n("962972"),
        d = n("294575");

    function _(e) {
        var t = e.title,
            n = e.help,
            o = e.showPremiumUpsell,
            a = e.transitionState,
            _ = e.icons,
            E = e.fileSize,
            p = e.onClose,
            m = (0, l.useUID)(),
            y = null != _ ? _ : f.DEFAULT_FILE_UPLOAD_ICONS;
        return o ? r.createElement(s.default, {
            transitionState: a,
            onClose: p,
            fileSize: E
        }) : r.createElement(u.ModalRoot, {
            size: u.ModalSize.DYNAMIC,
            "aria-labelledby": m,
            transitionState: a
        }, r.createElement("div", {
            className: i()(d.uploadDropModal, d.error)
        }, r.createElement("div", {
            className: d.inner
        }, r.createElement(c.default, {
            icons: y
        }), r.createElement("div", {
            id: m,
            className: d.title
        }, t), r.createElement("div", {
            className: d.instructions
        }, n))))
    }
    var E = "UPLOAD_ERROR_MODAL_KEY";

    function p(e) {
        (0, a.openModal)(function(t) {
            return r.createElement(_, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({}, t, e))
        }, {
            modalKey: E
        })
    }
}