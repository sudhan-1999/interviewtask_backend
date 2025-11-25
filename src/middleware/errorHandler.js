export  function errorHandler(err, req, res, next) {
  console.error("🔥 Error:", err);

  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      error: err.message,
      details: err.errors,
    });
  }

  // Mongo duplicate key error (code already taken)
  if (err.code === 11000) {
    return res.status(409).json({
      error: "Code already exists",
    });
  }

  // URL not found
  if (err.status === 404) {
    return res.status(404).json({
      error: err.message || "Not found",
    });
  }

  // Default server error
  return res.status(500).json({
    error: "Internal server error",
  });
}
