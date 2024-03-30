function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPreviewAvatar: function() {
            return m
        },
        getPreviewDisplayName: function() {
            return I
        },
        getPreviewNickname: function() {
            return y
        },
        handleOpenSelectImageModal: function() {
            return E
        },
        isColorDark: function() {
            return h
        },
        showFileSizeErrorModal: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("194926"),
        i = n("784184"),
        a = n("177260"),
        u = n("299529"),
        s = n("49657"),
        l = n("796378"),
        c = n("214141"),
        f = n("481296"),
        d = n("941504");

    function _(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function E(e, t, o, a) {
        var u;
        (0, i.openModalLazy)((u = function() {
            var i;
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(u) {
                switch (u.label) {
                    case 0:
                        return [4, Promise.all([n.e("99387"), n.e("50135"), n.e("94365")]).then(n.bind(n, "451085"))];
                    case 1:
                        return i = u.sent().default, [2, function(n) {
                            return r.createElement(i, function(e) {
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
                            }({
                                filters: a,
                                maxFileSizeBytes: c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                                imageSpecifications: e === f.UploadTypes.BANNER && d.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
                                onComplete: function(n, r) {
                                    return (0, l.maybeOpenProfilePreviewModal)({
                                        imageSrc: n,
                                        file: r,
                                        uploadType: e,
                                        guildId: t,
                                        isTryItOutFlow: o
                                    })
                                },
                                uploadType: e,
                                showUpsellHeader: !0
                            }, n))
                        }]
                }
            })
        }, function() {
            var e = this,
                t = arguments;
            return new Promise(function(n, r) {
                var o = u.apply(e, t);

                function i(e) {
                    _(o, n, r, i, a, "next", e)
                }

                function a(e) {
                    _(o, n, r, i, a, "throw", e)
                }
                i(void 0)
            })
        }))
    }

    function p() {
        (0, a.openUploadError)({
            title: d.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
            help: d.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                maxSize: (0, s.sizeString)(c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
            })
        })
    }

    function m(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (null != e) return e;
        var o = r.size,
            i = void 0 === o ? 80 : o,
            a = r.canAnimate,
            s = void 0 === a || a,
            l = null === e;
        return l && null == t ? u.default.getDefaultAvatarURL(n.id, n.discriminator) : l || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, i, s) : n.getAvatarURL(null == t ? void 0 : t.guildId, i, s)
    }

    function y(e, t) {
        return "" === e ? null : null != e ? e : t
    }

    function I(e, t) {
        return "" === e ? null : null != e ? e : t
    }

    function h(e) {
        return (null != e ? (0, o.getDarkness)(e) : 1) > .25
    }
}