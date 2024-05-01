function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BatchedStoreListener: function() {
            return i.BatchedStoreListener
        },
        Dispatcher: function() {
            return r.Dispatcher
        },
        Store: function() {
            return o.Store
        },
        statesWillNeverBeEqual: function() {
            return u.statesWillNeverBeEqual
        },
        useStateFromStores: function() {
            return u.useStateFromStores
        },
        useStateFromStoresArray: function() {
            return u.useStateFromStoresArray
        },
        useStateFromStoresObject: function() {
            return u.useStateFromStoresObject
        }
    });
    var i = n("250919"),
        r = n("613568"),
        a = n("153102"),
        s = n("727438"),
        o = n("445346"),
        l = n("441244"),
        u = n("399606");
    t.default = {
        Emitter: a.default,
        Store: o.Store,
        PersistedStore: s.PersistedStore,
        DeviceSettingsStore: s.DeviceSettingsStore,
        OfflineCacheStore: s.OfflineCacheStore,
        connectStores: l.default,
        initialize: function() {
            o.Store.initialize()
        },
        get initialized() {
            return o.Store.initialized
        }
    }
}