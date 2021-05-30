export class RateLimitError extends Error {
    constructor() {
        super(
            "API refused to continue because league of legend's ratelimit was exceeded."
        );
    }
}

export class InvalidRiotApiConfig extends Error {
    constructor() {
        super("Invalid RiotApiConfig");
    }
}

export class BadEndpointError extends Error {
    constructor() {
        super("Endpoint you provided doesn't exists");
    }
}

export class InvalidUserError extends Error {
    constructor(
        message = "Cannot fetch information on the given user. Please be sure you have the right username."
    ) {
        super(message);
    }
}

export class NoCredentialsError extends Error {
    constructor(
        message = `Missing credentials passed to constructor. You must pass at least a region/platform endpoint`
    ) {
        super(message);
    }
}
