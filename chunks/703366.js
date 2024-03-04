function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        nativeTypesConfig: function() {
            return a
        }
    });
    var r, i = n("726764"),
        o = n("337675");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = (s(r = {}, i.FILE, {
        exposeProperties: {
            files: function(e) {
                return Array.prototype.slice.call(e.files)
            },
            items: function(e) {
                return e.items
            }
        },
        matchesTypes: ["Files"]
    }), s(r, i.HTML, {
        exposeProperties: {
            html: function(e, t) {
                return (0, o.getDataFromDataTransfer)(e, t, "")
            }
        },
        matchesTypes: ["Html", "text/html"]
    }), s(r, i.URL, {
        exposeProperties: {
            urls: function(e, t) {
                return (0, o.getDataFromDataTransfer)(e, t, "").split("\n")
            }
        },
        matchesTypes: ["Url", "text/uri-list"]
    }), s(r, i.TEXT, {
        exposeProperties: {
            text: function(e, t) {
                return (0, o.getDataFromDataTransfer)(e, t, "")
            }
        },
        matchesTypes: ["Text", "text/plain"]
    }), r)
}