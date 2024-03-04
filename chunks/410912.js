function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var i = n("102053"),
        s = n("926274");
    let r = () => {};
    n.g.__timingFunction = () => performance.now();
    let a = null == n.g.__getTotalRequireTime ? () => 0 : () => n.g.__getTotalRequireTime();

    function o(e, t) {
        if (0 === t || null == t) return null;
        let n = t - e;
        return n < 0 || n > 1e6 ? null : n
    }
    class l {
        get start() {
            return this.start_
        }
        get end() {
            return this.end_
        }
        hasStart() {
            return this.start_ > 0
        }
        hasData() {
            return this.end_ > 0
        }
        recordStart() {
            0 === this.start_ && this.recordStart_(), i.default.mark(this.emoji, "Start ".concat(this.name)), r()
        }
        recordStart_() {
            this.start_ = Date.now(), this.startNumImports = s.size(), this.startImportTime = a()
        }
        recordEnd() {
            0 === this.end_ && 0 !== this.start_ ? (this.recordEnd_(), i.default.mark(this.emoji, "Finish ".concat(this.name), this.end_ - this.start_)) : i.default.mark(this.emoji, "Finish ".concat(this.name)), r()
        }
        recordEnd_() {
            this.end_ = Date.now(), this.endNumImports = s.size(), this.endImportTime = a()
        }
        set(e, t) {
            0 === this.start_ && (this.start_ = e, this.end_ = e + t, this.endNumImports = s.size(), this.endImportTime = a()), i.default.mark(this.emoji, this.name, t), r()
        }
        serializeStart(e) {
            return o(e, this.start_)
        }
        serializeEnd(e) {
            return o(e, this.end_)
        }
        measure(e) {
            if (this.start_ > 0) return i.default.time(this.emoji, this.name, e);
            this.recordStart_();
            let t = i.default.time(this.emoji, this.name, e);
            return this.recordEnd_(), r(), t
        }
        async measureAsync(e) {
            if (this.start_ > 0) return i.default.timeAsync(this.emoji, this.name, e);
            this.recordStart_();
            let t = await i.default.timeAsync(this.emoji, this.name, e);
            return this.recordEnd_(), r(), t
        }
        async measureAsyncWithoutNesting(e) {
            if (this.start_ > 0) return i.default.timeAsync(this.emoji, this.name, e);
            this.recordStart_();
            let t = Date.now();
            i.default.mark(this.emoji, "Start ".concat(this.name));
            let n = await e();
            return i.default.mark(this.emoji, "Finish ".concat(this.name), Date.now() - t), this.recordEnd_(), r(), n
        }
        constructor(e, t) {
            this.emoji = e, this.name = t, this.start_ = 0, this.startNumImports = 0, this.startImportTime = 0, this.end_ = 0, this.endNumImports = 0, this.endImportTime = 0
        }
    }
    class u {
        get time() {
            return this.time_
        }
        record() {
            0 === this.time_ ? (this.time_ = Date.now(), this.numImports = s.size(), this.importTime = a(), i.default.mark(this.emoji, this.name)) : !this.onlyOnce && i.default.mark(this.emoji, this.name), r()
        }
        hasData() {
            return this.time_ > 0
        }
        serialize(e) {
            return o(e, this.time_)
        }
        constructor(e, t, n = !1) {
            this.emoji = e, this.name = t, this.onlyOnce = n, this.time_ = 0, this.numImports = null, this.importTime = 0
        }
    }
    class d {
        get time() {
            return this.time_
        }
        record() {
            0 === this.time_ && (this.time_ = a())
        }
        constructor() {
            this.time_ = 0
        }
    }
    class c {
        constructor() {
            this.loadIndex = new l("❗", "Load index.tsx"), this.loadFastConnectNativeModule = new l("\uD83D\uDCBE", "Load fast_connect native module"), this.beginFastConnect = new l("\uD83C\uDF10", "Fast Connect IDENTIFY"), this.loadImports = new l("\uD83C\uDFC3", "Load Imports"), this.init = new l("\uD83C\uDFC3", "Initial Initialization"), this.loadStorage = new l("\uD83D\uDCBE", "Load Storage"), this.parseStorage = new l("\uD83D\uDCBE", "Parse Storage"), this.loadMiniCache = new l("\uD83D\uDCBE", "Load Mini Cache"), this.fetchInitialGuildCache = new l("\uD83D\uDCBE", "Fetch Initial Guild Cache"), this.loadCachedMessages = new l("\uD83D\uDCBE", "Load Cached Messages"), this.renderApp = new u("\uD83C\uDFA8", "First React Render"), this.renderAppEffect = new u("\uD83C\uDFA8", "First React Render useEffect"), this.renderMessages = new u("\uD83C\uDFA8", "React Render Messages", !0), this.renderMessagesWithCache = new u("\uD83C\uDFA8", "React Render Cached Messages", !0), this.firstRowGenerator = new l("\uD83C\uDFA8", "RowGenerator.generate()"), this.renderLatestMessages = new u("\uD83C\uDFA8", "React Render Latest Messages"), this.initialGuild = new l("\uD83C\uDF10", "Initial Guild"), this.loadLazyCache = new l("\uD83D\uDCBE", "Load Lazy Cache"), this.fetchLazyCache = new l("\uD83D\uDCBE", "Fetch Lazy Cache"), this.parseLazyCache = new l("\uD83D\uDCBE", "Parse Lazy Cache"), this.fetchStaleChannels = new l("\uD83D\uDCBE", "Fetch Stale Channels"), this.deserializeCache = new l("\uD83D\uDCBE", "Deserialize Cache"), this.dispatchLazyCache = new l("\uD83D\uDCBE", "Dispatch Lazy Cache"), this.parseReady = new l("\uD83C\uDF10", "Parse READY"), this.ready = new l("\uD83C\uDF10", "READY"), this.hydrateReady = new l("\uD83C\uDF10", "Hydrate READY"), this.dispatchReady = new l("\uD83C\uDF10", "Dispatch READY"), this.parseReadySupplemental = new l("\uD83C\uDF10", "Parse READY Supplemental"), this.readySupplemental = new l("\uD83C\uDF10", "READY Supplemental"), this.hydrateReadySupplemental = new l("\uD83C\uDF10", "Hydrate READY Supplemental"), this.dispatchReadySupplemental = new l("\uD83C\uDF10", "Dispatch READY Supplemental"), this.fetchMessages = new l("\uD83C\uDF10", "Fetch messages"), this.dispatchMessages = new l("\uD83C\uDF10", "Dispatch messages"), this.imports = {
                polyfillsEnd: new d,
                sentryEnd: new d,
                appStateChangeStart: new d,
                appStateChangeEnd: new d,
                loadMiniCacheStart: new d,
                loadStorageStart: new d,
                loadStorageEnd: new d
            }
        }
    }
    var f = new class e extends c {
        setTTICallback(e) {
            r = () => {
                !0 === e() && (r = () => !1)
            }
        }
        setCacheInfo(e) {
            this.cacheInfo = e
        }
        setInterstitial(e) {
            this.interstitial = e, r()
        }
        addLocalMessages(e, t) {
            for (this.cachedChannelCounts.set(e, t); this.cachedChannelCounts.size > 100;) {
                let e = this.cachedChannelCounts.keys();
                this.cachedChannelCounts.delete(e.next().value)
            }
        }
        attachReadyPayloadProperties(e) {
            this.readyProperties = e
        }
        appStateChanged(e) {
            "active" === e && (null == this.firstAppActiveTime && (this.firstAppActiveTime = Date.now()), this.wasEverActive = !0), null == this.readyProperties.num_guilds && (this.didBackgroundApp = this.didBackgroundApp || "active" !== e)
        }
        recordRender(e, t) {
            this.renderMessages.record(), (t || e > 0) && this.renderMessagesWithCache.record(), t && this.renderLatestMessages.record()
        }
        recordMessageRender(e, t, i, s) {
            let {
                default: r
            } = n("299039");
            if (!this.renderLatestMessages.hasData()) {
                if (this.renderMessages.record(), t.length > 0 && this.renderMessagesWithCache.record(), i) {
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
                        var a;
                        let n = this.cachedMessageIds.sort(r.compare).reverse()[0],
                            i = t.sort(r.compare).reverse()[0];
                        this.messageCacheAgeSeconds = Math.floor((r.extractTimestamp(i) - r.extractTimestamp(n)) / 1e3);
                        let o = t.filter(e => {
                            var t;
                            return null === (t = this.cachedMessageIds) || void 0 === t ? void 0 : t.includes(e)
                        }).length;
                        this.messageCacheCount = null !== (a = this.cachedChannelCounts.get(e)) && void 0 !== a ? a : null, this.messageCacheHavingCount = o, this.messageCacheMissingCount = t.length - o, this.messageRenderFullCount = t.length, this.messageRenderCachedCount = this.cachedMessageIds.length, this.messageRenderHasMoreAfter = s
                    }
                } else(null == this.cachedChannelId || e === this.cachedChannelId) && (this.cachedChannelId = e, this.cachedMessageIds = t, t.length > 0 && (this.messageCacheMissingReason = null))
            }
        }
        getStartTime(e) {
            return this.extraProperties.headless_task_ran && null != this.firstAppActiveTime ? this.firstAppActiveTime : null == e || e <= 0 ? this.loadIndex.start : e
        }
        processNativeLogs(e, t) {
            let n = this.getStartTime(t);
            for (let t of e) switch (t.label) {
                case "Finish MainApplication.initialize()":
                    this.extraProperties.time_main_application_initialize_end = o(n, t.timestamp);
                    break;
                case "GET_REACT_INSTANCE_MANAGER_START":
                    this.extraProperties.time_get_react_instance_manager_start = o(n, t.timestamp);
                    break;
                case "GET_REACT_INSTANCE_MANAGER_END":
                    this.extraProperties.time_get_react_instance_manager_end = o(n, t.timestamp);
                    break;
                case "PROCESS_PACKAGES_START":
                    this.extraProperties.time_process_packages_start = o(n, t.timestamp);
                    break;
                case "PROCESS_PACKAGES_END":
                    this.extraProperties.time_process_packages_end = o(n, t.timestamp);
                    break;
                case "CREATE_CATALYST_INSTANCE_START":
                    this.extraProperties.time_create_catalyst_instance_start = o(n, t.timestamp);
                    break;
                case "CREATE_CATALYST_INSTANCE_END":
                    this.extraProperties.time_create_catalyst_instance_end = o(n, t.timestamp);
                    break;
                case "CREATE_UI_MANAGER_MODULE_START":
                    this.extraProperties.time_create_ui_manager_module_start = o(n, t.timestamp);
                    break;
                case "CREATE_UI_MANAGER_MODULE_END":
                    this.extraProperties.time_create_ui_manager_module_end = o(n, t.timestamp);
                    break;
                case "REACT_BRIDGE_LOADING_START":
                    this.extraProperties.time_react_bridge_loading_start = o(n, t.timestamp);
                    break;
                case "REACT_BRIDGE_LOADING_END":
                    this.extraProperties.time_react_bridge_loading_end = o(n, t.timestamp);
                    break;
                case "CacheStorage Init Start":
                    this.extraProperties.time_init_native_storage_start = o(n, t.timestamp);
                    break;
                case "CacheStorage Init End":
                    this.extraProperties.time_init_native_storage_end = o(n, t.timestamp);
                    break;
                case "ChatModule.updateRows() Start":
                    if (null != this.extraProperties.time_first_native_message_render_start) continue;
                    this.extraProperties.time_first_native_message_render_start = o(n, t.timestamp);
                    break;
                case "ChatModule.updateRows() Finish":
                    if (null != this.extraProperties.time_first_native_message_render_end) continue;
                    this.extraProperties.time_first_native_message_render_end = o(n, t.timestamp)
            }
        }
        serializeTTITracker(e) {
            var t, s, r, a, o, l;
            let u = this.getStartTime(e),
                d = n("917351"),
                c = d(i.default.logGroups[0].logs).filter(e => e.log.startsWith("Require ")).map(e => {
                    var t;
                    return null !== (t = e.delta) && void 0 !== t ? t : 0
                }).sum();
            return {
                ...this.extraProperties,
                time_load_index_start: this.loadIndex.serializeStart(u),
                time_load_index_end: this.loadIndex.serializeEnd(u),
                time_begin_fast_connect_start: this.beginFastConnect.serializeStart(u),
                time_begin_fast_connect_end: this.beginFastConnect.serializeEnd(u),
                time_load_imports_start: this.loadImports.serializeStart(u),
                time_load_imports_end: this.loadImports.serializeEnd(u),
                time_init_start: this.init.serializeStart(u),
                time_init_end: this.init.serializeEnd(u),
                time_load_storage_start: this.loadStorage.serializeStart(u),
                time_load_storage_end: this.loadStorage.serializeEnd(u),
                time_parse_storage_start: this.parseStorage.serializeStart(u),
                time_parse_storage_end: this.parseStorage.serializeEnd(u),
                time_load_mini_cache_start: this.loadMiniCache.serializeStart(u),
                time_load_mini_cache_end: this.loadMiniCache.serializeEnd(u),
                time_fetch_initial_guild_start: this.fetchInitialGuildCache.serializeStart(u),
                time_fetch_initial_guild_end: this.fetchInitialGuildCache.serializeEnd(u),
                time_load_cached_messages_start: this.loadCachedMessages.serializeStart(u),
                time_load_cached_messages_end: this.loadCachedMessages.serializeEnd(u),
                time_render_app_start: this.renderApp.serialize(u),
                time_render_app_effect_start: this.renderAppEffect.serialize(u),
                time_render_messages_end: this.renderMessages.serialize(u),
                time_render_messages_with_cache_end: this.renderMessagesWithCache.serialize(u),
                time_render_latest_messages_end: this.renderLatestMessages.serialize(u),
                time_first_row_generator_start: this.firstRowGenerator.serializeStart(u),
                time_first_row_generator_end: this.firstRowGenerator.serializeEnd(u),
                time_initial_guild_start: this.initialGuild.serializeStart(u),
                time_initial_guild_end: this.initialGuild.serializeEnd(u),
                time_load_lazy_cache_start: this.loadLazyCache.serializeStart(u),
                time_load_lazy_cache_end: this.loadLazyCache.serializeEnd(u),
                time_fetch_lazy_cache_start: this.fetchLazyCache.serializeStart(u),
                time_fetch_lazy_cache_end: this.fetchLazyCache.serializeEnd(u),
                time_parse_lazy_cache_start: this.parseLazyCache.serializeStart(u),
                time_parse_lazy_cache_end: this.parseLazyCache.serializeEnd(u),
                time_fetch_stale_channels_start: this.fetchStaleChannels.serializeStart(u),
                time_fetch_stale_channels_end: this.fetchStaleChannels.serializeEnd(u),
                time_deserialize_cache_start: this.deserializeCache.serializeStart(u),
                time_deserialize_cache_end: this.deserializeCache.serializeEnd(u),
                time_dispatch_lazy_cache_start: this.dispatchLazyCache.serializeStart(u),
                time_dispatch_lazy_cache_end: this.dispatchLazyCache.serializeEnd(u),
                time_parse_ready_start: this.parseReady.serializeStart(u),
                time_parse_ready_end: this.parseReady.serializeEnd(u),
                time_ready_start: this.ready.serializeStart(u),
                time_ready_end: this.ready.serializeEnd(u),
                time_hydrate_ready_start: this.hydrateReady.serializeStart(u),
                time_hydrate_ready_end: this.hydrateReady.serializeEnd(u),
                time_dispatch_ready_start: this.dispatchReady.serializeStart(u),
                time_dispatch_ready_end: this.dispatchReady.serializeEnd(u),
                time_parse_ready_supplemental_start: this.parseReadySupplemental.serializeStart(u),
                time_parse_ready_supplemental_end: this.parseReadySupplemental.serializeEnd(u),
                time_ready_supplemental_start: this.readySupplemental.serializeStart(u),
                time_ready_supplemental_end: this.readySupplemental.serializeEnd(u),
                time_hydrate_ready_supplemental_start: this.hydrateReadySupplemental.serializeStart(u),
                time_hydrate_ready_supplemental_end: this.hydrateReadySupplemental.serializeEnd(u),
                time_dispatch_ready_supplemental_start: this.dispatchReadySupplemental.serializeStart(u),
                time_dispatch_ready_supplemental_end: this.dispatchReadySupplemental.serializeEnd(u),
                time_fetch_messages_start: this.fetchMessages.serializeStart(u),
                time_fetch_messages_end: this.fetchMessages.serializeEnd(u),
                time_dispatch_messages_start: this.dispatchMessages.serializeStart(u),
                time_dispatch_messages_end: this.dispatchMessages.serializeEnd(u),
                time_load_fast_connect_native_module_start: this.loadFastConnectNativeModule.serializeStart(u),
                time_load_fast_connect_native_module_end: this.loadFastConnectNativeModule.serializeEnd(u),
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
                duration_major_js_imports: this.loadImports.end - this.loadIndex.start + c,
                cache_num_guilds: null === (t = this.cacheInfo) || void 0 === t ? void 0 : t.guilds,
                cache_num_private_channels: null === (s = this.cacheInfo) || void 0 === s ? void 0 : s.privateChannels,
                cache_num_basic_channels: null === (r = this.cacheInfo) || void 0 === r ? void 0 : r.basicChannels,
                cache_num_basic_channels_stale: null === (a = this.cacheInfo) || void 0 === a ? void 0 : a.basicChannelsStale,
                cache_num_full_channels: null === (o = this.cacheInfo) || void 0 === o ? void 0 : o.fullChannels,
                cache_num_full_channel_guilds: null === (l = this.cacheInfo) || void 0 === l ? void 0 : l.fullChannelGuilds,
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
            }
        }
        constructor(...e) {
            super(...e), this.readyProperties = {}, this.didBackgroundApp = !1, this.wasEverActive = !1, this.wasAuthenticated = !1, this.interstitial = null, this.cachedChannelCounts = new Map, this.cachedChannelId = null, this.cachedMessageIds = null, this.messageCacheMissingReason = "never-loaded", this.messageCacheAgeSeconds = null, this.messageCacheCount = null, this.messageCacheHavingCount = null, this.messageCacheMissingCount = null, this.messageRenderFullCount = null, this.messageRenderCachedCount = null, this.messageRenderHasMoreAfter = null, this.firstAppActiveTime = null, this.cacheInfo = null, this.extraProperties = {}
        }
    }
}