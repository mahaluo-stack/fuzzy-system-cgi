// token bucket model from 
// https://kendru.github.io/javascript/2018/12/28/rate-limiting-in-javascript-with-a-token-bucket/

class TokenBucket {
    constructor(capacity, fillPerSecond) {
        this.capacity = capacity;
        this.fillPerSecond = fillPerSecond;

        this.lastFilled = Math.floor(Date.now() / 1000);
        this.tokens = capacity;
    }

    take() {
        // Calculate how many tokens (if any) should have been added since the last request
        this.refill();

        if (this.tokens > 0) {
            this.tokens -= 1;
            return true;
        }

        return false;
    }

    refill() {
        const now = Math.floor(Date.now() / 1000);
        const rate = (now - this.lastFilled) / this.fillPerSecond;

        this.tokens = Math.min(this.capacity, this.tokens + Math.floor(rate * this.capacity));
        this.lastFilled = now;
    }
}

module.exports = TokenBucket;