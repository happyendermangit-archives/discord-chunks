function(D, u, E) {
    "use strict";
    E.r(u), E.d(u, {
        isNullOrEmpty: function() {
            return F
        },
        upperCaseFirstChar: function() {
            return C.upperCaseFirstChar
        },
        getAcronym: function() {
            return C.getAcronym
        },
        cssValueToNumber: function() {
            return C.cssValueToNumber
        },
        stripDiacritics: function() {
            return C.stripDiacritics
        },
        truncateText: function() {
            return C.truncateText
        },
        normalize: function() {
            return C.normalize
        }
    });
    var C = E("617258");

    function F(D) {
        return null == D || 0 === D.length
    }
}