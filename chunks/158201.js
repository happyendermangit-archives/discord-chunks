function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        s = n.n(u),
        l = n("898511"),
        c = n("629815"),
        f = n("483587"),
        d = n("481921"),
        _ = n("389408"),
        E = n("309944"),
        p = n("281767"),
        m = n("941504");

    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function T(e) {
        return function(e) {
            if (Array.isArray(e)) return y(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return y(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var S = new Map,
        v = [];

    function g(e, t) {
        var n, r;
        return null !== (r = null === (n = A(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : v
    }

    function A(e) {
        var t;
        return null !== (t = S.get(e)) && void 0 !== t ? t : new Map
    }

    function b(e, t, n) {
        var r = A(e);
        r.set(t, n), S.set(e, r)
    }
    var N = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && O(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = h(t);
            if (n) {
                var a = h(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "getFirstUpload",
            value: function(e, t) {
                var n = g(e, t);
                return n.length > 0 ? n[0] : null
            }
        }, {
            key: "hasAdditionalUploads",
            value: function(e, t) {
                var n;
                return (null !== (n = g(e, t).length) && void 0 !== n ? n : 0) > 1
            }
        }, {
            key: "getUploads",
            value: function(e, t) {
                return g(e, t)
            }
        }, {
            key: "getUploadCount",
            value: function(e, t) {
                var n;
                return null !== (n = g(e, t).length) && void 0 !== n ? n : 0
            }
        }, {
            key: "getUpload",
            value: function(e, t, n) {
                return g(e, n).find(function(e) {
                    return e.id === t
                })
            }
        }, {
            key: "findUpload",
            value: function(e, t, n) {
                return g(e, t).find(n)
            }
        }], I(r.prototype, o), i && I(r, i), u
    }(l.default.Store);
    i = "UploadAttachmentStore", (o = "displayName") in(r = N) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new N(c.default, {
        UPLOAD_ATTACHMENT_POP_FILE: function(e) {
            var t = e.channelId,
                n = T(g(t, E.DraftType.ChannelMessage));
            n.shift(), b(t, E.DraftType.ChannelMessage, n)
        },
        UPLOAD_ATTACHMENT_ADD_FILES: function(e) {
            var t = e.files,
                n = e.channelId,
                r = e.showLargeMessageDialog,
                o = e.draftType,
                i = T(g(n, o));
            if (i.length + t.length > p.MAX_UPLOAD_COUNT && o !== E.DraftType.SlashCommand && o !== E.DraftType.ApplicationLauncherCommand) {
                f.default.show({
                    title: m.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                    body: m.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                        limit: p.MAX_UPLOAD_COUNT
                    })
                });
                return
            }
            s().forEach(t, function(e) {
                var t = new d.CloudUpload(e, n, r, i.length);
                t.upload(), i.push(t)
            }), b(n, o, i)
        },
        UPLOAD_ATTACHMENT_UPDATE_FILE: function(e) {
            var t = e.channelId,
                n = e.id,
                r = e.filename,
                o = e.description,
                i = e.spoiler,
                a = e.thumbnail,
                u = e.draftType,
                s = T(g(t, u)).map(function(e) {
                    return e.id === n && (void 0 !== r && (e.filename = r), void 0 !== i && (e.spoiler = i), void 0 !== o && (e.description = o), void 0 !== a && (e.isThumbnail = a)), e
                });
            b(t, u, s)
        },
        UPLOAD_ATTACHMENT_REMOVE_FILE: function(e) {
            var t = e.channelId,
                n = e.id,
                r = e.draftType,
                o = T(g(t, r)),
                i = o.findIndex(function(e) {
                    return (0, _.doesImageMatchUpload)({
                        uri: n,
                        filename: n
                    }, e)
                });
            i > -1 && (o.splice(i, 1)[0].cancel(), b(t, r, o))
        },
        UPLOAD_ATTACHMENT_REMOVE_FILES: function(e) {
            var t = e.channelId,
                n = e.attachmentIds,
                r = e.draftType,
                o = T(g(t, r));
            n.forEach(function(e) {
                var t = o.findIndex(function(t) {
                    return e === t.id
                });
                t > -1 && o.splice(t, 1)[0].cancel()
            }), b(t, r, o)
        },
        UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function(e) {
            b(e.channelId, e.draftType, [])
        },
        UPLOAD_ATTACHMENT_SET_UPLOADS: function(e) {
            var t = e.channelId,
                n = e.uploads;
            b(t, e.draftType, n)
        },
        UPLOAD_ATTACHMENT_SET_FILE: function(e) {
            var t = e.channelId,
                n = e.id,
                r = e.file,
                o = e.draftType,
                i = T(g(t, o)).filter(function(e) {
                    return e.id !== n
                }),
                a = new d.CloudUpload(r, t);
            a.upload(), i.push(a), b(t, o, i)
        },
        SIDEBAR_CLOSE: function(e) {
            b(e.baseChannelId, E.DraftType.FirstThreadMessage, [])
        }
    })
}