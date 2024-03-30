function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPreviewAvatar: function() {
            return T
        },
        getPreviewDisplayName: function() {
            return S
        },
        getPreviewNickname: function() {
            return f
        },
        handleOpenSelectImageModal: function() {
            return E
        },
        isColorDark: function() {
            return h
        },
        showFileSizeErrorModal: function() {
            return I
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("866442"),
        s = n("481060"),
        a = n("531643"),
        o = n("768581"),
        l = n("403182"),
        u = n("661543"),
        d = n("200299"),
        _ = n("486324"),
        c = n("689938");

    function E(e, t, r, a) {
        (0, s.openModalLazy)(async () => {
            let {
                default: s
            } = await Promise.all([n.e("99387"), n.e("89289")]).then(n.bind(n, "28130"));
            return n => (0, i.jsx)(s, {
                filters: a,
                maxFileSizeBytes: d.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                imageSpecifications: e === _.UploadTypes.BANNER && c.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
                onComplete: (n, i) => (0, u.maybeOpenProfilePreviewModal)({
                    imageSrc: n,
                    file: i,
                    uploadType: e,
                    guildId: t,
                    isTryItOutFlow: r
                }),
                uploadType: e,
                showUpsellHeader: !0,
                ...n
            })
        })
    }

    function I() {
        (0, a.openUploadError)({
            title: c.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
            help: c.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                maxSize: (0, l.sizeString)(d.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
            })
        })
    }

    function T(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (null != e) return e;
        let {
            size: r = 80,
            canAnimate: s = !0
        } = i, a = null === e;
        return a && null == t ? o.default.getDefaultAvatarURL(n.id, n.discriminator) : a || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, r, s) : n.getAvatarURL(null == t ? void 0 : t.guildId, r, s)
    }

    function f(e, t) {
        return "" === e ? null : null != e ? e : t
    }

    function S(e, t) {
        return "" === e ? null : null != e ? e : t
    }

    function h(e) {
        return (null != e ? (0, r.getDarkness)(e) : 1) > .25
    }
}