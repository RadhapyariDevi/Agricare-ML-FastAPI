export const errorHandler = (err, req, res, next) => {
    
    console.error(err);

    // Mongoose: malformed ObjectId 
    if (err.name === "CastError") {
        return res.status(400).json({
            message: `Invalid ${err.path}: ${err.value}`,
        });
    }

    // Mongoose: schema validation failed 
    if (err.name === "ValidationError") {
        const messages = Object.values(err.errors).map((e) => e.message);
        return res.status(400).json({
            message: "Validation failed",
            errors: messages,
        });
    }

    // MongoDB: duplicate key error 
    if (err.code === 11000) {
        const field = Object.keys(err.keyValue)[0];
        return res.status(409).json({
            message: `${field} already exists`,
        });
    }

    // JWT: token is invalid
    if (err.name === "JsonWebTokenError") {
        return res.status(401).json({
            message: "Invalid token. Please log in again.",
        });
    }

    // JWT: token was valid but has expired
    if (err.name === "TokenExpiredError") {
        return res.status(401).json({
            message: "Your session has expired. Please log in again.",
        });
    }

    
    if (err.statusCode) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }

    // Fallback
    return res.status(500).json({
        message: "Something went wrong. Please try again later.",
    });
};

export default errorHandler;