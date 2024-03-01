function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        handleOpenSelectImageModal: function() {
            return m
        },
        showFileSizeErrorModal: function() {
            return _
        },
        getPreviewAvatar: function() {
            return E
        },
        getPreviewNickname: function() {
            return T
        },
        getPreviewDisplayName: function() {
            return I
        },
        isColorDark: function() {
            return C
        }
    });
    var r = n("37983");
    n("884691");
    var i = n("509043"),
        l = n("77078"),
        a = n("336522"),
        s = n("315102"),
        o = n("254490"),
        u = n("737403"),
        c = n("453252"),
        d = n("75015"),
        f = n("782340");

    function m(e, t, i, a) {
        (0, l.openModalLazy)(async () => {
            let {
                default: l
            } = await n.el("420333").then(n.bind(n, "420333"));
            return n => (0, r.jsx)(l, {
                filters: a,
                maxFileSizeBytes: c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                imageSpecifications: e === d.UploadTypes.BANNER && f.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
                onComplete: (n, r) => (0, u.maybeOpenProfilePreviewModal)({
                    imageSrc: n,
                    file: r,
                    uploadType: e,
                    guildId: t,
                    isTryItOutFlow: i
                }),
                uploadType: e,
                showUpsellHeader: !0,
                ...n
            })
        })
    }

    function _() {
        (0, a.openUploadError)({
            title: f.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
            help: f.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                maxSize: (0, o.sizeString)(c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
            })
        })
    }

    function E(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (null != e) return e;
        let {
            size: i = 80,
            canAnimate: l = !0
        } = r, a = null === e;
        return a && null == t ? s.default.getDefaultAvatarURL(n.id, n.discriminator) : a || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, i, l) : n.getAvatarURL(null == t ? void 0 : t.guildId, i, l)
    }

    function T(e, t) {
        return "" === e ? null : null != e ? e : t
    }

    function I(e, t) {
        return "" === e ? null : null != e ? e : t
    }

    function C(e) {
        let t = null != e ? (0, i.getDarkness)(e) : 1;
        return t > .25
    }
}