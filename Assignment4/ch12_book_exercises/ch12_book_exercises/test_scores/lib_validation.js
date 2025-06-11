const validation = {

    isNumeric: function(score) {
        return !isNaN(score);
    },

    isInRange: function(score, min, max) {
        if (!this.isNumeric(score)) {
            return false;
        }
        return score >= min && score <= max;
    }
};