function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var r = n("836560"),
        o = n("392711"),
        i = n.n(o),
        a = n("35523"),
        u = n("389408"),
        s = n("401146");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                d(e, t, n[t])
            })
        }
        return e
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function m(e) {
        return function(e) {
            if (Array.isArray(e)) return l(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return l(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var y = new a.default("UploaderBase.tsx"),
        I = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t)
            }(I, e);
            var t, n, r, o, a, l = (t = I, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = _(t);
                if (n) {
                    var a = _(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : c(e)
            });

            function I(e) {
                var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST",
                    o = arguments.length > 2 ? arguments[2] : void 0;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, I), d(c(t = l.call(this)), "_url", void 0), d(c(t), "_token", ""), d(c(t), "_cancel", void 0), d(c(t), "_lastUpdate", 0), d(c(t), "_loaded", 0), d(c(t), "_file", void 0), d(c(t), "_aborted", !1), d(c(t), "_errored", !1), d(c(t), "_method", void 0), d(c(t), "_raiseEndpointErrors", !1), d(c(t), "alreadyStarted", !1), d(c(t), "processingMessageChangeInterval", void 0), d(c(t), "id", void 0), d(c(t), "_handleStart", function(e) {
                    t._cancel = e, !t.alreadyStarted && t.emit("start", t._file), t.alreadyStarted = !0
                }), d(c(t), "_handleProgress", function(e, n, r) {
                    var o, i, a, s = Date.now(),
                        l = (0, u.calculateProgress)(e, n),
                        c = Math.floor((e - t._loaded) / ((s - t._lastUpdate) / 1e3));
                    null != r && (null === (a = t._file.items) || void 0 === a || a.forEach(function(e) {
                        e.item.progress = r[e.id]
                    })), t._lastUpdate = s, t._loaded = e, t._file = (o = E({}, t._file), i = (i = {
                        currentSize: n,
                        progress: l,
                        rate: c
                    }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(i)).forEach(function(e) {
                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
                    }), o), t.emit("progress", t._file)
                }), d(c(t), "_handleException", function(e) {
                    t._handleError({
                        reason: {
                            type: s.FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN,
                            msg: e.toString()
                        }
                    })
                }), d(c(t), "_handleAborted", function() {
                    t.clearProcessingMessageInterval()
                }), d(c(t), "_handleError", function(e) {
                    var n = e.code,
                        r = e.reason,
                        o = e.body;
                    t.clearProcessingMessageInterval(), !t._aborted && (t._errored = !0, y.log("_handleError: ".concat(n, " (").concat(JSON.stringify(r), ") for ").concat(t.id)), t.emit("error", t._file, n, o, r), t.removeAllListeners())
                }), d(c(t), "_handleComplete", function(e) {
                    t.clearProcessingMessageInterval(), y.log("_handleComplete for ".concat(t.id)), t.emit("complete", t._file, e), t.removeAllListeners()
                }), t.id = i().uniqueId("Uploader"), t._url = e, t._method = r, t._raiseEndpointErrors = null !== (n = null == o ? void 0 : o.raiseEndpointErrors) && void 0 !== n && n, t
            }
            return r = I, o = [{
                key: "_addAttachmentsToPayload",
                value: function(e, t, n) {
                    var r = E({}, e),
                        o = m(i().get(r, t, [])).concat(m(n));
                    return i().set(r, t, o)
                }
            }, {
                key: "clearProcessingMessageInterval",
                value: function() {
                    null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), this.processingMessageChangeInterval = void 0)
                }
            }, {
                key: "cancel",
                value: function() {
                    y.log("cancel() for ".concat(this.id)), this._aborted = !0, null != this._cancel && this._cancel(), this._handleComplete()
                }
            }, {
                key: "cancelItem",
                value: function(e) {
                    throw Error("cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass")
                }
            }, {
                key: "upload",
                value: function(e, t, n) {
                    if (null != this._cancel) throw Error("Uploader.upload(...): An upload is already in progress.");
                    this._lastUpdate = Date.now(), this._loaded = 0, this._file = {
                        id: this.id,
                        name: e.name,
                        currentSize: 0,
                        totalPreCompressionSize: 0,
                        compressionProgress: 0,
                        progress: 0,
                        rate: 0,
                        hasImage: !1,
                        hasVideo: !1,
                        attachmentsCount: 0,
                        draftContent: null == t ? void 0 : t.content,
                        channelId: null == t ? void 0 : t.channel_id,
                        items: n
                    }
                }
            }], f(r.prototype, o), a && f(r, a), I
        }(r.EventEmitter)
}