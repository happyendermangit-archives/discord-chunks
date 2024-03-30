function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("898511"),
        o = n("560412"),
        i = n("629815"),
        a = n("217014"),
        u = n("781639");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    o.TableId.KvCache, o.TableId.KvCache;
    var _ = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
        }(m, e);
        var t, n, r, i, _, p = (t = m, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : s(e)
        });

        function m() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m), e = p.apply(this, arguments), c(s(e), "database", function(e) {
                return u.default.database(null != e ? e : a.default.getId())
            }), c(s(e), "channels", E(function(e) {
                return new o.GuildEntityDao("guild_channels", o.TableId.KvCache, e)
            })), c(s(e), "channelsTemp", E(function(e) {
                return new o.GuildDao("guild_channels_temp", o.TableId.KvCache, e)
            })), c(s(e), "basicChannels", E(function(e) {
                return new o.Dao("basic_channels", o.TableId.KvCache, e)
            })), c(s(e), "syncedBasicChannels", E(function(e) {
                return new o.Dao("basic_channels_synced", o.TableId.KvCache, e)
            })), c(s(e), "cache", E(function(e) {
                return new o.Dao("cache", o.TableId.KvCache, e)
            })), c(s(e), "forceResyncVersion", E(function(e) {
                return new o.Dao("force_resync_version", o.TableId.KvCache, e)
            })), c(s(e), "emojis", E(function(e) {
                return new o.GuildEntityDao("guild_emojis", o.TableId.KvCache, e)
            })), c(s(e), "guilds", E(function(e) {
                return new o.EntityDao("guilds", o.TableId.KvCache, e)
            })), c(s(e), "guildsRequiringDeletedIdsSync", E(function(e) {
                return new o.EntityDao("guilds_requiring_deleted_ids_sync", o.TableId.KvCache, e)
            })), c(s(e), "messages", E(function(e) {
                return new o.MessageDao("messages", o.TableId.Messages, e)
            })), c(s(e), "stickers", E(function(e) {
                return new o.GuildEntityDao("guild_stickers", o.TableId.KvCache, e)
            })), c(s(e), "guildVersions", E(function(e) {
                return new o.EntityDao("guild_versions", o.TableId.KvCache, e)
            })), c(s(e), "nonGuildVersions", E(function(e) {
                return new o.EntityDao("non_guild_versions", o.TableId.KvCache, e)
            })), c(s(e), "userSettings", E(function(e) {
                return new o.EntityDao("user_settings", o.TableId.KvCache, e)
            })), c(s(e), "readStates", E(function(e) {
                return new o.Dao("read_states", o.TableId.KvCache, e)
            })), c(s(e), "userGuildSettings", E(function(e) {
                return new o.Dao("user_guild_settings", o.TableId.KvCache, e)
            })), c(s(e), "channelsTransaction", function(t) {
                return e.channels(t.database).upgradeTransaction(t)
            }), c(s(e), "channelsTempTransaction", function(t) {
                return e.channelsTemp(t.database).upgradeTransaction(t)
            }), c(s(e), "basicChannelsTransaction", function(t) {
                return e.basicChannels(t.database).upgradeTransaction(t)
            }), c(s(e), "syncedBasicChannelsTransaction", function(t) {
                return e.syncedBasicChannels(t.database).upgradeTransaction(t)
            }), c(s(e), "cacheTransaction", function(t) {
                return e.cache(t.database).upgradeTransaction(t)
            }), c(s(e), "forceResyncVersionTransaction", function(t) {
                return e.forceResyncVersion(t.database).upgradeTransaction(t)
            }), c(s(e), "emojisTransaction", function(t) {
                return e.emojis(t.database).upgradeTransaction(t)
            }), c(s(e), "guildsTransaction", function(t) {
                return e.guilds(t.database).upgradeTransaction(t)
            }), c(s(e), "messagesTransaction", function(t) {
                return e.messages(t.database).upgradeTransaction(t)
            }), c(s(e), "stickersTransaction", function(t) {
                return e.stickers(t.database).upgradeTransaction(t)
            }), c(s(e), "guildVersionsTransaction", function(t) {
                return e.guildVersions(t.database).upgradeTransaction(t)
            }), c(s(e), "nonGuildVersionsTransaction", function(t) {
                return e.nonGuildVersions(t.database).upgradeTransaction(t)
            }), c(s(e), "userSettingsTransaction", function(t) {
                return e.userSettings(t.database).upgradeTransaction(t)
            }), c(s(e), "readStatesTransaction", function(t) {
                return e.readStates(t.database).upgradeTransaction(t)
            }), c(s(e), "userGuildSettingsTransaction", function(t) {
                return e.userGuildSettings(t.database).upgradeTransaction(t)
            }), c(s(e), "guildsRequiringDeletedIdsSyncTransaction", function(t) {
                return e.guildsRequiringDeletedIdsSync(t.database).upgradeTransaction(t)
            }), e
        }
        return r = m, i = [{
            key: "initialize",
            value: function() {
                this.waitFor(a.default)
            }
        }], l(r.prototype, i), _ && l(r, _), m
    }(r.Store);

    function E(e) {
        return function(t) {
            var n = null != t ? t : u.default.database(a.default.getId());
            return null == n ? null : e(n)
        }
    }
    t.default = new _(i.default, {})
}