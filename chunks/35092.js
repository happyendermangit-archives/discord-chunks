function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return i
        }
    });
    var t = E("805833"),
        o = E("303365"),
        n = E("75247"),
        r = E("661496"),
        i = {
            Emitter: t.default,
            Store: n.default,
            PersistedStore: o.default,
            DeviceSettingsStore: o.DeviceSettingsStore,
            OfflineCacheStore: o.OfflineCacheStore,
            connectStores: r.default,
            initialize() {
                n.default.initialize()
            },
            get initialized() {
                return n.default.initialized
            },
            destroy() {
                o.default.destroy()
            }
        }
}