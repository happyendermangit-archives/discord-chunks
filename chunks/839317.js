function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAutoArchiveDuration: function() {
            return s
        },
        getAutoArchiveOptions: function() {
            return u
        }
    });
    var r = n("404759"),
        o = n.n(r);
    n("913527");
    var i = n("73587"),
        a = n("941504");

    function u() {
        return [{
            label: a.default.Messages.AUTO_ARCHIVE_DURATION_1_HOUR,
            value: 60
        }, {
            label: a.default.Messages.AUTO_ARCHIVE_DURATION_24_HOURS,
            value: 1440
        }, {
            label: a.default.Messages.AUTO_ARCHIVE_DURATION_3_DAYS,
            value: 4320
        }, {
            label: a.default.Messages.AUTO_ARCHIVE_DURATION_1_WEEK,
            value: 10080
        }]
    }

    function s(e, t) {
        var n;
        return null !== (n = null != t ? t : null == e ? void 0 : e.defaultAutoArchiveDuration) && void 0 !== n ? n : i.DEFAULT_AUTO_ARCHIVE_DURATION
    }
    o()(function() {
        return u().map(function(e) {
            return e.value
        })
    })
}