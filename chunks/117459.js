function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("757167"),
        o = n("220878");

    function i(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function a(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function u(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function u(e) {
                    a(i, r, o, u, s, "next", e)
                }

                function s(e) {
                    a(i, r, o, u, s, "throw", e)
                }
                u(void 0)
            })
        }
    }

    function s(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t && l(e.prototype, t), n && l(e, n), e
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

    function E(e, t) {
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
    }
    var p = function() {};
    n.g.__timingFunction = function() {
        return performance.now()
    };
    var m = null == n.g.__getTotalRequireTime ? function() {
        return 0
    } : function() {
        return n.g.__getTotalRequireTime()
    };

    function y(e, t) {
        if (0 === t || null == t) return null;
        var n = t - e;
        return n < 0 || n > 1e6 ? null : n
    }
    var I = function() {
            function e(t, n) {
                s(this, e), f(this, "emoji", void 0), f(this, "name", void 0), f(this, "start_", void 0), f(this, "startNumImports", void 0), f(this, "startImportTime", void 0), f(this, "end_", void 0), f(this, "endNumImports", void 0), f(this, "endImportTime", void 0), this.emoji = t, this.name = n, this.start_ = 0, this.startNumImports = 0, this.startImportTime = 0, this.end_ = 0, this.endNumImports = 0, this.endImportTime = 0
            }
            return c(e, [{
                key: "start",
                get: function() {
                    return this.start_
                }
            }, {
                key: "end",
                get: function() {
                    return this.end_
                }
            }, {
                key: "hasStart",
                value: function() {
                    return this.start_ > 0
                }
            }, {
                key: "hasData",
                value: function() {
                    return this.end_ > 0
                }
            }, {
                key: "recordStart",
                value: function() {
                    0 === this.start_ && this.recordStart_(), r.default.mark(this.emoji, "Start ".concat(this.name)), p()
                }
            }, {
                key: "recordStart_",
                value: function() {
                    this.start_ = Date.now(), this.startNumImports = o.size(), this.startImportTime = m()
                }
            }, {
                key: "recordEnd",
                value: function() {
                    0 === this.end_ && 0 !== this.start_ ? (this.recordEnd_(), r.default.mark(this.emoji, "Finish ".concat(this.name), this.end_ - this.start_)) : r.default.mark(this.emoji, "Finish ".concat(this.name)), p()
                }
            }, {
                key: "recordEnd_",
                value: function() {
                    this.end_ = Date.now(), this.endNumImports = o.size(), this.endImportTime = m()
                }
            }, {
                key: "set",
                value: function(e, t) {
                    0 === this.start_ && (this.start_ = e, this.end_ = e + t, this.endNumImports = o.size(), this.endImportTime = m()), r.default.mark(this.emoji, this.name, t), p()
                }
            }, {
                key: "serializeStart",
                value: function(e) {
                    return y(e, this.start_)
                }
            }, {
                key: "serializeEnd",
                value: function(e) {
                    return y(e, this.end_)
                }
            }, {
                key: "measure",
                value: function(e) {
                    if (this.start_ > 0) return r.default.time(this.emoji, this.name, e);
                    this.recordStart_();
                    var t = r.default.time(this.emoji, this.name, e);
                    return this.recordEnd_(), p(), t
                }
            }, {
                key: "measureAsync",
                value: function(e) {
                    var t = this;
                    return u(function() {
                        var n;
                        return E(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    if (t.start_ > 0) return [2, r.default.timeAsync(t.emoji, t.name, e)];
                                    return t.recordStart_(), [4, r.default.timeAsync(t.emoji, t.name, e)];
                                case 1:
                                    return n = o.sent(), t.recordEnd_(), p(), [2, n]
                            }
                        })
                    })()
                }
            }, {
                key: "measureAsyncWithoutNesting",
                value: function(e) {
                    var t = this;
                    return u(function() {
                        var n, o;
                        return E(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (t.start_ > 0) return [2, r.default.timeAsync(t.emoji, t.name, e)];
                                    return t.recordStart_(), n = Date.now(), r.default.mark(t.emoji, "Start ".concat(t.name)), [4, e()];
                                case 1:
                                    return o = i.sent(), r.default.mark(t.emoji, "Finish ".concat(t.name), Date.now() - n), t.recordEnd_(), p(), [2, o]
                            }
                        })
                    })()
                }
            }]), e
        }(),
        h = function() {
            function e(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                s(this, e), f(this, "emoji", void 0), f(this, "name", void 0), f(this, "onlyOnce", void 0), f(this, "time_", void 0), f(this, "numImports", void 0), f(this, "importTime", void 0), this.emoji = t, this.name = n, this.onlyOnce = r, this.time_ = 0, this.numImports = null, this.importTime = 0
            }
            return c(e, [{
                key: "time",
                get: function() {
                    return this.time_
                }
            }, {
                key: "record",
                value: function() {
                    0 === this.time_ ? (this.time_ = Date.now(), this.numImports = o.size(), this.importTime = m(), r.default.mark(this.emoji, this.name)) : !this.onlyOnce && r.default.mark(this.emoji, this.name), p()
                }
            }, {
                key: "hasData",
                value: function() {
                    return this.time_ > 0
                }
            }, {
                key: "serialize",
                value: function(e) {
                    return y(e, this.time_)
                }
            }]), e
        }(),
        O = function() {
            function e() {
                s(this, e), f(this, "time_", 0)
            }
            return c(e, [{
                key: "time",
                get: function() {
                    return this.time_
                }
            }, {
                key: "record",
                value: function() {
                    0 === this.time_ && (this.time_ = m())
                }
            }]), e
        }(),
        T = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
            }(u, e);
            var t, o, a = (t = u, o = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, n, r, a = d(t);
                if (o) {
                    var u = d(this).constructor;
                    r = Reflect.construct(a, arguments, u)
                } else r = a.apply(this, arguments);
                return e = this, (n = r) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(n) || "function" == typeof n) ? n : i(e)
            });

            function u() {
                var e;
                return s(this, u), e = a.apply(this, arguments), f(i(e), "readyProperties", {}), f(i(e), "didBackgroundApp", !1), f(i(e), "wasEverActive", !1), f(i(e), "wasAuthenticated", !1), f(i(e), "interstitial", null), f(i(e), "cachedChannelCounts", new Map), f(i(e), "cachedChannelId", null), f(i(e), "cachedMessageIds", null), f(i(e), "messageCacheMissingReason", "never-loaded"), f(i(e), "messageCacheAgeSeconds", null), f(i(e), "messageCacheCount", null), f(i(e), "messageCacheHavingCount", null), f(i(e), "messageCacheMissingCount", null), f(i(e), "messageRenderFullCount", null), f(i(e), "messageRenderCachedCount", null), f(i(e), "messageRenderHasMoreAfter", null), f(i(e), "firstAppActiveTime", null), f(i(e), "cacheInfo", null), f(i(e), "extraProperties", {}), e
            }
            return c(u, [{
                key: "setTTICallback",
                value: function(e) {
                    p = function() {
                        !0 === e() && (p = function() {
                            return !1
                        })
                    }
                }
            }, {
                key: "setCacheInfo",
                value: function(e) {
                    this.cacheInfo = e
                }
            }, {
                key: "setInterstitial",
                value: function(e) {
                    this.interstitial = e, p()
                }
            }, {
                key: "addLocalMessages",
                value: function(e, t) {
                    for (this.cachedChannelCounts.set(e, t); this.cachedChannelCounts.size > 100;) {
                        var n = this.cachedChannelCounts.keys();
                        this.cachedChannelCounts.delete(n.next().value)
                    }
                }
            }, {
                key: "attachReadyPayloadProperties",
                value: function(e) {
                    this.readyProperties = e
                }
            }, {
                key: "appStateChanged",
                value: function(e) {
                    "active" === e && (null == this.firstAppActiveTime && (this.firstAppActiveTime = Date.now()), this.wasEverActive = !0), null == this.readyProperties.num_guilds && (this.didBackgroundApp = this.didBackgroundApp || "active" !== e)
                }
            }, {
                key: "recordRender",
                value: function(e, t) {
                    this.renderMessages.record(), (t || e > 0) && this.renderMessagesWithCache.record(), t && this.renderLatestMessages.record()
                }
            }, {
                key: "recordMessageRender",
                value: function(e, t, r, o) {
                    var i = this,
                        a = n("523018").default;
                    if (!this.renderLatestMessages.hasData()) {
                        if (this.renderMessages.record(), t.length > 0 && this.renderMessagesWithCache.record(), r) {
                            if (this.renderLatestMessages.record(), null == this.cachedChannelId) {
                                this.messageCacheMissingReason = "no-cache";
                                return
                            }
                            if (this.cachedChannelId !== e) {
                                this.messageCacheMissingReason = "channel-changed";
                                return
                            }
                            if (null == this.cachedMessageIds || 0 === this.cachedMessageIds.length) {
                                this.messageCacheMissingReason = "no-cache";
                                return
                            }
                            if (0 === t.length) {
                                this.messageCacheMissingReason = "channel-empty";
                                return
                            }
                            if (e === this.cachedChannelId) {
                                var u, s = this.cachedMessageIds.sort(a.compare).reverse()[0],
                                    l = t.sort(a.compare).reverse()[0];
                                this.messageCacheAgeSeconds = Math.floor((a.extractTimestamp(l) - a.extractTimestamp(s)) / 1e3);
                                var c = t.filter(function(e) {
                                    var t;
                                    return null === (t = i.cachedMessageIds) || void 0 === t ? void 0 : t.includes(e)
                                }).length;
                                this.messageCacheCount = null !== (u = this.cachedChannelCounts.get(e)) && void 0 !== u ? u : null, this.messageCacheHavingCount = c, this.messageCacheMissingCount = t.length - c, this.messageRenderFullCount = t.length, this.messageRenderCachedCount = this.cachedMessageIds.length, this.messageRenderHasMoreAfter = o
                            }
                        } else(null == this.cachedChannelId || e === this.cachedChannelId) && (this.cachedChannelId = e, this.cachedMessageIds = t, t.length > 0 && (this.messageCacheMissingReason = null))
                    }
                }
            }, {
                key: "getStartTime",
                value: function(e) {
                    return this.extraProperties.headless_task_ran && null != this.firstAppActiveTime ? this.firstAppActiveTime : null == e || e <= 0 ? this.loadIndex.start : e
                }
            }, {
                key: "processNativeLogs",
                value: function(e, t) {
                    var n = this.getStartTime(t),
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = a.value;
                            switch (s.label) {
                                case "Finish MainApplication.initialize()":
                                    this.extraProperties.time_main_application_initialize_end = y(n, s.timestamp);
                                    break;
                                case "GET_REACT_INSTANCE_MANAGER_START":
                                    this.extraProperties.time_get_react_instance_manager_start = y(n, s.timestamp);
                                    break;
                                case "GET_REACT_INSTANCE_MANAGER_END":
                                    this.extraProperties.time_get_react_instance_manager_end = y(n, s.timestamp);
                                    break;
                                case "PROCESS_PACKAGES_START":
                                    this.extraProperties.time_process_packages_start = y(n, s.timestamp);
                                    break;
                                case "PROCESS_PACKAGES_END":
                                    this.extraProperties.time_process_packages_end = y(n, s.timestamp);
                                    break;
                                case "CREATE_CATALYST_INSTANCE_START":
                                    this.extraProperties.time_create_catalyst_instance_start = y(n, s.timestamp);
                                    break;
                                case "CREATE_CATALYST_INSTANCE_END":
                                    this.extraProperties.time_create_catalyst_instance_end = y(n, s.timestamp);
                                    break;
                                case "CREATE_UI_MANAGER_MODULE_START":
                                    this.extraProperties.time_create_ui_manager_module_start = y(n, s.timestamp);
                                    break;
                                case "CREATE_UI_MANAGER_MODULE_END":
                                    this.extraProperties.time_create_ui_manager_module_end = y(n, s.timestamp);
                                    break;
                                case "REACT_BRIDGE_LOADING_START":
                                    this.extraProperties.time_react_bridge_loading_start = y(n, s.timestamp);
                                    break;
                                case "REACT_BRIDGE_LOADING_END":
                                    this.extraProperties.time_react_bridge_loading_end = y(n, s.timestamp);
                                    break;
                                case "CacheStorage Init Start":
                                    this.extraProperties.time_init_native_storage_start = y(n, s.timestamp);
                                    break;
                                case "CacheStorage Init End":
                                    this.extraProperties.time_init_native_storage_end = y(n, s.timestamp);
                                    break;
                                case "ChatModule.updateRows() Start":
                                    if (null != this.extraProperties.time_first_native_message_render_start) continue;
                                    this.extraProperties.time_first_native_message_render_start = y(n, s.timestamp);
                                    break;
                                case "ChatModule.updateRows() Finish":
                                    if (null != this.extraProperties.time_first_native_message_render_end) continue;
                                    this.extraProperties.time_first_native_message_render_end = y(n, s.timestamp)
                            }
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
            }, {
                key: "serializeTTITracker",
                value: function(e) {
                    var t, o, i, a, u, s, l, c, d = this.getStartTime(e),
                        _ = n("392711")(r.default.logGroups["0"].logs).filter(function(e) {
                            return e.log.startsWith("Require ")
                        }).map(function(e) {
                            var t;
                            return null !== (t = e.delta) && void 0 !== t ? t : 0
                        }).sum();
                    return t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                f(e, t, n[t])
                            })
                        }
                        return e
                    }({}, this.extraProperties), o = (o = {
                        time_load_index_start: this.loadIndex.serializeStart(d),
                        time_load_index_end: this.loadIndex.serializeEnd(d),
                        time_begin_fast_connect_start: this.beginFastConnect.serializeStart(d),
                        time_begin_fast_connect_end: this.beginFastConnect.serializeEnd(d),
                        time_load_imports_start: this.loadImports.serializeStart(d),
                        time_load_imports_end: this.loadImports.serializeEnd(d),
                        time_init_start: this.init.serializeStart(d),
                        time_init_end: this.init.serializeEnd(d),
                        time_load_storage_start: this.loadStorage.serializeStart(d),
                        time_load_storage_end: this.loadStorage.serializeEnd(d),
                        time_parse_storage_start: this.parseStorage.serializeStart(d),
                        time_parse_storage_end: this.parseStorage.serializeEnd(d),
                        time_load_mini_cache_start: this.loadMiniCache.serializeStart(d),
                        time_load_mini_cache_end: this.loadMiniCache.serializeEnd(d),
                        time_fetch_initial_guild_start: this.fetchGuildCache.serializeStart(d),
                        time_fetch_initial_guild_end: this.fetchGuildCache.serializeEnd(d),
                        time_load_cached_messages_start: this.loadCachedMessages.serializeStart(d),
                        time_load_cached_messages_end: this.loadCachedMessages.serializeEnd(d),
                        time_render_app_start: this.renderApp.serialize(d),
                        time_render_app_effect_start: this.renderAppEffect.serialize(d),
                        time_render_messages_end: this.renderMessages.serialize(d),
                        time_render_messages_with_cache_end: this.renderMessagesWithCache.serialize(d),
                        time_render_latest_messages_end: this.renderLatestMessages.serialize(d),
                        time_first_row_generator_start: this.firstRowGenerator.serializeStart(d),
                        time_first_row_generator_end: this.firstRowGenerator.serializeEnd(d),
                        time_initial_guild_start: this.initialGuild.serializeStart(d),
                        time_initial_guild_end: this.initialGuild.serializeEnd(d),
                        time_load_lazy_cache_start: this.loadLazyCache.serializeStart(d),
                        time_load_lazy_cache_end: this.loadLazyCache.serializeEnd(d),
                        time_fetch_lazy_cache_start: this.fetchLazyCache.serializeStart(d),
                        time_fetch_lazy_cache_end: this.fetchLazyCache.serializeEnd(d),
                        time_parse_lazy_cache_start: this.parseLazyCache.serializeStart(d),
                        time_parse_lazy_cache_end: this.parseLazyCache.serializeEnd(d),
                        time_fetch_stale_channels_start: this.fetchStaleChannels.serializeStart(d),
                        time_fetch_stale_channels_end: this.fetchStaleChannels.serializeEnd(d),
                        time_deserialize_cache_start: this.deserializeCache.serializeStart(d),
                        time_deserialize_cache_end: this.deserializeCache.serializeEnd(d),
                        time_dispatch_lazy_cache_start: this.dispatchLazyCache.serializeStart(d),
                        time_dispatch_lazy_cache_end: this.dispatchLazyCache.serializeEnd(d),
                        time_parse_ready_start: this.parseReady.serializeStart(d),
                        time_parse_ready_end: this.parseReady.serializeEnd(d),
                        time_ready_start: this.ready.serializeStart(d),
                        time_ready_end: this.ready.serializeEnd(d),
                        time_hydrate_ready_start: this.hydrateReady.serializeStart(d),
                        time_hydrate_ready_end: this.hydrateReady.serializeEnd(d),
                        time_dispatch_ready_start: this.dispatchReady.serializeStart(d),
                        time_dispatch_ready_end: this.dispatchReady.serializeEnd(d),
                        time_parse_ready_supplemental_start: this.parseReadySupplemental.serializeStart(d),
                        time_parse_ready_supplemental_end: this.parseReadySupplemental.serializeEnd(d),
                        time_ready_supplemental_start: this.readySupplemental.serializeStart(d),
                        time_ready_supplemental_end: this.readySupplemental.serializeEnd(d),
                        time_hydrate_ready_supplemental_start: this.hydrateReadySupplemental.serializeStart(d),
                        time_hydrate_ready_supplemental_end: this.hydrateReadySupplemental.serializeEnd(d),
                        time_dispatch_ready_supplemental_start: this.dispatchReadySupplemental.serializeStart(d),
                        time_dispatch_ready_supplemental_end: this.dispatchReadySupplemental.serializeEnd(d),
                        time_fetch_messages_start: this.fetchMessages.serializeStart(d),
                        time_fetch_messages_end: this.fetchMessages.serializeEnd(d),
                        time_dispatch_messages_start: this.dispatchMessages.serializeStart(d),
                        time_dispatch_messages_end: this.dispatchMessages.serializeEnd(d),
                        time_load_fast_connect_native_module_start: this.loadFastConnectNativeModule.serializeStart(d),
                        time_load_fast_connect_native_module_end: this.loadFastConnectNativeModule.serializeEnd(d),
                        identify_total_server_duration_ms: this.readyProperties.identify_total_server_duration_ms,
                        identify_api_duration_ms: this.readyProperties.identify_api_duration_ms,
                        identify_guilds_duration_ms: this.readyProperties.identify_guilds_duration_ms,
                        ready_compressed_byte_size: this.readyProperties.compressed_byte_size,
                        ready_uncompressed_byte_size: this.readyProperties.uncompressed_byte_size,
                        identify_compressed_byte_size: this.readyProperties.identify_compressed_byte_size,
                        identify_uncompressed_byte_size: this.readyProperties.identify_uncompressed_byte_size,
                        ready_compression_algorithm: this.readyProperties.compression_algorithm,
                        ready_packing_algorithm: this.readyProperties.packing_algorithm,
                        ready_unpack_duration_ms: this.readyProperties.unpack_duration_ms,
                        is_reconnect: this.readyProperties.is_reconnect,
                        is_fast_connect: this.readyProperties.is_fast_connect,
                        did_force_clear_guild_hashes: this.readyProperties.did_force_clear_guild_hashes,
                        num_guilds: this.readyProperties.num_guilds,
                        num_changed_guild_channels: this.readyProperties.num_guild_channels,
                        ready_presences_size: this.readyProperties.presences_size,
                        ready_users_size: this.readyProperties.users_size,
                        ready_read_states_size: this.readyProperties.read_states_size,
                        ready_private_channels_size: this.readyProperties.private_channels_size,
                        ready_user_guild_settings_size: this.readyProperties.user_guild_settings_size,
                        ready_relationships_size: this.readyProperties.relationships_size,
                        ready_experiments_size: this.readyProperties.experiments_size,
                        ready_user_settings_size: this.readyProperties.user_settings_size,
                        ready_remaining_data_size: this.readyProperties.remaining_data_size,
                        ready_guild_channels_size: this.readyProperties.guild_channels_size,
                        ready_guild_members_size: this.readyProperties.guild_members_size,
                        ready_guild_presences_size: this.readyProperties.guild_presences_size,
                        ready_guild_roles_size: this.readyProperties.guild_roles_size,
                        ready_guild_emojis_size: this.readyProperties.guild_emojis_size,
                        ready_guild_remaining_data_size: this.readyProperties.guild_remaining_data_size,
                        ready_guild_threads_size: this.readyProperties.guild_threads_size,
                        ready_guild_stickers_size: this.readyProperties.guild_stickers_size,
                        ready_guild_events_size: this.readyProperties.guild_events_size,
                        ready_guild_features_size: this.readyProperties.guild_features_size,
                        ready_size_metrics_duration_ms: this.readyProperties.size_metrics_duration_ms,
                        had_cache_at_startup: this.readyProperties.had_cache_at_startup,
                        used_cache_at_startup: this.readyProperties.used_cache_at_startup,
                        was_authenticated: this.wasAuthenticated,
                        did_background_app: this.didBackgroundApp,
                        interstitial: this.interstitial,
                        message_cache_missing_reason: this.messageCacheMissingReason,
                        message_cache_age_seconds: this.messageCacheAgeSeconds,
                        message_cache_count: this.messageCacheCount,
                        message_cache_having_count: this.messageCacheHavingCount,
                        message_cache_missing_count: this.messageCacheMissingCount,
                        message_render_full_count: this.messageRenderFullCount,
                        message_render_cached_count: this.messageRenderCachedCount,
                        message_render_has_more_after: this.messageRenderHasMoreAfter,
                        duration_major_js_imports: this.loadImports.end - this.loadIndex.start + _,
                        cache_num_guilds: null === (i = this.cacheInfo) || void 0 === i ? void 0 : i.guilds,
                        cache_num_private_channels: null === (a = this.cacheInfo) || void 0 === a ? void 0 : a.privateChannels,
                        cache_num_basic_channels: null === (u = this.cacheInfo) || void 0 === u ? void 0 : u.basicChannels,
                        cache_num_basic_channels_stale: null === (s = this.cacheInfo) || void 0 === s ? void 0 : s.basicChannelsStale,
                        cache_num_full_channels: null === (l = this.cacheInfo) || void 0 === l ? void 0 : l.fullChannels,
                        cache_num_full_channel_guilds: null === (c = this.cacheInfo) || void 0 === c ? void 0 : c.fullChannelGuilds,
                        num_imports_at_load_index_end: this.loadIndex.endNumImports,
                        num_imports_at_init_end: this.init.endNumImports,
                        num_imports_at_load_mini_cache_end: this.loadMiniCache.endNumImports,
                        num_imports_at_render_app_start: this.renderApp.numImports,
                        num_imports_at_render_app_effect_start: this.renderAppEffect.numImports,
                        num_imports_at_render_messages_end: this.renderMessages.numImports,
                        num_imports_at_render_messages_with_cache_end: this.renderMessagesWithCache.numImports,
                        num_imports_at_render_latest_messages_end: this.renderLatestMessages.numImports,
                        num_imports_at_load_lazy_cache_start: this.loadLazyCache.startNumImports,
                        num_imports_at_load_lazy_cache_end: this.loadLazyCache.endNumImports,
                        num_imports_at_ready_start: this.ready.startNumImports,
                        num_imports_at_ready_end: this.ready.endNumImports,
                        num_imports_at_ready_supplemental_start: this.readySupplemental.startNumImports,
                        num_imports_at_ready_supplemental_end: this.readySupplemental.endNumImports,
                        duration_imports_at_load_index_start: Math.ceil(this.loadIndex.startImportTime),
                        duration_imports_at_load_index_end: Math.ceil(this.loadIndex.endImportTime),
                        duration_imports_at_init_end: Math.ceil(this.init.endImportTime),
                        duration_imports_at_load_mini_cache_end: Math.ceil(this.loadMiniCache.endImportTime),
                        duration_imports_at_render_app_start: Math.ceil(this.renderApp.importTime),
                        duration_imports_at_render_app_effect_start: Math.ceil(this.renderAppEffect.importTime),
                        duration_imports_at_render_messages_end: Math.ceil(this.renderMessages.importTime),
                        duration_imports_at_render_messages_with_cache_end: Math.ceil(this.renderMessagesWithCache.importTime),
                        duration_imports_at_render_latest_messages_end: Math.ceil(this.renderLatestMessages.importTime),
                        duration_imports_at_load_lazy_cache_start: Math.ceil(this.loadLazyCache.startImportTime),
                        duration_imports_at_load_lazy_cache_end: Math.ceil(this.loadLazyCache.endImportTime),
                        duration_imports_at_ready_start: Math.ceil(this.ready.startImportTime),
                        duration_imports_at_ready_end: Math.ceil(this.ready.endImportTime),
                        duration_imports_at_ready_supplemental_start: Math.ceil(this.readySupplemental.startImportTime),
                        duration_imports_at_ready_supplemental_end: Math.ceil(this.readySupplemental.endImportTime),
                        duration_imports_at_polyfills_end: Math.ceil(this.imports.polyfillsEnd.time),
                        duration_imports_at_sentry_end: Math.ceil(this.imports.sentryEnd.time),
                        duration_imports_at_fast_connect_start: Math.ceil(this.beginFastConnect.startImportTime),
                        duration_imports_at_fast_connect_end: Math.ceil(this.beginFastConnect.endImportTime),
                        duration_imports_at_app_state_change_start: Math.ceil(this.imports.appStateChangeStart.time),
                        duration_imports_at_app_state_change_end: Math.ceil(this.imports.appStateChangeEnd.time),
                        duration_imports_at_load_mini_cache_start: Math.ceil(this.imports.loadMiniCacheStart.time),
                        duration_imports_at_load_storage_start: Math.ceil(this.imports.loadStorageStart.time),
                        duration_imports_at_load_storage_end: Math.ceil(this.imports.loadStorageEnd.time)
                    }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(o)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                    }), t
                }
            }]), u
        }(function e() {
            s(this, e), f(this, "loadIndex", new I("❗", "Load index.tsx")), f(this, "loadFastConnectNativeModule", new I("\uD83D\uDCBE", "Load fast_connect native module")), f(this, "beginFastConnect", new I("\uD83C\uDF10", "Fast Connect IDENTIFY")), f(this, "loadImports", new I("\uD83C\uDFC3", "Load Imports")), f(this, "init", new I("\uD83C\uDFC3", "Initial Initialization")), f(this, "loadStorage", new I("\uD83D\uDCBE", "Load Storage")), f(this, "parseStorage", new I("\uD83D\uDCBE", "Parse Storage")), f(this, "loadMiniCache", new I("\uD83D\uDCBE", "Load Mini Cache")), f(this, "fetchGuildCache", new I("\uD83D\uDCBE", "Fetch Guild Cache")), f(this, "fetchGuildChannelsCache", new I("\uD83D\uDCBE", "Fetch Initial Guild Channels Cache")), f(this, "loadCachedMessages", new I("\uD83D\uDCBE", "Load Cached Messages")), f(this, "renderApp", new h("\uD83C\uDFA8", "First React Render")), f(this, "renderAppEffect", new h("\uD83C\uDFA8", "First React Render useEffect")), f(this, "renderMessages", new h("\uD83C\uDFA8", "React Render Messages", !0)), f(this, "renderMessagesWithCache", new h("\uD83C\uDFA8", "React Render Cached Messages", !0)), f(this, "firstRowGenerator", new I("\uD83C\uDFA8", "RowGenerator.generate()")), f(this, "renderLatestMessages", new h("\uD83C\uDFA8", "React Render Latest Messages")), f(this, "initialGuild", new I("\uD83C\uDF10", "Initial Guild")), f(this, "loadLazyCache", new I("\uD83D\uDCBE", "Load Lazy Cache")), f(this, "fetchLazyCache", new I("\uD83D\uDCBE", "Fetch Lazy Cache")), f(this, "parseLazyCache", new I("\uD83D\uDCBE", "Parse Lazy Cache")), f(this, "fetchStaleChannels", new I("\uD83D\uDCBE", "Fetch Stale Channels")), f(this, "deserializeCache", new I("\uD83D\uDCBE", "Deserialize Cache")), f(this, "dispatchLazyCache", new I("\uD83D\uDCBE", "Dispatch Lazy Cache")), f(this, "parseReady", new I("\uD83C\uDF10", "Parse READY")), f(this, "ready", new I("\uD83C\uDF10", "READY")), f(this, "hydrateReady", new I("\uD83C\uDF10", "Hydrate READY")), f(this, "dispatchReady", new I("\uD83C\uDF10", "Dispatch READY")), f(this, "parseReadySupplemental", new I("\uD83C\uDF10", "Parse READY Supplemental")), f(this, "readySupplemental", new I("\uD83C\uDF10", "READY Supplemental")), f(this, "hydrateReadySupplemental", new I("\uD83C\uDF10", "Hydrate READY Supplemental")), f(this, "dispatchReadySupplemental", new I("\uD83C\uDF10", "Dispatch READY Supplemental")), f(this, "fetchMessages", new I("\uD83C\uDF10", "Fetch messages")), f(this, "dispatchMessages", new I("\uD83C\uDF10", "Dispatch messages")), f(this, "imports", {
                polyfillsEnd: new O,
                sentryEnd: new O,
                appStateChangeStart: new O,
                appStateChangeEnd: new O,
                loadMiniCacheStart: new O,
                loadStorageStart: new O,
                loadStorageEnd: new O
            })
        });
    t.default = new T
}