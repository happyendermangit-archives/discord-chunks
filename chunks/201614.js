function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isNotAutomodEmbed: function() {
            return o
        }
    });
    var r = n("993473"),
        o = function(e) {
            var t = e.type;
            return t !== r.MessageEmbedTypes.AUTO_MODERATION_MESSAGE && t !== r.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
        }
}