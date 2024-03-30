function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BatchedStoreListener: function() {
            return r.BatchedStoreListener
        },
        Dispatcher: function() {
            return o.Dispatcher
        },
        Store: function() {
            return u.Store
        },
        statesWillNeverBeEqual: function() {
            return l.statesWillNeverBeEqual
        },
        useStateFromStores: function() {
            return l.useStateFromStores
        },
        useStateFromStoresArray: function() {
            return l.useStateFromStoresArray
        },
        useStateFromStoresObject: function() {
            return l.useStateFromStoresObject
        }
    });
    var r = n("483424"),
        o = n("371399"),
        i = n("533785"),
        a = n("386788"),
        u = n("929048"),
        s = n("928744"),
        l = n("37295");
    t.default = {
        Emitter: i.default,
        Store: u.Store,
        PersistedStore: a.PersistedStore,
        DeviceSettingsStore: a.DeviceSettingsStore,
        OfflineCacheStore: a.OfflineCacheStore,
        connectStores: s.default,
        initialize: function() {
            u.Store.initialize()
        },
        get initialized() {
            return u.Store.initialized
        }
    }
}