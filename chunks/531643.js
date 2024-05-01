function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UPLOAD_ERROR_MODAL_KEY: function() {
            return I
        },
        default: function() {
            return E
        },
        openUploadError: function() {
            return T
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("952265"),
        o = n("466377"),
        l = n("355314"),
        u = n("153124"),
        d = n("310752"),
        _ = n("731994"),
        c = n("297888");

    function E(e) {
        let {
            title: t,
            help: n,
            showPremiumUpsell: r,
            transitionState: a,
            icons: E,
            fileSize: I,
            onClose: T
        } = e, f = (0, u.useUID)(), S = null != E ? E : _.DEFAULT_FILE_UPLOAD_ICONS;
        return r ? (0, i.jsx)(l.default, {
            transitionState: a,
            onClose: T,
            fileSize: I
        }) : (0, i.jsx)(o.ModalRoot, {
            size: o.ModalSize.DYNAMIC,
            "aria-labelledby": f,
            transitionState: a,
            children: (0, i.jsx)("div", {
                className: s()(c.uploadDropModal, c.error),
                children: (0, i.jsxs)("div", {
                    className: c.inner,
                    children: [(0, i.jsx)(d.default, {
                        icons: S
                    }), (0, i.jsx)("div", {
                        id: f,
                        className: c.title,
                        children: t
                    }), (0, i.jsx)("div", {
                        className: c.instructions,
                        children: n
                    })]
                })
            })
        })
    }
    let I = "UPLOAD_ERROR_MODAL_KEY";

    function T(e) {
        (0, a.openModal)(t => (0, i.jsx)(E, {
            ...t,
            ...e
        }), {
            modalKey: I
        })
    }
}