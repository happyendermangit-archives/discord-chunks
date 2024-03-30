function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFilters: function() {
            return E
        },
        processImage: function() {
            return p
        }
    });
    var r, o = n("470079"),
        i = n("301636"),
        a = n("996795"),
        u = n("941504");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function E() {
        return [{
            name: u.default.Messages.IMAGES,
            extensions: ["jpg", "jpeg", "png", "gif"]
        }]
    }

    function p(e, t, n) {
        ! function(e, t) {
            if (null != e) {
                var n = new FileReader;
                n.onload = function(n) {
                    var r;
                    "string" == typeof(null === (r = n.target) || void 0 === r ? void 0 : r.result) && t(n.target.result, e)
                }, n.readAsDataURL(e)
            }
        }(e, function(r) {
            if (e.type === a.FileTypes.MP4) return t(r, e);
            var o = new Image;
            o.src = r, o.onload = function() {
                t(r, e)
            }, o.onerror = function() {
                n()
            }
        })
    }
    var m = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _(e, t)
        }(h, e);
        var t, r, a, m, y, I = (t = h, r = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, n, o, i = d(t);
            if (r) {
                var a = d(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (n = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(n) || "function" == typeof n) ? n : s(e)
        });

        function h() {
            var e, t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, h), e = I.apply(this, arguments), f(s(e), "_ref", o.createRef()), f(s(e), "_isMounted", !1), f(s(e), "handleFileChange", function(t) {
                var n = e.props,
                    r = n.onFileSizeError,
                    o = n.maxFileSizeBytes;
                if (t.stopPropagation(), t.preventDefault(), null != t.currentTarget.files)
                    for (var i = 0; i < t.currentTarget.files.length; i++) {
                        var a = t.currentTarget.files[i];
                        if (a.size > o) {
                            null == r || r(o, a.size);
                            continue
                        }
                        p(a, e.handleFileRead, e.handleFileError)
                    }
            }), f(s(e), "handleFileRead", function(t, n) {
                var r = e.props.onChange;
                e._isMounted && r(t, n)
            }), f(s(e), "handleFileError", (t = function() {
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
                }(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Promise.resolve().then(n.bind(n, "177260"))];
                        case 1:
                            return (0, e.sent().openUploadError)({
                                title: u.default.Messages.PREMIUM_ALERT_ERROR_TITLE,
                                help: u.default.Messages.UNABLE_TO_PROCESS_IMAGE
                            }), [2]
                    }
                })
            }, function() {
                var e = this,
                    n = arguments;
                return new Promise(function(r, o) {
                    var i = t.apply(e, n);

                    function a(e) {
                        l(i, r, o, a, u, "next", e)
                    }

                    function u(e) {
                        l(i, r, o, a, u, "throw", e)
                    }
                    a(void 0)
                })
            })), e
        }
        return a = h, m = [{
            key: "componentDidMount",
            value: function() {
                this._isMounted = !0
            }
        }, {
            key: "activateUploadDialogue",
            value: function() {
                var e;
                null === (e = this._ref.current) || void 0 === e || e.activateUploadDialogue()
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.multiple,
                    n = e.disabled,
                    r = e.className,
                    a = e.tabIndex,
                    u = e["aria-label"],
                    s = e.filters;
                return o.createElement(i.default, {
                    ref: this._ref,
                    onChange: this.handleFileChange,
                    filters: null != s ? s : E(),
                    multiple: t,
                    disabled: n,
                    className: r,
                    tabIndex: a,
                    "aria-label": u
                })
            }
        }], c(a.prototype, m), y && c(a, y), h
    }(o.PureComponent);
    f(m, "defaultProps", {
        multiple: !0,
        tabIndex: -1,
        maxFileSizeBytes: 1 / 0
    }), t.default = m
}